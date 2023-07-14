import { GoPrimitiveDot } from "react-icons/go";

const JobListing = ({ data, onFilter, filterTags }) => {
  if (filterTags[0]) {
    data = data.filter((job) => {
      let eachTag = [];
      let validJob = true;
      
      filterTags.forEach((el) => {
        eachTag.push(job.tags.includes(el));
      });

      for (let i = 0; i < eachTag.length; i++) {
        if (eachTag[i] !== true) {
          validJob = false;
        }
      }
      return validJob;
    });
  }
  const handleClick = (e) => {
    onFilter(e.target.textContent);
  };
  const renderedJobListings = data.map((job) => {
    const renderedTags = job.tags.map((tag) => {
      return (
        <button
          className="handleClick"
          key={job.id}
          onClick={handleClick}
        >
          {tag}
        </button>
      );
    });

    return (
      <div
        key={job.company}
        className="jobCompany "
      >
        <div className=" job2 ">
          <img
            className="jobImg"
            src={job.logo}
            alt={job.company}
          />
          <div>
            <div className="flexcent">
              <h1 className="flexh1">{job.company}</h1>
             
              
            </div>
            <h2 className="flexh2">
              {job.title}
            </h2>
            <div className="flexDiv">
              {/* <p>{job.date}</p> */}

              {/* <p>{job.type}</p> */}
              {/* <p className="drop-shadow-md">{job.location}</p> */}
            </div>
          </div>
        </div>
        <div className="flexRender">{renderedTags}</div>
      </div>
    );
  });

  return <div>{renderedJobListings}</div>;
};

export default JobListing;
