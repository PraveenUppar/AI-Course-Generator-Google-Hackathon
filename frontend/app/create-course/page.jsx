import React from 'react'
import { HiCollection } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";

function CreateCourse() {
  const StepperOptions = [
    {
    id:1,
    name:"Category",
    icon:<HiCollection />,
  },
  {
    id:2,
    name:"Topic",
    icon:<HiDocument />,
  },
  {
    id:3,
    name:"Options",
    icon:<HiOutlineCash />,
  },
]
  return (
    <div>
      Create Course
    </div>
  )
}

export default CreateCourse
