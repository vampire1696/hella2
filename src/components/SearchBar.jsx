"use client";
import React, { Fragment } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useState } from "react";
import useDebounce from "@/lib/Debounce";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filteredTitle, setFilteredTitle] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [selectedValue, setSelectedValue] = useState("All");
  const route = useRouter();
  useDebounce(
    async () => {
      const searchResults = await fetch(
        `/api/searchCourses/?deliFormat=${selectedValue}&searchText=${search}`
      );
      const searchArrayRes = await searchResults.json(); //la mot promise???
      setSearchArray(searchArrayRes.searchArray?.productByCategory);
    },
    [search, selectedValue],
    800
  );

  const handleSearch = (e) => setSearch(e.target.value);

  // Hàm xử lý khi giá trị của select thay đổi
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <form
        class="flex flex-col md:flex-row gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!!search.length) {
            const path = `/search?deliFormat=${selectedValue}&searchText=${search}`;

            route.push(path);
          }
        }}
      >
        <select
          id="pricingType"
          name="pricingType"
          className="w-[135px] h-10 border-2 border-black focus:outline-none focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          <option value="547">E-Learning</option>
          <option value="557">Training</option>
          <option value="772">Guideline</option>

          <option value="696">Video</option>

          <option value="770">Know-ledge</option>
        </select>
        <div class="flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses"
              className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-black focus:outline-none focus:border-black"
              onChange={handleSearch}
              required
              value={search}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
      </form>
      {!!searchArray?.length && (
        <ScrollArea className="h-60 w-65 rounded-md border">
          <div className="p-4">
            {searchArray.map((tag) => (
              <Fragment key={tag.id}>
                <Link href={`/courses/${tag.slug}`}>
                  <div className="text-sm">{tag.name}</div>
                </Link>
                <Separator className="my-2" />
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default SearchBar;
