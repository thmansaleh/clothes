'use client'
function Print() {
  return <div className="p-3 text-center">
<button onClick={()=> window.print()} className="w-full py-2 text-sm font-semibold bg-gray-800 text-white">طباعة</button>
  </div>
    

}

export default Print