'use client'
import Link from "next/link";
import Script from "next/script";

export default function Page () {
    return(
        <div>
            <h1>get user geolocation</h1>
            <Link href="/">Go to home page </Link>
            <Script src="/location.js" onLoad={() =>{
                console.log("file loaded")
            }}/>
        </div>
    )
}