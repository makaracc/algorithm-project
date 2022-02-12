import React from "react";
import { Box, Grid } from "@mui/material";
import { SmallBox } from "./small-box";

interface Props {
  row: number;
  column: number;
}

type BoxType = "start" | "wall" | "end";

interface BoxOfGrid {
  // [index: number]: {
  key: string;
  element: JSX.Element;
  // };
}

export const BoxGrid: React.FC<Props> = (props) => {
  const rows: BoxOfGrid[] = [];
  const columns = [];
  // const gridOfBoxes: any[] = [];
  const gridOfBoxes: Array<BoxOfGrid>[] = [[]];
  const [start, setStart] = React.useState({});
  const [wall, setWall] = React.useState({});
  const [goal, setGoal] = React.useState({});

  const handleBoxClick = () => {
    console.log("box clicked");
  };

  // for (let i = 0; i < props.row; i++) {
  //   gridOfBoxes[i] = [];
  //   for (let j = 0; j < props.column; j++) {
  //     const val = { key: `${i}${j}`, element: <SmallBox /> } as BoxOfGrid;
  //     gridOfBoxes[i].push(val);
  //   }
  // }
  for (let i = 0; i < props.row; i++) {
    gridOfBoxes[i] = [];
    for (let j = 0; j < props.column; j++) {
      const val = { key: `${i}${j}`, element: <SmallBox /> } as BoxOfGrid;
      gridOfBoxes[i][j] = val;
    }
  }

  const component = (
    <Grid container direction="column">
      {gridOfBoxes.map((boxes: BoxOfGrid[], i) => (
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          key={`row${i + Math.random() * 20}`}
        >
          {boxes.map((box) => (
            <Grid item key={`element ${box.key}`}>
              {box.element}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
  return component;
};
