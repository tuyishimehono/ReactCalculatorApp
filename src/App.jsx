import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    leftInput: "0",
    rightInput: "",
    operand: "",
  });

  function handleInput(value) {
    setInput((prevInput) => {
      let newLeftInput;
      if (prevInput.operand === "") {
        newLeftInput =
          prevInput.leftInput === 0
            ? value.toString()
            : prevInput.leftInput.toString() + value.toString();
      } else {
        newLeftInput = prevInput.leftInput;
        let newRightInput =
          prevInput.rightInput === ""
            ? value.toString()
            : prevInput.rightInput.toString() + value.toString();
        return {
          ...prevInput,
          rightInput: newRightInput,
        };
      }

      return {
        ...prevInput,
        leftInput: parseFloat(newLeftInput),
      };
    });
  }
  function reset() {
    setInput((prevInput) => ({
      ...prevInput,
      leftInput: "0",
    }));
  }
  function handleOperation(operation) {
    setInput((prevInput) => ({
      ...prevInput,
      operand: operation,
    }));
  }
  function handleResult() {
    let result;
    let a = Number(input.leftInput)
    let b = Number(input.rightInput)
    switch (input.operand) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        break;
    }
    setInput((prevInput) => ({
      ...prevInput,
      leftInput: result.toString(),
      rightInput: "",
      operand: "",
    }));
  }
  function toggleNegative() {
    setInput((prevInput) => ({
      ...prevInput,
      leftInput: -1 * input.leftInput,
    }));
  }
  function handlePercentages() {
    setInput((prevInput) => ({
      ...prevInput,
      leftInput: input.leftInput / 100,
    }));
  }
  return (
    <div className="flex flex-col items-center mx-20 lg:mx-[35rem] pt-10">
      <h1 className="w-full text-white bg-gray-500 text-end text-4xl py-4">
        {input.rightInput === "" ? input.leftInput : input.rightInput}
      </h1>

      <div className="grid grid-cols-4 grid-rows-5 gap-0 w-full text-4xl font-semibold">
        <div className="col-span-3 row-span-5">
          <div className="grid grid-cols-3 grid-rows-5 h-[32rem] text-center bg-zinc-300">
            <button onClick={reset} className="border border-black">
              AC
            </button>
            <button onClick={toggleNegative} className="border border-black">
              +/-
            </button>
            <button onClick={handlePercentages} className="border border-black">
              %
            </button>
            <button
              onClick={() => handleInput(7)}
              className="border border-black"
            >
              7
            </button>
            <button
              onClick={() => handleInput(8)}
              className="border border-black"
            >
              8
            </button>
            <button
              onClick={() => handleInput(9)}
              className="border border-black"
            >
              9
            </button>
            <button
              onClick={() => handleInput(4)}
              className="border border-black"
            >
              4
            </button>
            <button
              onClick={() => handleInput(5)}
              className="border border-black"
            >
              5
            </button>
            <button
              onClick={() => handleInput(6)}
              className="border border-black"
            >
              6
            </button>
            <button
              onClick={() => handleInput(1)}
              className="border border-black"
            >
              1
            </button>
            <button
              onClick={() => handleInput(2)}
              className="border border-black"
            >
              2
            </button>
            <button
              onClick={() => handleInput(3)}
              className="border border-black"
            >
              3
            </button>
            <button
              onClick={() => handleInput(0)}
              className="col-span-2 border border-black"
            >
              0
            </button>
            <button
              onClick={() => handleInput(".")}
              className="col-start-3 border border-black"
            >
              .
            </button>
          </div>
        </div>
        <div className="row-span-5 col-start-4">
          <div className="grid grid-cols-1 grid-rows-5 h-[32rem] text-center bg-orange-400 text-white">
            <button
              onClick={() => handleOperation("/")}
              className="border border-black"
            >
              ÷
            </button>
            <button
              onClick={() => handleOperation("*")}
              className="border border-black"
            >
              x
            </button>
            <button
              onClick={() => handleOperation("-")}
              className="border border-black"
            >
              -
            </button>
            <button
              onClick={() => handleOperation("+")}
              className="border border-black"
            >
              +
            </button>
            <button onClick={handleResult} className="border border-black">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
