import React from 'react'
import { cardData } from '../Assets/dummy-data/card-data';
import LineChart from './LineChart';
import PieChart from './PieChart';
import styles from '../styles/dashboardContent.module.css';
import { style } from '@mui/system';
const Dashboard_Content = () => {

    return (
        <div className={styles.px_5}>
            <h1 className={styles.dashboard_title}>Dashboard</h1>

            <div className={styles.row}>
                {
                    cardData.map((card, index) => (
                        <div key={index} className={styles.col}>
                            <div className={styles.card}>
                                <div className={styles.card_body}>
                                    <div className={styles.row}>
                                        <div className={styles.card_content}>
                                            <div className={styles.card_title}>{card.title}</div>
                                            <div className={styles.card_amount}>{card.amount}</div>
                                            <div className={styles.card_increment}>
                                                {card.incremtntIcon}<span>{card.increment}</span>
                                                <span>{card.smallText}</span>
                                            </div>
                                        </div>
                                        <div className={styles.card_icon}>
                                            {card.Icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.row}>
                <div className={styles.col_half}>
                    <div className={styles.pie_card}>
                        <h1 className={styles.chart_title}>Pic Chart</h1>
                        <PieChart />
                    </div>
                </div>
                <div className={styles.col_half}>
                    <div className={styles.line_card}>
                        <h1 className={styles.chart_title}>Line Chart</h1>
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dashboard_Content;