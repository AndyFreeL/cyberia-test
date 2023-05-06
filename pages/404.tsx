import styles from '../styles/404.module.scss'

const Error = () => {
    return (
<>

                <div className={styles.notfound}>
                    <img className={styles.notfound__img} src="/405.svg" alt=""/>
                    <h3 className={styles.notfound__title}>Страница не найдена</h3>
                    <a href={'/projects'} className={styles.send__button}>Перейти на главную</a>
                </div>

</>
    )
}

export default Error;