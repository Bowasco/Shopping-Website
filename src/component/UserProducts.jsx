import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProducts = () => {
    const [Products, setProducts] = useState([]);
    const navigate = useNavigate()
    const [cart, setcart] = useState([])

    useEffect(() => {
        fetch("http://localhost:1234/AllProduct")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
            });
    }, [Products]);

    const handleViewDetails = (id) => {
        console.log("Product Id : ", id);
        navigate(`/Viewmore/${id}`)
    };

    const addToCart = async (id) => {
        const productsResponse = await axios.get("http://localhost:1234/AllProduct");
        const products = productsResponse.data;
        const product = products.find((item) => item.id === id);

        const addToCart = await axios.post("http://localhost:1234/CartItems", product)
        console.log(addToCart)
        alert("Product added")
    }



    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-6 md:p-10 lg:p-16">
                {Products.map((data) => (
                    <div key={data.id} className="border-2 p-5 rounded-lg h-fit ">
                        <div className="w-full h-[200px] md:max-w-[250px] mx-auto">
                            <img className="w-full h-full" src={data.image} alt="" />
                        </div>
                        <div className="grid gap-2 max-h-[160px] h-full overflow-y-auto">
                            <h1 className="text-center font-bold text-2xl">
                                {data.name}
                            </h1>
                            <h1>{data.category}</h1>
                            <p>${data.price}</p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                onClick={() => handleViewDetails(data.id)}
                                className="bg-green-800 text-xs py-2 px-5 rounded-lg text-white"
                            >
                                View More
                            </button>
                            <button
                                onClick={() => addToCart(data.id)}
                                className="bg-red-800 text-xs  py-2 px-5 rounded-lg text-white"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserProducts