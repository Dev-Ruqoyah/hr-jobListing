import axios from "axios";
import { useEffect } from "react";

const Country = () => {
    useEffect(()=>{
      const fetchCountry = async ()=>{
        const {data} = await axios.get("https://restcountries.com/v3.1/all")
        console.log(data);
        
      }
      fetchCountry()

    },[])

    return ( 
        <>

        </>
     );
}
 
export default Country;