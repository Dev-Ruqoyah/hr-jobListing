import { CalendarDays } from "lucide-react";
import { useState } from "react";
import { FaClock } from "react-icons/fa6";
import Modal from "./Modal";
import { motion } from "framer-motion";

interface CompanyDetails {
  id: number;
  short_name: string;
  name: string;
}
interface JobResult {
  name: string;
  jobDescription: string;
  id: number;
  company: CompanyDetails;
  locations: Locations[];
  publication_date: string;
  type: string;
  contents: string;
  refs: { landing_page: string };
}

interface Locations{
  name: string
}
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const JobCard = ({ job }: { job: JobResult }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}
        className="bg-white p-5 rounded-lg border hover:shadow-lg transition duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`https://logo.clearbit.com/${job.company.short_name}.com`}
            alt={job.company.name}
            className="h-10 w-10 rounded object-cover"
            onError={(e: any) => (e.target.src = "")} // fallback image
          />
          <div>
            <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
              {job.company.name}
            </h3>
            <p className="text-xs text-gray-500">
              {job.locations[0].name}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="text-md font-semibold text-gray-700 leading-tight line-clamp-2 min-h-[3rem]">
            {job.name}
          </h4>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <FaClock className="w-3.5 h-3.5" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{formatDate(job.publication_date)}</span>
          </div>
        </div>

        <p
          className="text-sm text-gray-600 leading-relaxed line-clamp-4"
          dangerouslySetInnerHTML={{ __html: job.contents }}
        ></p>
      </motion.div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={job.name}
        companyName={job.company.name}
        companyShortName={job.company.short_name}
        refs={job.refs}
      >
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: job.contents }}
        />
      </Modal>
    </>
  );
};

export default JobCard;
