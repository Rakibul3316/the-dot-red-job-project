import React from 'react'
import { cardData } from '../Assets/dummy-data/card-data';
const Dashboard_Content = () => {

    return (
        <div className='px-5'>
            <h1 className='text-3xl font-normal mb-7'>Dashboard</h1>

            <div className="row">
                {
                    cardData.map((card, index) => (
                        <div key={index} className='card_area col'>
                            <div className="card">
                                <div className="card_body">
                                    <div className="row items-center">
                                        <div className="card_content mr-2">
                                            <div className="card_title">{card.title}</div>
                                            <div className="card_amount">{card.amount}</div>
                                            <div className="card_increment">
                                                {card.incremtntIcon}<span>{card.increment}</span>
                                                <span>{card.smallText}</span>
                                            </div>
                                        </div>
                                        <div className="card_icon">
                                            {card.Icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Dashboard_Content;