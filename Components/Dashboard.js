import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/home.module.css';
import Topbar from './Topbar';
import DashboardContent from './DashboardContent';

const Dashboard = (props) => {

    return (
        <div className={styles.content_wrapper}>
            <div className={styles.content}>
                <Topbar />
                {props.children}
            </div >
        </div >
    )
}

export default Dashboard;