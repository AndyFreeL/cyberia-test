import MainContainer from "../layouts/MainContainer";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";

const Error = () => {
    return (
<>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                    <img style={{paddingBottom:58}} src="/405.svg" alt=""/>
                    <span style={{paddingBottom:58}}>Страница не найдена</span>
                    <a href={'/projects'} className='send__button'>Перейти на главную</a>
                </div>

</>
    )
}

export default Error;