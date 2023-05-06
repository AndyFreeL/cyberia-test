import React, {FC} from 'react';
import styles from '../styles/Contact.module.scss'
import ConnectForm from "./ConnectForm";

const Contact: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.contact__text}>
                        <img className={styles.contact__text_image} src="/Contact.svg" alt="#"/>
                        <span className={styles.contact__text_title}>Расскажите<br/>о вашем проекте</span>
                        <span className={styles.contact__text_description}>
                       Здесь можно расписать какую именно мы хотим получить информацию от заказчика. (Что нам поможет лучше понять его запрос). Или разместить несколько оснонвых вопросов, составить мини бриф.
                    </span>
                    </div>
                    <ConnectForm/>
                </div>
            </div>
        </div>
    );
};

export default Contact;