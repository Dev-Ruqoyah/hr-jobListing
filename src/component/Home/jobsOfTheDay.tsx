import { useEffect, useState } from "react";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import axios from "axios";
import JobCard from "../Cards/Jobcard";

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
        // console.log(data.results);
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
    contents: string
  }
  const uniqueJob = JobCategory?.filter((job,index,self)=>index=self.findIndex(j=>j.name === job.name))
  // console.log(uniqueJob);
  


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
               <JobCard job={job} key={job.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobOfTheDay;
