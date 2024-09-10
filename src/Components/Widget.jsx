import React, { useState } from 'react';
import qns from "../assets/SVGs/questionMark.svg"
import  grid from "../assets/SVGs/grid.svg"
const Widget = () => {

const [activeTab,setActiveTab] = useState('about')



    return (
        <div className='box h-[25vw] max-w-[720px] flex  max-h-[316px]  w-full  p-[1.2vw]     rounded-[1.3vw]  
        '>


            <div className='   lg:w-10  w-7  '>
                <img src={qns} alt="question icon" className='relative lg:w-auto md:w-4 top-2' />
                <img src={grid} alt="question icon" className='relative top-[7vw] hover:brightness-150 lg:w-auto md:w-4 ' />

            </div>





            <div className=' w-full flex-col flex mr-[1.5vw]    '>


                <section className=' border-slate-300 p-1 mb-[2vw] text-[1.1vw]  w-full h-[4.5vw] tab-bar rounded-[1.3vw] '>
                <div className=" grid grid-cols-3 w-full h-full capitalize rounded-[1vw]">

                  <span onClick={()=>{setActiveTab("about")}} className={` ${activeTab ==="about" && "tabs"} cursor-pointer rounded-[1vw] w-full h-full   flex justify-center items-center text-[#A3ADB2] poppins`}>
                  About Me
                  </span>
                  <span onClick={()=>{setActiveTab("experiences")}} className={` ${activeTab ==="experiences" && "tabs"} cursor-pointer rounded-[1vw] w-full h-full   flex justify-center items-center text-[#A3ADB2] poppins`}>
                  Experiences
                  </span>
                  <span onClick={()=>{setActiveTab("recommended")}}  className={` ${activeTab ==="recommended" && "tabs"} cursor-pointer rounded-[1vw] w-full h-full   flex justify-center items-center text-[#A3ADB2] poppins`}>
                  recommended
                  </span>
  
  </div>
                </section>
                
                <section className='  w-full h-full overflow-y-scroll scroll-bar jakarta section'>
                {
            activeTab ==="about" && <section>
              <p className='mb-[1.5vw]'>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
              </p>

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...

            </section>
          }
          {
            activeTab ==="experiences" && <section>
                 <p className='mb-[1.5vw]'>
                 I have over 8 years of experience in the sales industry, with a focus on tech solutions. Before joining Salesforce, I worked at TechCorp where I led a team of 10 sales representatives and achieved a 20% increase in sales within my first year.
                 </p>
               At Salesforce, I've successfully managed several high-profile accounts, helping clients streamline their operations and improve ROI by up to 30%. I'm passionate about understanding client needs and delivering tailored solutions that drive business growth.

            </section>
          }
          {
            activeTab ==="recommended" && <section>
                 <p className='mb-[1.5vw]'> If you're looking to maximize your Salesforce experience, I highly recommend attending our quarterly webinars and utilizing our support resources.</p>
               If you're looking to maximize your Salesforce experience, I highly recommend attending our quarterly webinars and utilizing our support resources. Clients have found our knowledge base and community forums incredibly helpful for resolving issues quickly. For a more hands-on approach, consider enrolling in our Salesforce certification programs to deepen your expertise and stay ahead of the curve. Our clients often find that continuous learning and staying engaged with the latest Salesforce updates are key to getting the most value out of the platform.

            </section>
          }
            
                </section>

            </div>



        </div>
    );
};

export default Widget;