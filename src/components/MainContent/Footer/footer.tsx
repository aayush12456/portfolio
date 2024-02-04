import { useEffect, useState } from 'react';
import { FooterData } from "../../../utils/footerService";
import upArrow from '../../../assets/footer/upArrow.svg';

export const Footer = () => {
    interface FooterProject {
        img: string;
        data:string
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Adjust the threshold value as needed
            const scrollThreshold = 100;

            if (scrollY > scrollThreshold) {
                setShowUpArrow(true);
            } else {
                setShowUpArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg-[#4d5055] mt-2">
                <div className="flex justify-center gap-2">
                    {FooterData.map((_item: FooterProject) => (
                        <div  className="mt-24">
                          <a href={_item.data}> <img src={_item.img} className='cursor-pointer' /></a> 
                        </div>
                    ))}
                </div>
                <p className="text-[#9da6ac] text-center leading-6 text-sm pt-12 pb-12">
                    Copyright © <span>Aayush Tapadia</span>
                </p>
            </div>
            {showUpArrow && (
                <div className="fixed bottom-8 right-8 cursor-pointer">
                    <div className="rounded-full bg-[black] p-2">
                        <img
                            src={upArrow}
                            className="w-5 filter brightness-0 invert h-5 cursor-pointer"
                            onClick={scrollToTop}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
