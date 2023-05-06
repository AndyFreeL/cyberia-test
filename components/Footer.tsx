import React, {FC} from 'react';
import styles from '../styles/Footer.module.scss'
import Logo from "./Logo";

const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.footer__company}>
                    <div className={styles.footer__logo}><Logo/></div>
                    <div className={styles.footer__text}>Web and machine learning<p>developing company</p></div>
                </div>
                <div className={styles.footer__columns}>
                    <ul className={styles.footer__column}>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">+7 499 679 45
                            79</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link}
                                                               href="#">hello@cyberia.ru</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Аносова 3Б, оф.
                            1</a></li>
                    </ul>
                    <ul className={styles.footer__column}>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Главная</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Услуги</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Проекты</a></li>
                    </ul>
                    <ul className={styles.footer__column}>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Блог</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">О нас</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Команда</a></li>
                    </ul>
                </div>
                <div className={styles.footer__policy}>
                    2022, digital-агентство Cyberia
                    <p>Положение о защите персональных данных
                        Политика в отношении обработки
                        и защиты персональных данных
                    </p>
                    <p>Оферта оказания услуг</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;