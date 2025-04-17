import { useEffect, useState } from 'react'
import JobCategory from '../component/Home/Category'
import Hero from '../component/Home/Hero'
import NavBar from '../component/Home/NavBar'
import JobOfTheDay from '../component/Home/jobsOfTheDay'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect   (() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-50">
        <div className="relative flex items-center justify-center w-28 h-28">
          <div className="absolute w-full h-full border-8 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-blue-600 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  return (
    <>
        <NavBar/>
        <Hero/>
        <JobCategory/>
        <JobOfTheDay/>
        
    </>
  )
}

export default Home