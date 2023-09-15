import Box from "@mui/material/Box";
import { styles } from "./styles";
import { useAppSelector } from "../../store/hooks";

const Preview = () => {
  const items = useAppSelector((state) => state.editzone.items);
  return <Box sx={styles.wrapper}></Box>;
};

export default Preview;
