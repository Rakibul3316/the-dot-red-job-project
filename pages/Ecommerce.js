import React from 'react'
import Sidebar from '../Components/Sidebar';
import { useRouter } from 'next/router'
import Dashboard from '../Components/Dashboard';
import EcommerceContent from '../Components/EcommerceContent';

const Ecommerce = () => {

    const router = useRouter();
    const pathname = router.pathname;
    console.log('router >>', pathname);

    return (

        <div className='h-screen flex'>
            <Sidebar />
            <Dashboard>
                <EcommerceContent />
            </Dashboard>
        </div>
    )
}

export default Ecommerce;