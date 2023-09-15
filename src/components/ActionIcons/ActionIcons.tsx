import React from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import { styles } from "./styles";

export const ActionIcons: any = {
  Headline: <ViewHeadlineIcon sx={styles.icon} />,
  Paragraph: <ArticleIcon sx={styles.icon} />,
  Button: <ImageIcon sx={styles.icon} />,
  Image: <ImageIcon sx={styles.icon} />,
};
