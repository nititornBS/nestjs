
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  console.count("Hello world")

  const [mesg, setMesg] = useState('Hello Bro!');


  useEffect(() => {
    setInterval( () => setCount(prev => prev + 1), 1000);
    document.title = "count" + count;
    console.count("useEffect");
  }, []);


  const [person, setPerson] = useState({ name: "john" })

  // useEffect(()=>{
  //   console.count("person");
  // }),[person.name];

  const updateName = () => {
    setPerson({ name: mesg });
  }


  // useEffect(()=>{
  // setInterval(setCount,1000);
  // })


  return (
    <>
      Hello   {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <input type="text" onChange={(e) => setMesg(e.target.value)} />
      {/* <button onClick={()=>setPerson(()=>{{mesg}})}>copy</button> */}

      <button onClick={updateName}>copy</button>
      <br />
      {/* {mesg} */}

      {person.name}
    </>
  )
} 
