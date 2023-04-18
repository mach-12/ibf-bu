import About from "@/components/blockchain-week-components-2023/About"
import Hero from "@/components/blockchain-week-components-2023/Hero/Hero"
import EventTimeline from "@/components/blockchain-week-components-2023/EventTimeline"
import Sponsors from "@/components/blockchain-week-components-2023/Sponsors/Sponsors"
import Footer from "@/components/blockchain-week-components-2023/Footer"


export default function BlockchainWeek2023() {
  return (
    <div data-theme="bwTheme" className="">
      <main className="">
        <Hero/>
        <About/> 
        <EventTimeline/>
        <Sponsors/>
        <Footer/>
        
      </main>
    </div>
  )
}
