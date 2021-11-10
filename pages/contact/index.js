
import Router from "next/router";
import Head from "next/head";
import MainLayout from '../../MainLayout/layout';
import AdLayout from "../../MainLayout/AdLayout";


export default function Contact() {

    const linkClickHendler = () => {
        Router.push('/about');
    }

    return (
        <MainLayout>
            <Head>
                <title>Contact page</title>
            </Head>
            <h1>Contact page in Hooka place</h1>
            <button onClick={() => Router.push('/')}>return to main page</button>
            <button onClick={linkClickHendler}>return to about page</button>
            <AdLayout/>
        </MainLayout>
    )
};