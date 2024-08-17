import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Cart = () => {

    const [cart, setcart] = useState([])

    useEffect(() => {
        fetch("http://localhost:1234/CartItems")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setcart(data)
            })
    }, [cart])

    const handleDelete = async (id) =>{
        console.log("Product Id : ", id);
        try {
            const response = await axios.delete(
              `http://localhost:1234/CartItems/${id}`
            );
            console.log("Deleted Product : ", response.data);
          } 
        catch (error) {
            console.log("Error Deleting Product : ", error);
          }
    }



    return (
        <div className="p-6 md:p-10 lg:p-16">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <div className="grid gap-6">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div>
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Cart