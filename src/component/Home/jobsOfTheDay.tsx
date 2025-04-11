import { useEffect, useState } from "react";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import axios from "axios";
import { CalendarDays } from "lucide-react";
import { FaClock } from "react-icons/fa6";

const JobOfTheDay = () => {
  const Jobs = [
    "Accounting and Finance",
    "Healthcare",
    "Human Resources and Recruitment",
    "Account Management",
    "Legal Services",
    "Sales",
    "Software Engineering",
  ];

  const [searchQuery, setJobQuery] = useState<string>("Sales");
  const [JobCategory, setJobCategory] = useState<[] | null>(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } =
          await axios.get(`https://www.themuse.com/api/public/jobs?category=${searchQuery}&page=1`);
        console.log(data.results);
        setJobCategory(data.results);
      } catch (error) {
        console.error();
      }

     
    };
    fetchCategory();
  }, [searchQuery]);
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
    locations:[]
    publication_date:string
    type:string
  }

  const formatDate = (dateStr:string) =>{
    return new Date(dateStr).toLocaleDateString("en-US",{
      year:"numeric",
      month:"long",
      day:"numeric"
    })
  }
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Header1 headertitle="Jobs of the Day" />
          <Header2 subheadingtitle="Search and connect with the employer faster" />
        </div>
        <div className="flex flex-nowrap md:overflow-x-hidden overflow-x-scroll gap-3 my-3 items-center justify-center">
          {Jobs.map((job) => (
            <button
              onClick={() => setJobQuery(job)}
              key={job}
              className={`py-2 px-3 cursor-pointer border text-[13px]  md:w-72 h-12 overflow-y-hidden w-[50%] rounded-md ${
                searchQuery === job
                  ? "bg-blue-800 text-white"
                  : "border-blue-800 text-blue-800"
              }`}
            >
              {job}
            </button>
          ))}
         
        </div>
        <div className="mt-5">
        {JobCategory && (
            <div className="grid grid-cols-1 my-4 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
              {JobCategory.map((job: JobResult) => (
               <div className="shadow-sm py-5 px-3 border border-gray-300 rounded-md" key={job.id}>
                 <div className="flex items-center gap-3">
                  <img src={`https://logo.clearbit.com/${job.company.short_name}.com`} alt={`${job.company.name}`} className="h-12 w-12 rounded-md" />
                  <div className="flex flex-col">
                    <h3 className="text-xxl font-semibold">{job.company.name}</h3>
                    <p className="text-[12px] text-gray-500">{job.locations?.[0].name}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold">{job.name}</h4>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3"/>
                      <p className="text-[12px] text-gray-500">{job.type}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3"/>
                      <p className="text-[12px] text-gray-500">{formatDate(job.publication_date)}</p>
                    </div>
                  </div>
                </div>
               </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobOfTheDay;
