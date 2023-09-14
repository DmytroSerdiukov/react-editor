import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";

const Positions = () => {
  return (
    <Container
      sx={{
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#449CF4",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowUpwardIcon sx={{ fontSize: 15 }} />
      </div>
      <div
        style={{
          width: 20,
          height: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowUpwardIcon sx={{ rotate: "180deg", fontSize: 15 }} />
      </div>
    </Container>
  );
};

export default Positions;
