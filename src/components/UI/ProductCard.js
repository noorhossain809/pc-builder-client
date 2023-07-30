import { Rate } from "antd";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
    // let rating = null

    // if(product?.rating === 4.5){
    //     return rating = <Rate allowHalf defaultValue={4.5} />
    // }if(product?.rating === 4.2){
    //     return rating = <Rate allowHalf defaultValue={2.5} />
    // }else if(product?.rating === 4.8){
    //     return rating = <Rate allowHalf defaultValue={5} />
    // }
    



  return (
    <div className=" mx-48 pt-8">
      <div className=" mx-48">
        <div className="flex space-x-6 shadow-2xl shadow-white bg-white p-4 border border-zinc-900">
          <Image
            src={product?.image}
            width={100}
            height={100}
            responsive
            alt="product image"
          />
          <div>
            <h3>{product?.productName}</h3>
            <div className="flex space-x-10">
              <div>
                <p className=" text-gray-600 bg-[rgba(55,73,187,.05)] p-1 px-6 rounded-full text-center ">Status: <span className=" text-gray-950 uppercase font-semibold">{ product?.status}</span></p>
                <p>Rating: {product?.rating}</p>
                
              </div>
              <div>
                <p><span className="text-2xl">৳ </span>{product?.price}</p>
                <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                ADD
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
