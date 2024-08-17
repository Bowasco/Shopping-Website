import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [Products, setProducts] = useState([]);
   const navigate = useNavigate()

    useEffect(() => {
      fetch("http://localhost:1234/AllProduct")
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setProducts(json);
        });
    }, []);
  
    const handleEdit = (id) => {
      console.log("Product Id : ", id);
    //   alert(id)
      navigate(`/EditPage/${id}`)
    };


    const handleDelete = async (id) => {
      console.log("Product Id : ", id);
      try {
        const response = await axios.delete(
          `http://localhost:1234/AllProduct/${id}`
        );
        console.log("Deleted Product : ", response.data);
        toast.success("Product Deleted Successfully");
      } catch (error) {
        console.log("Error Deleting Product : ", error);
        toast.error("Error deleting Product");
      }
    };


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
                                onClick={() => handleEdit(data.id)}
                                className="bg-green-800 text-xs py-2 px-5 rounded-lg text-white"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(data.id)}
                                className="bg-red-800 text-xs  py-2 px-5 rounded-lg text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products