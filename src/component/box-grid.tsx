import React from "react";
import { Box, Grid } from "@mui/material";
import { SmallBox } from "./small-box";

interface Props {
  row: number;
  column: number;
}

type BoxType = "start" | "wall" | "end";

interface BoxOfGrid {
  key: string;
  element: JSX.Element;
}

export const BoxGrid: React.FC<Props> = (props) => {
  const rows: BoxOfGrid[] = [];
  const columns = [];
  const gridOfBoxes: any[] = [];
  const [start, setStart] = React.useState({});
  const [wall, setWall] = React.useState({});
  const [goal, setGoal] = React.useState({});

  const handleBoxClick = () => {
    console.log("box clicked");
  };

  for (let i = 0; i < props.row; i++) {
    gridOfBoxes[i] = [];
    for (let j = 0; j < props.column; j++) {
      const val = { key: `${i}${j}`, element: <SmallBox /> } as BoxOfGrid;
      gridOfBoxes[i].push(val);
    }
  }

  console.log(gridOfBoxes);
  console.log(<SmallBox />);

  const component = (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {gridOfBoxes.map((boxes, i) => (
        <Grid item container direction="row" key={boxes[i].key}>
          {/* {boxes.map((box: any) => (
            <Grid item key={`element ${boxes.key}`}>
              {box.element}
            </Grid>
          ))} */}
        </Grid>
      ))}
    </Grid>
  );
  return component;
};
