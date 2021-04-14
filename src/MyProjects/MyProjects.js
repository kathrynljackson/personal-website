import './MyProjects.scss'
import React from 'react';
import { Component } from 'react';
import myProjectsList from './MyProjectsList.js';


class MyProjects extends Component {
    constructor() {
        super()
        this.state = {myProjectsList};
    }
 
    render(){
        // console.log(this.state.myProjectsList)
        return(
            <main className ='project-main'>
                {this.state.myProjectsList.map((project, index) => {
                    return <article key={index} className='project-section'>
                    <h1 key={project.projectName} className='project-title'>{ project.projectName }</h1>
                    <section key={project.createdUsing}className='created-using'>{ project.createdUsing.map((skill, index) => {
                            return <a className='skill-list' key={index}> {skill} </a>
                        }) }
                    </section>
                    <section className='project-description' key={project.projectDescription}>{project.projectDescription}</section>
                    <a className='project-link' key={project.projectLink} href={project.projectLink}>View Project</a>
                    </article>
                })}
            </main>
        )
    }
}

export default MyProjects;