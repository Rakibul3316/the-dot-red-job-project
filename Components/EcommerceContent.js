import React, { useState } from 'react'
import styles from '../styles/ecommerce.module.css';
import { customersData } from '../Assets/dummy-data/customersData';
import Pagination from './Pagination';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const EcommerceContent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);
    // const [searchOrderLists, setSearchOrderLists] = useState([]);
    // setSearchOrderLists(customersData);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrder = customersData.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const handleSearchOrder = (e) => {
    //     const searchText = e.target.value;
    //     if (searchText.length > 0) {
    //         const searchData = customersData.filter((item) => {
    //             const itemData = item.orderDate;
    //             const textData = searchData.trim().toLowerCase();
    //             return itemData.trim().toLowerCase().indexOf(textData) !== -1;
    //         });
    //         console.log('searchText :>> ', searchText);
    //     }
    // }

    return (
        <div className={styles.px_5}>
            <h1 className={styles.dashboard_title}>Order List</h1>

            <div className={styles.search_order}>
                <form className={styles.form_flex}>
                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>Selet Date</label>
                            <input className={styles.order_search_input} type="text" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>End Date</label>
                            <input className={styles.order_search_input} type="text" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.text_left}>
                            <label className={styles.input_title}>Location</label>
                            <input className={styles.order_search_input} type="text" />
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.submit_btn}>
                            <button>
                                <ContentPasteIcon /> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className={styles.row}>
                <div className={styles.table_container}>
                    <table className={styles.table}>
                        <thead className={styles.table_head}>
                            <tr>
                                {/* <th className={styles.table_header}>No.</th> */}
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
                                    {/* <td className={styles.table_data}>{index + 1}</td> */}
                                    <td className={styles.table_data}>{customer.orderDate}</td>
                                    <td className={styles.table_data}>
                                        <a href="#">{customer.orderNumber}</a>
                                    </td>
                                    <td className={styles.table_data}>
                                        <span className=
                                            {
                                                customer.statusText == 'Delivered' ? 'text-green-800 bg-green-200'
                                                    : customer.statusText == 'Canceled' ? 'text-red-800 bg-red-200'
                                                        : customer.statusText == 'Pending' ? 'text-yellow-800 bg-yellow-200'
                                                            : customer.statusText == 'Shipping' ? 'text-orange-800 bg-orange-200'
                                                                : 'text-blue-800 bg-blue-200'
                                            }
                                        >
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
                    <Pagination ordersPerPage={ordersPerPage} totalOrders={customersData.length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
}

export default EcommerceContent;

// 'text-yellow-800 bg-yellow-200'