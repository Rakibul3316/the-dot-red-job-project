import React from 'react'
import styles from '../styles/pagination.module.css'

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li className={styles.pagination_item} key={number}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;