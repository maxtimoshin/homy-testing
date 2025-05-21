import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Parse input value to number
  const parsedValue = Number(inputValue);

  // Get arithmetic mean number
  const arithmeticMean: number = values.length
    ? Math.round(values.reduce((acc, value) => (acc += value)) / values.length)
    : 0;

  // Get smallest and largest numbers
  const smallestNumber: number = values.length ? Math.min(...values) : 0;
  const largestNumber: number = values.length ? Math.max(...values) : 0;

  // Check if input value is valid
  const isInvalidInput = !inputValue || isNaN(parsedValue);

  // Add new value to values list
  function handleAddValue() {
    setValues((prev) => [...prev, parsedValue]);
    setInputValue("");
  }

  // Delete existed value from list
  function handleDeleteValue() {
    setValues((prev) =>
      prev.filter((number: number) => number !== parsedValue)
    );
    setInputValue("");
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      {!!values.length && (
        <>
          <span className="text-3xl">[{values.join(", ")}]</span>
          <span>Arithmetic mean: {arithmeticMean}</span>
          <span>Smallest number: {smallestNumber}</span>
          <span>Largest number: {largestNumber}</span>
        </>
      )}
      <input
        className="border w-40 text-3xl p-2 border-white rounded-lg [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div className="flex gap-4">
        <button
          className="hover:bg-green-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAddValue}
          disabled={isInvalidInput}
        >
          Add value
        </button>
        <button
          className="hover:bg-red-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleDeleteValue}
          disabled={isInvalidInput}
        >
          Delete value
        </button>
      </div>
    </div>
  );
}

export default App;
