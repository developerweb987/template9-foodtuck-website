"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DescriptionComponent = () => {
  const [activeTab, setActiveTab] = useState("description");

  const keyBenefits = [
    "High-quality materials ensure durability.",
    "Ergonomic design for maximum comfort.",
    "Easy to clean and maintain.",
    "Versatile for multiple uses.",
    "Available in various sizes and colors."
  ];

  return (
    <div className="w-full bg-gray-50 py-12 mt-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          {[
            { name: "Description", id: "description" },
            { name: "Reviews (24)", id: "reviews" }
          ].map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-200 min-w-[165px] h-12 font-semibold rounded-lg`}
            >
              {tab.name}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {activeTab === "description" ? (
              <>
                <p className="text-gray-600 leading-relaxed">
                  Our product is designed with premium materials and modern engineering,
                  ensuring reliability and satisfaction. It provides exceptional
                  performance in everyday use.
                </p>

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#FF9F0D]" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Customer reviews will be displayed here.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
