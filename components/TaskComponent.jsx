import React from 'react'
import {Badge} from '@/components/ui/badge'
import EditButtonDialogComponent from './EditButonDialogComponent'
import { AiTwotoneDelete } from "react-icons/ai";

const TaskComponent = ({handleEditTask, handleDeleteTask}) => {
  return (
<div className="border border-gray-200 mt-2 dark:border-black rounded-lg bg-white shadow-md overflow-hidden w-full">
  <div className="p-2">
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold leading-none">Design a new task component</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">New task component description goes here.</p>
      </div>
      <div className="flex-col">
        <Badge variant="info">Pending</Badge>
        <div className="flex items-center justify-end mt-4">
          <EditButtonDialogComponent />
          <AiTwotoneDelete className="cursor-pointer m-2 w-5 h-5 text-red-500 hover:text-red-700" onClick={handleDeleteTask} />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TaskComponent