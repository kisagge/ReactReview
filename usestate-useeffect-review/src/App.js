import { useState, useEffect } from "react";

function App() {
  const [hit, setHit] = useState(0);
  const [name, setName] = useState("");

  const onIncrease = () => {
    setHit(hit + 1);
  };

  const onDecrease = () => {
    setHit(hit - 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(hit);
  }, [hit]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <h2>{hit}</h2>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
      <input defaultValue={name} onChange={handleNameChange} />
      <h2>{name}</h2>
    </div>
  );
}

export default App;
