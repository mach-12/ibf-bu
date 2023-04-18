import Hero from "@/components/homepage/Hero";
import Head from "next/head"

export default function Home() {
  return (
    <div data-theme="bwTheme" className="">
      <Head>
        <title>Indian Blockchain Fraternity</title>
        <meta name="description" content="Blockchain Week by IBF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero></Hero>
          
      </main>
    </div>
  )
}
