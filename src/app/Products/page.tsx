import React from 'react'
import Image from 'next/image'
import cont from '../../../public/Frame 143.png'
import cont1 from "../../../public/Photo.png";
import cont2 from "../../../public/Photo (1).png";
import cont3 from "../../../public/Photo (2).png";
import cont4 from "../../../public/Photo (3).png";
import cont5 from "../../../public/Parent.png";
import cont6 from "../../../public/Parent (2).png";
import cont7 from "../../../public/Photo (5).png";
import cont8 from "../../../public/Photo (6).png";
import cont9 from "../../../public/Photo (7).png";
import cont10 from "../../../public/Photo (8).png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function page() {
  return (
    
    <div>
        <Navbar/>
        <div>
        <Image
            src={cont}
            alt="hero image"
            className=" px-4 w-full h-auto pt-2 pb-7"
          />
        </div>
              <div className="  px-2 grid grid-cols-2 sm:grid-cols-4 pt-4 ">
        
        <div>
         
          <Image
            src={cont1}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Dandy Chair <br />250</p>
        </div>
        
        <div>
          
          <Image
            src={cont2}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">Rustic Vase Set   <br />155</p>
        </div>
        <div>
          
          <Image
            src={cont3}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Silk Vase <br />125</p>
        </div>
        <div>
          
          <Image
            src={cont4}
            alt="hero image"
            className="px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Lucky Lamp <br />399</p>
        </div>
        
      </div>
      {/************** */}
      <div className="  px-2 grid grid-cols-2 sm:grid-cols-4 pt-4 ">
        
        <div>
         
          <Image
            src={cont5}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Dandy Chair <br />250</p>
        </div>
        
        <div>
          
          <Image
            src={cont6}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">Rustic Vase Set   <br />155</p>
        </div>
        <div>
          
          <Image
            src={cont7}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Silk Vase <br />125</p>
        </div>
        <div>
          
          <Image
            src={cont8}
            alt="hero image"
            className="px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Lucky Lamp <br />399</p>
        </div>
        
      </div>
      {/********************** */}
      <div className="  px-2 grid grid-cols-2 sm:grid-cols-4 pt-4 ">
        
        <div>
         
          <Image
            src={cont9}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Dandy Chair <br />250</p>
        </div>
        
        <div>
          
          <Image
            src={cont10}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">Rustic Vase Set   <br />155</p>
        </div>
        <div>
          
          <Image
            src={cont3}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Silk Vase <br />125</p>
        </div>
        <div>
          
          <Image
            src={cont4}
            alt="hero image"
            className="px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Lucky Lamp <br />399</p>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
