import React from 'react'
import FeatureWithDescription from './FeatureWithDescription'
import Image from 'next/image'

const FeaturesWithDescriptionComponent = () => {
    return (
        <div className='flex md:flex-col bg-[#fafafa] '>
            <div>
                <FeatureWithDescription imageOnLeft={false} imageSrc='/FeatureSuperCalling.png' 
                    heading='Web to mobile calling' 
                    subheading='Call candidates, with ease' 
                    description='Your talent pool is now only 1-click away from a phone call. Experience seamless integration across web and mobile apps with one account.' />
                
                {/* <FeatureWithDescription imageOnLeft={true} imageSrc='/FeaturePhoneScreenViewing.png' heading='Phone screen viewing' subheading='Tap into job boards and social media for your ideal pipeline' description="Build pools of qualified candidates with our comprehensive CRM, integrate with phone's contact app and ATS for streamlined candidate management and personalised note taking."/> */}
                
                <FeatureWithDescription imageOnLeft={true} imageSrc='/FeatureChromeExtension.png' 
                    heading='Chrome extension' 
                    subheading='Spot and add, instantly' 
                    description="You spot talent, and we get their data. Auto-add talent details from LinkedIn, Naukri, and Instahyre." />
                
                <FeatureWithDescription imageOnLeft={false} imageSrc='/FeatureMobileCRM.png' 
                    heading='Mobile CRM' 
                    subheading='No more AFK, ever' 
                    description="Update details, review profiles, and do a lot more on our mobile app, even when you are away from the keyboard." />
                
                <FeatureWithDescription imageOnLeft={true} imageSrc='/FeatureResumeImport.png' 
                    heading='Resume parser' 
                    subheading='Uncover insights, faster' 
                    description="Let AI do the heavy lifting. Our resume parser intelligently extracts key insights from resumes, making candidate evaluation a breeze." />
                
                <FeatureWithDescription imageOnLeft={false} imageSrc='/FeatureCSVImport.png' 
                    heading='CSV import' 
                    subheading='Transfer data, seamlessly' 
                    description="Quickly import candidate data from Google Sheets or Excel and streamline your recruitment database management." />
                
                
                <FeatureWithDescription imageOnLeft={true} imageSrc='/FeatureFilters.png' 
                    heading='Advanced filters' 
                    subheading='Find the right fit, quickly' 
                    description="Our advanced filters help you zero in on the right candidates, enhancing precision in your recruitment process" />
            </div>
            
        </div>
    )
}

export default FeaturesWithDescriptionComponent
