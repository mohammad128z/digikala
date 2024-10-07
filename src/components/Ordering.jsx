import {
  Dialog,
  Typography,
  Box,
  IconButton,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import SortIcon from "@mui/icons-material/Sort";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import Filter_list from "./Filters/Filter_list";
import { Container } from "@mui/system";

const items = [
  "Most visited",
  "Newest",
  "Bestselling",
  "Cheapest",
  "Most expensive",
];
export const Ordering = () => {
  return (
    <>
      <Box display={{ xs: "none", md: "block" }}>
        <div
          dir="ltr"
          className="mb-2 d-flex justify-content-start align-items-center"
        >
          <Typography component="h1" sx={{ mx: 1 }}>
            Ordering:
          </Typography>
          {items.map((item) => (
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <Typography sx={{ mx: 1 }}>{item}</Typography>
            </Link>
          ))}
        </div>
      </Box>
    </>
  );
};

export const ResponsiveOrdering = () => {
  const [OpenDialogFilters, SetOpenDialogFilters] = React.useState(false);
  const [OpenDialogSort, SetOpenDialogSort] = React.useState(false);
  return (
    <>
      <Box display={{ xs: "bloch", md: "none" }}>
        <IconButton onClick={() => SetOpenDialogFilters(true)}>
          <TuneIcon />
        </IconButton>
        <IconButton onClick={() => SetOpenDialogSort(true)}>
          <SortIcon />
        </IconButton>
        <Dialog
          fullScreen
          open={OpenDialogFilters}
          onClose={() => SetOpenDialogFilters(false)}
        >
          <DialogTitle>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => SetOpenDialogFilters(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Filter_list />
          </DialogContent>
        </Dialog>
        <Dialog
          fullScreen
          open={OpenDialogSort}
          onClose={() => SetOpenDialogSort(false)}
        >
          <DialogTitle>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => SetOpenDialogSort(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div
              dir="ltr"
              className="mb-2 d-flex justify-content-start align-items-center flex-column"
            >
              {items.map((item) => (
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                  className="my-2"
                >
                  <Typography sx={{ mx: 1 }}>{item}</Typography>
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};
