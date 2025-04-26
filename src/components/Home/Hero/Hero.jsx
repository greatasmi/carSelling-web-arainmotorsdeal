import React from "react";
import img from "../../../assets/img/hero.png";

const Hero = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-5 mt-10">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
          🚗 Arain Motors Deal     
          </h1>
          <h className=" text-4xl lg:text-6xl font-bold leading-tight">
          Find Your Perfect Ride Today</h>
          <p className=" text-lg lg:text-2xl font-medium">
          Over 1,000+ New & Certified Used Cars Available Now
          </p>

          <p className=" text-sm lg:text-base">At Arain Motors Deal, we bring you a wide selection of vehicles tailored to your lifestyle and budget. </p>
          <p className=" text-sm lg:text-base">Whether you're chasing comfort, performance, or reliability — your next dream car is just a click away.</p>
          <h1 className=" text-4xl lg:text-3xl font-bold leading-tight  ">Trust. Quality. Satisfaction — Every Mile.</h1>
          <p className=" text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            recusandae ratione ducimus molestias ab neque accusamus eveniet
            cumque corrupti.
          </p>

          <div className="flex gap-8">
            <button className=" bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Explore More
            </button>
            <button className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
              See Cars
            </button>
          </div>
        </div>

        {/* img section  */}
        <div className=" w-full md:w-2/4 mt-4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
