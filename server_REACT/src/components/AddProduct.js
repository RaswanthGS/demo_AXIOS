import React, { useState } from 'react'
import { useHistory } from 'react'
import axios from 'axios'

const AddProduct = () => {
    let history = useHistory;
    
    const[image, setImage] = useState(null)
    const[name, setName] = useState("")
    const[price, setPrice] = useState("")
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")

    const AddProductInfo = async() => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)

        if(image !== null){
            formField.append('image',image)
        }

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('http://localhost:3000/')
        })

    }

  return (
        <div className="container">
            <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Product</h2>
        

        <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button className='btn btn-success' onClick={AddProductInfo}>Add Product</button>
        </div>
        </div>
    </div>
  )
}

export default AddProduct