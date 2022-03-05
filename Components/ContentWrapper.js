import React from 'react'
import styles from '../styles/home.module.css';
import Topbar from './Topbar';
import DashboardContent from './DashboardContent';


const ContentWrapper = (props) => {
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.content}>
                <Topbar />
                {props.children}
            </div >
        </div >
    )
}

export default ContentWrapper;