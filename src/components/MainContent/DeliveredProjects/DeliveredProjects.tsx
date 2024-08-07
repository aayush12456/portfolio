import { deliveredProjects } from "../../../utils/deliveredProject"
import upArrow from '../../../assets/DeliveredProjects/up-arrow-svgrepo-com (1).svg'
import downArrow from '../../../assets/DeliveredProjects/down-arrow-svgrepo-com (1).svg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
interface DeliveredProjects{
    img:string,
    img1:string,
    content:string,
    technology:string,
    forData:string,
    Project:string
}
const DeliveredProjects=()=>{
    const [data,setData]=useState(false)
    const [downData ,setDownData]=useState(true)
    const navigate=useNavigate()
    const upquestionData=()=>{
    setData(true)
    setDownData(true)
    }
    const downquestionData=()=>{
        setDownData(false)
        setData(false)
        }
        const projectImg=(_item:{})=>{
        navigate("/personalDetails",{state:_item})
        }
return (
    <>
    <div className="mt-16">
        <div>
            <h2 className="text-[#24262a] font-bold text-3xl text-center leading-normal">Delivered projects</h2>
            <p className="text-[#4d5055] font-normal text-center text-lg pl-3 pt-3 2xl:text-center 2xl:w-2/4 2xl:ml-96">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
        </div>
        <div className="mt-16 2xl:flex 2xl:justify-center ">
            <div>
            {
        deliveredProjects.map((_item: DeliveredProjects) => {
            return (
                <div>
                    <img src={_item.img} className="mx-auto 2xl:w-3/5 transition-transform transform hover:scale-110 cursor-pointer " onClick={()=>projectImg(_item)} />
                        <p className="text-[#4d5055] font-bold text-lg pt-4 pl-4 2xl:text-center">For : <span className="font-normal text-lg">{_item.forData}</span  >, Project : <span className="font-normal text-lg ">{_item.Project}</span> </p>
                     
                </div>
            )
        })
    }
            </div>
   
</div>
<div className="pt-10" >
    <h2 className="text-[#24262a] font-bold text-3xl leading-normal text-center">Frequent Questions</h2>
    <div className="flex justify-center mt-10 ml-3">
    <div className="flex gap-2 ">
        {!data && <img src={upArrow} className="w-4  sm:mt-0 cursor-pointer" onClick={upquestionData}/>}
       {data && downData && <img src={downArrow} className="w-4   sm:mt-0 cursor-pointer" onClick={downquestionData}/>}
    <p className="text-[#24262a] font-semibold text-lg leading-7">
    How can I contact you and quickly get a quote for my  project?</p>
    </div>
    </div>
    { data && downData && <div>
        <p className="text-[#4d5055] font-normal text-center text-lg pl-3 pt-3 2xl:text-center 2xl:w-2/4 2xl:ml-96">The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details</p>
    </div>}
</div>
    </div>
    </>
)
}
export default DeliveredProjects


