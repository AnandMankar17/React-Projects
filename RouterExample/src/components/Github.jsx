import { useEffect, useState } from "react";

export default function Github(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/AnandMAnkar17')
        .then((res)=>res.json())
        .then((data)=>setData(data))



    },[])

return(
    <>
    <div><h1>Github followers: {data.followers}</h1>
    <img src={data.avatar_url} alt="git pic"  width={'200px'} height={'200px'}/></div>
    </>
)

}
