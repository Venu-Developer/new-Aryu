import ContactUs from "../ContactUs";
import Bussiness from "./CustomServices/Bussiness";
import Faq from "./CustomServices/Faq";
import Industry from "./CustomServices/Industry";
import OurOffering from "./CustomServices/OurOffering";
import Overview from "./CustomServices/overview";

const serviesHome = ({overview,bussiness,industry,ourOfferings,faqData}) => {
  // const overview={overview}
  console.log(ourOfferings)
    return (
      <div className="pt-20">
        <section id="overview" className="mt-10 lg:mt-20">
          {/* <h2 className="text-3xl font-bold">Overview</h2> */}
          <Overview overview={overview}/>
        </section>
  
        <section id="ourofferings" className="mt-10 lg:mt-20">
          {/* <h2 className="text-3xl font-bold">OurOfferings</h2>
           */}
           <OurOffering ourOfferings={ourOfferings}/>
        </section>
  
        <section id="business-benefits" className="mt-10 lg:mt-20">
          {/* <h2 className="text-3xl font-bold">Business Benefits</h2> */}
          <Bussiness bussiness={bussiness}/>
        </section>
  
        <section id="industry-use-cases" className="mt-10 lg:mt-20">
          {/* <h2 className="text-3xl font-bold">Industry Use Cases</h2> */}
          <Industry industry={industry}/>
        </section>
  
        <section id="faq" className="">
          <Faq faqData={faqData}/>
          
        </section>
  
        <section id="contact-us" className="mt-10 lg:mt-20">
          <ContactUs/>
        </section>
      </div>
    );
  };
  
  export default serviesHome;
  