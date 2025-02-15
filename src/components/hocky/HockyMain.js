import React from 'react'
import HockyMenu from './HockyMenu'
import HockyHome from './HockyHome'

const HockyMain = () => {
    return (
        <section>
            <HockyMenu />
            <div className='container'>
                <HockyHome />
            </div>
        </section>
    )
}

export default HockyMain