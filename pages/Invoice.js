import React from 'react'
import Sidebar from '../Components/Sidebar';
import { useRouter } from 'next/router'
import Dashboard from '../Components/Dashboard';
import InvoiceContent from '../Components/InvoiceContent';

const Inward = () => {

    const router = useRouter();
    const pathname = router.pathname;
    console.log('router >>', pathname);

    return (
        <div className='h-screen flex'>
            <Sidebar />
            <Dashboard>
                <InvoiceContent />
            </Dashboard>
        </div>
    )
}

export default Inward;