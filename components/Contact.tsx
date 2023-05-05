import React, {FC, useState} from 'react';
import MainContainer from "../layouts/MainContainer";
import styles from '../styles/Contact.module.scss'
import ConnectForm from "./ConnectForm";

const Contact: FC = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const files:any=[]


    const attachFiles=(e)=>{
        let afiles = [...e.target.files]
        afiles.forEach(file=>files.push(file))
        console.log(files)
    }

    const sendForm=()=>{
        const formData = new FormData()
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('message', message)
        formData.append('files', files)
        console.log(formData)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
    }



    return (
        <div className={styles.wrapper}>
        <MainContainer width={'100%'}>
            <div className={styles.contact}>
                <div className={styles.contact__text}>
                    <img className={styles.contact__text_image} src="/Contact.svg" alt="#"/>
                    <span className={styles.contact__text_title}>Расскажите<br/>о вашем проекте</span>
                    <span className={styles.contact__text_description}>
                       Здесь можно расписать какую именно мы хотим получить информацию от заказчика. (Что нам поможет лучше понять его запрос). Или разместить несколько оснонвых вопросов, составить мини бриф.
                    </span>
                </div>
                {/*<form id='form' className={`${styles.contact__form} ${styles.form} `}>*/}
                {/*    <div className={styles.form__input}>*/}
                {/*        <input className={`${styles.form__control} ${email && styles.active} `} type='email'*/}
                {/*               name='email'id='email' autoComplete='on' value={email}*/}
                {/*               onChange={e => setEmail(e.target.value)}  required/>*/}
                {/*        <label className={styles.form__label}>Email</label>*/}
                {/*        <label className={styles.form__error}></label>*/}
                {/*    </div>*/}
                {/*    <div className={styles.form__input}>*/}
                {/*        <input className={`${styles.form__control} ${phone && styles.active} `} type='tel'*/}
                {/*               name='phone' id='phone' autoComplete='on' value={phone}*/}
                {/*               onChange={e => setPhone(e.target.value)}/>*/}
                {/*        <label className={styles.form__label}>Телефон</label>*/}
                {/*        <label className={styles.form__error}></label>*/}
                {/*    </div>*/}
                {/*    <div className={styles.textarea}>*/}
                {/*        <textarea className={`${styles.form__textarea_control} ${message && styles.active} `}*/}
                {/*                  name="message" id="message" cols="30" rows="10"*/}
                {/*                  value={message} onChange={e => setMessage(e.target.value)}>*/}
                {/*        </textarea>*/}
                {/*        <label className={styles.form__label}>Сообщение</label>*/}
                {/*        <div className={styles.form__files}>*/}
                {/*            <div className={styles.form__afile}>*/}
                {/*                <span>name</span>*/}
                {/*                <span>size</span>*/}
                {/*                <div>del</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <label className={styles.form__label_img} htmlFor='file'>*/}
                {/*            <img className={styles.form__img} src="/attach.svg" alt="attach"/>*/}
                {/*        </label>*/}
                {/*        <input type='file' id='file' className={styles.form__file} multiple*/}
                {/*        onChange={(e)=>attachFiles(e)}/>*/}
                {/*    </div>*/}
                {/*    <label className={styles.form__error}></label>*/}
                {/*    <div className={styles.form__submission}>*/}
                {/*        <span onClick={()=>sendForm()} className={`${styles.form__button} ${styles.send__button}`}>Отправить</span>*/}
                {/*        <p className={styles.form__description}>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>*/}
                {/*    </div>*/}
                {/*    <div></div>*/}
                {/*</form>*/}
<ConnectForm/>
            </div>
        </MainContainer>
        </div>
    );
};

export default Contact;