export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'about Us',
    description: 'we are a social media company', 
};


export default async function About() {


    return(
        <main>
            <h1>About</h1>
            <p>we are a social media</p>
        </main>

    )
}