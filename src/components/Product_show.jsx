import {
  Card,
  Button,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React, { Component, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Appbar from "../components/Appbar/Appbar";
import { Get_ProductByid } from "../Core/Requests";
import { Box, CircularProgress, Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import TimelineIcon from "@mui/icons-material/Timeline";
import ListIcon from "@mui/icons-material/List";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const Product_show = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [state, setstate] = useState({
    product: null,
    loading: true,
    error: "",
  });

  async function Get_Product(id) {
    let response = await Get_ProductByid(id);
    if (response.status === 200) {
      setstate({ ...state, loading: false, product: response });
    } else {
      setstate({ ...state, loading: false, error: "Error" });
    }
  }

  Get_Product(id);

  return (
    <>
      <Appbar />
      <Box>
        {(state.loading && (
          <Box
            width="100%"
            height={500}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )) ||
          (state.error && (
            <Box
              width="100%"
              height={350}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                {state.error}
              </Typography>
            </Box>
          )) ||
          (state.product && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent:'space-between',
                marginX: 2,
                marginY: 8,
              }}
            >
              <Grid>
                <Card sx={{ backgroundColor: "grey.300" }}>
                  <CardContent></CardContent>
                  <CardActions>
                    <Button variant="contained" color="error">
                      Add To Card
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid
                sx={{
                  "& > *": {
                    my: 1,
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <NotificationsActiveOutlinedIcon />
                </IconButton>
                <IconButton>
                  <TimelineIcon />
                </IconButton>
                <IconButton>
                  <ListIcon />
                </IconButton>
              </Grid>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Product_show;
