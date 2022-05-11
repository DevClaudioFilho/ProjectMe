import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { 
  SiReact,SiTypescript,SiStyledcomponents,SiNextdotjs,SiSass,SiJavascript,SiHtml5,SiCss3
} from "react-icons/si";

import {Title,CardsList,Card, Container} from './styles';

function Portifolio() {
  const [projects,setProject] = useState([])

  useEffect(() => {
    async function loadProjects(){
      const teste = await axios.get(`https://projectmecf.prismic.io/api/v2/documents/search?ref=Ylyb2RcAACkADWWu#format=json`);
      
      console.log(teste.data)
      const x = await teste.data.results;
      return setProject(x);
    }
    loadProjects();
  }, []);


  function findImg(name) {
    name=name.toLowerCase()
    if(name.includes("React".toLowerCase()))return <SiReact size={"20px"} key={name}/>
    if(name.includes("Next".toLowerCase()))return <SiNextdotjs size={"20px"} key={name}/>

    if(name.includes("Typescript".toLowerCase()))return <SiTypescript size={"20px"} key={name}/>
    if(name.includes("javascript".toLowerCase()))return <SiJavascript size={"20px"} key={name}/>

    if(name.includes("Styledcomponent".toLowerCase()))return <SiStyledcomponents size={"20px"} key={name}/>
    if(name.includes("sass".toLowerCase()))return <SiSass size={"20px"} key={name}/>

    if(name.includes("html".toLowerCase()))return <SiHtml5 size={"20px"} key={name}/>
    if(name.includes("css".toLowerCase()))return <SiCss3 size={"20px"} key={name}/>
  }
  return(
  <Container id='portifolio'>
      <Title>
        <h1>Portfolio</h1>
        <p>Come check some of my jobs and check yours all tech i used</p>
      </Title>
      {!projects.length && (
           <CardsList>
             <Card >
             </Card>
         </CardsList>
        )}
      <CardsList>
        {projects.map((project)=>(
          <Card BgImg={project.data.bgvideo.url} key={project.id} >
            <a href={project.data.projectlink.url} target="_blank"  rel="noreferrer">
                <div>
                  <h1>{project.data.title[0].text}</h1>
                  <p>{project.data.type[0].text}</p>
                  {
                 <span>
                    {project.data.techs.map((x)=> findImg(x.tech[0].text))}
                  </span> 
                  }
                </div>
            </a>
          </Card>
        ))}
      </CardsList>
    </Container>
  );
}

export default Portifolio;
