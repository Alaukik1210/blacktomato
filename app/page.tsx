import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DestinationSlider from "@/components/sections/Destination";
import HowDoYouTravel from "@/components/sections/Howdoyoutravel";
import HowWeAreDifferent from "@/components/sections/HowWeAreDifferent";
import JourneySection from "@/components/sections/JourneySection";
import PressCarousel from "@/components/sections/PressItem";
import ReadyToStart from "@/components/sections/ReadyToStart";
import SplitEditorialSection from "@/components/sections/SplitEditorialSection";
import Testimonials from "@/components/sections/Testimonials";
import WhyBlackTomato from "@/components/sections/WhyBlackTomato";
import LegalFooter from "@/components/shared/LegalFooter";
import PrimaryFooter from "@/components/shared/PrimaryFooter";

export default function Page() {
return (
    <>
    <Navbar/>
    <Hero/>
    <HowWeAreDifferent/>
    <DestinationSlider/>
    <HowDoYouTravel/>
    <Testimonials/>
    <PressCarousel/>
    <JourneySection/>
    <SplitEditorialSection/>
    <WhyBlackTomato/>
    <ReadyToStart/>
    <PrimaryFooter/>
    <LegalFooter/>

    </>
)
}