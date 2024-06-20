import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <Typography
      variant="h4"
      sx={{ textAlign: "center", margin: "1rem", color: "white" }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
