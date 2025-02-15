import React from 'react';
import { useLocation } from 'react-router-dom';
import { cricketMenu } from '../../layout/routes';

const CricketMenu = () => {
    const location = useLocation();

    return (
        <div className="bg-[#0033A0] py-2">
            <div className="d-flex scrolling items-center justify-evenly">
                {
                    cricketMenu.map((res) => (
                        <a
                            key={res.id}
                            href={res.path}
                            className={`text-white/50 main_menus cursor-pointer px-3 ${location.pathname === res.path && 'text-white'}`}>
                            {res.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default CricketMenu;
