import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box>Hello</Box>
    </div>
  );
}

export default App;
