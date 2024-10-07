import React from "react";
import Box from "@mui/material/Box";
import logo from "../../Images/logo.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DiscountIcon from "@mui/icons-material/Discount";
import PercentIcon from "@mui/icons-material/Percent";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Divider,
  ListItem,
  ListItemIcon,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Drawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
  return (
    <Box display={{ xs: "block", sm: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 0.5,
        }}
      >
        <IconButton
          color="info"
          aria-label="open drawer"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Box component="img" src={logo} sx={{ height: 23 }} />
        </Link>
        <IconButton>
          <HelpOutlineIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
      <SwipeableDrawer
        open={mobileOpen}
        onOpen={() => setMobileOpen(true)}
        onClose={() => setMobileOpen(false)}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Box component="img" src={logo} />
            </ListItemIcon>
          </ListItem>
          <Divider variant="middle" color="grey" sx={{ my: 1 }} />
          {Services.map((item) => (
            <ListItemButton>
              <Box sx={{ mr: 2 }}>{item.icon}</Box>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
          <ListItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <MenuIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ mx: 2 }}>Classification of goods</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "grey.200" }}>
                {Categories.map((item) => (
                  <Link
                    to={`/products_list/${item}`}
                    onClick={() => setMobileOpen(false)}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default Drawer;
