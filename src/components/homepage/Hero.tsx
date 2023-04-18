import Image from "next/image"
import logo from "/public/IBF_logo.png"

export default function Hero() {
  return (
    <div className="pt-9 p-3 h-screen bg-slate-950">
        <Image 
        src={logo}
        alt={"IBF logo"}
        width="100"
        className="mx-auto"
        />
        <h1 className="mt-5 text-center text-3xl font-bold">INDIAN BLOCKCHAIN FRATERNITY</h1>
    </div>
  )
}
