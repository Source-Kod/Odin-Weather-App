import { useState } from "react";

function App() {
  const [count, setCount] = useState(3);

  return (
    <div>
      <p className="bg-red-400">hellowordl</p>
      <p>{count}</p>
    </div>
  );
}

export default App;
