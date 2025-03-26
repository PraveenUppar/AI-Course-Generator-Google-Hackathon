import { UserInputContext } from "@/app/_context/userInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import React, { useContext } from "react";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-10 p-10 md:px-20">
          {CategoryList.map((item, index) => (
            <div
              key={index}
              role="button"
              tabIndex="0"
              onClick={() => handleCategoryChange(item.name)}
              className = {`${userCourseInput?.category == item.name&& "border-black bg-grey-300"} flex flex-col p-5 border rounded-xl hover:border-black hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 cursor-pointer items-center `}
            >
              <h2>{item.name}</h2>
              <div className="mt-2">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
