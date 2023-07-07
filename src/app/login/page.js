import Link from "next/link";

const Login = () =>{
    return(        
        <div>
            <h1>Login page</h1>
            <Link href="/">Back</Link>
        </div>
    )
}
export default Login;
export function generateMetadata() {
    return {
        title: "login page",
        description: "login page description"
    }
}