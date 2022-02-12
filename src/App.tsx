import { useState } from "react";
import { Box } from "@mui/material";
import { SmallBox } from "./component/small-box";
import { BoxGrid } from "./component/box-grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box
        sx={{
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BoxGrid row={50} column={10} />
      </Box>
    </div>
  );
}

export default App;
