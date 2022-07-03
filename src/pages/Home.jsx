import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const alphabet = new String("pkjut9;[");

const randomFloat = Math.random();

export default function Home() {
  return (
    <>
      <Box mb={3} height={112}>
        <Typography
          variant="h1"
          align="center"
          fontWeight="600"
          style={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 20%, #ffc042 90%)",
            webkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Typist
            avgTypingDelay={100}
            stdTypingDelay={50}
            cursor={{ show: false }}
          >
            <Typist.Delay ms={750} />
            {"Hell" + alphabet.charAt(Math.floor(Math.random() * 7)) + "."}
            <Typist.Delay ms={500} />
            <Typist.Backspace delay={200} />
            <Typist.Backspace delay={50} />
            <Typist.Delay ms={500} />
            o
            <Typist.Delay ms={200} />
            .
          </Typist>
        </Typography>
      </Box>
    </>
  );
}
