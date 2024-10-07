import React, {Component} from 'react'
import Home_page from './pages/Home/Home'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Product_show from './components/Product_show'
import BuyList from './pages/BuyList'
import Products_list from './pages/Products_list'
import Login from './pages/login'
import Dashbord from './pages/Dashbord/Dashbord'
import ScrollTop from './components/ScrollTop'
import {Fab, Divider} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {BrowserRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {addToken} from './redux/Token/actions'

const App = () => {
    const token = useSelector((state) => state.Token)
    const dispatch = useDispatch()
    if (localStorage.length) {
        dispatch(addToken('token'))
    }
    return (
        <>
            <Divider id="back-to-top-anchor" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home_page />} />
                    <Route path="/products_list/:productName" element={<Products_list />} />
                    <Route path="/product" element={<Product_show />} />
                    <Route path="/buylist" element={<BuyList />} />
                    <Route path="/login" element={token ? <Navigate to="/profile" /> : <Login />} />
                    <Route
                        path="/profile"
                        element={token ? <Dashbord /> : <Navigate to="/login" />}
                    />
                </Routes>
            </BrowserRouter>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top" color="info" sx={{mr: 1, mb: 1}}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}

export default App
