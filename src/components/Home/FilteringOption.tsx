import React from "react";
import { CiCircleQuestion } from "react-icons/ci";

const FilteringOption = () => {
  const onChange = (event: any) => {
    console.log(`selected ${event.target.value}`);
  };

  const onSearch = (event: any) => {
    console.log("search:", event.target.value);
  };

  return (
    <div className="w-full bg-white border my-5 flex items-center justify-between ">
      <div className="flex items-center">
        <div className="border p-3">
          <CiCircleQuestion className="text-5xl text-[#4a90e2]" />
        </div>
        <div className="px-4">
          <p>Learn more about our sales channels</p>
        </div>
      </div>
      <div className="pr-6">
        <select
          className="w-[12rem] border-[1px] border-gray-500 py-3 px-2 outline-none rounded"
          onChange={onChange}
          onInput={onSearch}
        >
          <option value="">Newest Car</option>
          <option value="Closing soon">Price ascending</option>
          <option value="Price descending">Price descending</option>
          <option value="1st reg. ascending">1st reg. descending</option>
          <option value="KM ascending">KM descending</option>
          <option value="HP ascending">HP descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilteringOption;
