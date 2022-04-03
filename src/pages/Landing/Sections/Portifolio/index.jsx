import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';



import { 
  SiReact,SiTypescript,SiStyledcomponents,SiNextdotjs,SiSass,SiJavascript
} from "react-icons/si";
import {Title,CardsList,Card, Container} from './styles';
function Portifolio() {
  const [projects,setProject] = useState([])

  useEffect(() => {
    async function loadProjects() {
      const getProject = await require('../../../../service/fakedb.json');

      setProject(getProject.data.project);

      console.log(projects);
    }
    loadProjects();
  },[]);

  function findImg(name) {
    name=name.toLowerCase()
    if(name.includes("React".toLowerCase()))return <SiReact size={"20px"}/>
    if(name.includes("Next".toLowerCase()))return <SiNextdotjs size={"20px"}/>

    if(name.includes("Typescript".toLowerCase()))return <SiTypescript size={"20px"}/>
    if(name.includes("javascript".toLowerCase()))return <SiJavascript size={"20px"}/>

    if(name.includes("Styledcomponent".toLowerCase()))return <SiStyledcomponents size={"20px"}/>
    if(name.includes("sass".toLowerCase()))return <SiSass size={"20px"}/>
  }

  return(
  <Container>
      <Title>
        <h1>Portifolio</h1>
        <p>This is my steps to my destiny, my way to demostrate things alsom...</p>
      </Title>
      <CardsList>
        {projects.map((project)=>(
          <Card key={project.id} BgImg={project.gif}>
            <Link to={""}>
                <div id='teste'>
                  <h1>{project.title}</h1>
                  <p>{project.type}</p>
                  <span>
                    {project.techs.map((tech)=> findImg(tech))}
                  </span>
                </div>
            </Link>
          </Card>
        ))}
      </CardsList>
    </Container>
  );
}

export default Portifolio;