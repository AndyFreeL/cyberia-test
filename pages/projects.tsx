import React, {FC} from 'react';
import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";
import ProjectsItems from "../components/ProjectsItems";
import ConnectForm from "../components/ConnectForm";

const Projects :FC= () => {
    return (
        <MainLayout title={'Проекты'} breadcrumbs={'Проекты'}>
            <ProjectsItems/>
           <Contact/>
        </MainLayout>
    );
};

export default Projects;