import React, { Component } from "react";
import Card from "../components/card";
import projects from "../project.json";
import Wrapper from "../components/Wrapper";

//let card = [];

class Work extends Component {
  render() {
    return (
      <div class="row">
        
          
          {projects.map(project => (
            <Card
              key={project.id}
              name={project.name}
              image={project.image}
              repo={project.repo}
              url={project.url}
            />
          ))}
          {/* {card} */}
        
      </div>
    );
  }
}


export default Work;
