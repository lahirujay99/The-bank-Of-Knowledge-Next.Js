import { Flex } from "@radix-ui/themes";
import React from "react";

const SearchBar = () => {
  return (
    <Flex className="max-w-[900px] mx-auto my-[40px]">
      <input
        className="shadow appearance-none border border-[#1C4596] w-full h-12 py-2 px-3 bg-transparent leading-tight rounded-l-lg focus:outline-none"
        id="username"
        type="text"
      />
      <button className="inline-flex items-center bg-[#1C4596]  text-white font-medium hover:text-white py-1 px-4 rounded-r-lg">
        Search
      </button>
    </Flex>
  );
};

export default SearchBar;
