import React, { FC } from "react";
import Box from "@mui/material/Box";
import EditItem from "../../components/EditZone/EditItem/EditItem";
import { styles } from "./styles";

const EditZone: FC = (): JSX.Element => {
  return (
    <Box sx={styles.wrapper}>
      <EditItem title="Headline" />
    </Box>
  );
};

export default EditZone;
