import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="App">
      <Header
        selected={selected}
        setSelected={setSelected}
      />
      <Content selected={selected} />
    </div>
  );
}

export default App;
