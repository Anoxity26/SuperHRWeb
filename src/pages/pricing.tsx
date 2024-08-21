import React from "react";
import TopBar from "@/components/TopBar";
import PriceCards from "@/components/PriceCards";
import { Reveal } from "@/components/Reveal";

const Pricing = () => {
  const [country,setCountry] = React.useState("");
  async function getCountry() {
    try {
        let country = localStorage.getItem("country");
        if (!country) {
            const response = await fetch('/api/getCountry');
            console.log(response);
            const {countryCode} = await response.json();
            localStorage.setItem("country", countryCode);
            setCountry(countryCode);
        } else {
            setCountry(country);
        }
    } catch (error) {
        console.error('Error fetching country code:', error);
        throw error;
    }
}

  React.useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <TopBar />
      <div className="relative mt-16 text-center">
        <div className="font-bold text-[42px]">
          <span>Pricing that feels</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432]">
            just right{country===""?" for India":" for you"}
          </span>
        </div>
        {/* <div className="mt-4 font-medium">Start with our free plan</div> */}
      </div>
      <div className="flex relative justify-center mt-16 flex-wrap gap-x-5">
        <Reveal>
        <PriceCards
          title="Free"
          subTitle="For individuals who need to manage their personal talent network."
          price={country==="IN"?"₹ 0/month":"$ 0/month"}
          buttonText="Free Forever"
          featureLimits={["500 talent pool", "5 jobs", "5 message templates"]}
          featureHeading="Key Features"
          featureList={[
            "Call from browser",
            "Message templates",
            "Linkedin integration",
            "Custom tags",
            "Naukri/Instahyre integration",
            "Bulk import",
            "Mobile contact app integration",
            "Advanced filters",
          ]}
        />
        </Reveal>
        <Reveal delay={0.2}>
        <PriceCards
          title="Personal"
          subTitle={country==="IN"?"₹ 499/month":"$ 19/month"}
          price={country==="IN"?"₹ 900 for 3 months":"$ 39/month"}
          strikePrice={country==="IN"?"₹ 1500":"$ 57"}
          buttonText="Get Personal Plan"
          featureLimits={["Unlimited talent pool", "Unlimited jobs", "Unlimited message templates"]}
          featureHeading="Everything in free, plus"
          featureList={["Priority customer support",
          "Data export options",
          "Talent sharing",
          "Access to community"
          ]}
        />
        </Reveal>
        <Reveal delay={0.4}>
        <PriceCards
          title="Team"
          subTitle=""
          price="Let’s talk!"
          buttonText="Contact us"
          featureLimits={["Unlimited talent pool", "Unlimited jobs", "Unlimited message templates"]}
          featureHeading="Everything in personal, plus"
          featureList={["Collaborative features",
          "Shared Talent pool",
          ]}
        />
        </Reveal>
      </div>
    </div>
  );
};

export default Pricing;
