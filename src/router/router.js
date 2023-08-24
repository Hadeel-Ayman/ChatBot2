import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
const Conditions = lazy(() => import('../pages/Conditions'));
const Home = lazy(() => import('../pages/Home'));
const OurBusiness = lazy(() => import('../pages/ourBusiness'));


const Routerr = () => {
    return (
        <Suspense>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/conditions' element={< Conditions />} />
                <Route path='/business' element={<OurBusiness />} />
                <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
        </Suspense>
    )
}

export default Routerr
