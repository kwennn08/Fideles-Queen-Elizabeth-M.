import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [result, setResult] = useState(null);

  
  function handleIncrement() {
    setCount(count + 1);
  }

 
  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  
  function handleReset() {
    setCount(0);
  }

 
  function handleAddition() {
    const sum = inputs.reduce((acc, input) => acc + parseFloat(input.value || 0), 0);
    setResult(sum);
  }

  function handleSubtraction() {
    const difference = inputs.reduce((acc, input) => acc - parseFloat(input.value || 0), 0);
    setResult(difference);
  }

  function handleMultiplication() {
    const product = inputs.reduce((acc, input) => acc * parseFloat(input.value || 1), 1);
    setResult(product);
  }

  function handleDivision() {
    const divisionResult = inputs.reduce((acc, input) => {
      return parseFloat(input.value) !== 0 ? acc / parseFloat(input.value) : acc;
    }, parseFloat(inputs[0]?.value || 1));

    if (inputs.some(input => parseFloat(input.value) === 0)) {
      setResult("Error: Division by 0");
    } else {
      setResult(divisionResult);
    }
  }

 
  function handleAddInput() {
    setInputs([...inputs, { value: "" }]);
  }

  
  function handleInputChange(index, e) {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  }

  return (
    <div>
      <h1>The number: {count}</h1>
      <button className="increment-btn" onClick={handleIncrement}>Increment</button>
      <button className="decrement-btn" onClick={handleDecrement}>Decrement</button>
      <button className="reset-btn" onClick={handleReset}>Reset</button>

      <h2>Basic Calculator</h2>
      <div className="inputs">
        {inputs.map((input, index) => (
          <input
            key={index}
            className="calc-input"
            type="number"
            value={input.value}
            onChange={(e) => handleInputChange(index, e)}
            placeholder={`Enter number ${index + 1}`}
          />
        ))}
      </div>
      <div>
        <button className="calc-btn add-btn" onClick={handleAddition}>+</button>
        <button className="calc-btn subtract-btn" onClick={handleSubtraction}>-</button>
        <button className="calc-btn multiply-btn" onClick={handleMultiplication}>*</button>
        <button className="calc-btn divide-btn" onClick={handleDivision}>/</button>
      </div>
      
      <h3>Result: {result !== null ? result : "No results"}</h3>

      <button className="add-input-btn" onClick={handleAddInput}>Add New Input</button>
    </div>
  );
}

export default App;
