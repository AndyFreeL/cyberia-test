import React, {FC} from 'react';
import styles from '../styles/Container.module.scss'

const MainContainer :FC = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default MainContainer;