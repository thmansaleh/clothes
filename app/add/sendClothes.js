
export const  sendClothes= async(jobId,cap,shoes,note)=>{
    const url = `https://saba.cc/schedule/add-clothes.php?job_id=${jobId}&cap=${cap}&shoes=${shoes}&note=${note}`
 const response=await fetch(url)
 const ok=await response.text()
 return ok
}