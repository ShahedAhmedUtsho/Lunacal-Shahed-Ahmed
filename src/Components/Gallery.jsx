import React from 'react';
import qns from "../assets/SVGs/questionMark.svg"
import  grid from "../assets/SVGs/grid.svg"
const Gallery = () => {
    return (
        <div className='box h-[25vw] max-w-[720px] flex  max-h-[316px]  w-full  p-[1.2vw]     rounded-[1.3vw]  
        '>


            <div className='   lg:w-10  w-7  '>
                <img src={qns} alt="question icon" className='relative lg:w-auto md:w-4 top-2' />
                <img src={grid} alt="question icon" className='relative top-[7vw] hover:brightness-150 lg:w-auto md:w-4 ' />

            </div>





            <div className=' w-full flex-col flex mr-[1.5vw]    '>


                <section className=' border-slate-300 p-1 mb-[2vw]  w-full h-[4.5vw] rounded-[1.3vw] '>
               <button className='Gallery-button poppins'>
               Gallery
               </button>

                </section>
                
                <section className='  w-full h-full overflow-y-scroll jakarta section'>
            
                </section>

            </div>



        </div>
    );
};

export default Gallery;