import React from 'react';

function Project() {

    const projects = [
        {
            name: 'Pop Pursuit',
            image: './images/pop-pursuit-screenshot.png',
            description: 'Pop Pursuit is a population guessing game that gives the user a random city and allows the user to guess the population of that city.',
            link: 'https://eschindev.github.io/population-guesser/'
        },
        {
            name: 'MeloRE:',
            image: './images/meloRe.gif',
            description: 'MeloRE: is an application that links to a user\'s Spotify account and imports their playlists. The application then returns stats on the playlist and individual songs regarding their overall tone, valence, etc.',
            link: 'https://melore.herokuapp.com/'
        },
        {
            name: 'Employee Database Tracker',
            image: './images/application-screenshot.png',
            description: 'This application allows the user to view and manage the departments, roles, and employees in their company so that they can organize and plan their business.',
            link: 'placeholder'
        },
        {
            name: 'TBD',
            image: './images/placeholder.png',
            description: 'TBD',
            link: '#'
        },
        {
            
            name: 'TBD',
            image:'./images/placeholder.png',
            description: 'TBD',
            link: '#'
        },
        {
            
            name: 'TBD',
            image: './images/placeholder.png',
            description: 'TBD',
            link: '#'
        }
    ]

    return (
        <div className="projects" class="flex">
            {projects.map((project) => (
                <div className="py-4 flex flex-col justify-center items-center bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300">
                    <h1 className="text-2xl font-bold">{project.name}</h1>
                    <a href={project.link}><img src={project.image} alt={project.name} className="w-1/2"/></a>
                    <p className="text-center">{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Project;