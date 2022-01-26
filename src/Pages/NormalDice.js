import React, { useState, useRef } from "react";
import "./design.css";
import Plot from "react-plotly.js";

const NormalDice = () => {
  const inputRef = useRef(null);

  const [data, setData] = useState([]);

  const myFunction = (n) => {
    function randomly(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    console.log(`gonderilen input ${n}`);

    let dice1;
    let dice2;
    let totalSum;

    let myArr = [];
    for (let i = 0; i < n; i++) {
      totalSum = randomly(1, 7) + randomly(1, 7);
      myArr.push(totalSum);
    }

    let two = [];
    let three = [];
    let four = [];
    let five = [];
    let six = [];
    let seven = [];
    let eight = [];
    let nine = [];
    let ten = [];
    let eleven = [];
    let twelve = [];

    for (let item of myArr) {
      if (item === 2) {
        two.push(item);
      }

      if (item === 3) {
        three.push(item);
      }
      if (item === 4) {
        four.push(item);
      }
      if (item === 5) {
        five.push(item);
      }
      if (item === 6) {
        six.push(item);
      }
      if (item === 7) {
        seven.push(item);
      }
      if (item === 8) {
        eight.push(item);
      }
      if (item === 9) {
        nine.push(item);
      }
      if (item === 10) {
        ten.push(item);
      }
      if (item === 11) {
        eleven.push(item);
      }
      if (item === 12) {
        twelve.push(item);
      }
    }

    console.log(
      `The number of 2 is : ${two.length} \n 
      The number of 3 is: ${three.length} \n
      The number of 4 is: ${four.length} \n
      The number of 5 is: ${five.length} \n
      The number of 6 is: ${six.length} \n
      The number of 7 is: ${seven.length} \n
      The number of 8 is: ${eight.length} \n
      The number of 9 is: ${nine.length} \n
      The number of 10 is: ${ten.length} \n
      The number of 11 is: ${eleven.length} \n
      The number of 12 is: ${twelve.length} \n
`
    );

    setData([
      two.length,
      three.length,
      four.length,
      five.length,
      six.length,
      seven.length,
      eight.length,
      nine.length,
      ten.length,
      eleven.length,
      twelve.length,
    ]);
  };

  return (
    <div>
      <div className="container">
        <h1>Roll a Dice</h1>
        <h2>Normal Distribution</h2>
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
                x: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                y: [
                  data[0],
                  data[1],
                  data[2],
                  data[3],
                  data[4],
                  data[5],
                  data[6],
                  data[7],
                  data[8],
                  data[9],
                  data[10],
                  data[11],
                ],
              },
            ]}
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
      </div>{" "}
    </div>
  );
};

export default NormalDice;
