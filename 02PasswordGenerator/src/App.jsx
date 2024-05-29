import { useState, useEffect, useCallback} from 'react'


function App() {
const [length, setLength] = useState(8);
const [charector, setCharector] = useState(false); 
const [number, setNumber] = useState(false);
let [password, setPassword] = useState('');


const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
  if (charector) str += "!@#$%^&*(){}[]?/<>"; 
  if (number) str +='0123456789';
  for(let i=1;i<=length; i++){
    const randomVariable = Math.floor(Math.random()*(str.length))
    pass += str[randomVariable];
  }
  setPassword(pass);
},[length,charector,number])


useEffect(()=>{passwordGenerator()},[length,charector,number]);
// useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className="container w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400">
      <h1 className='text-center text-white '>Password Generator</h1>
      <div className="1st flex justify-center">
        <input type="text" 
                className='text-black outline-none  py-1 px-3 rounded-l-lg' 
                placeholder='password' 
                value={password}
                readOnly/>
 
        <button className='outline-none bg-blue-600 text-white rounded-r-lg'>copy</button>
      </div>
      <div className="2nd flex justify-center align-center">
        <div>
        <input type="range"  value={length} onChange={(e)=>{setLength(e.target.value)}} />
        <label>length:{length}</label>
        </div>
        <div>
          <input type="checkbox" 
                  defaultChecked={charector}
                onChange={()=>setCharector((prev)=>!prev)}/>
          <label className='text-white' >charector</label>
        </div>
        <div>
        <input type="checkbox" 
              defaultChecked={number}
              onChange={()=>setNumber((prev)=>!prev)}/>
          <label className='text-white' >Numbers</label>
        </div>


      </div>
    </div>
    </>
  )
}

export default App
