import removeIcon from "../images/icon-remove.svg";

function FilterJobs({ filterTags, onFilterRemove, clearData }) {
  const renderedTags = filterTags.map((tag, index) => {
    return (
      <div
        key={index}
        className=" filter "
      >
        <button className=" filterBtn  ">
          {tag}
        </button>
        <div
          className="onFilterRemove  "
          onClick={() => onFilterRemove(tag)}
        >
          <img
            className="removeIcon  "
            src={removeIcon}
            alt="remove"
          />
        </div>
      </div>
    );
  });

  return (
    <div className=" renderedTags">
      <div className="rendered ">
        <div className=" ss ">{renderedTags}</div>
        <div
          className="clearData "
          onClick={clearData}
        >
          Clear
        </div>
      </div>
    </div>
  );
}

export default FilterJobs;
