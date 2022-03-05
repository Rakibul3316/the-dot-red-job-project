import React, { useState } from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboard_Content from './DashboardContent';
import { useRouter } from 'next/router'
import styles from '../styles/home.module.css';

const Topbar = (props) => {

    // console.log('props.pathname :>> ', props.pathname);

    const [showSearch, setShowSearch] = useState(false);
    const [showNoti, setShowNoti] = useState(false);
    const [showMess, setShowMess] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleSearch = () => {
        setShowSearch(!showSearch);
        setShowNoti(false);
        setShowMess(false);
        setShowProfile(false);
    }

    const handleNoti = () => {
        setShowNoti(!showNoti);
        setShowSearch(false);
        setShowMess(false);
        setShowProfile(false);
    }

    const handleMess = () => {
        setShowMess(!showMess);
        setShowNoti(false);
        setShowSearch(false);
        setShowProfile(false);
    }

    const handleProfile = () => {
        setShowProfile(!showProfile);
        setShowNoti(false);
        setShowMess(false);
        setShowSearch(false);
    }

    // const router = useRouter();
    // const pathname = router.pathname;
    // console.log('router >>', pathname);

    return (
        <nav className={styles.top_nav}>
            <ul className={styles.top_navbar}>

                <li>
                    <button onClick={() => handleSearch()} className={styles.top_search}>
                        <SearchIcon />
                    </button>
                    {
                        showSearch && (
                            <div className={styles.search_hide}>
                                <form className={styles.search_from}>
                                    <div className={styles.input_group}>
                                        <input className={styles.input_control} type="text" placeholder='What do you want to look for?' />
                                        <div className={styles.btn_append}>
                                            <SearchIcon className={styles.search_btn_hide} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </li>

                <li>
                    <div>
                        <button onClick={() => handleNoti()} className={styles.top_search}>
                            <NotificationsActiveIcon />
                            <span className={styles.number_of_noti}>9+</span>
                        </button>

                        {
                            showNoti && (
                                <div className={styles.hide_noti}>
                                    <h6 className={styles.dropdown_header}>Alearts Center</h6>
                                    <a className={styles.dropdown_item} href="#">
                                        <div className={styles.mr_4}>
                                            <div className={styles.icon_cricle}>
                                                <FormatListBulletedIcon />
                                            </div>
                                        </div>
                                        <div className={styles.w_64}>
                                            <div className={styles.small_text}>December 12, 2019</div>
                                            <span className={styles.message}>A new monthly report is ready to download!</span>
                                        </div>
                                    </a>

                                    <a className={styles.dropdown_item} href="#">
                                        <div className={styles.mr_4}>
                                            <div className={styles.icon_cricle}>
                                                <FormatListBulletedIcon />
                                            </div>
                                        </div>
                                        <div className={styles.w_64}>
                                            <div className={styles.small_text}>December 12, 2019</div>
                                            <span className={styles.message}>A new monthly report is ready to download!</span>
                                        </div>
                                    </a>

                                    <a className={styles.dropdown_item} href="#">
                                        <div className={styles.mr_4}>
                                            <div className={styles.icon_cricle}>
                                                <FormatListBulletedIcon />
                                            </div>
                                        </div>
                                        <div className={styles.w_64}>
                                            <div className={styles.small_text}>December 12, 2019</div>
                                            <span className={styles.message}>A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className={styles.alerts_all} href="#">Show All Alerts.</a>
                                </div>
                            )
                        }
                    </div>
                </li>

                <li>
                    <div>
                        <button onClick={() => handleMess()} className={styles.top_search}>
                            <EmailIcon />
                            <span className={styles.number_of_noti}>2</span>
                        </button>

                        {
                            showMess && (
                                <div className={styles.hide_mess}>
                                    <h6 className={styles.dropdown_header}>MESSAGE CENTER</h6>
                                    <a className={styles.dropdown_item} href="#">
                                        <div className={styles.dropdown_list_img}>
                                            <Image width='50' height='50' className={styles.round_img} src='/boy.png' alt='person-image' />
                                            <span className={styles.user_active}></span>
                                        </div>
                                        <div className={styles.w_64}>
                                            <div className={styles.message}>Hi there! I am wondering if you can help me with a
                                                problem I have been having.</div>
                                            <span className={styles.small_text}>Udin Cilok · 58m</span>
                                        </div>
                                    </a>

                                    <a className={styles.dropdown_item} href="#">
                                        <div className={styles.dropdown_list_img}>
                                            <Image width='50' height='50' className={styles.round_img} src='/girl.png' alt='person-image' />
                                        </div>
                                        <div className={styles.w_64}>
                                            <div className={styles.message}>Hi there! I am wondering if you can help me with a
                                                problem I have been having.</div>
                                            <span className={styles.small_text}>Udin Cilok · 58m</span>
                                        </div>
                                    </a>
                                    <a className={styles.alerts_all} href="#">Read More Messages</a>
                                </div>
                            )
                        }
                    </div>
                </li>

                <li>
                    <div>
                        <button className={styles.top_search}>
                            <FormatListBulletedIcon />
                            <span className={styles.number_of_noti}>5</span>
                        </button>
                    </div>
                </li>

                <div className={styles.topbar_divider}></div>

                <li className={styles.profile}>
                    <button onClick={() => handleProfile()} className={styles.top_search}>
                        <Image width='35' height='35' className={styles.img_porfile} src="/man.png" alt="" />
                        <span className={styles.profile_text}>Rakibul Islam</span>
                    </button>

                    {
                        showProfile && (
                            <div className={styles.hide_profile}>
                                <a className={styles.dropdown_item_profile} href="#">
                                    <PersonIcon className={styles.profile_icon} /> Profile
                                </a>
                                <a className={styles.dropdown_item_profile} href="#">
                                    <SettingsIcon className={styles.profile_icon} /> Settings
                                </a>
                                <a className={styles.dropdown_item_profile} href="#">
                                    <ListIcon className={styles.profile_icon} /> Active Log
                                </a>
                                <div className={styles.dropdown_divider}></div>
                                <a className={styles.dropdown_item_profile} href="#">
                                    <LogoutIcon className={styles.profile_icon} /> Logout
                                </a>
                            </div>
                        )
                    }
                </li>

            </ul>
        </nav>
    )
}

export default Topbar;