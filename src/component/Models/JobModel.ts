interface CompanyDetails {
  id: number;
  short_name: string;
  name: string;
}
interface Locations{
  name: string
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

export default JobResult;
