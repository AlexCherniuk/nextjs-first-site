import Router from "next/router";



export default function About() {
    const clickLinkHendler = () => {
        Router.push('/');
    }
    return (
        <div>
            <h1>About page</h1>
            <button onClick={clickLinkHendler}>Go to main page</button>
            <button onClick={()=> {Router.push('/contact')}}>Go to contact page</button>
        </div>


    )
};