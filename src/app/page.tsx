import About from "@/components/About";
import { RadioGroupForm } from "@/components/E";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Home() {
  return (// mt-[-6rem] md:mt-[-8rem] z-10
    <div className=" flex items-center flex-col">
      <div className="h-25"/>
        <div className="w-screen h-[30px] md:h-[80px] relative">
         <Image src="/lo.svg" alt="" fill/>
        </div>
      <div className="w-[80px] h-[80px] mt-[-4rem] md:w-[130px] md:h-[130px] relative md:mt-[-8rem]">
         <Image src="/logo4.png" className=" rounded-full " alt="" fill/>
      </div>
      <div className="h-max w-full bg-[#f1ece7] mt-[-18px] md:mt-[-3px] flex items-center flex-col">
         <div className="w-[200px] h-[80px] md:w-[400px] md:h-[170px] mt-9 md:mt-0 relative">
            <Image src="/logo5.png" alt="" fill/>
         </div>
        <h1 className="text-2xl md:text-4xl text-center max-w-sm  md:max-w-2xl mt-20"> <span className="font-bold">Workshop:</span> Create Your Flower Arrangment - Moments of Serenity</h1>
        <About/>
        <div className=" flex items-center flex-col">

          <hr className="bg-black h-1 w-[280px] md:w-lg my-8"/>
          <h1 className="text-2xl max-w-sm md:text-4xl mb-8 md:max-w-md text-center"> Join us on today</h1>
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
          {/* <Link href="https://www.tiktok.com/@rosenest21">
            <FaTiktok />
          </Link> */}
            <Link href="https://instagram.com/rose__nest">
            <FaInstagram />
            </Link>
            <Link href="https://linktr.ee/rose_nest_">
            <SiLinktree />
            </Link>
        </div>
        <h1 className="text-gray-500 my-8 text-center text-[10px]">© 2026 - Rose Nest - All Rights Reserved</h1>

      </div>
    </div>
  );
}
