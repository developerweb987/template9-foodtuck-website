import React from "react";
import Link from "next/link";

function CheckoutHero() {
  return (
    <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Checkout
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/checkout" className='text-[#FF9F0D]'>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckoutPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Shipping & Billing Form (60%) */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Shipping & Billing Address</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
            </div>

            {/* City & Zip Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">City</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Zip Code</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
            </div>

            {/* Country & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Country</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">State</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]" />
              </div>
            </div>

            <button className="w-full bg-[#FF9F0D] text-white py-3 rounded-xl hover:bg-[#ff8c00] transition duration-300">
              Continue to Payment
            </button>
          </form>
        </div>

        {/* Right Section - Order Summary (40%) */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Product 1</span>
              <span className="text-gray-900 font-semibold">$50.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Product 2</span>
              <span className="text-gray-900 font-semibold">$30.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-900 font-semibold">$5.00</span>
            </div>
            <hr className="border-t my-4" />
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">$85.00</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-[#FF9F0D] text-white py-3 rounded-xl hover:bg-[#ff8c00] transition duration-300">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CheckOut() {
  return (
    <>
      <CheckoutHero />
      <CheckoutPage />
    </>
  );
}
