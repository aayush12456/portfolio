
import aayushImg from '../../../assets/mainContent/aayush3.jpg'
import './contentImage.css'
// const pdf_URL='http://localhost:5173/AayushTapadia.pdf'
const  pdf_URL='/AayushTapadia(2).pdf'
const ContentImage=()=>{
  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};
const downloadCv=(url:any)=>{
  const fileName=url.split('/').pop()
  console.log('file',fileName)
const aTag=document.createElement('a')
aTag.href=url
aTag.setAttribute('download',fileName)
document.body.appendChild(aTag)
aTag.click()
aTag.remove()
}
return (
<>
<div className='z-30 lg'>
  <div className='w-full'>
  <img src={aayushImg} className='w-screen backImg'  />
  </div>

<h1 className= 'font-bold absolute text-white  top-24  sm:text-center sm:top-36 md:text-center  md:text-4xl  md:p-4  md:ml-5 lg:text-center lg:p-6 lg:w-3/4 lg:text-4xl text-3xl lg:ml-28  text-center  xl:w-1/3 xl:ml-0 xl:mt-8 xl:leading-normal 2xl:text-5xl 2xl:ml-48 2xl:w-1/3 2xl:mt-32 2xl:pl-32 2xl:leading-snug leading-snug tracking-wide   '>I love to create beautiful and efficient websites</h1>
<div className='flex gap-14 sm:gap-14 buttonData  sm:absolute sm:top-64 sm:left-48 md:top-72 md:left-60 lg:left-96 justify-center absolute top-48 left-32 xl:left-20 xl:top-96 2xl:left-96 2xl:top-96 2xl:mt-36' id='buttonData'>
<button
  type="button"
  className="text-white bg-blue-700 w-24 h-14 font-medium text-sm sm:w-28  border-2 border-transparent transition hover:bg-slate-800 hover:border-white"
onClick={()=>downloadCv(pdf_URL)}>
 Download Resume
</button>
<button
  type="button"
  className="text-whitew-40 h-14 font-medium text-sm px-5 py-2.5   border-none transition bg-black text-white hover:text-gray-500"
  onClick={scrollToBottom}
>
 Contact Me
</button>
</div>
</div>


</>
)
}
export default ContentImage

// font-bold text-5xl absolute top-80 text-white pl-36 left-48 w-1/3 leading-snug tracking-wide 
// md:text-5xl md:top-40  md:text-center lg:top-80 lg:w-1/3 lg:left-44 lg:pl-32

