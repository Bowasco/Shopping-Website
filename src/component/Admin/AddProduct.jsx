import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productImage, setproductImage] = useState("");
  const navigate = useNavigate();

  const handleAddProduct = async (ev) => {
    ev.preventDefault();
    try {
      const productDetails = {
        title: productName,
        price: productPrice,
        category: productCategory,
        description: productDescription,
        image: productImage,
      };
      console.log("Product Info : ", productDetails);

      const response = await axios.post(
        "http://localhost:1234/AllProduct",
        productDetails
      );
      console.log("Response Data : ", response.data);

      toast.success("Product Uploaded Successfully");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      alert("Error Posting Product");
      console.log("Error");
    }
  };

  const handleImageUpload = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const result = reader.result;
      console.log("Image Result : ", result);
      setproductImage(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar />
      <form
        action=""
        className="w-full md:w-1/2 lg:w-5/12 rounded-md  p-4 bg-slate-50 shadow-lg mx-auto  my-8"
      >
        <input
          onChange={(ev) => setproductName(ev.target.value)}
          type="text"
          placeholder="Enter Product Name"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
        />
        <input
          onChange={(ev) => setproductPrice(ev.target.value)}
          type="text"
          placeholder="Enter Product Price"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
        />
        <input
          onChange={(ev) => setproductCategory(ev.target.value)}
          type="text"
          placeholder="Enter Product Category"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
        />
        <input
          onChange={(ev) => setproductDescription(ev.target.value)}
          type="text"
          placeholder="Enter Product Description"
          className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
        />
        <div className="flex items-center justify-between gap-4">
          <div>
            <input
              onChange={handleImageUpload}
              type="file"
              name=""
              id=""
              className="w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3"
            />
          </div>

          {productImage ? (
            <div className="w-10 h-10 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={productImage}
                alt="ProductImage"
              />
            </div>
          ) : null}
        </div>
        <button
          onClick={handleAddProduct}
          className="w-full py-3 rounded-lg bg-black text-white text-center"
          type="submit"
        >
          Add Product{" "}
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

export default AddProduct;