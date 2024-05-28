import React from 'react'
import Header from '../shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'

const Main = () => {
    return (
        <>
            <div className='w-4/5 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Main