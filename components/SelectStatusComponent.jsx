import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function SelectStatus({status, setStatus}) {
  return (
    <Select onValueChange={(value)=>setStatus(value)} defaultValue={status}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Task Status" value={status}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="apple">Todo</SelectItem>
          <SelectItem value="banana">In Progress</SelectItem>
          <SelectItem value="blueberry">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
