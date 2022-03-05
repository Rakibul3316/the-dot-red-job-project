import React from 'react'

import styles from '../styles/ecommerce.module.css';
import Pagination from './Pagination';

const OrderTable = ({ currentOrder, paginate, totalOrders, ordersPerPage }) => {
    return (
        <div className={styles.row}>
            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead className={styles.table_head}>
                        <tr>
                            <th className={styles.table_header}>Order Date</th>
                            <th className={styles.table_header}>Order Number</th>
                            <th className={styles.table_header}>Order Status</th>
                            <th className={styles.table_header}>Customer Number</th>
                            <th className={styles.table_header}>Customer Contact</th>
                            <th className={styles.table_header}>Customer Address</th>
                            <th className={styles.table_header}>Quantity</th>
                            <th className={styles.table_header}>Delivery Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentOrder.map((customer, index) => (
                            <tr key={index} className={styles.table_row_odd}>
                                <td className={styles.table_data}>{customer.orderDate}</td>
                                <td className={styles.table_data}>
                                    <a href="#">{customer.orderNumber}</a>
                                </td>
                                <td className={styles.table_data}>
                                    <span>
                                        {customer.statusText}
                                    </span>
                                </td>
                                <td className={styles.table_data}>{customer.customerNumber}</td>
                                <td className={styles.table_data}>{customer.contactNumber}</td>
                                <td className={styles.table_data}>{customer.address}</td>
                                <td className={styles.table_data}>{customer.quantity}</td>
                                <td className={styles.table_data}>{customer.deliveryDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination ordersPerPage={ordersPerPage} totalOrders={totalOrders} paginate={paginate} />
            </div>
        </div>
    )
}

export default OrderTable;