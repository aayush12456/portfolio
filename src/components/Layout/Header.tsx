import {useState,useEffect} from 'react'
import A from '../../assets/icons/a.png'
import fb from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import hamburger from "../../assets/icons/hamburger.png"
import './Header.css'



const Header=()=>{
  // const [bgColor, setBgColor] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  


  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // if (position >= 40) {
      //   setBgColor('bg-zinc-800'); // Change background color when scrolled to the bottom

      // } else {
      //   setBgColor(''); // Set initial background color if not at the bottom
      // }
      if (position > 0 ) {
        setIsSticky(true); // Change to sticky when scrolled
      } else if (position === 0 && isSticky) {
        setIsSticky(false); // Change to absolute when scrolled to the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);
  const hamburgerImg=()=>{

  }
  const homeData=()=>{
    window.scrollTo({
      top: document.body.offsetTop,
      behavior: "smooth"
  });
  }
  const aboutData = () => {
    let coordinates = { top: 0, left: 0 };
  
  
   if (window.innerWidth < 1200) { 
      coordinates = { top: 600, left: 0 };
    }
    else if(window.innerWidth < 1500){
      coordinates = { top: 760, left: 0 };
    }
    else if(window.innerWidth < 1900){
      coordinates = { top: 960, left: 0 };
    }

  
    window.scrollTo({
      ...coordinates,
      behavior: "smooth"
    });
  };
  
  const serviceData=()=>{
    let coordinates = { top: 0, left: 0 };
  
  
    if (window.innerWidth < 1200) { 
       coordinates = { top: 1000, left: 0 };
     }
     else if(window.innerWidth < 1500){
       coordinates = { top: 1100, left: 0 };
     }
     else if(window.innerWidth < 1900){
       coordinates = { top: 1300, left: 0 };
     }
    window.scrollTo({
      ...coordinates,
      behavior: "smooth"
  });
  }
  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};
return (
  <>
<div className={`h-14 w-full   ${isSticky ? 'sticky top-0 z-10 transition-all duration-300 ease-in-out bg-zinc-800 ' : 'absolute'} `} >
  <div className='flex sm:gap-28 md:gap-64 lg:gap-72 xl:gap-80 2xl:gap-96  justify-between ' >
  <div className='flex 2xl:ml-52 ml-5 gap-32 sm:gap-48 md:gap-20'>
    <div className='flex '>
    <img src={A} className='w-9 m-2 h-9  '/>
    <h3 className='text-white font-normal text-3xl m-2'>Aayush</h3>
    </div>
  <div>
  <img src={hamburger} className='w-7 m-3 h-7 lg:hidden ml-32 sm:ml-60 md:ml-96 lg:ml-96 hamburger invert ' onClick={hamburgerImg}/>
  </div>
   

  </div>
  <div className='lg:flex  text-white gap-7 m-4  cursor-pointer sm:hidden  hidden headerData '>
    <p className='nav-item hover:text-gray-500 ' onClick={homeData}>Home</p>
    <p className='nav-item hover:text-gray-500'  onClick={aboutData}>About </p>
    <p className='nav-item hover:text-gray-500'  onClick={serviceData}>Services </p>
    <p className='nav-item hover:text-gray-500'>Dropdown</p>
    <p className='nav-item hover:text-gray-500'onClick={scrollToBottom}>contact</p>
    <a href="https://www.facebook.com/profile.php?id=100009442777439"><img src={fb} className='w-9 h-7'/></a>
    <a href='https://www.instagram.com/aayushtapadia28/'><img src={instagram} className='w-9 h-7'/></a>
  </div>
  </div>
  
 
</div>



  </>
)
}
export default Header

