import { CalendarDays } from "lucide-react";
import { FaClock } from "react-icons/fa6";
import JobResult from "../Models/JobModel";


const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const JobCard2 = ({
  job,
  handleJobClick,
  selected,
}: {
  job: JobResult;
  handleJobClick: (job: JobResult) => void;
  selected: boolean;
}) => {
  return (
    <div
      onClick={() => handleJobClick(job)}
      className={`shadow-sm p-5 border rounded-md mb-4 cursor-pointer transition-all ${
        selected ? "bg-gray-100 border-blue-400" : "hover:bg-gray-50"
      }`}
    >
      {/* Top: Logo + Company */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={`https://logo.clearbit.com/${job.company.short_name}.com`}
          alt={job.company.name}
          className="h-12 w-12 rounded-md object-cover bg-gray-200"
          onError={(e: any) => {
            e.target.src = "/placeholder-logo.png"; // fallback logo
          }}
        />
        <div>
          <h3
            title={job.company.name}
            className="text-lg font-semibold text-gray-800 line-clamp-1"
          >
            {job.company.name}
          </h3>
          <p className="text-xs text-gray-500">
            {job.locations[0].name}
          </p>
        </div>
      </div>

      {/* Job Title */}
      <h4 className="text-md font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug min-h-[3.25rem]">
        {job.name}
      </h4>

      {/* Meta Info: Job type and Date */}
      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <FaClock className="w-3 h-3" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-3 h-3" />
          <span>{formatDate(job.publication_date)}</span>
        </div>
      </div>

      {/* Short Contents */}
      <div
        className="text-sm text-gray-600 font-medium line-clamp-4"
        dangerouslySetInnerHTML={{ __html: job.contents }}
      ></div>
    </div>
  );
};

export default JobCard2;
