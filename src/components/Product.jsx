import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Box, Button, Snackbar, Alert, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Product = ({ pic, price, id, title, addToCard_Handler }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selector = useSelector((state) => state.productOfCard);
  const [state, setstate] = useState({
    isOpenSnackbar: false,
    snackbar_Severity: "",
  });

  return (
    <>
      <div
        style={{ minWidth: 200, maxWidth: 350 }}
        className="d-flex border rounded-2 col-3 flex-column justify-content-between flex-grow-1"
      >
        {/* <Link
          to={`/product?id=${id}`}
          style={{ textDecoration: "none", color: "black" }}
          className="p-4 pt-2 pb-1 d-flex flex-column"
        > */}
        <div className="p-4 pt-2 pb-1 d-flex flex-column">
          <Box component="img" sx={{ maxHeight: 200 }} src={pic} />
          <Typography textAlign="left">{title}</Typography>
        </div>
        {/* </Link> */}
        <div className="m-3 d-flex justify-content-between align-items-center">
          <button onClick={handel_toggle} className="btn btn-success btn-sm">
            <Typography>Add To Card</Typography>
          </button>
          <div className="d-flex justify-content-end">
            <h5 className="text-success">{price} $</h5>
          </div>
        </div>
      </div>
      <Snackbar
        open={state.isOpenSnackbar}
        autoHideDuration={5000}
        onClose={() => setstate({ ...state, isOpenSnackbar: false })}
      >
        <Alert
          onClose={() => setstate({ ...state, isOpenSnackbar: false })}
          severity={state.snackbar_Severity}
          sx={{ width: "100%", direction: "ltr" }}
        >
          {state.snackbar_Severity === "success" ? (
            <Typography>Add the product to the cart</Typography>
          ) : (
            <Typography>Already added to cart</Typography>
          )}
        </Alert>
      </Snackbar>
    </>
  );
  function isProductInStore() {
    let resultOfFilter = selector.filter((product) => product.id === id);
    if (resultOfFilter.length) {
      return false;
    }
    return true;
  }
  function handel_toggle() {
    let result = isProductInStore();
    if (result) {
      addToCard_Handler(id);
      setstate({ isOpenSnackbar: true, snackbar_Severity: "success" });
    } else {
      setstate({ isOpenSnackbar: true, snackbar_Severity: "error" });
    }
  }
};

export default Product;
