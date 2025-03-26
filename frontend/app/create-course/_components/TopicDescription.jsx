import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function TopicDescription() {
  return (
    <div className="space-y-5">
      {/* Topic Input */}
      
      <div>
        <label className="block font-medium text-lg">
          Write a topic to generate a course (e.g., Python, Yoga, etc.)
        </label>
        <Input placeholder="Topic" className="mt-2" />
      </div>

      {/* Course Description */}
      <div>
        <label className="block font-medium text-lg">Course Description</label>
        <Textarea
          placeholder="Tell us more about what you want to include in the course"
          className="mt-2"
        />
      </div>
    </div>
  );
}

export default TopicDescription;
