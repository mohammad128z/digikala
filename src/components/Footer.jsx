import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import cash from "../Images/footer-images/cash-on-delivery.svg";
import days from "../Images/footer-images/days-return.svg";
import express from "../Images/footer-images/express-delivery.svg";
import original from "../Images/footer-images/original-products.svg";
import support from "../Images/footer-images/support.svg";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function StickyFooter() {
  const IconServices = [
    { icon: original, title: "Guarantee of originality" },
    { icon: days, title: "Seven days return guarantee" },
    { icon: support, title: "7 days a week 24 hours" },
    { icon: cash, title: "Possibility of payment on the spot" },
    { icon: express, title: "Possibility of express delivery" },
  ];
  const withDigikala = [
    "Digikala newsroom",
    "Selling in Digikala",
    "Career Opportunities",
    "Violation report in Digikala",
    "Contact Digikala",
    "About Digikala",
  ];
  const customerServices = [
    "Procedures for returning products",
    "Terms of Use",
    "Privacy",
    "Report a bug",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey.200",
      }}
    >
      <CssBaseline />
      <Container component="main" maxWidth>
        <Toolbar
          sx={{
            my: 5,
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {IconServices.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 220,
                marginY: 2,
              }}
            >
              <Box component="img" src={item.icon} />
              <Typography sx={{ fontSize: 13, mx: 1 }}>{item.title}</Typography>
            </Box>
          ))}
        </Toolbar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid
            width={{ xs: "100%", md: "auto" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Grid
              display={{ xs: "flex", md: "inline" }}
              width={{ xs: "100%", md: "auto" }}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant="h6">be with us!</Typography>
              <Grid sx={{ "& > *": { color: "grey", m: 1.5, fontSize: 30 } }}>
                <FacebookIcon />
                <TwitterIcon />
                <GitHubIcon />
                <InstagramIcon />
              </Grid>
            </Grid>
            <Grid width={{ xs: "100%", md: "auto" }}>
              <Typography
                display={{ xs: "none", sm: "block" }}
                sx={{ lineHeight: 4 }}
              >
                Sign up to receive the latest discounts
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
                <TextField
                  size="small"
                  placeholder="your email"
                  fullWidth
                  width={{ xs: "100%", md: "auto" }}
                />
                <Button variant="contained" color="error" sx={{ ml: 1 }}>
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid
              sx={{
                flexDirection: "column",
                flexWrap: "nowrap",
              }}
            >
              <Typography>customerServices</Typography>
              {customerServices.map((item) => (
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <Typography sx={{ lineHeight: 2, color: "grey" }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Grid>
            <Grid
              sx={{
                flexDirection: "column",
                flexWrap: "nowrap",
              }}
            >
              <Typography ml={5}>withDigikala</Typography>
              {withDigikala.map((item) => (
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <Typography sx={{ lineHeight: 2, color: "grey", ml: 5 }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <Box component="footer" sx={{ py: 3, px: 2, mt: "auto" }}>
        <Divider color="grey.500" sx={{ m: 2 }} />
        <Container maxWidth="sm">
          <Typography variant="body2" color="grey" textAlign="center">
            Copyright © By Mohammad Nikkhah 2023
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
