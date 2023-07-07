import Link from "next/link";

export default function StudentList  () {
    const data = [
        {
            name:'bhavika',
            id: '1'
        },
        {
            name:'tanu',
            id: '2'
        },
        {
            name:'manu',
            id: '3'
        },
        {
            name:'priya',
            id: '4'
        },
        {
            name:'tina',
            id: '5'
        },
        {
            name:'meena',
            id: '6'
        },
        {
            name:'sam',
            id: '7'
        },

    ]
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                {data?.length > 0 && 
                data?.map((item) => (
                    <li><Link href={`studentlist/${item.name}`}>{item.name}</Link></li>

                ))                
                }
            </ul>
        </div>
    )
}