import React, {FC} from 'react';
import styles from '../styles/Breadcrumbs.module.scss'
import MainContainer from "../layouts/MainContainer";

const Breadcrumbs: FC = (breadcrumbs) => {
    return (
        <MainContainer>
            <div className={styles.breadcrumbs}>
                <div className={styles.breadcrumbs__item}>
                    <a className={styles.breadcrumbs__link} href="/">Главная</a>
                    <span>{breadcrumbs}</span>
                </div>
                <h1 className={styles.breadcrumbs__title}>{breadcrumbs}</h1>
            </div>
        </MainContainer>
    );
};

export default Breadcrumbs;