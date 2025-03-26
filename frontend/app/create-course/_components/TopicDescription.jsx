import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInputContext } from "@/app/_context/userInputContext";

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
      setUserCourseInput((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
  }
  return (
    <div className="space-y-5">
      {/* Topic Input */}

      <div>
        <label className="block font-medium text-lg">
          Write a topic to generate a course (e.g., Python, Yoga, etc.)
        </label>
        <Input
          placeholder="Topic"
          className="mt-2"
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>

      {/* Course Description */}
      <div>
        <label className="block font-medium text-lg">Course Description</label>
        <Textarea
          placeholder="Tell us more about what you want to include in the course"
          className="mt-2"
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
}

export default TopicDescription;
