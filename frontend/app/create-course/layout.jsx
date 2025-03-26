"use client"; // ✅ Ensure this file is a Client Component

import React, { useState } from "react"; // ✅ Import useState
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/userInputContext";

function CreateCourseLayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState({}); // ✅ Use an object

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <>
        <Header />
        {children}
      </>
    </UserInputContext.Provider>
  );
}

export default CreateCourseLayout;
