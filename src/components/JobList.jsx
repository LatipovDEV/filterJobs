import { useState } from "react";
import data from "../data/jobdata";
import FilterJobs from "./FilterJobs";
import JobListing from "./JobListing";

const JobList = () => {
  const [filterTags, setFilterTags] = useState([]);

  const onFilter = (textContent) => {
    if (!filterTags.includes(textContent)) {
      setFilterTags([...filterTags, textContent]);
    }
  };

  const onFilterRemove = (tag) => {
    let filtered = filterTags.filter((filterTag) => {
      return filterTag !== tag;
    });
    setFilterTags(filtered);
  };
  const clearData = () => {
    setFilterTags([]);
  };
  return (
    <div className=" jobList  ">
      {filterTags[0] ? (
        <FilterJobs
          filterTags={filterTags}
          onFilterRemove={onFilterRemove}
          clearData={clearData}
        />
      ) : null}
      <JobListing data={data} onFilter={onFilter} filterTags={filterTags} />
    </div>
  );
};

export default JobList;
