import './MyProjects.css'
import React from 'react';
import { Component } from 'react';
import myProjectsList from './MyProjectsList.js';


class MyProjects extends Component {
    constructor() {
        super()
        this.state = {myProjectsList};
    }
 
    render(){
        console.log(this.state.myProjectsList)
        return(
            <main className = 'project-main'>
                {this.state.myProjectsList.map((project, index) => {
                    return <section key={index} className='project-section'>
                    <h1 key={project.projectName} className='project-title'>{ project.projectName }</h1>
                    <p key={project.createdUsing}className='created-using'>{ project.createdUsing }</p>
                    </section>
                })}
            </main>
        )
    }
}

export default MyProjects;