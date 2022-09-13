import React,{useState,useEffect,useRef} from 'react'

//UseRef Hooks
//return the current object
const Refer=()=>{
    
    const [Data,setData]=useState("");
    
    const Count = useRef(10);
   
     useEffect(() => {
      Count.current=Count.current+1;
      });
    const inputele=useRef("");
    const changestyle=()=>{
        inputele.current.style.backgroundColor="aqua";
        inputele.current.style.color="black";
        inputele.current.style.height="40px";
        inputele.current.focus();
        console.log(inputele);   
    }
return(
    <>
    <h1>Useref hooks:</h1>
    <p>It create a mutable variable which will not  re-render the components and is used access dom elements directly</p>
    <input
    ref={inputele} 
    type="text"
    value={Data}
    onChange={(e)=>setData(e.target.value)}
     />
     <br />
      <p>The number of times render :{Count.current}</p> 
     <button onClick={changestyle} className='btn'>Submit</button>
    

    </>
)
}
export default Refer;
