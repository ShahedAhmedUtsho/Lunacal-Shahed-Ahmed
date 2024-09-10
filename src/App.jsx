import React from 'react';
import qns from "./assets/SVGs/questionMark.svg"
import  grid from "./assets/SVGs/grid.svg"
import Widget from './Components/Widget';
import Gallery from './Components/Gallery';
const App = () => {



  return (
    <div className='min-h-screen app w-full lg:max-w-[1524px] flex   md:px-6 lg:mx-auto   ' >
     
<div className='w-full  min-h-screen '></div>

       
       <div className="   w-full      min-h-screen    pt-14">

       <Widget />


        <div className='bar w-auto my-6 mx-[4vw] h-1 '>

       </div>
       <Gallery/>
      
 
     
       </div>
    </div>
  );
};

export default App;