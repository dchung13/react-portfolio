import React from 'react';

function About() {
    return (
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="max-h-96 md:h-screen">
        <img className="w-screen h-screen object-cover object-top" src="./images/selfpicture1.jpg" alt="self"/>
      </div>
      <div className="flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-3xl uppercase">David Chung</h1>
          <p className="font-semibold mb-5">Web Developer</p>
          <p>I am an aspiring web developer, transitioning from the field of Applied Behavior Analysis, where I worked with people with autism. Due to working with that community, I have developed patience and am able to work with groups of people well. I have also had experiences leading groups of individuals, being a liaison between clients and employees, and mediating disagreements. When I am part of a team, I work hard to ensure that the environment is conducive to productivity and that everyone is able to work in an environment that is beneficial to them.</p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default About;