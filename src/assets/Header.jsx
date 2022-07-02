import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Container,
  Box,
  MenuItem,
  makeStyles,
  ButtonBase,
  Link,
} from "@mui/material";

export default function Header() {
  const pages = ["Projects", "Blog"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Link href="/personal-website/#" color="inherit" underline="none">
              <Typography variant="h4" component="div">
                Portfolio
              </Typography>
            </Link>
            {pages.map((page) => (
              <Box
                style={{ color: "lightgrey" }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "lightgrey")}
              >
                <MenuItem key={page} sx={{ borderRadius: 2 }}>
                  <Link
                    underline="none"
                    color="inherit"
                    href={"/personal-website/#/" + page.toLowerCase()}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      color="grey"
                      sx={{ flexGrow: 1, fontSize: 16, fontStyle: "semi-bold" }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              </Box>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}