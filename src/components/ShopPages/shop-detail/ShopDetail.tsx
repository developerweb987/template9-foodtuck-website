import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const Shopdetail = () => {
  return (
    <div className="bg-white px-4 md:px-0">
      {/* Main content */}
      <div className="max-w-[1320px] mx-auto mt-10 md:mt-[130px] flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Left images (Thumbnails) */}
        <div className="flex md:flex-col gap-3 md:gap-4">
          {[1, 2, 3, 4].map((img, index) => (
            <Image
              key={index}
              src={`/shop-detail/slide${img}.png`}
              alt={`Thumbnail ${img}`}
              width={100} height={100}
              className="w-[80px] h-[80px] md:w-[132px] md:h-[129px] rounded-lg border-2 cursor-pointer hover:shadow-md"
            />
          ))}
        </div>

        {/* Large Image Section */}
        <div className="flex justify-center md:mr-4">
          <Image
            src="/shop-detail/slidebgpic.png"
            alt="Large Image"
            width={400} height={500}
            className="w-full max-w-[400px] md:max-w-[491px] md:h-[596px] rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          {/* In Stock & Navigation */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-full text-sm">In Stock</span>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-700 hover:text-black transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Prev</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-black transition">
                <span>Next</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="font-bold text-2xl md:text-[48px] leading-tight mb-2">Yummy Chicken Chup</h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-lg leading-[26px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
          </p>

          <hr className="mb-4" />

          {/* Price & Rating */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-2xl md:text-3xl text-black">$54.00</span>
            <div className="flex items-center text-sm">
              <div className="flex text-[#FF9F0D]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.125 7.864 1.151-5.691 5.548 1.342 7.829L12 18.896l-7.183 3.744 1.342-7.829-5.691-5.548 7.864-1.151z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">| 5.0 Rating (22 Reviews)</span>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border rounded-lg px-3 py-1">
              <button className="text-xl">−</button>
              <span className="px-3">1</span>
              <button className="text-xl">+</button>
            </div>
            <Button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-[#e58e00] transition">
              Add to Cart
            </Button>
          </div>

          <hr className="mb-4" />

          {/* Wishlist & Compare */}
          <div className="flex items-center gap-4 mb-4 text-gray-700">
            <button className="flex items-center gap-2 hover:text-black transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-.56.57-.56-.57a5.5 5.5 0 00-7.78 7.78l8.34 8.33 8.34-8.33a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>Wishlist</span>
            </button>
            <span>|</span>
            <button className="hover:text-black transition">Compare</button>
          </div>

          {/* Category & Tags */}
          <p className="text-gray-600 mb-2"><strong>Category:</strong> Pizza</p>
          <p className="text-gray-600 mb-4"><strong>Tag:</strong> Our Shop</p>

          {/* Share Icons */}
<div className="flex items-center gap-6 mt-4">
  <span className="font-medium text-gray-700">Share:</span>
  {["facebook", "twitter", "instagram", "linkedin", "pinterest"].map((icon, i) => (
    <button
      key={i}
      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition transform hover:scale-110"
      title={`Share on ${icon.charAt(0).toUpperCase() + icon.slice(1)}`}
    >
      {icon === "facebook" && (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg>
      )}
      {icon === "twitter" && (
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
       <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
   </svg>
      )}
      {icon === "instagram" && (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
    </svg>
      )}
      {icon === "linkedin" && (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
    </svg>
      )}
      {icon === "pinterest" && (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z"></path>
    </svg>
      )}
    </button>
  ))}
</div>
        </div>
      </div>
    </div>
  )
}

export default Shopdetail;

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
</svg>
