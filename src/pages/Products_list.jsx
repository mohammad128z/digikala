import React, { useState ,useEffect } from 'react';
import { useParams } from "react-router-dom";
import Product from '../components/Product';
import Appbar from '../components/Appbar/Appbar'
import Filter_list from '../components/Filters/Filter_list';
import {Ordering,ResponsiveOrdering} from '../components/Ordering';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Get_AllProducts, Get_Product } from '../Core/Requests';
import Footer from '../components/Footer'
import { useSelector,useDispatch,Connect, connect } from 'react-redux'
import { addCard } from '../redux/Card/actions'

let result = null

const Products_list = () => {
    const { productName } = useParams()
    const Dispatch = useDispatch()
    const Selector = useSelector(state => state)
    const [state, setstate] = useState({
        products: [],
        errors:"",
        loading:false,
    })
    async function get_products(){
        setstate({...state,loading:true})
        if(productName === 'allproducts'){
            result = await Get_AllProducts()
        }else{
            result = await Get_Product(productName)}

        // if(result.data.products){
        //     setstate({...state,loading:false,errors:'! Product Not found'})
        // }

        if(result.status === 200){
            setstate({...state,products:result,loading:false})
        }else{
            setstate({...state,errors:'! No Internet',loading:false})}
    }
    useEffect(()=>{
        get_products(productName)
    },[productName])
    return (
        <>
            <Appbar />
            <div dir='rtl' className='d-flex mt-4'>
                <Box sx={{
                    display: { xs: "none", md: "inline" },
                }}>
                <Filter_list/>
                </Box>
                <div className='d-flex flex-column w-100'>
                    <Ordering/>
                    <ResponsiveOrdering/>
                    <Box display='flex' flexWrap='wrap'>
                        {state.loading &&
                        <Box width="100%" height={350} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <CircularProgress/>
                        </Box> ||

                        state.errors &&
                        <Box width="100%" height={350} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Typography component='h1' variant='h5'>{state.errors}</Typography>
                        </Box> ||
                        
                        state.products.data &&
                        state.products.data.products.map(item =>
                            <Product addToCard_Handler={addToCard_Handler}
                            pic={item.images[0]} 
                            price={item.price} 
                            title={item.title} 
                            id={item.id} />)}
                    </Box>
                </div>
            </div>
            <Footer/>
        </>
    );
    function addToCard_Handler(product_id) {
        let dataProductOfCard = state.products.data.products.filter(product => product.id === product_id)
        Dispatch(addCard(...dataProductOfCard))
    }
}

export default Products_list