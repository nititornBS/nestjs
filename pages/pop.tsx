import { count } from "console"
import { type } from "os";
import { useEffect, useState } from "react"
import Image from "next/image";

const User = () => {
    type User = {
        name: { title: string; frist: string; last: string },
        location: { city: string; country: string },
        picture: { large: string }
    }


    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async () => {
            const res = await fetch("https://randomuser.me/api");
            const box = await res.json();

            

            const { name, location, picture } = box.results[0];
            setUser({ name, location, picture });
            console.log(name, location, picture)
        })()

    }, [])

    const showUser = () =>{
        
        // (user)?
        //         Object.keys((user as any).name).map((key, index) =>
        //             (<span>
        //                 { user?.name[key as keyof typeof user.name]}{``}
        //             </span> ))
        //         : <></>

        if (user){ 
            return Object.entries((user as any).name).map(([key, value]) => (
            <span>
                {value}{' '}
            </span>
        ))
    }
            }






    return (
        <>
             <div>
                <h1>{user?.name.title}</h1>
                {user?.name.frist}
                {user?.name.last}

            </div> 

            {showUser()}
            
            <Image src={user?.picture.large}
                width="100" height="100" />
        </>
    )
}
export default User;