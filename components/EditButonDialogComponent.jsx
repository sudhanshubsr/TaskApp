'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect} from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePicker from "./DatePickerComponent";
import SelectStatus from "./SelectStatusComponent";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import {useToast} from "@components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea"


 
export default function EditDialog({task}) {


  const [newTitle, setnewTitle] = useState(task.title);
  const [newdescription, setnewDescription] = useState(task.description);
  const [newstatus, setnewStatus] = useState(task.status);
  const [newassignedUser, setnewAssignedUser] = useState(task.assignedUser);
  const [newdate, setnewDate] = useState(task.date);
  const queryClient = useQueryClient();
  const {toast} = useToast(); 

  const handleEditTask = async (ev) => {
    try{
      const res = await axios.put(`/api/todo/?id=${task.id}`,{
        title: newTitle,
        description: newdescription,
        status: newstatus,
        assignedUser: newassignedUser,
        date: newdate
      });
      if(res){
        toast({
          title: "Task Edited",
          description: "Task has been successfully edited",
          varaint: "success",
        })
        queryClient.invalidateQueries("tasks");
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const handleClose = () => { 
    setnewTitle(task.title);
    setnewDescription(task.description);
    setnewStatus(task.status);
    setnewAssignedUser(task.assignedUser);
    setnewDate(task.date);
  }
 


  return (
    <Dialog onOpenChange={handleClose}>
      <DialogTrigger asChild>
      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Edit a task from your list
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={newTitle} className="col-span-3" onChange={(ev)=> setnewTitle(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea  value={newdescription} className="col-span-3" onChange={(ev)=> setnewDescription(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <SelectStatus status={newstatus} setStatus={setnewStatus} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assigneduser" className="text-right">
              User
            </Label>
            <Input id="assigneduser" value={newassignedUser} className="col-span-3" onChange={(ev)=> setnewAssignedUser(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Set Date
            </Label>
            <DatePicker date={newdate} setDate={setnewDate} />
          </div>

        </div>
        <DialogFooter>
            <DialogTrigger asChild>  
              <Button variant="outline" onClick={(ev)=>handleEditTask(ev)}>Edit</Button>
            </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
