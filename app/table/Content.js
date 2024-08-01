import React from 'react'
import Print from './Print'

function Content({data}) {
  return <>

<div className="relative overflow-x-auto">
    <table className="w-full text-center text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
                <th scope="col" className="px-6 py-3">
                    الاسم
                </th>
                <th scope="col" className="px-6 py-3">
                    الرقم المالي
                </th>
                <th scope="col" className="px-6 py-3">
                     رقم الهاتف
                </th>
                <th scope="col" className="px-6 text-center py-3">
                    البريهه
                </th>
                <th scope="col" className="px-6 py-3">
                    الحذاء
                </th>
                <th scope="col" className="px-6 py-3">
                    الملاحظات
                </th>
            </tr>
        </thead>
        <tbody>
          {data.map((e,i)=>{
            return   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
{e.name}       
     </th>
            <td className="px-6 py-4">
                {e.job_id}
            </td>
            <td className="px-6 py-4">
                {e.phone}
            </td>
            <td className="px-6 py-4">
                {e.cap}
            </td>
            <td className="px-6 py-4">
{e.shoes}
      </td>
            <td className="px-6 py-4">
{e.note}
      </td>
        </tr>
          })}
         
          
        </tbody>
    </table>
</div>
<Print/>
</>

}

export default Content