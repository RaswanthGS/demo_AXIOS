import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card , Button} from 'react-bootstrap'

const ShowProducts = () => {

    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    },[])

  return (
    <div className='products-card-info'><h1>ShowProducts</h1>

        {
        products.map((product, index) => (
            <Card className="m-2 round shadow-1g" style={{ width: '22rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
                <Button variant="primary">Show Detail</Button>
            </Card.Body>
            </Card>

        ))
        }
    </div>
  )
}

export default ShowProducts