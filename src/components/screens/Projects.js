import React from 'react'
import '../styles/Projects.css'
import {crunch, dyceanddyne, earthling, khetibadi, foco, chaptersqueue, mrc, fyp, NetflixClone, foodOrderingApp} from '../projectsimports';
import flutter from '../../assets/skills/frameworks/flutter.svg'
import firebase from '../../assets/skills/others/firebase.svg'
import flask from '../../assets/skills/frameworks/flask.svg'
import nodejs from '../../assets/skills/frameworks/nodejs.svg'
import react from '../../assets/skills/frameworks/react.svg'
import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import python from '../../assets/skills/programminglanguages/python.svg'
import ProjectCard from '../utils/ProjectCard';
import redux from '../../assets/skills/frameworks/redux.svg'
import pytorch from '../../assets/skills/machinelearning/pytorch.png'
import tailwind from '../../assets/skills/others/tailwind.svg'
import tmdb from '../../assets/skills/others/tmdb.svg'

export default function Projects() {
    return (
        <div className='pageWrapper'>
            <h1 className='projectsPageTitle'>Some things I've built</h1>
                    <div className='projectsWrapper'>
            <ProjectCard image = {NetflixClone} projectTitle= "Netflix Clone" techstack ={[react, firebase, tailwind, tmdb]}  github ="netflix-clone" summary ="A react Project. Netflix Clone using tMDB api. It has a fully functional login page 
using Google's firebase."></ProjectCard>
            <ProjectCard image = {foodOrderingApp} projectTitle= "Food Ordering App" techstack ={[react, tailwind]} deployed ="https://github.com/Whitewolf1237/React-Practice" github ="React-Practice" summary ="A react project (food Ordering app) using swiggy api.The web application fetches the 
data from swiggy Api. Done just for practice."></ProjectCard>
        </div>
    
        </div>
)
}
