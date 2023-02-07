import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import clang from '../assets/c.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import docker from '../assets/docker.png';
import neo4j from '../assets/neo4j.png';
import spring from '../assets/spring.png';
import sql from '../assets/sql.png';


const Experience = () => {

    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:java,
            title:'Java',
            style:'shadow-white-400'
        },
        {
            id:6,
            src:spring,
            title:'Spring boot',
            style:'shadow-green'
        },
        {
            id:7,
            src:clang,
            title:'C',
            style:'shadow-blue-400'
        },
        {
            id:8,
            src:python,
            title:'Python',
            style:'shadow-blue-400'
        },
        {
            id:9,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
        },
        {
            id:10,
            src:docker,
            title:'Docker',
            style:'shadow-gray-400'
        },
        {
            id:11,
            src:neo4j,
            title:'neo4j',
            style:'shadow-white-400'
        },
        
        {
            id:12,
            src:sql,
            title:'SQL',
            style:'shadow-blue-400'
        },
       
    ]
  return (
    <div name="experience" className="bg-gradient-to-b
    from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline">Experience</p>
            <p className="py-6">These are the technology I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({id,src,title,style})=>(
                <div key={id} className="shadow-md hover:scale-105 duration-500
            py-2 rounded-lg">
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Experience
