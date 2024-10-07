import { Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const DigikalaCategories = () => {
    return ( 
        <>
        <Typography sx={{textAlign:'center',m:3}} component='h1' variant='h5'>
        Digikala categories
        </Typography>
                <div className='d-flex justify-content-center align-items-center flex-row-reverse mb-5 flex-wrap'>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Digital goods</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Mobiles</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Tools</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Fashion and clothing</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Supermarket goods</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>toy</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Local indigenous products</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Beauty and health</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>House and cook house</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Books and stationery</Typography>
                    </Link>
                    <Link to={""} style={{ width: 170, height: 170, textDecoration: "none", color: "black" }} className='m-4'>
                        <img className='w-100 h-100' src="https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" />
                        <Typography sx={{textAlign:'center' ,fontSize:18}} variant='h6'>Sports and travel</Typography>
                    </Link>
                </div>
        </>
    );
}
 
export default DigikalaCategories;