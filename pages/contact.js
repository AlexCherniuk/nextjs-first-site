import Router from "next/router";

export default function Contact() {

    const linkClickHendler = () => {
        Router.push('/about');
    }

    return (
        <div>
            <h1>Contact page in Hooka place</h1>
            <button onClick={() => Router.push('/')}>return to main page</button>
            <button onClick={linkClickHendler}>return to about page</button> 
        </div>
    )
};