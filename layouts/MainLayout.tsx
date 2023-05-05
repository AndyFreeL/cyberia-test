import React, {FC} from 'react';
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

const MainLayout: FC = ({children, title, breadcrumbs}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className='main-layout'>
                <Header/>
                <div className='breadcrumbs'></div>
                {
                    breadcrumbs ?
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                    : <></>
                }
                {children}
                <Footer/>
            </div>

            <style jsx>
                {`
                  .main-layout {
                    display: flex;
                    flex-direction: column;
                  }
                  .breadcrumbs{
                  //padding: 180px 0 0 0;
                  }
                `}
            </style>
        </>
    );
};

export default MainLayout;