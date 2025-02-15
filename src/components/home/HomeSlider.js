import React, { useRef, useState, useEffect } from 'react';
import { PiDotOutlineFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            slider.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (slider) {
                slider.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="bg-[#E6EBF5] p-2 relative rounded-[11px] mb-5">
            <p className="text-base flex items-center justify-end gap-2">
                powered by <img src="/assets/images/svg/brand.svg" className='w-[35px]' alt="brand" />
            </p>

            <ul className="flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-x-auto scrolling">
                <li className="font-[500] text-xl md:flex-[0] flex-1">Featured</li>
                {Array.from({ length: 7 }, (_, i) => (
                    <li
                        key={i}
                        className="text-[#1E1E1E]/50 text-sm font-[500] md:flex-[0] flex-1"
                    >
                        IND vs BAN
                    </li>
                ))}
            </ul>

            <div
                ref={sliderRef}
                className="px-[32px] home_slider pb-4 d-flex gap-3 scrolling flex-nowrap whitespace-nowrap overflow-x-hidden"
            >
                {/* Left Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={slideLeft}
                        className="button-left absolute left-0 z-10"
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                )}

                {/* Slider Content */}
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(
                    (index) => {
                        return (
                            <a href={'/cricket-news'}>
                                <div
                                    key={index}
                                    className="item min-w-[250px] flex basis-[280px]"
                                >
                                    <div className="bg-[#F8F8F8] rounded w-full select-none border-[1px] border-[#00000033] px-3 py-2">
                                        <div className="text-[#464646] text-[9px] d-flex gap-1 items-center justify-end">
                                            <span>2nd Test</span>
                                            <span className="d-flex items-center gap-[2px]">
                                                <PiDotOutlineFill />
                                                IND vs BAN
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <div className="flex text-black items-center gap-2 font-[900] text-lg mb-2">
                                                <img
                                                    src="/assets/images/svg/india.svg"
                                                    alt="flag"
                                                    className="!w-[28px]"
                                                />
                                                IND
                                            </div>
                                            <div className="flex text-black items-center gap-2 font-[900] text-lg">
                                                <img
                                                    src="/assets/images/svg/bangladesh.svg"
                                                    alt="flag"
                                                    className="!w-[28px]"
                                                />
                                                BAN
                                            </div>
                                        </div>
                                        <span className="text-[#464646] text-xs">
                                            Fri, 8:15am
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    }
                )}

                {/* Right Arrow */}
                {showRightArrow && (
                    <button
                        onClick={slideRight}
                        className="button-right absolute right-0 z-10"
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default HomeSlider;
