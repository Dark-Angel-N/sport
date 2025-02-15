import React, { useEffect, useRef, useState } from 'react'
import SettingRoute from './SettingRoute';
import { IoIosArrowForward } from "react-icons/io";
import SettingHome from './SettingHome';
import PersonalInfo from './PersonalInfo';
import Security from './Security';
import ActiveSection from './ActiveSection';
import BillingCentral from './BiilingCentral';
import Header1 from '../../layout/Header1';

const Index = () => {

    const [activeOption, setActiveOption] = useState(SettingRoute[0]);
    const [collapsedRoutes, setCollapsedRoutes] = useState({});
    const [heights, setHeights] = useState({});

    const subRouteRefs = useRef({});
    const contentRef = useRef(null);

    console.log('activeOption', activeOption);

    useEffect(() => {
        const calculatedHeights = {};
        for (const key in subRouteRefs.current) {
            if (subRouteRefs.current[key]) {
                calculatedHeights[key] = subRouteRefs.current[key].scrollHeight;
            }
        }
        setHeights(calculatedHeights);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeOption]);

    const handleOptionClick = (route) => {
        if (route.subRoute) {
            setCollapsedRoutes((prevState) => ({
                [route.id]: !prevState[route.id],
            }));
        } else {
            setCollapsedRoutes({});
            setActiveOption(route);
        }
    };

    const handleSubOptionClick = (subRoute) => {
        setActiveOption(subRoute);
    }

    const isParentActive = (route) => {
        return route.id === activeOption.id;
    };

    const setActiveOptionFromHome = (routeName) => {
        const matchedRoute = SettingRoute.find((route) =>
            route.subRoute ? route.subRoute.some((sub) => sub.name === routeName) : route.name === routeName
        );

        if (matchedRoute) {
            if (matchedRoute.subRoute) {
                const matchedSubRoute = matchedRoute.subRoute.find((sub) => sub.name === routeName);
                if (matchedSubRoute) {
                    setActiveOption(matchedSubRoute);
                    setCollapsedRoutes({ [matchedRoute.id]: true });
                }
            } else {
                setActiveOption(matchedRoute);
                setCollapsedRoutes({});
            }
        }
    };

    return (
        <div>
            <Header1 />
            <div className='!px-[60px]'>
                <div className='flex mt-3'>
                    <div className='bg-white border-[1px] border-[#00000033] rounded-lg fixed w-[340px] px-3 overflow-y-auto' style={{ height: 'calc(100vh - 110px)' }}>
                        <div>
                            {/* <p className='text-xl px-[12px] flex items-center h-[48px] my-1 mb-0 font-semibold'>Settings</p> */}
                            <div>
                                <div className="w-[80px] h-[80px] mx-auto bg-black rounded-full text-white text-4xl flex items-center justify-center mt-4">J</div>
                                <p className='text-xl mt-2 mb-4 text-center'>Jemas Scalf</p>
                            </div>
                            {Array.isArray(SettingRoute) &&
                                SettingRoute.map((route) => (
                                    <div key={route.id}>
                                        <a
                                            href='#path'
                                            className={`text-black hover:bg-[#E6EBF5] flex items-center justify-between gap-3 h-[48px] my-1 px-[12px] rounded-lg 
                                    ${isParentActive(route) ? 'bg-[#E6EBF5]' : ''}`}
                                            onClick={() => handleOptionClick(route)}
                                        >
                                            {route.name}
                                            <IoIosArrowForward />
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <section className='ml-[340px] flex-grow'>
                        <div className='container-fluid'>
                            <div ref={contentRef} className='bg-white settings border-[1px] border-[#00000033] rounded-lg overflow-y-auto' style={{ height: 'calc(100vh - 110px)' }}>
                                <div className='row justify-center h-full'>
                                    {activeOption.id === 1 &&
                                        <PersonalInfo setActiveOptionFromHome={setActiveOptionFromHome} />
                                    }
                                    {activeOption.name === 'Social Media' &&
                                        <Security />
                                    }
                                    {activeOption.name === 'Visible only to you' &&
                                        <BillingCentral />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Index