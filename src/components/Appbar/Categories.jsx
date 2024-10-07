import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DiscountIcon from "@mui/icons-material/Discount";
import PercentIcon from "@mui/icons-material/Percent";
import {
  Button,
  MenuItem,
  Dialog,
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Categories = () => {
  const Categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const Services = [
    {
      title: "Super Market",
      icon: <ShoppingBasketIcon sx={{ color: "grey", fontSize: 18 }} />,
    },
    {
      title: "best sellers",
      icon: <WhatshotIcon sx={{ color: "grey", fontSize: 18 }} />,
    },
    {
      title: "Discounts and offers",
      icon: <DiscountIcon sx={{ color: "grey", fontSize: 18 }} />,
    },
    {
      title: "amazing",
      icon: <PercentIcon sx={{ color: "grey", fontSize: 18 }} />,
    },
  ];
  const [OpenDialog, SetOpenDialog] = React.useState(false);
  function handelClickCategories() {
    SetOpenDialog(false);
  }
  return (
    <Box>
      <Grid display="flex">
        <Button color="inherit" onClick={() => SetOpenDialog(true)}>
          <MenuIcon sx={{ fontSize: 20, mr: 0.5 }} />
          <Typography sx={{ display: "inline", fontSize: 14 }} variant="h1">
            Classification of goods
          </Typography>
        </Button>
        {Services.map((item) => (
          <Link style={{ textDecoration: "none", color: "black" }}>
            <Grid mx={1.5} display="flex" alignItems="center">
              {item.icon}
              <Typography component="h1" ml={0.5}>
                {item.title}
              </Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
      <Dialog
        open={OpenDialog}
        maxWidth="lg"
        fullWidth
        onClose={() => SetOpenDialog(false)}
      >
        <DialogTitle>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => SetOpenDialog(false)}
            to="/products_list/allproducts"
          >
            All products
          </Link>
        </DialogTitle>
        <DialogContent sx={{ height: 420 }}>
          <DialogContentText
            sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          >
            {Categories.map((item) => (
              <Link
                to={`/products_list/${item}`}
                style={{
                  textDecoration: "none",
                }}
                onClick={handelClickCategories}
              >
                <MenuItem sx={{ my: 1 }}>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 20, color: "grey.800" }}
                  >
                    {item}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => SetOpenDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Categories;
