import {
  SiReact,
  SiTypescript,
  SiStyledcomponents,
  SiNextdotjs,
  SiSass,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

function findImg(name: string) {
  name = name.toLowerCase()
  if (name.includes('React'.toLowerCase()))
    return <SiReact size={'20px'} key={name} />
  if (name.includes('Next'.toLowerCase()))
    return <SiNextdotjs size={'20px'} key={name} />

  if (name.includes('Typescript'.toLowerCase()))
    return <SiTypescript size={'20px'} key={name} />
  if (name.includes('javascript'.toLowerCase()))
    return <SiJavascript size={'20px'} key={name} />

  if (name.includes('Styledcomponent'.toLowerCase()))
    return <SiStyledcomponents size={'20px'} key={name} />
  if (name.includes('sass'.toLowerCase()))
    return <SiSass size={'20px'} key={name} />

  if (name.includes('html'.toLowerCase()))
    return <SiHtml5 size={'20px'} key={name} />
  if (name.includes('css'.toLowerCase()))
    return <SiCss3 size={'20px'} key={name} />
}

async function getServices() {
  const relavidateTime = 7 * 24 * 60 * 60 // this line is in seconds
  const res = await fetch(
    `https://projectmecf.prismic.io/api/v2/documents/search?ref=ZHihjBAAACcAmQHx&src=apibrowser#format=json`,
    { next: { revalidate: relavidateTime } },
  )
  if (!res.ok) {
    console.log('Failed to fetch data')
    return
  }
  const services = await res.json()
  return services.results
}

export default async function ProjectPreview() {
  const projects = await getServices()
  return (
    <ul className="grid grid-cols-1 items-center gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: any) => (
        <li
          className="mx-auto h-56 w-72 rounded-lg bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat transition hover:bg-black hover:bg-opacity-20"
          style={{ backgroundImage: `url(${project.data.bgvideo.url})` }}
          key={project.id}
        >
          <a
            href={project.data.projectlink.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg text-white opacity-0 hover:bg-[rgba(0,0,0,0.60)] hover:opacity-100">
              <h1 className="text-3xl">{project.data.title[0].text}</h1>
              <p className="mt-1 text-base">{project.data.type[0].text}</p>
              {
                <span className="mt-2 flex gap-2">
                  {project.data.techs.map((x: any) => findImg(x.tech[0].text))}
                </span>
              }
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
