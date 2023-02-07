import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        I am currently a student at AUCA (Adventist University of Central Africa) almost in last semester, in major of Software engineering with grand distinction. I gained more experience during university courses’ projects and external resources in my studies.

        During my academic journey, I acquired knowledge of finding solutions to different problems even unfamiliar problems through doing research and commitment, which led me to always succeed and achieve my goals.

        I would describe myself as someone disciplined, courageous with enthusiasm to learn new things in short time, working in team and develop my ability to be more productive to achieve more. I would like to put these characteristics in use within my responsibility and offer my contribution with a commitment to the organization.

        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  )
}

export default About
