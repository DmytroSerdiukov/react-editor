import Box from "@mui/material/Box";
import { styles } from "./styles";
import { useAppSelector } from "../../store/hooks";
import { Button, Typography } from "@mui/material";

const Preview = () => {
  const items = useAppSelector((state) => state.editzone.items);
  return (
    <Box sx={styles.wrapper}>
      {items.map((el: any) => {
        if (el.type === 0)
          return <Typography key={el.id}>{el.value}</Typography>;
        if (el.type === 1)
          return <Typography key={el.id}>{el.value}</Typography>;
        if (el.type === 2)
          return (
            <img
              key={el.id}
              width={300}
              height={300}
              src={el.value}
              alt={el.value}
            />
          );
        if (el.type === 3)
          return (
            <Button
              sx={{ width: 150, height: 35 }}
              fullWidth={false}
              variant="contained"
              key={el.id}
            >
              {el.value ? el.value : "Button text"}
            </Button>
          );
      })}
    </Box>
  );
};

export default Preview;
