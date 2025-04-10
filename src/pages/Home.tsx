import JobCategory from '../component/Home/Category'
import Hero from '../component/Home/Hero'
import NavBar from '../component/Home/NavBar'
import JobOfTheDay from '../component/Home/jobsOfTheDay'

const Home = () => {
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