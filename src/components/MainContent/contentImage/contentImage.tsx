
import aayushImg from '../../../assets/mainContent/aayush3.jpg';
import './contentImage.css';

const pdf_URL = 'http://localhost:5173/AayushTapadia.pdf';

const ContentImage = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  const downloadCv = async () => {
    try {
      const response = await fetch(pdf_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'AayushTapadia.pdf'); // Set the filename for download
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      } else {
        console.error('Error removing link from parent: parent node is null');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  

  return (
    <>
      <div className='z-30 lg'>
        <div className='w-full'>
          <img src={aayushImg} className='w-screen backImg' alt='Aayush Tapadia' />
        </div>
        <h1 className='font-bold absolute text-white top-24 sm:text-center sm:top-36 md:text-center md:text-4xl md:p-4 md:ml-5 lg:text-center lg:p-6 lg:w-3/4 lg:text-4xl text-3xl lg:ml-28 text-center xl:w-1/3 xl:ml-0 xl:mt-8 xl:leading-normal 2xl:text-5xl 2xl:ml-48 2xl:w-1/3 2xl:mt-32 2xl:pl-32 2xl:leading-snug leading-snug tracking-wide'>I love to create beautiful and efficient websites</h1>
        <div className='flex gap-14 sm:gap-14 buttonData sm:absolute sm:top-64 sm:left-48 md:top-72 md:left-60 lg:left-96 justify-center absolute top-48 left-32 xl:left-20 xl:top-96 2xl:left-96 2xl:top-96 2xl:mt-36' id='buttonData'>
          <button
            type="button"
            className="text-white bg-blue-700 w-24 h-14 font-medium text-sm sm:w-28 border-2 border-transparent transition hover:bg-slate-800 hover:border-white"
            onClick={downloadCv}>
            Download Resume
          </button>
          <button
            type="button"
            className="text-white w-40 h-14 font-medium text-sm px-5 py-2.5 border-none transition bg-black hover:text-gray-500"
            onClick={scrollToBottom}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentImage;
