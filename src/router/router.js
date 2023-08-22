import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
const Conditions = lazy(() => import('../pages/Conditions'));
const Home = lazy(() => import('../pages/Home'));
const OurBusiness = lazy(() => import('../pages/ourBusiness'));


const Routerr = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Suspense fallback='Loading...'>
                    <Home />
                </Suspense>
            } />

            <Route path='/conditions'
                element={
                    <Suspense fallback='Loading...'>
                        <Conditions />
                    </Suspense>
                } />

            <Route path='/business'
                element={
                    <Suspense fallback='Loading...'>
                        <OurBusiness />
                    </Suspense>
                } />

            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default Routerr
