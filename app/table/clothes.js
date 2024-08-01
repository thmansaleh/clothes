

export const  clothes= async()=>{
    const url = 'https://saba.cc/schedule/clothes.php'

 const response=await fetch(url,{next:{revalidate:0}})
 const data=await response.json()
 return data
}