import styles from '../styles/Button.module.scss'

const Error = () => {
    return (
<>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                    <img style={{paddingBottom:58}} src="/405.svg" alt=""/>
                    <span style={{paddingBottom:58}}>Страница не найдена</span>
                    <a href={'/projects'} className={styles.send__button}>Перейти на главную</a>
                </div>

</>
    )
}

export default Error;