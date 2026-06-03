import Hero from "@/components/sections/Hero"
import Ticker from "@/components/sections/Ticker"
import Missions from "@/components/sections/Missions"
import Stats from "@/components/sections/Stats"
import DonSteps from "@/components/sections/DonSteps"
import PhotoGallery from "@/components/sections/PhotoGallery"
import WaveDivider from "@/components/ui/WaveDivider"

export default function Home() {
  return (
    <>
      <Hero />
      {/* paper → cream-soft */}
      <WaveDivider top="text-paper" bottom="bg-cream-soft" variant="gentle" />
      <Ticker />
      {/* cream-soft → sage */}
      <WaveDivider top="text-paper" bottom="bg-sage" variant="organic" />
      <Missions />
      {/* sage → cream */}
      <WaveDivider top="text-sage" bottom="bg-cream" variant="gentle" flip />
      <PhotoGallery />
      {/* cream → sage */}
      <WaveDivider top="text-cream" bottom="bg-sage" variant="choppy" />
      <Stats />
      {/* sage → cream-soft */}
      <WaveDivider top="text-sage" bottom="bg-cream-soft" variant="gentle" flip />
      <DonSteps />
      {/* cream-soft → sage (footer) */}
      <WaveDivider top="text-cream-soft" bottom="bg-sage" variant="choppy" />
    </>
  )
}
