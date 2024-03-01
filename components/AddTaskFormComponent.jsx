import { Button } from "@/components/ui/button"
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
import { TbClipboardPlus } from "react-icons/tb";
import { useAppContext } from "@/utils/appcontext";
import DatePicker from "./DatePickerComponent";
import SelectStatus from "./SelectStatusComponent";

 
export default function AddTaskDialog({handleAddTaskButton}) {

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
        setDate} = useAppContext();


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-[#17181F] text-white py-5 px-4'> <TbClipboardPlus className="w-5 h-5 mr-1"/> Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add a new task to your list
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={title} className="col-span-3" onChange={(ev)=> setTitle(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value={description} className="col-span-3" onChange={(ev)=> setDescription(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <SelectStatus status={status} setStatus={setStatus} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assigneduser" className="text-right">
              User
            </Label>
            <Input id="assigneduser" value={assignedUser} className="col-span-3" onChange={(ev)=> setAssignedUser(ev.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Set Date
            </Label>
            <DatePicker date={date} setDate={setDate} />
          </div>

        </div>
        <DialogFooter>
            <DialogTrigger asChild>  
                <Button onClick={handleAddTaskButton}>Add Task</Button>
            </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
