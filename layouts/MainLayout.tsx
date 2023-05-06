import React, {FC, ReactComponentElement, ReactNode} from 'react';
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";


interface MainLayoutProps{
    title?:string,
    children:  ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className='main-layout'>
                <Header/>
                {children}
                <Footer/>
            </div>

            <style jsx>
                {`
                  .main-layout {
                    display: flex;
                    flex-direction: column;
                  }
                `}
            </style>
        </>
    );
};

export default MainLayout;