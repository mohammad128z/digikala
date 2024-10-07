import React, {Component} from 'react'
import ProductBuylist from '../components/ProductBuylist'
import Appbar from '../components/Appbar/Appbar'
import {useSelector} from 'react-redux'
import {Typography, Box} from '@mui/material'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'

const BuyList = () => {
    const selector = useSelector((state) => state.productOfCard)
    const [products, setproducts] = React.useState(selector)
    React.useEffect(() => setproducts(selector), [selector])
    return (
        <>
            <Box display="flex" flexWrap="wrap">
                <Appbar />
                {products.length ? (
                    products.map((item) => (
                        <ProductBuylist
                            id={item.id}
                            pic={item.images[0]}
                            title={item.title}
                            price={item.price}
                        />
                    ))
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            height: 400,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6" m={2}>
                            There are no products in the shopping cart
                        </Typography>
                        <ProductionQuantityLimitsIcon sx={{fontSize: 30}} color="error" />
                    </Box>
                )}
            </Box>
        </>
    )
}

export default BuyList
