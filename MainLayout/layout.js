
import Link from 'next/link';
export default function MainLayout({ children }) {
    return (
        <>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/contact'}><a>Contact</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children} {/* this is all what will be inside <MainLayout > component , going like a props */}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: skyblue;
                }
                    nav a {
                        text-decoration: none;

                    }
                    main {
                        margin-top: 60px;
                        padding: 1rem;
                    }
            `}</style>
        </>
    )
};