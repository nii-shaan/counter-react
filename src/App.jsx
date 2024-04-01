import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  const [msg, setMsg] = useState("")

  const handleIncrease = ()=>{
    if(count<20){
      setMsg("")
      setCount(count+1)
    }
    else{
      setMsg("Maximum limit reached!!")

    }
  }

  const handleDecrease = ()=>{
    if(count>0){
      setMsg("")
      setCount(count-1)
    }
    else{
      setMsg("Minimum Limit Reached!!")


    }
  }



  return (
    <div className=" bg-slate-600 h-screen flex justify-center items-center flex-col">


      <div className="my-[15px]  px-[15px] py-[10px] text-red-400 ">{msg}</div>
      <div
        className=" h-[200px]
      w-[200px] border-[2px] border-black"
      >
        <div className=" border-b-[2px] border-black px-[60px] py-[10px] text-white">
          <h2>Count: {count} </h2>
        </div>

        <div className="text-white flex justify-evenly my-[50px] py-[20px]">
          <button onClick={handleIncrease} className="border-[2px]  border-black px-[10px] py-[5px] active:bg-gray-200 active:text-black">Increase</button>

          <button onClick={handleDecrease} className="border-[2px]  border-black px-[10px] active:bg-gray-200 active:text-black" >Decrease</button>
        </div>
      </div>
    </div>
  );
}
