import { useEffect, useState } from "react"

export default function App() {
  const tabs=["tab1","tab2","tab3"]
  const [active,setActive]=useState(tabs[0])

  const handleNavigate=(tab)=>{
    setActive(tab)
  }
  useEffect(()=>{
    console.log(active)
  },[active])
  return (
    <div className="flex gap-4">
      {tabs.map((tab)=>{
        return <button onClick={()=>handleNavigate(tab)} key={tab}
        className={`${active===tab?"bg-amber-500":"bg-blue-800 "} p-2`}>{tab}</button>
      })}
    </div>
  );
}
