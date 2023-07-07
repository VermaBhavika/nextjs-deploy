'use client'
export default function Student({params}) {
    console.log(params)
    return (
        <div>
            <h1>Student details (dynamic routes example)</h1>
            <h1>Name: {params.student}</h1>
        </div>
    )
}