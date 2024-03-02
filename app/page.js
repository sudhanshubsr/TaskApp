"use client";

import AddTaskFormComponent from "@/components/AddTaskFormComponent";
import SearchandSortComponent from "@/components/SearchandSortComponent";
import TaskComponent from "@/components/TaskComponent";
import { useAppContext } from "@/utils/appcontext";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {useToast} from "@components/ui/use-toast";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader } from "@components/ui/card";

export default function Home() {
  const [statussort, setStatussort] = useState("all");
  const [searchPhrase, setSearchPhrase] = useState("");
  const { data: session } = useSession();
  const {toast} = useToast();
  const queryClient = useQueryClient();


  const {
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    assignedUser,
    setAssignedUser,
    date,
    setDate,
  } = useAppContext();
  

  async function handledeleteTask(id,ev){
    ev.preventDefault();
    try{
      const res = await axios.delete(`/api/todo/?id=${id}`);
      if(res){
        toast({
          title: "Task Deleted",
          message: "Task has been successfully deleted",
          varaint: "success",
        })
        queryClient.invalidateQueries("tasks");
      }
    }
    catch(err){
      console.log(err);
    }
  }


  const handleAddTask = async () => {
    try {
      const newTask = {
        title: title,
        description: description,
        status: status,
        assignedUser: assignedUser,
        date: date,
      };
      const res = await axios.post("/api/todo", newTask);
      if (res) {
        toast({
          title: "Task Added",
          description: "Task has been successfully added",
        });
        queryClient.invalidateQueries("tasks");
        queryClient.refetchQueries("tasks");
        setTitle("");
        setDescription("");
        setStatus("");
        setAssignedUser("");
        setDate("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function getTask(take, lastCursor) {
    try {
      const res = await axios.get(
        `/api/todo?take=${take}&cursor=${lastCursor}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }


  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["tasks"],
    queryFn: async ({ pageParam = 0 }) => {
      const cursor = pageParam || undefined;
      const take = 10;
      try {
        const taskData = await getTask(take, cursor);
        return taskData;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        return { error };
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.error) {
        console.error("Error retrieving next page:", lastPage.error);
        return undefined;
      }

      return lastPage?.nextCursor;
    },
  });



  const filteredTasks = data?.pages[0]?.taskDoc?.filter((task) => {
    if (statussort === "all") {
      return true; 
    } else {
      return task.status === statussort;
    }
  });

  if (!session) {
    return (
      <div className="w-full h-[100%] flex items-center justify-center">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Please Sign In</h1>
          </CardHeader>
          <CardContent>
            <p className="text-lg">You need to sign in to view this page</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[100%] flex items-start pt-10 justify-center">
        <div className="bg-white h-[100%] min-w-[35em] w-[45%] p-10 rounded-2xl flex-col justify-center">
          <div className="flex justify-center mt-10 gap-3 h-[40px]">
            <SearchandSortComponent
              sort={statussort}
              setSort={setStatussort}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
            />

            <AddTaskFormComponent handleAddTaskButton={handleAddTask} />
          </div>
          {isFetching ? (
            <div className="flex justify-center mt-10">
              <p>Loading...</p>
            </div>
          ) : (
            <div className=" w-full h-full mt-4 p-2">
              {filteredTasks?.map((task) => (
                <TaskComponent
                  key={task.id}
                  handleDeleteTask={(ev)=>handledeleteTask(task.id,ev)}
                  task={task}
                />
              ))}
            </div>
          )}

          {hasNextPage &&
            data?.pages.length >
              1 &&(
                <button
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetching}
                  className="w-full h-10 bg-blue-500 text-white rounded-md mt-10">
                  {isFetching ? "Loading..." : "Load more"}
                </button>
              )}
        </div>
      </div>
    </>
  );
}
