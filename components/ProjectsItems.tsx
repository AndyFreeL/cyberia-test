import React, {FC, useEffect, useState} from 'react';
import styles from '../styles/ProjectsItems.module.scss'
import ProjectCard from "./ProjectCard";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import Breadcrumbs from "./Breadcrumbs";


const ProjectsItems: FC = () => {
    const {filters} = useTypedSelector(state => state.filters)
    const {projects} = useTypedSelector(state => state.projects)
    const {fetchFilters, fetchProjects} = useActions()
    const [selectedFilter, setSelectedFilter] = useState(null)
    let filtredProjects = projects

    useEffect(() => {
        fetchFilters()
        fetchProjects()
    }, [selectedFilter])

    const choseFilter=(id)=>{
        if(!selectedFilter || selectedFilter!==id){
            setSelectedFilter(id)
        }else if(selectedFilter===id){
            setSelectedFilter(null)
        }
    }
    if(selectedFilter){
        filtredProjects=projects.filter(project=>project.categories.find(el=>el.id===selectedFilter))
    }


    return (
        <div className={styles.container}>
            <Breadcrumbs breadcrumbs='Проекты'/>
            <div className={styles.filter}>
                {filters.map(filter =>
                    <span key={filter.id} onClick={()=>choseFilter(filter.id)}
                          className={`${styles.filter__item} ${styles.filter__button}
                           ${selectedFilter===filter.id && styles.filter__checked}`}>
                        {filter.name}
                    </span>
                )
                }
            </div>
            <div className={styles.projects}>
                {
                    filtredProjects.map(project => <ProjectCard
                        image={project.image}
                        title={project.title}
                        slug={project.slug}
                        description={project.description}
                        key={project.id}/>)
                }

            </div>
        </div>
    );
};

export default ProjectsItems;