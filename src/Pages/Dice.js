import React, { useState, useRef } from "react";
import "./design.css";
import Plot from "react-plotly.js";

const Dice = () => {
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
      myArr.push(randomly(1, 7));
    }

    let ones = [];
    let twos = [];
    let three = [];
    let fours = [];
    let fives = [];
    let sixs = [];

    for (let item of myArr) {
      if (item === 1) {
        ones.push(item);
      }

      if (item === 2) {
        twos.push(item);
      }
      if (item === 3) {
        three.push(item);
      }
      if (item === 4) {
        fours.push(item);
      }
      if (item === 5) {
        fives.push(item);
      }
      if (item === 6) {
        sixs.push(item);
      }
    }

    console.log(
      `The number of 1 is : ${ones.length} \n 
  The number of 2 is: ${twos.length} \n
  The number of 3 is: ${three.length} \n
  The number of 4 is: ${fours.length} \n
  The number of 5 is: ${fives.length} \n
  The number of 6 is: ${sixs.length} \n`
    );

    setData([
      ones.length,
      twos.length,
      three.length,
      fours.length,
      fives.length,
      sixs.length,
    ]);
  };

  return (
    <div>
      <div className="container">
        <h1>Roll a Die</h1>
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
            data={[
              {
                type: "bar",
                x: ["1", "2", "3", "4", "5", "6"],
                y: [
                  data[0],
                  data[1],
                  data[2],
                  data[3],
                  data[4],
                  data[5],
                  data[6],
                ],
              },
            ]}
            layout={{
              width: 500,
              height: 350,
              title: "Histogram Die",
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

export default Dice;
