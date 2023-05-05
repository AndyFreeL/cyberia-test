import MainLayout from "../layouts/MainLayout";


const Index=()=>{
    return(
        <MainLayout title={'Главная'}>
            <div style={{height:600, marginTop:170, display:'flex', justifyContent:'center', position:'relative', backgroundImage:'url(/empty.jpeg)', filter:'brightness(40%)'}} >
            </div>
            <div style={{position:'absolute',top:190, right:10}}>
                <div style={{color:'white', fontSize:24, zIndex:10}}>Перейдите к проектам, please!</div>
                <img style={{borderRadius:'25%'}} src="/cat.png" alt="#"/>
            </div>
        </MainLayout>
    )
}

export default Index;
