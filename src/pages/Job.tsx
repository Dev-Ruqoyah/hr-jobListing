import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "../component/Context/SearchContext";
import JobCard2 from "../component/Cards/JobCard2";
import JobResult from "../component/Models/JobModel";
import NavBar from "../component/Home/NavBar";
import Loading from "../component/Loader/Loading";

const JobBrowse = () => {
  const context = useContext(SearchContext);
  if (!context) return null;

  const { role, location } = context;
  console.log(role);
  
 
  

  const [jobs, setJobs] = useState<JobResult[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://www.themuse.com/api/public/jobs?q=${role}&location=${location}&page=1`
        );
        setJobs(data.results);
        if (data.results.length > 0) {
          setSelectedJob(data.results[0]);
        } else {
          setSelectedJob(null);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [role, location]);

  const handleJobClick = (job: JobResult) => {
    setSelectedJob(job);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-screen p-5 gap-5 overflow-hidden">
        {/* Job List */}
        <div className="w-full lg:w-1/3 min-h-[300px] lg:h-full overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Jobs</h2>
          <div
            className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto pb-4 scroll-snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {loading ? (
              
              <Loading/>
            
            ) : jobs.length > 0 ? (
              jobs.map((job: JobResult) => (
                <div
                  key={job.id}
                  className="flex-shrink-0 w-72 lg:w-full snap-start transition-transform transform hover:scale-105"
                  onClick={() => handleJobClick(job)}
                >
                  <JobCard2
                    job={job}
                    handleJobClick={handleJobClick}
                    selected={selectedJob?.id === job.id}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No jobs found.</p>
            )}
          </div>
        </div>

        {/* Job Details */}
        <div className="w-full lg:w-2/3 overflow-y-auto">
          {selectedJob ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{selectedJob.name}</h2>
              <h4 className="text-lg font-semibold text-gray-700">
                {selectedJob.company.name}
              </h4>
              <p className="text-sm text-gray-500">
                Published:{" "}
                {new Date(selectedJob.publication_date).toLocaleDateString()}
              </p>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedJob.contents }}
              />
              <a
                href={selectedJob.refs.landing_page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 underline"
              >
                View Job Page
              </a>
            </div>
          ) : (
            <p className="text-gray-600">Select a job to view details</p>
          )}
        </div>
      </div>
    </>
  );
};

export default JobBrowse;
