import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Data.css";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
let x = 1;

const Data = () => {
  const [clickMe, setClickMe] = useState("I don't like to be clicked");
 
  const buttonRef = useRef(0);

  const yerDegis = () => {
    if (x > 0&&x < 2) {
      
      let i = Math.floor(Math.random() * 1800) + 1;
      let j = Math.floor(Math.random() * 1000) + 1;
      buttonRef.current.style.left = i + "px";
      buttonRef.current.style.top = j + "px";
      buttonRef.current.style.position = "absolute";
      console.log(x);
      x++;
    } else if (x > 0 && x < 4) {
      let i = Math.floor(Math.random() * 1800) + 1;
      let j = Math.floor(Math.random() * 1000) + 1;
      buttonRef.current.style.left = i + "px";
      buttonRef.current.style.top = j + "px";
      buttonRef.current.style.position = "absolute";
      setClickMe("Really? Can't you read?");
      console.log(x);
      x++;
    } else if (x > 0 && x < 6) {
      let i = Math.floor(Math.random() * 1800) + 1;
      let j = Math.floor(Math.random() * 1000) + 1;
      buttonRef.current.style.left = i + "px";
      buttonRef.current.style.top = j + "px";
      buttonRef.current.style.position = "absolute";
      setClickMe("Just stop!");
      console.log(x);
      x++;
    } else if (x > 0 && x < 10) {
      let i = Math.floor(Math.random() * 1800) + 1;
      let j = Math.floor(Math.random() * 1000) + 1;
      buttonRef.current.style.left = i + "px";
      buttonRef.current.style.top = j + "px";
      buttonRef.current.style.position = "absolute";
      setClickMe("BRO JUST GO AWAY");
      x++;
    } else if (x === 10) {
      buttonRef.current.style.left = "1000px";
      buttonRef.current.style.top = "500px";
      buttonRef.current.style.position = "absolute";
      buttonRef.current.style.scale = "10";
      buttonRef.current.style.transition = "5s";
      buttonRef.current.style.background = "red";
      setClickMe(":@");
      x = 0;
    } else if (x === 0) {
      setClickMe("Click me");
      buttonRef.current.style.left = "0";
      buttonRef.current.style.top = "0";
      buttonRef.current.style.position = "initial";
      buttonRef.current.style.scale = "1";
      buttonRef.current.style.transition = "1s";
      buttonRef.current.style.background =
        "linear-gradient(to right,#58EFEC,#7CCAD5,#A0A6BE,#C481A7,#E85C90)";
    }

    
  };

  useEffect(() => {
    
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setKisi(res.data.results));
  }, []);

  const [kisi, setKisi] = useState([]);
  const randomPeople = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setKisi(res.data.results));
  };
  // console.log(kisi);
  return (
    <div className="container">
      <div className="row">
        {kisi.map((element) => {
          return (
            <div className="card">
              <div className="deneme">
                <img src={element.picture.large} alt="" />
              </div>
              <div>
                <span>{element.name.title} </span>
                <span>{element.name.first} </span>
                {element.name.last}
              </div>
              <div className="deneme">
                <FaMailBulk />
              </div>
              <div className="deneme">{element.email}</div>
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
              <div className="age">
                <div>Age:{element.dob.age}</div>
                <div>Register Date: 
                  {element.dob.date.slice(8, 10)}-{element.dob.date.slice(5, 7)}
                  -{element.dob.date.slice(0, 4)}
                </div>
              </div>
            </div>
          );
        })}

        <button
          ref={buttonRef}
          className="buton"
          style={{
            scale: "1",
            position: "initial",
            top: "0px",
            left: "0px",
            transition: "1s",
            backgroundColor:
              "linear-gradient(to right,#58EFEC,#7CCAD5,#A0A6BE,#C481A7,#E85C90)",
          }}
          onClick={randomPeople}
          onMouseOver={yerDegis}
        >
          {clickMe}
        </button>
      </div>
    </div>
  );
};

export default Data;
