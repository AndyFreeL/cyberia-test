import React, {FC, useState} from 'react';
import styles from '../styles/Form.module.scss'
import * as Yup from "yup";
import {InputMask} from "primereact/inputmask";
import sizeFormat from "../utils/sizeFormat";
import { yupResolver } from '@hookform/resolvers/yup';
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useForm} from "react-hook-form";


// interface Values {
//     email: string;
//     phone: string;
//     message: string;
//     files: any[];
// }

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Value is invalid')
        .required('Value is required')
        .matches(/\S+@\S+\.\S+/g,'Enter correct email')
});

const formOptions = { resolver: yupResolver(validationSchema) };


const ConnectForm: FC = () => {
    const {feedback, formErrors} = useTypedSelector(state => state.form)
    const [files, setFiles] = useState([]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    // const [feedbackStatus, setFeedbackStatus]:boolean = useState(false);
    const {fetchForm} = useActions()

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const sendForm=()=>{
        console.log(123)
        const fd = new FormData()
        fd.append('email', email)
        fd.append('phone', phone)
        fd.append('message', message)
        fd.append('files', files)
        fetchForm(fd)



    }

    const initialValues: Values = {
        email: '',
        phone: '',
        message: '',
        files:[]
    };

    return (
        <form onSubmit={handleSubmit(sendForm)} className={`${styles.contact__form} ${styles.form}`}>
            <div className={styles.form__input}>
                <input
                    className={`${styles.form__control} ${errors.email ? styles.form__control_error : ''} ${email?styles.active:''}`}
                    type='text'
                    name='email'
                    id='email'
                    value={email}
                    {...register('email')}
                    onChange={e => setEmail(e.target.value)}/>
                <label
                    className={`${styles.form__label} ${errors.email ? styles.form__label_error : ''}`}>
                    Email
                </label>
                <div className={styles.form__error}>{errors.email?.message}</div>
            </div>
            <div className={styles.form__input}>
                <InputMask
                    autoClear={false}
                    mask="+7 (999) 999-999"
                    className={`${styles.form__control} ${phone && styles.active} `}
                    type='text'
                    name='phone' id='phone' autoComplete='on' value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label
                    className={`${styles.form__label} ${errors.phone ? styles.form__label_error : ''}`}>
                    Телефон
                </label>
                <div className={styles.form__error}>{formErrors?.phone ? formErrors.phone[1] : <div></div>}</div>
            </div>

            <div className={styles.textarea}>
                <textarea className={`${styles.form__textarea_control} ${message && styles.active} `}
                          name="message" id="message" cols="30" rows="10"
                          value={message} onChange={e => setMessage(e.target.value)}>
                        </textarea>
                <label className={styles.form__label}>Сообщение</label>
                <div className={styles.form__files}>
                    {files.length>0
                        ?
                        <div className={styles.form__afile}>
                        <span className={styles.form__afile_name}>{files[0].name}</span>
                        <span>({sizeFormat(files[0].size)})</span>
                        <span onClick={() => setFiles([])}
                              className={styles.form__afile_del}>
                                            </span>
                    </div>
                        :<div></div>
                    }

                </div>
                <label className={styles.form__label_img} htmlFor='file'>
                    <img className={styles.form__img} src="/attach.svg" alt="attach"/>
                </label>
                <input type='file' id='file' className={styles.form__file} multiple
                       onChange={(e) => setFiles(e.target.files)}/>

            </div>

            <div className={styles.form__submission}>
                <input id='submit' type="submit" style={{display:'none'}}/>
                <label htmlFor='submit' className={`${styles.form__button} ${styles.send__button}`}>Отправить</label>
                <p className={styles.form__description}>Нажимая “Отправить”, Вы даете согласие на обработку
                    персональных данных</p>
            </div>

            <div className={`${styles.form__feedback} ${(!formErrors && feedback) ?styles.form__feedback_success:''}`}>Ваша заявка успешно отправлена</div>
            <div className={`${styles.form__feedback} ${formErrors ? styles.form__feedback_error:''}`}>Не удалось отрпавить заявку, повторите отправку позднее</div>
        </form>
    );
};


export default ConnectForm;