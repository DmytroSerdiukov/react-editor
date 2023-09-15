import ActionsContainerStyles from "./ActionsContainer.module.css";

interface Props {
  children: JSX.Element[];
  background: string;
}

const ActionsContainer = ({ background, children }: Props) => {
  return (
    <div
      className={ActionsContainerStyles.wrapper}
      style={{
        backgroundColor: background,
      }}
    >
      {children.map((el) => el)}
    </div>
  );
};

export default ActionsContainer;
