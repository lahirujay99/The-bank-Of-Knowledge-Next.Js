import { Flex, Grid } from "@radix-ui/themes";
import React from "react";

const CoursesFilter = () => {
  return (
    <Grid columns={{ initial: "1", sm: "3" }}>
      <p className="md:col-span-2 font-semibold text-[30px] leading-[39px] text-[#1C4596]">
        See the latest courses from all categories
      </p>
      <Flex>
        <div className="inline-block relative w-40 ml-auto">
          <select className="block appearance-none w-full bg-[#F18F02] text-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>All categories</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="inline-block relative w-40">
          <select className="block appearance-none w-full bg-[#F18F02] text-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Course Type</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </Flex>
    </Grid>
  );
};

export default CoursesFilter;
