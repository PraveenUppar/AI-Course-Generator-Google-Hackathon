"use client";

import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { HiCollection } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOptions from "./_components/SelectOptions";
import { UserInputContext } from "../_context/userInputContext";

function CreateCourse() {
  const StepperOptions = [
    {
      id: 1,
      name: "Step1: Category",
      icon: <HiCollection />,
    },
    {
      id: 2,
      name: "Step2: Topic",
      icon: <HiDocument />,
    },
    {
      id: 3,
      name: "Step3: Options",
      icon: <HiOutlineCash />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-medium">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div>
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full ${
                    activeIndex >= index && "bg-red"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden font-medium md:block md:text-sm mt-4">
                  {item.name}
                </h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div className="h1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="px-10 md:px-20 lg:px-44 mt-10"></div>
        {activeIndex == 0 ? (
          <SelectCategory></SelectCategory>
        ) : activeIndex == 1 ? (
          <TopicDescription></TopicDescription>
        ) : (
          <SelectOptions></SelectOptions>
        )}
      </div>
      <div className="flex justify-between mt-10 p-4">
        <Button onClick={() => setActiveIndex(activeIndex == 0)}>
          Previous
        </Button>
        {activeIndex < 2 && (
          <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
        )}
        {activeIndex == 2 && (
          <Button onClick={() => setActiveIndex(activeIndex + 1)}>
            Generate Course
          </Button>
        )}
      </div>
    </div>
  );
}

export default CreateCourse;
