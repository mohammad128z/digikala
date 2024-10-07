import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Typography} from '@mui/material'
import {useDispatch} from 'react-redux'
import {deleteCard} from '../redux/Card/actions'

const ProductBuylist = ({id, pic, title, price}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div
                dir='rtl'
                style={{minWidth: 200, maxWidth: 350}}
                className="d-flex border rounded-2 col-3 flex-column justify-content-between flex-grow-1"
            >
                {/* <Link
                  to={`/product?id=${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  className="p-4 pt-2 pb-1 d-flex flex-column"
                > */}
                <div className="p-4 pt-2 pb-1 d-flex flex-column">
                    <Box component="img" sx={{maxHeight: 200}} src={pic} />
                    <Typography textAlign="left">{title}</Typography>
                </div>
                {/* </Link> */}
                <div className="m-3 d-flex justify-content-between align-items-center">
                    <button onClick={handel_Delete} className="btn btn-danger btn-sm">
                        <Typography>Delete</Typography>
                    </button>
                    <div className="d-flex justify-content-end">
                        <h5 className="text-success">{price} $</h5>
                    </div>
                </div>
            </div>
        </>
    )
    function handel_Delete() {
        dispatch(deleteCard(id))
    }
}

export default ProductBuylist
