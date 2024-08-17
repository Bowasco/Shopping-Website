import React from 'react'
import Navbar2 from './Navbar2'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ViewMore = () => {

const params = useParams();
const id = params.id
const [product, setproduct] = useState([])
const [productDetails, setproductDetails] = useState({})


useEffect(() => {
    fetch(`http://localhost:1234/AllProduct/${id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setproduct(data)
    })
}, [])



  return (
    <div>
        <Navbar2/>

        <div  className="grid md:grid-cols-2 gap-8 items-center w-11/12 mx-auto mt-10">
                <div className="w-full h-full">
                    <img className="w-full h-full " src={product.image} alt="" />
                </div>
                <div className="grid gap-4">
                    <h1 className="text-4xl md:text-2xl font-sans">{product.productDescription}</h1>
                    <h1 className="text-xl md:text-2xl font-sans">{product.category}</h1>
                    <h1 className="text-[60px]  font-sans  w-fit">${product.price}</h1>
                    <button className="w-44 py-3 roundedlg bg-slate-800 text-white">Add to cart</button>
                </div>
            </div>
    </div>
  )
}

export default ViewMore