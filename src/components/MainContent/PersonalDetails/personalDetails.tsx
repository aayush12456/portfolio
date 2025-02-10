import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Footer } from "../Footer/footer"
import apkImage from '../../../assets/apkImage/apkImage.jpeg'
export const PersonalDetails = () => {
  const navigate=useNavigate()
  const personal=useLocation()
  const personalData=personal.state
  console.log('personal data',personalData)
  const backData=()=>{
    navigate('/')
  }
  const apkLink:any="https://drive.google.com/file/d/18faug38ze-1P8WttXQZghsOhgOjbkp3-/view?usp=drive_link"
  return (
 <>
<div className="bg-[#24262a] h-full ">
<h1 className="text-[#ffffff] font-bold pt-20 text-center pb-16 leading-normal text-3xl ">Project Details</h1>
</div>
<div className="mt-24">
  <img src={personalData.img1} className="mx-auto 2xl:w-3/5  cursor-pointer "/>
  <p className="text-[#4d5055] font-normal text-center text-lg pl-3 pt-10 2xl:text-center 2xl:w-2/4 2xl:ml-96">{personalData.content}</p>
</div>
<div>
 { <p className="text-[#4d5055] font-normal text-center text-lg pl-3  2xl:text-center 2xl:w-2/4 2xl:ml-96">Note:There android apk is also available click to download and enjoy a chat with your matches</p>}

  
    {personalData.title?<div className="flex gap-3 mt-5 lg:ml-72 ml-4 ">
<a href={personalData.link}><img src={personalData.img} className="rounded-lg w-44 "/></a>
<a href={personalData.link}><p className="text-black pt-5 text-lg font-bold">{personalData.title}</p></a>
</div>:null}
<h2 className="text-[#24262a] font-bold text-3xl 2xl:pl-72 pl-4 pt-6 leading-normal">Technology</h2>
<p className="text-[#4d5055] font-normal text-lg pl-4 pt-5  2xl:pl-72">{personalData.technology}</p>
 
{personalData.title==='Apna-Pan'?<div>
<div className="flex gap-3 mt-5 lg:ml-72 ml-4 ">
<a href={apkLink}><img src={apkImage} className="rounded-lg w-44  "/></a>
<a href={apkLink}><p className="text-black pt-5 text-lg font-bold">ApnaPan Apk</p></a>
</div>
<h2 className="text-[#24262a] font-bold text-3xl 2xl:pl-72 pl-4 pt-6 leading-normal">Technology</h2>
<p className="text-[#4d5055] font-normal text-lg pl-4 pt-5  2xl:pl-72">React Native , Nodejs , MongoDb</p>
</div>:null}
   


<button
  type="button"
  className="text-white bg-blue-700 w-24 h-12 font-medium text-sm sm:w-28 mt-12 ml-4 2xl:ml-72 border-2 border-transparent transition hover:bg-slate-800 hover:border-white" onClick={backData}
>
Back
</button>
</div>
<div className="mt-24">
<Footer/>
</div>

 </>
  )
}
