import React, { FC } from "react";
import Box from "@mui/material/Box";
import EditItem from "./EditItem";

const EditZone: FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F9FE",
        height: "100%",
        width: "30%",
        padding: "25px 30px",
      }}
    >
      <EditItem title="Headline" />
    </Box>
  );
};

export default EditZone;
