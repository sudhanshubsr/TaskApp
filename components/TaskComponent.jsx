import React from 'react'
import {Badge} from '@/components/ui/badge'
import EditButtonDialogComponent from './EditButonDialogComponent'
import { AiTwotoneDelete } from "react-icons/ai";

const TaskComponent = ({ handleDeleteTask, task}) => {

  let statusColor = 'bg-gray-400';
  if (task.status === 'Todo') statusColor = 'bg-red-200';
  if (task.status === 'In Progress') statusColor = 'bg-blue-400';
  if (task.status === 'Done') statusColor = 'bg-green-400';

  return (
<div className="border border-gray-200 mt-2 dark:border-black rounded-lg bg-white shadow-md overflow-hidden w-full">
  <div className="p-2">
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold leading-none">{task.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
      </div>
      <div className="flex-col">
        <Badge variant="info">
          <div className={statusColor + " w-2 h-2 mr-1 rounded-full"}></div>
          {task.status}
          </Badge>
        <div className="flex items-center justify-end mt-4">
          <EditButtonDialogComponent task={task} />
          <AiTwotoneDelete className="cursor-pointer m-2 w-5 h-5 text-red-500 hover:text-red-700" onClick={handleDeleteTask}/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TaskComponent