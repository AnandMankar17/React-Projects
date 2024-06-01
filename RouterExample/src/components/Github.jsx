import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AnandMAnkar17')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))



    // },[])

return(
    <>
    <div><h1>Github followers: {data.followers}</h1>
    <img src={data.avatar_url} alt="git pic"  width={'200px'} height={'200px'}/></div>
    </>
)

}

 export const Loaderfun = async()=>{
    const responce = await fetch('https://api.github.com/users/AnandMAnkar17');
    return await responce.json();
}
