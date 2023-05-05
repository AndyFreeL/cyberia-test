import React, {FC} from 'react';
import styles from '../styles/Container.module.scss'

const MainContainer :FC = ({children}:any) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default MainContainer;