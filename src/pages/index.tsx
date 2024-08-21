import AppStore from '@/components/AppStore'
import DetailsForm from '@/components/DetailsForm'
import { Dialog, DialogTrigger } from '@/components/Dialog'
import FAQ from '@/components/FAQ'
import FeaturesWithDescriptionComponent from '@/components/FeaturesWithDescriptionComponent'
import Footer2 from '@/components/Footer2'
import OurTeam from '@/components/OurTeam'
import RequestAccessSection from '@/components/RequestAccessSection'
import Testimonials from '@/components/Testimonials'
import LandingPageTop from '@/components/landingPageTop'
import mixpanel from 'mixpanel-browser'
import Head from 'next/head'
import { useEffect, useRef } from 'react'


export default function Home() {
  const t = "5ef97046932e8d79a73de3601fea905d"
  const blogUrl = "https://blog.superhr.ai/"

  useEffect(() => {
    mixpanel.init(t, { debug: true, track_pageview: false });
    mixpanel.track("superhr_landing_page_visited");
  }, []);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const openForm = () => {
    triggerRef.current?.click();
  }

  const openBlog = () => {
    window.open(blogUrl, "_blank");
  }
  const openSignUp = () => {
    window.open("https://app.superhr.ai/loginPage", "_blank");
  }

  return (
    <div className=''>
      <Head>
        <title>SuperHR - Elevate your Recruiting Game</title>
        <meta name="description" content="Experience hassle-free talent management and nurture your own talent network with ease." key="desc" />
        <meta property="og:description" content="Experience hassle-free talent management and nurture your own talent network with ease." />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="SuperHR - Elevate your Recruiting Game" />
        <meta property="og:image" content="/flagship_creative.png" />
        <meta property="og:url" content="https://superhr.ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="/flagship_creative.png" />
        <meta name="twitter:title" content="SuperHR - Your all-in-one HR solution" />
        <meta name="twitter:description" content="Experience hassle-free talent management and nurture your own talent network with ease." />
        <meta name="twitter:image" content="/flagship_creative.png" />
      </Head>
      <Dialog>
        <DialogTrigger ref={triggerRef} className="hidden h-0 w-0" asChild>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DetailsForm />
      </Dialog>
      <LandingPageTop openForm={openForm} openBlog={openBlog} openSignUp={openSignUp} />
      <FeaturesWithDescriptionComponent />
      {/* <CompanyCarousel /> */}
      {/* <FeatureFAQ /> */}
      <Testimonials />
      <OurTeam />
      <FAQ />
      <RequestAccessSection openForm={openForm} />
      <AppStore />
      <Footer2 />
    </div>
  )
}
