
import Count from "@/Ui/Count";
import CoursesComponent from "@/Ui/CoursesComponent";
import CurrentOpeningJobs from "@/Ui/CurrentOpeningJobs";
import Faq from "@/Ui/Faq";
import HeroSection from "@/Ui/HeroSection";
import LoginBanner from "@/Ui/LoginBanner";
import SoftwareNSolutions from "@/Ui/SoftwareNSolutions";
import StepProcess from "@/Ui/StepProcess";
import Testimonials from "@/Ui/Testimonials";

export default function Home() {
  return (
    <div className="w-full  linear-gradient(180deg, #e9f5ff 0, #c4deff 129.9%) to-white overflow-x-hidden">
      {/* Hero section with full viewport height */}
      <section className="relative ">
        <HeroSection />
        
      
      </section>

      {/* Services / Courses Section */}
      <section className="relative w-full">
        <CoursesComponent />
      </section>

        {/* Job Opening */}
      <section className="relative w-full">
        <CurrentOpeningJobs/>
      </section>

      {/* Step Process */}
      <section className="relative w-full">
        <StepProcess />
      </section>

    

<section className="relative w-full">
        <SoftwareNSolutions/>
      </section>
      

      {/* FAQs */}
      {/* <section className="relative w-full">
        <Faq />
      </section> */}

      {/* Counts / Statistics */}
      {/* <section className="relative w-full">
        <Count />
      </section> */}

      {/* Testimonials */}
      <section className="relative w-full">
        <Testimonials />
      </section>
       <section className="relative w-full">
        <LoginBanner/>
      </section>
    </div>
  );
}
