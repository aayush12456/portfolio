
import { workedService } from "../../../utils/workedService"
import { workImage } from "../../../utils/workedService"
import aayush from '../../../assets/workedService/aayush.jpg'
import './workedService.css'
interface workdeServiceData{
  Heading:string,
  Description:string
  }
  interface workImg{
    img:string
  }
export const WorkedService = () => {
  return (
  <>
  <div className="lg:flex lg:mt-32 bg-[#f1f3f6]" >
    <div className="w-full  total   ">
    <img src={aayush} className="mt-24 w-screen imgData  "/>
    </div>
    <div>
    <div className="sm:pl-10 md:pl-12 lg:mt-6">
        <h2 className="text-[#24262a] font-bold pt-24 text-3xl pl-4 ">Why Work With Me</h2>
        <p className="text-lg text-[#4d5055] font-normal pl-4 pt-3 ">I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
    </div>
    <div>
      {
        workedService.map((_item:workdeServiceData)=>{
          return (
            <> 
            <div className="pt-9 pl-4 sm:pl-14 md:pl-16">
              <h5 className="text-[#24262] font-bold text-lg leading-6">{_item.Heading}</h5>
              <p className="text-[#4d5055] font-normal text-lg pt-3">{_item.Description}</p>
            </div>
            </>
          )
        })
      }
    </div>
    <div className="flex gap-4 mt-12  ml-4 sm:ml-14 md:ml-16 ">
      {
        workImage.map((_img:workImg)=>{
          return (
            <>
             <div>
              <img src={_img.img} className="w-12 mb-9"/>
             </div>
            </>
          )
        })
      }
    </div>
    </div>
    
  </div>
  </>
  )
}
