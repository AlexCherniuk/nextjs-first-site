import Link from 'next/link';

export default function Index() {
    return(<div>
        <h1>Index page</h1>
        <p><Link href="/about"><a>About</a></Link></p>
        <p><Link href="/contact"><a>Contact</a></Link></p>
    </div>
    )
};
