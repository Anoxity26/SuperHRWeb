import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
const FAQ = () => {
  return (
    <div className='flex flex-col items-center my-16 bg-white'>
      <h3 className='bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] text-base font-bold mt-2 sm-mt-16 lg:mt-32'>FAQs</h3>
      <h1 className='text-2xl sm:text-4xl font-bold mt-1'>Frequently asked questions</h1>
      <div className='mx-8 md:w-2/3 md:mx-auto max-w-[1840]'>
      <Accordion type="multiple" className='mt-2 sm:mt-8 lg:mt-16'>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            <span>What Makes SuperHR Stand Out in Recruiting?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
            <AccordionContent className="accordion-content">SuperHR is more than just a recruiting CRM; it&apos;s a platform designed to empower recruiters. Our aim is to enhance productivity, open new avenues for income, and accelerate career growth for every recruitment professional.</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="accordion-trigger">
            <span>Can I Start Using SuperHR for Free?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
          <AccordionContent className="accordion-content">Absolutely! SuperHR is currently free during our beta phase. While enjoying our core features, stay tuned for premium upgrades that will bring even more value to your recruiting efforts in the future.</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="accordion-trigger">
            <span>How Can I Gain Access to SuperHR?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
          <AccordionContent className="accordion-content">Gaining access is easy! Simply fill out our <a href="https://docs.google.com/forms/d/1gmQf3Jbx6NbkwCxVzDbdqcVATJ0UrGI6ZFbeMYm1p-8" target="_blank" rel="noopener noreferrer">access request form</a>, and a member of our team will contact you to guide you through the onboarding process.</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="accordion-trigger">
            <span>Is There a Community for SuperHR Recruiters?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
            <AccordionContent className="accordion-content">Yes, indeed! Join our vibrant community of over 20 diverse recruiting professionals. It&apos;s a fantastic way to connect, share insights, and grow. Request your access <a href="https://docs.google.com/forms/d/1gmQf3Jbx6NbkwCxVzDbdqcVATJ0UrGI6ZFbeMYm1p-8" target="_blank" rel="noopener noreferrer">here</a> and dive into an exciting network!</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="accordion-trigger">
            <span>Can I Use My Personal Email to Register with SuperHR?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
          <AccordionContent className="accordion-content">Absolutely! Unlike other ATS/CRM platforms, SuperHR welcomes the use of personal email IDs. This flexibility is especially beneficial for freelance recruiters.</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="accordion-trigger">
            <span>What Integrations Does SuperHR Offer?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
          <AccordionContent className="accordion-content">SuperHR seamlessly integrates with major platforms like LinkedIn, Naukri, and Instahyre, ensuring a smooth and efficient recruiting process.</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="accordion-trigger">
            <span>Is There a SuperHR Mobile App Available?</span>
            <ChevronDown size={20}/>
          </AccordionTrigger>
          <AccordionContent className="accordion-content">Currently, our mobile app is available for Android users, and we&apos;re excited to announce that the iOS version will be launched soon. Stay tuned for more updates!</AccordionContent>
          <hr className="mx-auto" />
        </AccordionItem>

      </Accordion>
      </div>
    </div>
  )
}

export default FAQ
