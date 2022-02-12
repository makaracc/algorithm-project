import React, { useCallback, useMemo, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SmallBox } from "./small-box";

interface Props {
  row: number;
  column: number;
}

type BoxType = "start" | "wall" | "goal" | "empty";

type BoxOfGrid = {
  key: string;
  element: JSX.Element;
};

type Coordinate = {
  x: number;
  y: number;
};

// layout for coordinate
// [[{0,0},{0,1},{0,2},{0,3}],
// [{1,0},{1,1},{1,2},{1,3}],
// [{2,0},{2,1},{2,2},{2,3}],]

export const BoxGrid: React.FC<Props> = (props) => {
  const [gridOfBoxes, setGridOfBoxes] = React.useState<Array<BoxOfGrid>[]>([
    [],
  ]);
  const [start, setStart] = React.useState<Coordinate>({ x: 0, y: 0 });
  const [walls, setWalls] = React.useState<Coordinate[]>([]);
  const [goal, setGoal] = React.useState<Coordinate>({
    x: props.row - 1,
    y: props.column - 1,
  });

  // useEffect(() => {
  //   initGrid();
  // }, [start, walls, goal]);

  const checkForWall = (x: number, y: number) =>
    walls.some((wall) => wall.x === x && wall.y === y);

  //  const changeStart = (coordinate: Coordinate) => {
  //   gridOfBoxes[start.x][start.y].element = assignBoxType(start);
  //   setStart(coordinate);
  // };

  const handleBoxClick = (coordinate: Coordinate) => {
    setStart(coordinate);
    if (coordinate.x === start.x && coordinate.y === start.y) return;
    console.log("parent click?");
    gridOfBoxes[start.x][start.y].element = assignBoxType(start, "empty");
    gridOfBoxes[coordinate.x][coordinate.y].element = assignBoxType(coordinate);
  };

  const assignBoxType = (
    coordinate: Coordinate,
    boxType?: BoxType,
    wall?: boolean,
  ) => {
    if (boxType) {
      return <SmallBox boxType={boxType} coordinate={coordinate} />;
    }
    let boxToReturn: BoxType = "empty";
    if (coordinate.x === start.x && coordinate.y === start.y) {
      boxToReturn = "start";
    } else if (coordinate.x === goal.x && coordinate.y === goal.y) {
      boxToReturn = "goal";
    } else if (wall) {
      if (checkForWall(coordinate.x, coordinate.y)) {
        boxToReturn = "wall";
      }
    }
    console.log("howmany?");
    return (
      <SmallBox
        boxType={boxToReturn}
        onBoxClick={handleBoxClick}
        coordinate={coordinate}
      />
    );
  };

  const initGrid = () => {
    console.log("render memo gridinit");
    for (let i = 0; i < props.row; i++) {
      gridOfBoxes[i] = [];
      for (let j = 0; j < props.column; j++) {
        const val = {
          key: `${i}${j}`,
          element: assignBoxType({ x: i, y: j }),
        } as BoxOfGrid;
        gridOfBoxes[i][j] = val;
      }
    }
  };

  initGrid();

  const findIndex = (grid: BoxOfGrid[][], element: BoxOfGrid) => {
    const notFound = [-1, -1];
    if (grid.length === 0) {
      return notFound;
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].key === element.key) {
          return [i, j];
        }
      }
    }
    return notFound;
  };

  const test = gridOfBoxes[0][9];

  const changeGoal = (coordinate: Coordinate) => {
    setStart(coordinate);
  };

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
