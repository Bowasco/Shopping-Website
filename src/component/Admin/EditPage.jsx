import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const EditPage = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [name, setname] = useState("")
  const [title, settitle] = useState("")
  const [price, setprice] = useState("")
  const [category, setcategory] = useState("")
  const [image, setimage] = useState("")

  useEffect(() => {
    axios.get("http://localhost:1234/AllProduct/" + id)
    .then(res => { console.log(res);
      setname(res.data.name);
      settitle(res.data.productDescription);
      setprice(res.data.price);
      setcategory(res.data.category)
      setimage(res.data.image)
    })
    .catch( error=>{
      console.log(error);
    })
  }, [])

  const handleUpdate = (e)=>{
    e.preventDefault();

    axios.put(`http://localhost:1234/AllProduct/${id}`, {
      name,
      productDescription : title,
      category,
      price,
       image
    })
    .then(res => { 
      navigate("/")
    })
    .catch( error=>{
      console.log(error);
    })
  }

  const handleImageChange = (ev)=>{
    const file = ev.target.files[0]
  const reader = new FileReader()
   reader.onloadend = ()=>{
     const convertedImage = reader.result
     console.log("Image : ", convertedImage )
     setimage(convertedImage)
   }
   reader.readAsDataURL(file)
  }
  


  return (
    <div>
      <Navbar />
      <form
        action=""
        className="w-full md:w-1/2 lg:w-5/12 rounded-md  p-4 bg-slate-50 shadow-lg mx-auto  my-8"
      >
        <h1 className="text-3xl text-center font-bold">Edit Product</h1>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
          value={name}
          onChange={e=> setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
          value={price}
          onChange={e=> setprice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Category"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
          value={category}
          onChange={e=> setcategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Description"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
          value={title}
          onChange={e=> settitle(e.target.value)}
        />
        <div className="flex items-center justify-between gap-4">
          <div>
            <input
              type="file"
              onChange={handleImageChange}
              name=""
              id=""
              className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
            />
          </div>

          {/* {productImage ? (
            <div className="w-10 h-10 rounded-full">
              <img
                className="w-full h-full rounded-full"
                alt="ProductImage"
              />
            </div>
          ) : null} */}
        </div>
        <button
        onClick={handleUpdate}
          className="w-full py-3 rounded-lg bg-black text-white text-center"
          type="submit"
        >
          Edit Product{" "}
        </button>
      </form>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </div>
  );
};

export default EditPage;