import React, { useState } from 'react'
import styles from '../styles/invoiceContent.module.css';
import OrderTable from './OrderTable';
import { customersData } from '../Assets/dummy-data/customersData';

const Invoice = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrder = customersData.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.px_5}>
            <h1 className={styles.dashboard_title}>Inward Page</h1>

            <h2 className={styles.inward}>Run Sheet Details</h2>

            <div className={styles.inward_container}>
                <div className={styles.inward_left_info}>
                    <h6>Run Sheet Number : <span>RS-0000000086</span></h6>
                    <h6>Driver Name : <span>Rafikul Islam</span></h6>
                    <h6>Numbers of Orders : <span>5 Orders</span></h6>
                    <h6>Total Amount : <span>257</span></h6>
                    <h6>Out of Delivery Orders: <span>5</span></h6>
                </div>
                <div className={styles.inward_right_info}>
                    <h6>Run Sheet Details : <span>16-Aug-2022</span></h6>
                    <h6>Location : <span>New York</span></h6>
                    <h6>Sheet Status : <span>Out For Delivery</span></h6>
                    <h6>Undelived Order Amount : <span>257</span></h6>
                    <h6>Collected Amount : <span>0</span></h6>
                </div>
            </div>

            <h2 className={styles.inward_order}>Order Lists</h2>

            <OrderTable
                ordersPerPage={ordersPerPage}
                totalOrders={customersData.length}
                paginate={paginate}
                currentOrder={currentOrder}
            />
        </div>
    )
}

export default Invoice;