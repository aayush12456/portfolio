
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactDetails = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const handleSubmit=(e:any)=>{
  e.preventDefault()
  const serviceId='service_y62215s'
  const templateId='template_1mblcrs'
  const publicKey='3bvV0zSUyDmusoTIX'
  const data={
    service_id:serviceId,
    template_id:templateId,
    user_id:publicKey,
     personalDetails:{
      from_name:name,
      from_email:email,
      to_name:'Aayush Tapadia',
      message:message,
    },

  }
 
  setName('')
  setEmail('')
  setMessage('')
  console.log('personal',data)
  emailjs.send(serviceId,templateId,data.personalDetails,publicKey).then((response)=>{
    console.log('email sent successfully',response)
     toast("email sent successfully")
    setName('')
    setEmail('')
    setMessage('')
  })

  }
  return (
   <>
   <div className="bg-[#f7f9fb] mt-28 ">
    <h2 className="text-[#24262a] font-bold text-3xl leading-normal text-center pt-28">Contact Details</h2>
    <p className="text-[#4d5055] font-normal text-center text-lg pl-3 pt-3 2xl:text-center 2xl:w-2/4 2xl:ml-96">For any type of  project in a react or any requirements of React Developer please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email  <span className="text-[#2259ec] cursor-pointer hover:text-[black]">aayushtapadia2001@gmail.com</span> </p>
    <div>
    <div className="w-full md:flex md:justify-center  ">
  <form className="mt-14 px-8 pt-6 pb-8 mb-20" onSubmit={handleSubmit}>
    <div className="mb-4  ">
      <input className="shadow appearance-none border rounded w-full md:w-[40rem] lg:w-[50rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12" id="username" type="text" name="user_name" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name}/>
    </div>
    <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full  md:w-[40rem]  lg:w-[50rem]   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12" id="username" type="email" name="user_email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
    </div>
    <div className="mb-4">
    <input className="shadow appearance-none border rounded w-full   md:w-[40rem]  lg:w-[50rem]      text-gray-700  focus:outline-none focus:shadow-outline h-28 " id="username" type="text" name="message" placeholder="Project details"  onChange={(e)=>setMessage(e.target.value)} value={message} />
    </div>
    <div className="flex items-center justify-between w-full">
      <button  className="bg-blue-500 hover:bg-blue-700   md:w-[40rem]   lg:w-[50rem]    text-white font-bold py-2 px-4 rounded-full h-14 focus:outline-none focus:shadow-outline w-screen " type="submit">
       Submit
      </button>
     
    </div>
   
  
  </form>
 
</div>
    </div>
    <ToastContainer/>
   </div>
   </>
  )
}
