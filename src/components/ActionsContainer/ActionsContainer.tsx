import React, { FC } from "react";
import ActionsContainerStyles from "./ActionsContainer.module.css";
import { ActionsContainerProps } from "./types";

const ActionsContainer: FC<ActionsContainerProps> = ({
  background,
  children,
}): JSX.Element => {
  return (
    <div
      className={ActionsContainerStyles.wrapper}
      style={{
        backgroundColor: background,
      }}
    >
      {children.map((el: any) => el)}
    </div>
  );
};

export default ActionsContainer;
