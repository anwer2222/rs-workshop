import About from "@/components/About";
import { RadioGroupForm } from "@/components/E";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Home() {
  return (
    <div className=" flex items-center flex-col">
      <div className="h-25"/>
      
      <Image src="/lo.svg" alt="" width={5000} height={5000}/>
      <Image src="/logo4.png" className=" rounded-full mt-[-6rem] md:mt-[-8rem] z-10" alt="" width={130} height={130}/>
      <div className="h-max w-full bg-[#f1ece7] mt-[-30px] md:mt-[0px] flex items-center flex-col">

        <Image src="/logo5.png" alt="" width={400} height={400} className="mt-9 md:mt-0"/>

        <h1 className="text-4xl text-center max-w-2xl mt-20"> <span className="font-bold">Workshop:</span> Create Your Flower Crown - Moments of Serenity</h1>
        <About/>
        <div className=" flex items-center flex-col">

          <hr className="bg-black h-1 w-2xl my-8"/>
          <h1 className="text-4xl mb-8 max-w-md text-center"> Join us on Friday, July 18th from 11am to 1pm </h1>
          <RadioGroupForm/>
          
        </div>
        <div className="flex justify-center items-center gap-3 my-10">
          {["1","2","3"].map((i,idx)=>{
            return(
             <Image src={`/img${i}.png`} alt="" width={100} height={100} key={idx}/>
            )
          })}
        </div>
        <div className="flex justify-center gap-5 text-[#d3afab] text-2xl">
          <Link href="https://www.facebook.com/IFnest?">
            <FaFacebook />
          </Link>
          <Link href="https://www.tiktok.com/@rosenest21">
            <FaTiktok />
          </Link>
            <Link href="https://instagram.com/rose__nest">
            <FaInstagram />
            </Link>
            <Link href="https://linktr.ee/rose_nest_">
            <SiLinktree />
            </Link>
        </div>
        <h1 className="text-gray-500 my-2 text-center">© 2025 - Rose Nest - All Rights Reserved - جميع الحقوق محفوظة</h1>

      </div>
    </div>
  );
}
