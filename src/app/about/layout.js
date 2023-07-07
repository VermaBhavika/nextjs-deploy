'use client'
import { usePathname } from "next/navigation";

export default function Layout({children}) {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div>
            
            {pathName != "/about/new" ? 
                <h1>Common layout for about page</h1>
                : null}
            {
                children
            }
        </div>
    )
}