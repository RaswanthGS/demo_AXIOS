import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ProductDetail = () => {

  const [product,setProduct] = useState("")

  const {id} = useParams()

  const getSingleProduct = async() => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}`)
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getSingleProduct();
  }, [])

  return (
    <div>ProductDetail
      <div className='single-product-info'>
        <img src={product.image}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>

        <Link className="btn btn-primary" to={`/${product.id}/update`}>Update</Link>
        <Link className="btn btn-danger">Delete</Link>
      </div>
    </div>
  )
}

export default ProductDetail