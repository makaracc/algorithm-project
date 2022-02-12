import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
// import { styled } from "@mui/system";

type BoxType = "start" | "wall" | "goal" | "empty";

interface Props {
  boxType?: BoxType;
  onBoxClick?: (boxType?: BoxType) => void;
}

export const SmallBox: React.FC<Props> = (props) => {
  const [boxType, setBoxType] = React.useState(
    props.boxType ? props.boxType : "empty",
  );
  const [boxColor, setBoxColor] = React.useState("#ddd");
  const setBoxTypeColor = () => {
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

  const handleBoxClick = () => {
    setBoxType("start");
  };

  useEffect(() => {
    setBoxTypeColor();
  }, [boxType, boxColor]);

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
