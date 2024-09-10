import React from 'react';
import qns from "../assets/SVGs/questionMark.svg"
import  grid from "../assets/SVGs/grid.svg"
import  plus from "../assets/SVGs/plus.svg"
import  right from "../assets/SVGs/left.svg"
import  left from "../assets/SVGs/right.svg"
const Gallery = () => {
    return (
        <div className='box h-[25vw] max-w-[720px] flex  max-h-[316px] transition-all ease-linear   w-full  p-[1.2vw]     rounded-[1.3vw]  
        '>


            <div className='   lg:w-10  w-7  '>
                <img src={qns} alt="question icon" className='relative lg:w-auto md:w-4 top-2' />
                <img src={grid} alt="question icon" className='relative top-[7vw] hover:brightness-150 lg:w-auto md:w-4 ' />

            </div>





            <div className=' w-full flex-col flex mr-[1.5vw]     '>


                <section className=' border-slate-300 p-1 mb-[2vw] flex  justify-between items-center   w-full h-[4.5vw] rounded-[1.3vw] '>
               <button className='Gallery-button poppins duration-100 active:scale-95 hover:scale-105'>
               Gallery
               </button>
             <div className='flex justify-center items-center gap-[2.5vw]'>
            
            <input className=' hidden' name='images' id='images' type="file" />
            <label className='add-button poppins hover:opacity-90 duration-100 active:scale-95 hover:scale-105  uppercase flex justify-center items-center gap-[0.3vw]' htmlFor="images"> 
                <img src={plus} alt="add Image" />
               Add Image
               </label>
               <div className='button-group flex gap-[1vw]'>


               <button className='arrow p-[1vw] rounded-full duration-100 active:scale-95 hover:scale-105'>
<img src={left} alt="left arrow" />
</button>
<button className='arrow p-[1vw] rounded-full duration-100 active:scale-95 hover:scale-105'>
<img src={right} alt="left arrow" />
</button>

               </div>
             </div>

                </section>
                
                <section className='  w-full h-full flex gap-[1vw]  overflow-y-scroll items-center justify-between  jakarta section '>
            <span className='bg-slate-600 max-w-[190px] w-full h-full max-h-[170px] rounded-3xl '>

            </span>
            <span className='bg-slate-600 max-w-[190px] w-full h-full max-h-[170px] rounded-3xl '>

</span>
<span className='bg-slate-600 max-w-[190px] max-h-[170px] w-full h-full rounded-3xl '>

</span>
                </section>

            </div>



        </div>
    );
};

export default Gallery;