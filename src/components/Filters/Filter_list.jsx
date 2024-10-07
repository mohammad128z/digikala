import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Fild from "./Fild";

const Filter_list = () => {
  const Colors = ["white", "blue", "green", "blach", "red"];
  const Brands = ["apple", "sumsong", "Nokia", "Huawei"];
  const filds = [
    { inputlabel: "Color", items: Colors },
    { inputlabel: "Brand", items: Brands },
    { inputlabel: "Brand", items: Brands },
    { inputlabel: "Brand", items: Brands },
  ];

  return (
    <Box
      sx={{
        display:'flex',
        flexDirection: "column",
        maxHeight:360,
        maxWidth:255,
        border: 1,
        borderRadius: 2,
        borderColor: "grey.400",
        m: 2,
        p: 2,
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h6">
        Filters
      </Typography>
      {filds.map((item) => (
        <Fild inputlabel={item.inputlabel} items={item.items} />
      ))}
    </Box>
  );
};

export default Filter_list;
