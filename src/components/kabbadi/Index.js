import React from 'react'
import KabbadiMenu from './KabbadiMenu'
import KabbadiMain from './KabbadiMain'

const Index = () => {
    return (
        <section>
            <KabbadiMenu />
            <div className='container'>
                <KabbadiMain />
            </div>
        </section>
    )
}

export default Index