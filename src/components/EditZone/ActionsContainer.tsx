interface Props {
  children: JSX.Element[];
  background: string;
}

const ActionsContainer = ({ background, children }: Props) => {
  return (
    <div
      style={{
        padding: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: background,
        color: "#fff",
        borderRadius: "3px 3px 0px 0px",
      }}
    >
      {children.map((el) => el)}
    </div>
  );
};

export default ActionsContainer;
