import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../Images/logo.svg";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Categories from "./Categories";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.Token);
  const numberOfProducts = useSelector((state) => state.productOfCard);
  const [ValueSearch, setValueSearch] = React.useState("");
  const handelChange = ({ currentTarget: input }) => {
    const NewValue = input.value;
    setValueSearch(NewValue);
  };
  const handelSearh = () => {
    if (ValueSearch) {
      navigate(`/products_list/${ValueSearch}`);
    }
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Drawer />
      <Divider color="grey" />
      <Toolbar>
        <Link style={{ color: "black" }} to="/buylist">
          <Badge
            color="error"
            badgeContent={numberOfProducts.length}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
          </Badge>
        </Link>
        {token ? (
          <Box sx={{ mx: 2 }}>
            <Link
              to="/profile"
              style={{
                textDecorationLine: "none",
                color: "black",
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Typography component="h5" display="inline" noWrap>
                User Panel
              </Typography>
              <AccountCircleIcon sx={{ fontSize: 30, ml: 0.5 }} />
            </Link>
          </Box>
        ) : (
          <Box
            border={1}
            px={1}
            py={0.5}
            sx={{ borderRadius: 1, borderColor: "grey.400", mx: 2 }}
          >
            <Link
              to="/login"
              style={{
                textDecorationLine: "none",
                color: "black",
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Typography component="h5" display="inline">
                Login
              </Typography>
              <Typography
                display={{ xs: "none", sm: "none", md: "inline" }}
                ml="4px"
              >
                | Signup
              </Typography>
              <LoginIcon sx={{ fontSize: 30, ml: 0.5 }} />
            </Link>
          </Box>
        )}
        <TextField
          placeholder="Search..."
          size="small"
          fullWidth
          onChange={handelChange}
          onKeyDown={(event) => {
            if (event.code === "Enter") handelSearh();
          }}
          sx={{ ml: "auto", maxWidth: 480 }}
          InputProps={{
            startAdornment: (
              <IconButton edge="start" onClick={handelSearh}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <NavLink to="/">
          <Box
            component="img"
            src={logo}
            sx={{ ml: 2 }}
            display={{ xs: "none", sm: "inline" }}
          />
        </NavLink>
      </Toolbar>
      <Box display={{ xs: "none", sm: "inline" }} sx={{ px: 2 }}>
        <Categories />
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
