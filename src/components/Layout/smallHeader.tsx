
export const SmallHeader = () => {
  return (
 <>
 <div className="lg:hidden w-full flex justify-center absolute top-64 h-full" >
 <div className='lg:flex  text-white gap-7 m-4  cursor-pointer  bg-black w-screen h-full'>
    <p className='nav-item hover:text-gray-500 '>Home</p>
    <p className='nav-item hover:text-gray-500'>About </p>
    <p className='nav-item hover:text-gray-500'>Services </p>
    <p className='nav-item hover:text-gray-500'>Dropdown</p>
    <p className='nav-item hover:text-gray-500'>contact</p>

  </div>
 </div>
 </>
  )
}
