

const Inputs = (item) => {
    const { num1, num2, setnum1, setnum2, setResult }  = item;
    return (
        <div>
          <input type="number" onChange={(e) => setnum1(+e.target.value)} />
          <input type="number" onChange={(e) => setnum2(+e.target.value)} />
          <button onClick={() => {setResult(num1 + num2)}}>+</button>
          <button onClick={() => {setResult(num1 - num2)}}>-</button>
          <button onClick={() => {setResult(num1 * num2)}}>*</button>
          <button onClick={() => {setResult(num1 / num2)}}>/</button>
        </div>
    );
}

export default Inputs;
