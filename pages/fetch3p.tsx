import { count } from "console";
import { useEffect, useState } from "react";

const User = () =>{
    type User = {
        name: {title: string;county:string},
        location : {city:string;country:string},
        picture : {large:string}
    }

    const [users,setUsers] = useState<User[]>();
    // const [showusers,setShowsers] = useState();

    useEffect(()=>{
        (async()=>{
            const res = await fetch("https://randomuser.me/api/?results=3")
            const user = await res.json();
            setUsers(user.results);
            // const { name, location, picture } = user.results[0];
            // setUsers({ name, location, picture });

            // console.log(name, location, picture)
        })()
    },[])
    // console.log(users);
    
    const show = users?.map((item,index)=>{
        // console.log(item.name)
        // const [name, location, picture] = users[0];
        const [name, location, picture] = [item.name,item.location,item.picture];
        // console.log(item.name);
        console.log({name,location,picture});
    })

    

    // const {name, location,picture} = users.results[0];

    return (
        <>
        </>
    )

}
export default User;