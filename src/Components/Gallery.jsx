import React, { useEffect, useState } from 'react';
import qns from "../assets/SVGs/questionMark.svg";
import grid from "../assets/SVGs/grid.svg";
import plus from "../assets/SVGs/plus.svg";
import left from "../assets/SVGs/right.svg";
import right from "../assets/SVGs/left.svg";
import axios from 'axios';
import { ClockLoader } from 'react-spinners';



const Gallery = () => {
    const [error,setError] = useState("")
const [currentIndex,seTCurrentIndex] =useState(0) ; 
const [selectedFile, setSelectedFile] = useState(null);
const [uploading,setUploading] = useState(false);
const [images,setImages] = useState(JSON.parse(localStorage.getItem("images")) || [
      
    { img: "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/vruvtsmhw2rqcufr86zu" },
    { img: "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/yyajykbwo0h1xgzmr0jz" }, 
     { img: "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/tjbxwin4lsilrm8nakx3" },
   
])



const handleFileChenge = async(e)=>{
    const file = e.target.files[0]
    if(!file) return ;
    if (!file.type.startsWith('image/')) {
        setError('images only');
        setTimeout(()=>{
            setError("")
        },2000)
        return;
    } else {
        setError('');
    }
    if(file){
        setUploading(true) ; 
        const data = new FormData() ;
        data.append("file",file) ;
data.append("upload_preset","images") ;
data.append("cloud_name","dxpdy0jfz") ;

try {
    const res = await axios.post(`https://api.cloudinary.com/v1_1/dxpdy0jfz/image/upload`,data) ;
    const url = res?.data?.url ; 
const newCollection = [{img:url},...images]
   localStorage.setItem("images",JSON.stringify(newCollection)) ;
   setImages(newCollection);
   seTCurrentIndex(0)
    
} catch (error) {
    console.log(error)
    
}
finally{

    setUploading(false) ; 
   
}










    }
}



const totalItem = images.length ;

const handleNext = ()=>{
    
    seTCurrentIndex(prev => (prev+1) % totalItem)

}
const handlePrev = ()=>{
    seTCurrentIndex(prev => (prev-1+totalItem) % totalItem)
}


const visibleItems = [
    images[currentIndex % totalItem],
    images[(currentIndex + 1) % totalItem],
    images[(currentIndex + 2 ) % totalItem]
    
] ;
const tamporarry = [
   
    images[0],
    images[1],

]
   
  

    return (
        <div className='box h-[25vw] max-w-[720px]  flex max-h-[316px] transition-all ease-linear w-full p-[1.2vw] rounded-[1.3vw]'>
            <div className='lg:w-10 w-7  sidebar'>
                <img src={qns} alt="question icon" className='relative lg:w-auto md:w-4 top-2' />
                <img src={grid} alt="grid icon" className='relative top-[7vw] hover:brightness-150 lg:w-auto md:w-4' />
            </div>

            <div className='w-full flex-col flex mr-[1.5vw]'>
                <section className=' p-1 mb-[2vw] flex justify-between items-center w-full h-[4.5vw] rounded-[1.3vw]'>
                    <button className='Gallery-button poppins duration-100 active:scale-95 hover:scale-105'>
                        Gallery
                    </button>
                    <div className='flex justify-center items-center gap-[2.5vw]'>
                        <input className=' hidden' name='images' id='images' type="file" onChange={handleFileChenge} />
                        <label className={`add-button ${error && "border-[0.4px] border-red-500"}  poppins hover:opacity-90 duration-100 active:scale-95 hover:scale-105 uppercase flex justify-center items-center gap-[0.3vw]`} htmlFor="images">
                           
                            {
                                error? <span className='text-red-500 '>{error}
                                </span> : <> <img src={plus} alt="add Image" />Add Image</>
                            }
                           
                        </label>
                        <div className='button-group flex gap-[1vw]'>
                            <button onClick={handlePrev} className='arrow p-[1vw] rounded-full duration-100 active:scale-95 hover:scale-105'>
                                <img src={left} alt="left arrow" />
                            </button>
                            <button onClick={handleNext} className='arrow p-[1vw] rounded-full duration-100 active:scale-95 hover:scale-105'>
                                <img src={right} alt="right arrow" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className='w-full h-full relative  flex gap-[1vw]   overflow-hidden items-center justify-between jakarta section'>
               {
                uploading &&  <span className='bg-slate-800 flex justify-center items-center bg-[url("https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/z9sfkogq1q2pmjsn3del")] object-cover  bg-center max-w-[190px] w-full h-full max-h-[13vw] overflow-hidden rounded-[1.672vw]'>
                    <ClockLoader />
               
            </span>
               }
                    {
                        uploading && tamporarry?.map((item, index) => (
                            
                           
                            <span key={index} className='bg-slate-600 max-w-[190px] w-full h-full max-h-[13vw] overflow-hidden rounded-[1.672vw]'>
                                <img className='w-full h-full object-cover' src={item?.img} alt="" />
                            </span>
                        )) 
                        
                    }
                    { !uploading &&
                    visibleItems && visibleItems?.map((item, index) => (
                        <span key={index} className='bg-slate-600 max-w-[190px] w-full h-full max-h-[13vw] overflow-hidden rounded-[1.672vw]'>
                            <img className='w-full h-full object-cover' src={item?.img} alt="" />
                        </span>
                    ))
                    }

                </section>
            </div>
        </div>
    );
};

export default Gallery;
