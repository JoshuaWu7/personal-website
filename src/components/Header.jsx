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
  Grid,
  Link,
} from "@mui/material";

export default function Header() {
  const pages = ["Projects", "Blog"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={4}>
          <Toolbar disableGutters>
            
            <Link href="/" color="inherit" underline="none" sx={{ ml: "1.5%" }}>
              <Typography variant="h4" component="div" fontWeight="600" >
                Joshua Wu
              </Typography>
            </Link>

            
              {pages.map((page) => (
                <Box
                  style={{ color: "white" }}
                  sx={{ ml: "5%" }}
                >
                  <MenuItem key={page} sx={{ borderRadius: 2 }}>
                    <Link
                      underline="none"
                      color="inherit"
                      href={"/" + page.toLowerCase()}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        color="grey"
                        fontWeight="600"
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