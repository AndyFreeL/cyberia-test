import React, {FC, useEffect, useState} from 'react';
import styles from './../styles/Header.module.scss'
import Logo from "./Logo";

const Header: FC = () => {
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)

    const controlHeader = () => {
        if (window.scrollY > 30) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlHeader)
        return () => {
            window.removeEventListener('scroll', controlHeader)
        }
    }, [])


    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = open ? "hidden" : "auto";
        }
    }, [open]);



    return (
        <div className={styles.container}>
            <div className={`${styles.header} ${show && styles.hidden} ${open && styles.open}`}>
                {!open && <Logo/>}
                <div className={styles.menu}>
                    <ul className={styles.menu__links}>
                        <li><a href={"/home"} className={styles.menu__link}>Главная</a></li>
                        <li><a href={"/about"} className={styles.menu__link}>О нас</a></li>
                        <li><a href={"/services"} className={styles.menu__link}>Услуги</a></li>
                        <li><a href={"/projects"} className={styles.menu__link}>Проекты</a></li>
                        <li><a href={"/blog"} className={styles.menu__link}>Блог</a></li>
                        <li><a href={"/contacts"} className={styles.menu__link}>Контакты</a></li>
                        <li>
                            <div className={styles.menu__contacts}>
                                <a href="/contacts">Контакты:</a>
                                <a>+7 499 679 45 79</a>
                                <a>hello@cyberia.ru</a>
                                <a>Аносова 3Б, оф. 1</a>
                            </div>
                        </li>
                    </ul>

                </div>
                <div onClick={() => setOpen(!open)} className={`${styles.burger__container} ${open && styles.open}`}>
                    <div className={styles.burger__button}></div>
                </div>
            </div>
        </div>

    );
};

export default Header;