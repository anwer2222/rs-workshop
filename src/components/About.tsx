"use client"
import React from "react";
import Image from "next/image";

const p= [
"Join our Flower Arrangment Workshop at a warm, cozy café.",
"Step away from daily stress and immerse yourself in moments of harmony and happiness. enjoy designing beautiful, fragrant together.",
"What you will gain:",
"- Learn a new artistic skill",
"- Boost your mood and relieve stress",
"- Gently strengthen your hands in a calm, creative way",
// "- Savor a warm cup of tea or coffee and a sweet treat to elevate your happiness",
"Enjoy special moments and a soulful, recharging atmosphere",
"This workshop is a journey to your own self, a gift for your inner and outer beauty. Reserve your spot and embrace the moment!"
]

const About = () => {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center md:h-[600px]">
        
      <div
        // initial={{ opacity: 0, scale: 0.5 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        className="p-3 flex items-center flex-col"
      >
        {/* <h1 className="text-4xl font-bold text-center mb-6">تعرّفي على ابتسام نور</h1> */}
          <Image src={"/IMG.jpeg"} alt="" width={500} height={500}/>
      </div>
      <div
        // initial={{ opacity: 0, scale: 0.5 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        className="p-3 flex items-center"
      >
       
        {/* Link section */}
        <div className="flex flex-col justify-around max-w-lg ">

          {p.map((inp,idx) => (
            <p className="py-3 text-left" key={idx}>{inp}</p>
          ))}

        </div>
         
      </div>
    </section>
  );
};

export default About;
