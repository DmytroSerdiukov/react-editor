import React, { FC } from "react";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { useAppSelector } from "../../store/hooks";
import EditItemContainer from "../../components/EditZone/EditItem/EditItemContainer";

const EditZone: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.editzone.items);
  return (
    <Box sx={styles.wrapper}>
      {items.map((el: any) => (
        <EditItemContainer key={el.id} {...el} />
      ))}
    </Box>
  );
};

export default EditZone;
