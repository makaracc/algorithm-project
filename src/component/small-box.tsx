import React, { useCallback, useEffect, useMemo } from "react";
import { Box, Button } from "@mui/material";
// import { styled } from "@mui/system";

type BoxType = "start" | "wall" | "goal" | "empty";

type Coordinate = {
  x: number;
  y: number;
};
interface Props {
  boxType?: BoxType;
  onBoxClick?: (coordinate: Coordinate) => void;
  coordinate: Coordinate;
}

export const SmallBox: React.FC<Props> = (props) => {
  const [boxType, setBoxType] = React.useState(
    props.boxType ? props.boxType : "empty",
  );
  const [coordinate, setCoordinate] = React.useState(props.coordinate);
  const [boxColor, setBoxColor] = React.useState("#ddd");
  const setBoxTypeColor = () => {
    console.log("render setcolor");
    let color = "";
    if (boxType === "start") {
      color = "#0cb2c0";
    } else if (boxType === "wall") {
      color = "#565656";
    } else if (boxType === "goal") {
      color = "#f24484";
    } else {
      color = "#ddd";
    }
    setBoxColor(color);
  };
  useEffect(() => {
    setBoxTypeColor();
  }, [boxType]);

  const handleBoxClick = () => {
    setBoxType("start");
    props.onBoxClick && props.onBoxClick(coordinate);
  };

  const component = (
    <Button
      sx={{
        backgroundColor: boxColor,
        margin: 0.1,
        minWidth: "auto",
        width: "1.5rem",
        height: "1.5rem",
        boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        "&:hover": {
          backgroundColor: boxColor,
        },
        borderRadius: 1,
      }}
      disableRipple
      onClick={handleBoxClick}
      onMouseDown={() => {}}
    />
  );
  return component;
};
