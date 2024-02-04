
import { offeredService } from "../../../utils/offeredService"
interface offeredServiceData{
img:string,
Heading:string,
description:string
}
export const OfferedService = () => {
  return (
  <>
  <div className="bg-white ">
  <div>
  <p className="text-[#24262a] text-center font-bold text-3xl leading-normal pt-14">Offered services</p>
  <p className="text-[#4d5055] font-normal  text-lg pl-4 pt-3 sm:pl-8 md:pl-12 2xl:text-center 2xl:w-2/4 2xl:ml-96">Web design and development have been my bread and butter for more than 3 years(including college). During that time I've discovered that I can help startups and companies with the following services</p>
  </div>
 <div className="lg:flex lg:gap-0  2xl:gap-0   ">
    
 {
    offeredService.map((_item:offeredServiceData)=>{
        return (
            <>
            <div className="flex justify-center  mt-16   ">
            <div className="outline-3 border-spacing-16 border-2 border-gray-300 p-2 w-96 sm:w-3/5 md:w-3/5 lg:w-4/5 2xl:w-2/3" >
                <div className="ml-4">
                <img src={_item.img} className="w-16"/>
                <p className="text-[#24262a] font-bold text-lg pt-4">{_item.Heading}</p>
                <p className="text-lg text-[#4d5055] pt-2 font-normal">{_item.description}</p>
                </div>
                
            </div>
            </div>
            
            </>
        )
    })
 }
 </div>
  </div>
  
    </>
  )
}
