import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const WhyUs = () => {
  const icon1 = <SiWebmoney className=" text-green-500 mx-auto" size={48} />;
  const icon2 = <FaUsers className=" text-green-500 mx-auto" size={48} />;
  const icon3 = (
    <FaShippingFast className=" text-green-500 mx-auto" size={48} />
  );

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className=" font-bold text-4xl text-center">
        Why choose <span className=" text-primary">Arain Motors Deal </span>?
      </h1>

      <p className=" text-center">
      🚘 Wide Selection
Explore over 1,000+ new and certified used cars from top brands — all in one place. </p>
<p className=" text-center">
💰 Competitive Pricing
We offer transparent deals and unbeatable prices — no hidden fees, just honest value. </p>
<p className=" text-center">
🔍 Verified Vehicles
Every car is inspected and quality-checked, ensuring peace of mind with every purchase. </p>
<p className=" text-center">
🕒 Fast & Easy Process
From browsing to booking, our process is built for speed, convenience, and simplicity. </p>
<p className=" text-center">
📞 Personalized Support
Got questions? Our expert team is always ready to help — online or at our dealership. </p>
<p className=" text-center">
🌟 Trusted by Hundreds
Join the growing family of happy drivers who found their dream ride with Arain Motors Deal.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <WhyUsCard icon={icon1} title="Financing Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" />
      </div>
    </div>
  );
};

export default WhyUs;
