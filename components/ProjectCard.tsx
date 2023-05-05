import React, {FC} from 'react';
import styles from '../styles/ProjectCard.module.scss'

interface FileUploadProps {
    title: string,
    slug: string,
    image: string,
    description: string
}

const ProjectCard: FC<FileUploadProps> = ({title, slug, image, description}) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__background} src={image} alt='#'/>
            <a href="#" className={styles.card__item}>
                <svg fill='#fff' className={styles.card__icon} width="50" height="50" viewBox="0 0 50 50"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="10.9375" rx="1" transform="matrix(1 0 0 -1 0 50.001)"></rect>
                    <rect width="28.125" height="10.9375" rx="1" transform="matrix(1 0 0 -1 21.875 28.126)"></rect>
                    <rect width="50" height="10.9375" rx="1" transform="matrix(0 1 1 0 0 0)"></rect>
                    <rect width="28.125" height="10.9375" rx="1" transform="matrix(0 1 1 0 21.875 0)"></rect>
                </svg>
                <span className={styles.card__title}>{title}</span>
                <span className={styles.card__description}>{description}</span>
            </a>
        </div>
    );
};

export default ProjectCard;