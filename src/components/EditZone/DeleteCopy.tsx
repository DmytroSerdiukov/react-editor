import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const DeleteCopy = () => {
  return (
    <div
      style={{
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#68C2E9",
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
        <ContentCopyIcon sx={{ fontSize: 15 }} />
      </div>
      <div
        style={{
          width: 20,
          height: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DeleteOutlineIcon sx={{ fontSize: 15 }} />
      </div>
    </div>
  );
};

export default DeleteCopy;
