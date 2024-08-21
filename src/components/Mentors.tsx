// import React from 'react'
// import MentorsCard from './MentorsCard'
// const Mentors = () => {
//   return (
//     <div className='flex flex-col items-center'>
//       <h1 className='text-4xl font-semibold bg-[#FFF7F7] w-full  text-center p-14'>You Are in <span className='font-bold text-[#EB4432]'> Great </span> Company! </h1>
//       <div className='my-12 sm:m-12 flex flex-row flex-wrap items-center justify-center '>
//         <MentorsCard imagesSrc='/girish_budhwani.jpeg' name='Girish Budhwani' occupation='Full Stack Engineer, Ex-Microsoft, IITian' /> 
//         <MentorsCard imagesSrc='/jai_brahmakshatriya.jpeg' name='Jai Brahmakshatriya' occupation='Backend Engineer, Amazon, NITian' /> 
//         <MentorsCard imagesSrc='/sumit_sharma.jpeg' name='Sumit Sharma' occupation='Senior Engineer, Google, IITian' /> 
//         <MentorsCard imagesSrc='/sharan_girdhani.jpeg' name='Sharan Girdhani' occupation='Engineering Manager, Ex-Yelp, USA' /> 
//         <MentorsCard imagesSrc='/pratesh_jhari.jpg' name='Pratesh Jhari' occupation='Data Scientist, JP Morgan, IIM, IIT' /> 
//       </div>
//     </div>
//   )
// }

// export default Mentors



import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import MentorsCard from './MentorsCard'
const Mentors = () => {
  useEffect(() => {
    // Code to access DOM elements and add event listeners
    const slidesContainer = document.querySelector(".slides-container") as HTMLDivElement;
    const slideWidth = (slidesContainer.querySelector(".slide") as HTMLDivElement).clientWidth;
    const prevButton = document.querySelector(".prev") as HTMLButtonElement;
    const nextButton = document.querySelector(".next") as HTMLButtonElement;
    console.log(slidesContainer, slideWidth, prevButton, nextButton);
    const handleNextClick = () => {
      slidesContainer.scrollLeft += slideWidth;
      console.log("clicked next buttton", slidesContainer.scrollLeft)
    };

    const handlePrevClick = () => {
      slidesContainer.scrollLeft -= slideWidth;
      console.log("clicked prev buttton", slidesContainer.scrollLeft)
    };

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    // Clean up event listeners when the component unmounts
    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold bg-[#FFF7F7] w-full  text-center p-14'>Meet the <span className='font-bold text-[#EB4432]'> Team </span> </h1>
      <div id="app" className="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">

        <div className="relative w-[300px] sm:w-[370px] lg:w-[1240px] lg:-left-36">
          <div className="slides-container h-auto flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth ">
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              {/* <Image className="w-full h-full object-cover" src="/girish_budhwani.jpeg" alt="mountain_image" width={300} height={300} /> */}
              <MentorsCard imagesSrc='/girish_budhwani.jpeg' name='Girish Budhwani' occupation='Co-founder, Ex-Microsoft, IIT' />
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              {/* <Image className="w-full h-full object-cover" src="/jai_brahmakshatriya.jpeg" alt="mountain_image" width={300} height={300} /> */}
              <MentorsCard imagesSrc='/manish_dipankar.jpeg' name='Manish Dipankar' occupation='Co-founder, Ex Palo Alto Networks, VIT' />
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/heena_budhwani.jpg' name='Heena Budhwani' occupation='Founding team, TA specialist, MBA' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/samrat_datta.jpeg' name='Samrat Datta' occupation='Business Consultant, Swiggy, IIM' />
              {/* <Image className="w-full h-full object-cover" src="/girish_budhwani.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/siddhant_tiwari.jpg' name='Siddhant Tiwari' occupation='Design Consultant, Zee, Ex-Uber' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/neet_dodhia.jpeg' name='Neet Dodhia' occupation='Product Consultant, Cashflo, GrowthX' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/shivansh_jaiswal.jpeg' name='Shivansh Jaiswal' occupation='Tech Intern, IIT Jodhpur' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/deepanshu_kewalramani.jpg' name='Deepanshu Kewalramani' occupation='Tech Intern, IIT Jodhpur' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>
            <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden w-[300px] md:w-[350px]">
              <MentorsCard imagesSrc='/animesh_singh.jpeg' name='Animesh Singh' occupation='Design Intern, IIT Jodhpur' />
              {/* <Image className="w-full h-full object-cover" src="/sumit_sharma.jpeg" alt="mountain_image" width={300} height={300} /> */}
            </div>

          </div>

          <div className="absolute top-0 -left-4 h-full items-center flex">
            <button role="button" className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            </button>
          </div>
          <div className="absolute top-0 -right-4 h-full items-center flex">
            <button role="button" className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentors
