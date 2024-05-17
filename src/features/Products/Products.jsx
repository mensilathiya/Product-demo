import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./ProductsSlice"
import loder from '../../assets/image/loder.png'

import './Products.css'
import ProductsList from "./ProductsList"
import { useNavigate } from "react-router-dom"
function Products() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const loding = useSelector((state) => state.Products.loding)
    const data = useSelector((state) => state.Products.data)
    console.log({ loding, data });
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const handleClick = () => {
      let token = localStorage.getItem('token')
      if(token){
        localStorage.removeItem('token')
        navigate('/login')
      }


      
    }
    return (
        <>
         <button style={{height:50,width:100,backgroundColor:"black",color:"white",marginLeft:40}} onClick={handleClick}>{token?`Logout`:`Login`}</button>
          <h1 style={{textAlign:"center"}}>All Products</h1>
          <div  style={{textAlign:"center"}} class="listing-section">
          
            {loding ?<img src={loder}/>
            :
            data?.products?.length > 0 ? 
            <ProductsList data={data.products}/>
            :
             <div>
                <p>No Data Found</p>
            </div>
        }
        
        </div>
        
        </>
    )
}
export default Products