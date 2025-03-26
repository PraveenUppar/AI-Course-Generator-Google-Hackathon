import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOptions() {
  return (
    <div>
      
      <div className="grid grid-cols-4 font-medium">
        <div>
          <lable className="text-sm">Difficulity Level</lable>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Begineer">Begineer</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <lable className="text-sm">Course Duration</lable>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 hours</SelectItem>
              <SelectItem value="2">2 hours</SelectItem>
              <SelectItem value="3">3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <lable className="text-sm">Add Video</lable>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <lable className="text-sm">Number of chapters</lable>
          <Input type={Number}></Input>
        </div>
      </div>
    </div>
  );
}

export default SelectOptions;
