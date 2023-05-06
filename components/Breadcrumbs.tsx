import React, {FC} from 'react';
import styles from '../styles/Breadcrumbs.module.scss'

interface BreadcrumbsProps{
    breadcrumbs:string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({breadcrumbs}) => {
    return (
        <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbs__item}>
                <a className={styles.breadcrumbs__link} href="/">Главная</a>
                <span>{breadcrumbs}</span>
            </div>
            <h1 className={styles.breadcrumbs__title}>{breadcrumbs}</h1>
        </div>
    );
};

export default Breadcrumbs;