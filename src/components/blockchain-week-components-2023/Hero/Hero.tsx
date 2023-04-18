import logo from "public/IBF_logo.png"
import Image from "next/image"
import Timer from "./timer"
import RegisterButton from "../RegisterButton"

// bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900 via-slate-800 to-black
export default function Hero() {
  return (
    <div className="pt-9 p-3  h-screen  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-pink-900 to-black ">
        <Image 
        src={logo}
        alt={"IBF logo"}
        width="100"
        className="mx-auto"
        />

        <div className="h-full flex flex-col justify-center items-center">
        
        <h1 className="text-5xl text-center font-extrabold text-white py-0 mt-6
        sm:text-5xl md:text-5xl md:mt-10 md:text-center lg:text-5xl xl:text-5xl ">
        BLOCKCHAIN WEEK <div className="md:block hidden sm:block"/> 2023
        </h1>

          <h2 className="mt-2 text-center mb-4 text-md font-bold text-white 
          md:text-2xl lg:text-3xl xl:text-3xl sm:text-3xl lg:mt-5 ">
            Unlock the power of
            <span className="mx-1 text-transparent bg-clip-text
            bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-200 via-red-300 to-lime-200
            lg:mx-2 sm:mx-3 ">
              Web3
            </span>
            </h2>
    
        <div className="mt-10">
          <h2 className="text-2xl text-transparent bg-clip-text
            bg-gradient-to-b from-orange-500 to-yellow-300
            text-center font-bold
            sm:text-md md:text-md lg:text-3xl xl:text-3xl">
              APRIL 10TH - 15TH 2023
          </h2>
          <Timer/>
        </div>

        <RegisterButton/>
       
        </div>


    </div>
  )
}
