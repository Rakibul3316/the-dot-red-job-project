import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.navbar}>
                <Link href='#'>
                    <a className={styles.sidebar_brand}>
                        <div className={styles.sidebar_icon}>
                            <Image src="/logo.png" width="40" height="40" alt='Brand Logo' />
                        </div>
                        <div className={styles.sidebar_title}>E-bazar</div>
                    </a>
                </Link>
                <hr className={styles.sidebar_divider} />
                <li className={styles.nav_link}>
                    <Link href='/'>
                        <a className={styles.home_link}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <hr className={styles.sidebar_divider_my_4} />
                <div className={styles.sidebar_heading}>Features</div>
                <li className={styles.nav_link}>
                    <Link href="/Ecommerce">
                        <a className={styles.order_link}>
                            <ViewListIcon />
                            <span>Order List</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <Link href="/Invoice">
                        <a className={styles.order_link}>
                            <DescriptionIcon />
                            <span>Invoice</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;