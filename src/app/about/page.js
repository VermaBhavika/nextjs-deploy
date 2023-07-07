import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About page</h1>
            <Link href="/">back</Link><br  /><br/>
            <Link href="/about/new">go to new page</Link><br/><br/>
            <Link href="/about/new2">go to new 2 page</Link>
        </div>
    )
}

