import { GithubIcon, Layers3Icon, RocketIcon } from "lucide-react"
import Modal from "./general/Modal"
import { ImageVisualizer } from "./ImageVisualizer"

export const ProjectItem = ({ project,closeHandler }) => {

  return (
    <Modal closeHandler={closeHandler}>
      <div className="flex flex-wrap  md:grid md:grid-cols-[70fr_30fr]  h-[100%] md:p-3 gap-10">
        <div className="text-start">
          <h2 className="text-start mt-2 text-3xl md:text-4xl">{project.title}</h2>
          {
            project.content.map((content)=><p className="mt-2 sm:mt-5">{content}</p>)
          }

          <div className="flex gap-2 items-center mt-2">
            <Layers3Icon className="text-black w-8 h-8" />
            <ul className="flex gap-2 mt-2">
              {project.techLanguage.
                map(element =>
                  <li className="text-light">{element}</li>)}
            </ul>
          </div>

          <div className="mt-2 flex gap-2 mt-4 md:pb-2">
            <a href={project.link[0]} className="text-light flex gap-2 items-center p-2 bg-blue-200 rounded-[16px]"><RocketIcon className="w-5 h-5" />Live</a>
            <a href={project.link[1]} className="text-light flex gap-2 items-center p-2 bg-blue-200 rounded-[16px]"><GithubIcon className="w-5 h-5" />{project.link.length===3?'FrontEnd':'Visit'}</a>
           {project.link.length===3 && (<a href={project.link[2]} className="text-light flex gap-2 items-center p-2 bg-blue-200 rounded-[16px]"><GithubIcon className="w-5 h-5" />BackEnd</a>)} 
          </div>
        </div>
        <ImageVisualizer images={project.image} />
      </div>
    </Modal>
  )
}