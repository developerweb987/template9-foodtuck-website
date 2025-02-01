import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const FoodCategory = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className={`${VibeFont.className} text-[#FF9F0D] text-4xl mb-4 animate-fade-in`}>Food Category</p>
          <h1 className="text-white text-5xl font-bold">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        {/* Food Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {["/food1.png", "/food2.png", "/food3.png", "/food4.png"].map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl h-auto shadow-lg">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Category ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {["/paratha.png", "/burger-real.png", "/kabab.png", "/cheezburger.png", "/raita.png", "/lastpic.png"].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md">
                <Image src={src} alt={src.split("/")[1]} width={200} height={200} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-1/3 space-y-8">
            <p className={`${VibeFont.className} text-[#FF9F0D] text-3xl mb-4`}>Why Choose Us</p>
            <h2 className="text-white text-4xl font-bold">Extraordinary Taste & Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              Experience world-class flavors with our expertly crafted dishes. Fresh ingredients,
              unique recipes, and a passion for taste bring you an unforgettable dining experience.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-5 gap-6">
              {[{ icon: "/Hamburger.png", title: "Fast Food" }, { icon: "/Cookie.png", title: "Lunch" }, { icon: "/Wine.png", title: "Dinner" }].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#FF9F0D] rounded-xl p-4 mb-2 transform hover:scale-105 transition-transform duration-300">
                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                  </div>
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="bg-white rounded-xl p-5 flex items-center justify-center gap-5 max-w-xs shadow-lg">
              <span className="text-[#FF9F0D] text-5xl font-bold">30+</span>
              <div>
                <p className="text-gray-600">Years of</p>
                <p className="text-black font-bold text-xl">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {[
            { icon: "/cap.png", title: "Professional Chefs", count: "420" },
            { icon: "/burger.png", title: "Items of Food", count: "320" },
            { icon: "/spon.png", title: "Years of Experience", count: "30+" },
            { icon: "/pizza.png", title: "Happy Customers", count: "220" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center items-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Image src={stat.icon} alt={stat.title} width={80} height={80} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-[#FF9F0D] text-4xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
