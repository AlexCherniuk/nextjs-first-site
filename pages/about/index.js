import Router from "next/router";
import Head from "next/head";
import MainLayout from '../../MainLayout/layout';
import AdLayout from "../../MainLayout/AdLayout";


export default function About() {
    const clickLinkHendler = () => {
        Router.push('/');
    }
    return (
            <MainLayout>
                <Head>
                    <meta charSet="utf-18" />
                    <meta name="description" content="index html " />
                    <meta name="" content="index html" />
                    <title>About NextJs page</title>
                </Head>
                <h1>About page</h1>
                <button onClick={clickLinkHendler}>Go to main page</button>
                <button onClick={() => { Router.push('/contact') }}>Go to contact page</button>
                <AdLayout/>
            </MainLayout>
            
    )
};