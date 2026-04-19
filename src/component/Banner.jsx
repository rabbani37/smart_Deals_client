import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectCards, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";

const Banner = () => {

    const [index, setIndex] = useState(0)
    const images = [
        // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // freelance team
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d", // online marketplace
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7", // laptop work
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // slow change

        return () => clearInterval(interval);
    }, [images.length]);
    return (

        <div
            className="h-screen w-full relative bg-cover bg-center transition-all duration-[2000ms]"
            style={{ backgroundImage: `url(${images[index]})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                {/* content */}
                <div className="text-center text-white max-w-2xl px-4">

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                        Deal your <span className="text-primary">Products </span>
                        in a <span className="text-primary">Smart</span> way !
                    </h1>

                    <p className="text-gray-200 mb-6">
                        Discover services,  and local deals easily in one place.
                    </p>

                    {/* search */}
                    <div className="flex bg-white rounded overflow-hidden mb-6 shadow-2xl">
                        <input
                            type="text"
                            placeholder="Search services or products..."
                            className="w-full px-4 p-2 text-black outline-none"
                        />
                        <button className="btn px-4 bg-primary  text-white">
                            🔍
                        </button>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-4 justify-center">
                        <button className="px-6 py-2 rounded btn bg-primary  text-white">
                            Browse Priducts
                        </button>
                        <button className="px-6 py-2 rounded btn btn-outline ">
                            Post Ad
                        </button>
                    </div>

                </div>
            </div>
        </div>

        // <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center">

        //     {/* Overlay */}
        //     <div className="w-full h-full bg-black/50 flex items-center justify-center">

        //         {/* Content */}
        //         <div className="text-center text-white max-w-2xl px-4">

        //             {/* Title */}
        //             <h1 className="text-4xl md:text-5xl font-bold mb-4">
        //                 Discover Your Marketplace
        //             </h1>

        //             {/* Description */}
        //             <p className="text-gray-200 mb-6">
        //                 Find the best deals, explore trending products, and shop smarter every day.
        //             </p>

        //             {/* Search Bar */}
        //             <div className="flex items-center bg-white rounded overflow-hidden mb-6">
        //                 <input
        //                     type="text"
        //                     placeholder="Search products..."
        //                     className="w-full px-4 py-2 text-black outline-none"
        //                 />
        //                 <button className="px-4 py-2 bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white">
        //                     🔍
        //                 </button>
        //             </div>

        //             {/* Buttons */}
        //             <div className="flex gap-4 justify-center">

        //                 {/* Gradient Button */}
        //                 <button className="px-6 py-2 rounded border border-transparent bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white font-medium hover:opacity-90">
        //                     Explore
        //                 </button>

        //                 {/* Outline Button */}
        //                 <button className="px-6 py-2 rounded border border-white text-white font-medium hover:bg-white hover:text-black transition">
        //                     Learn More
        //                 </button>

        //             </div>

        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;