'use client'
import { useState } from "react"
import { drivers } from "../drivers"
import { sendClothes } from "./sendClothes"

function page() {
    const [driver,setDriver]=useState(false)
    const [cap,setCap]=useState(false)
    const [shoes,setShoes]=useState(false)
    const [note,setNote]=useState('')
    const [massage,setMassage]=useState(false)
    const data = drivers()
    
    const showContent=(jobId)=>{
const driver =data.filter(driver=>driver.job_id==jobId)
if(driver.length>0){
    setDriver(driver[0])
    // console.log(driver)

}else{
    setDriver(false)
}
    }




    const send= async()=>{
if( cap && shoes)    {
    await sendClothes(driver.job_id,cap,shoes,note)

    // console.log(driver.job_id,shoes,cap,note)
    setMassage('تم الارسال بنجاح')

}  else{
    setMassage('يرجئ ادخال البيانات')
} 

    }

  return <>
      <h3 className="text-md my-5 text-center font-semibold text-gray-700"> وحدة إدارة الحوادث المرورية</h3>
  <div className="p-3 flex justify-center items-center flex-col gap-y-6">

      <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ادخل الرقم المالي </label>
            <input  onChange={e=>showContent(e.target.value)} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5  w-44" placeholder="" required />
        </div>


{driver&&
        <div className="space-y-4">
<div className="text-sm text-gray-500 ">{driver.name}</div>
            <h3 className="text-md font-semibold">ادخل القياسات</h3>
            <input onChange={e=>setCap(e.target.value)}  type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5  w-44" placeholder="البريهه"  />
            <input onChange={e=>setShoes(e.target.value)}   type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5  w-44" placeholder="الحذاء"  />
            <input  onChange={e=>setNote(e.target.value)}   type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5  w-44" placeholder="الملاحظات"  />

            <button onClick={send} className="w-full bg-green-600 text-sm font-semibold text-white py-2 rounded-lg">ارسال</button>
        
{massage&&<h1 className="text-sm font-semibold  text-center">{massage}</h1>
}

            </div>
}





  </div>
  </>
}

export default page