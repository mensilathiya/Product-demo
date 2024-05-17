import Rating from "react-rating"
import { Link } from "react-router-dom"

function ProductsList({ data }) {
    return (
        data.map((p, i) => {
            return (
                <Link to={`/products/${p?.id}`}>
                    <div className="product" key={i}>
                        <div className="image-box">
                            <img className="images" src={p.thumbnail} />
                        </div>
                        <div className="text-box">
                            <h2 className="item" title={p.title}>{p?.title?.length > 10 ? `${p?.title?.slice(0, 10)}...` : p.title}</h2>
                            <h3 className="price">${p.price}</h3>
                            <h3 className="item">{p.category}</h3>
                            <p style={{ fontSize: '15px' }} className="description" title={p.description}>{p.description.length > 70 ? `${p.description.slice(0, 70)}...` : p.description}</p>
                            <h3 className="item">{p.brand}</h3>
                            <p style={{ textAlign: "center" }}>{p.stock}</p>
                            <p style={{ textAlign: "center" }}>{p.rating}</p>
                           


                            <button className="button" type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                        </div>
                    </div>
                </Link>
            )
        })

    )
}
export default ProductsList