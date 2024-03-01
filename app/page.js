"use client";

import { useState } from "react";

import SearchandSortComponent from "@/components/SearchandSortComponent";
import AddTaskFormComponent from "@/components/AddTaskFormComponent";
import TaskComponent from "@/components/TaskComponent";
import { useAppContext } from "@/utils/appcontext";


export default function Home() {
  const [sort, setSort] = useState("all");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [tasks, setTasks] = useState([]); 

  const { title, setTitle, description, setDescription, status, setStatus, assignedUser, setAssignedUser, date, setDate } = useAppContext();


  const handleAddTask = () => {
    console.log("Task Added");
    setTitle("");
    setDescription("");
    setStatus("");
    setAssignedUser("");
    setDate("");
  }

const handleDeleteTask = () => {
  console.log("Task Deleted");
}

  return (
    <>
      <div className="w-full h-[100%] flex items-start pt-10 justify-center">
        <div className="bg-white h-[100%] min-w-[30em] w-[40%] p-10 rounded-2xl flex-col justify-center">
          <div className="flex justify-center mt-10 gap-3 h-[40px]">
            <SearchandSortComponent
              sort={sort}
              setSort={setSort}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
            />
            <AddTaskFormComponent handleAddTaskButton={handleAddTask} />
          </div>
          <div className=" w-full h-full mt-4 p-2">
            <TaskComponent handleDeleteTask={handleDeleteTask}/>
          </div>
        </div>
      </div>
    </>
  );
}
