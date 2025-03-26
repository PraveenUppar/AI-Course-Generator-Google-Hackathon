import CategoryList from "@/app/_shared/CategoryList";
import React from "react";

function SelectCategory() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-10 md:px-20">
        {CategoryList.map((item, index) => (
          <div className="flex flex-col p-5 border rounded-xl hover:border-black hover:bg-gray-300 cursor-pointer items-center">
            <h2>{item.name}</h2>
            <div className="mt-2">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
