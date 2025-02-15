import React from 'react'
import { useLocation } from 'react-router-dom';
import { kabbadiMenu } from '../../layout/routes';

const KabbadiMenu = () => {

    const location = useLocation();

    return (
        <div className="bg-[#0033A0] py-2 container-fluid xl:!px-[50px] lg:!px-[40px] !px-[16px]">
            <div className="d-flex scrolling items-center">
                {
                    kabbadiMenu.map((res) => (
                        <a
                            key={res.id}
                            href={res.path}
                            className={`text-white/50 main_menus cursor-pointer px-4 ${location.pathname === res.path && 'text-white'}`}>
                            {res.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default KabbadiMenu