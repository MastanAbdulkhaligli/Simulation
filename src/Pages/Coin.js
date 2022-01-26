import React, { useState, useRef } from "react";
import "./design.css";
import Plot from "react-plotly.js";

const Coin = () => {
  const inputRef = useRef(null);

  const [data, setData] = useState([]);

  const myFunction = (n) => {
    function randomly(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    console.log(`gonderilen input ${n}`);

    let myArr = [];
    for (let i = 0; i < n; i++) {
      myArr.push(randomly(0, 2));
    }

    let zeros = [];
    let ones = [];

    for (let item of myArr) {
      if (item === 0) {
        zeros.push(item);
      }

      if (item === 1) {
        ones.push(item);
      }
    }

    console.log(
      `The number of 0 is : ${zeros.length} \n The number of 1 is: ${ones.length}`
    );

    setData([zeros.length, ones.length]);
  };

  return (
    <div>
      <div className="container">
        <h1>Flip a Coin</h1>
        <h2>Uniform Distribution</h2>
        <div className="btns">
          <button
            className="button-31"
            onClick={() => {
              myFunction(10);
            }}
          >
            n = 10
          </button>
          <button className="button-31" onClick={() => myFunction(1000)}>
            n = 1000
          </button>
          <button className="button-31" onClick={() => myFunction(100000)}>
            n = 100 000
          </button>
        </div>

        <div>
          <Plot
            data={[{ type: "bar", x: ["Head", "Tail"], y: [data[0], data[1]] }]}
            layout={{
              width: 500,
              height: 350,
              title: "Histogram of Head and Tail",
            }}
          />
        </div>
        <h2>Enter n</h2>
        <div className="inp">
          <input type="text" ref={inputRef} placeholder="Enter n" />
        </div>
        <button
          className="cal"
          onClick={() => {
            console.log(`Refin degeri: ${inputRef.current.value}`);
            myFunction(inputRef.current.value);
          }}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Coin;
