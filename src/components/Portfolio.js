import React from 'react';

import domain from '../assets/portfolio/domain.PNG';
import microservice from '../assets/portfolio/microservice.PNG';
import scalable from '../assets/portfolio/scalable.PNG';


const Portfolio = () => {

  const portfolios =[
   
    
    {
      id:1,
      src:microservice,
      href:'https://courses.cognitiveclass.ai/certificates/5fb459ea13424c71b5b33f81ec31545a',
    },
    {
      id:2,
      src:domain,
      href:'https://courses.cognitiveclass.ai/certificates/c88ae86a06b24ea3a51905e739ad834c',
    },
    {
      id:3,
      src:scalable,
      href:'https://courses.cognitiveclass.ai/certificates/f1f343be5b264d45b5168ea756afc1f4'
    },

    

  ]
  return (
    <div name="portfolio" 
    className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 
          border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works and skills right here</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0">
          {portfolios.map(({id,src,href})=>(
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <img src={src} alt="" 
          className="rounded-md duration-200 hover:scale-105" />
          <div className="flex items-center justify-center">
            {/* <button className="w-1/2 px-6 py-3 m-4 duration-200
            hover:scale-105">View</button> */}
            <li className="flex justify-between items-center">
              <a
              href={href}
              target='_blank'
              rel="noreferrer"
              >View</a>
            </li>
            
          </div>
          </div>
          ))}
          
        </div>
      </div> 
    </div>
  )
}

export default Portfolio
