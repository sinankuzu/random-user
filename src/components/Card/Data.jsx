import React, {useState} from 'react'
import axios from 'axios'
import "./Data.css"
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
const Data = () => {
 
    const [kisi, setKisi] = useState([])
    const randomPeople = () =>{
     axios.get("https://randomuser.me/api/").then((res)=> setKisi(res.data.results))
     
    }
    console.log(kisi);
  return (
    <div className='container'>
    
    {kisi.map((element)=>{
        

        return (
          <div className="card">
            <div>
              <img src={element.picture.large} alt="" />
            </div>
            <div>
              <span>{element.name.title} </span>
              {element.name.first}
              {element.name.last}
            </div>
            <div>
              
              <FaMailBulk />
            </div>
            <div>{element.email}</div>
            <div>
              
              <FaPhoneAlt />
            </div>
            <div>{element.cell}</div>
            <div>
              
              <FaMapMarkedAlt />
            </div>
            <div>
              {element.location.city}-{element.location.country}
            </div>
            <div>{element.dob.age}</div>
            <div>
              {element.dob.date.slice(8, 10)}-{element.dob.date.slice(5, 7)}-
              {element.dob.date.slice(0, 4)}
            </div>
          </div>
        );
    })}
    
      <button onClick={randomPeople}>bas bana</button>
    </div>
  );
}

export default Data