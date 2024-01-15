import { useState } from "react";

export default function Sort({ handleSortBooks }) {
  const [sortBooks, setSortBooks] = useState(false);

  console.log(sortBooks);

  // const handleSortBooks = (value) => {
  //   setSortBooks(value);
  // };

  return (
    <>
      <div className="flex items-stretch space-x-3">
        <select
          className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
          name="sortBy"
          id="sortBy"
          value={sortBooks}
          // onChange={(e) => handleChange(e.target.value)}
          onChange={(e) => handleSortBooks(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="year_asc">Publication Year (Oldest)</option>
          <option value="year_desc">Publication Year (Newest)</option>
        </select>
      </div>
    </>
  );
}
