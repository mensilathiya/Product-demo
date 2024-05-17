import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductsDetails } from "./ProductsSlice"
import Rating from "react-rating"
import loder from '../../assets/image/loder.png'
import './Products.css'


function ProductsDetails() {
    const { id } = useParams()
    const [productsImage, setProductsImage] = useState("")
    // console.log(id);
    const loding = useSelector((state) => state.Products.loding)
    const productsDetails = useSelector((state) => state.Products.productDetails)
    console.log({ productsDetails, loding });
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(getProductsDetails(id))
        }
    }, [id])
    useEffect(() => {
        if (productsDetails && productsDetails.images && productsDetails.images.length > 0) {
            setProductsImage(productsDetails.images[0])
        }
    }, [productsDetails])
    return (
        <>
            <div style={{display:"flex"}}>
              <div>
                {
                    productsDetails.images?.map((image, index) => (
                        <div style={{margin:20}}>
                        <img  onClick={() => { setProductsImage(image) }} src={image} style={{ width: "250px" }} className={productsImage == image ? 'active' : ''} />
                    </div>
                    ))
                }
              </div>

            <div style={{ textAlign: "center" }}>

                {loding ? <img src={loder} /> :
                    
                        <div style={{ textAlign: "center", marginLeft: 500, width: 500, marginTop: 50, padding: 20 }}>
                            <h1>ProductsDetails {id}</h1>
                            <img style={{ marginTop: 50 }} src={productsImage} />


                            <p> <b>title:- </b>{productsDetails.title}</p>
                            <p> <b>price:- </b>{productsDetails.price}</p>
                            <p> <b>category:- </b>{productsDetails.category}</p>
                            <p> <b>description:- </b>{productsDetails.description}</p>
                            <p> <b>brand:- </b>{productsDetails.brand}</p>
                            <p> <b>stock:- </b>{productsDetails.stock}</p>
                            <p> <b>Rating:- </b>{productsDetails.rating}</p>
                            <Rating
                                initialRating={productsDetails.rating}
                            />
                        </div>
                        }
            </div>
            </div>
        </>
    )
}
export default ProductsDetails