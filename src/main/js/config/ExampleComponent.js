import { getExamples } from './firebase';
import { useState, useEffect } from "react";

function ExampleComponent() {
  const [examples, setExamples] = useState([])

  useEffect(() => {
    getExamples().then(e => {
      setExamples(e)
    })
  }, [])

  const a = examples.map(function(e) {
    return e.example;
  })
  console.log(a)

  return (
    <div className="App">
      {a}
    </div>
  );
}

export default ExampleComponent;
