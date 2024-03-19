import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'About',
 description: 'Sobre mi',
 keywords: ['anput page', 'joni', 'informacion', '...']

};

export default function AboutPage(){

    return (
        <span className="text-7xl">About page</span>
    )
}