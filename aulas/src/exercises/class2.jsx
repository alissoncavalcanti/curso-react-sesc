import { useState } from 'react'

function TestUseState() {
  const [value, setValue] = useState(2);

  const handleAddTwo = () => {
    setValue(value + 2 );
  }

  const [fruit, setFruit] = useState("");

  const handleClickFruit = (currentFruit) => {
    setFruit(currentFruit);
  }

  return (
    <div>Meu App</div>
  )
}

export default TestUseState;