import { clothes } from "./clothes"
import Content from "./Content"

async function  page() {
const data =await clothes()
// console.log(data)
if(data) {

return  <Content data={data}/>
}else{
    return <h1 className="text-sm font-semibold text-center py-7">لاتوجد بيانات</h1>
}
  
}

export default page