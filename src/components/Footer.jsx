import React from "react";
import { Typography, CssBaseline, Grid, Link } from "@mui/material";

export default function Footer() {
  const pages = ["Projects", "Blog", "Contact"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={80}
        sx={{ bgcolor: "LightGrey" }}
      >
        <Typography variant="p" color="Grey" fontSize={14}>
          Joshua Wu
        </Typography>
        <Link
          href="https://github.com/JoshuaWu7"
          color="inherit"
          underline="none"
        >
          <Typography
            variant="p"
            component="div"
            fontSize={13}
            color="Grey"
            sx={{ textDecoration: "underline" }}
          >
            See GitHub
          </Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
}