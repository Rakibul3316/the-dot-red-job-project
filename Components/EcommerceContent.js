import React, { useState } from 'react'
import styles from '../styles/ecommerce.module.css';
import { customersData } from '../Assets/dummy-data/customersData';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import OrderTable from './OrderTable';

const EcommerceContent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrder = customersData.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.px_5}>
            <h1 className={styles.dashboard_title}>Order List</h1>

            <div className={styles.search_order}>
                <form className={styles.form_flex}>
                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>Selet Date</label>
                            <input className={styles.order_search_input} type="date" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>End Date</label>
                            <input className={styles.order_search_input} type="date" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>Location</label>
                            <input className={styles.order_search_input} placeholder="Enter a location" type="text" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.submit_btn_area}>
                            <button className={styles.submit_btn}>
                                <ContentPasteIcon /> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <OrderTable
                ordersPerPage={ordersPerPage}
                totalOrders={customersData.length}
                paginate={paginate}
                currentOrder={currentOrder}
            />
        </div>
    )
}

export default EcommerceContent;

// 'text-yellow-800 bg-yellow-200'