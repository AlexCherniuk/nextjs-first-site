import Link from 'next/link';
import MainLayout from '../MainLayout/layout';
import Head from 'next/head'
import AdLayout from '../MainLayout/AdLayout';

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>NextJs Home page</title>
            </Head>

            <h1>Index page</h1>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/contact"><a>Contact</a></Link></p>
            <AdLayout/>
        </MainLayout>
    )
};
 