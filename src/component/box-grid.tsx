import React from "react";
import { Box, Grid } from "@mui/material";
import { SmallBox } from "./small-box";

interface Props {
  row: number;
  column?: number;
}

type BoxType = "start" | "wall" | "end";

export const BoxGrid: React.FC<Props> = (props) => {
  const rows: JSX.Element[] = [];
  const columns = [];

  const handleBoxClick = () => {
    console.log("box clicked");
  };
  for (let i = 0; i < props.row; i++) {
    rows.push(<SmallBox key={i} />);
  }
  if (!props.column) {
    columns.push(1);
  } else {
    for (let i = 0; i < props.column; i++) {
      columns.push(i);
    }
  }

  const component = (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {columns.map((v) => (
        <Grid item key={`${v}`}>
          {rows}
        </Grid>
      ))}
    </Grid>
  );
  return component;
};
