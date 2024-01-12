import { useState } from "react";
import Content from "./Content";

const App = () => {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <Content
        color={color}
        setColor={setColor}
      />
    </div>
  )
}

export default App