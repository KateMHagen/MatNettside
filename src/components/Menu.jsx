import React from "react"
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Menu() {
    return (
    
            <div className="menu-container">
                <header>
                    <nav>
                        <h1>Meny</h1>
                        
                    </nav>
                    <p>Hjemmelaget klassiske asiatiske matretter</p>
                </header>
                <section>
                    <div className="food-item">
                        <img className="food-img" src='https://media.istockphoto.com/id/1311559425/photo/freshly-cooked-filipino-food-called-lumpiang-shanghai.jpg?s=612x612&w=0&k=20&c=84-2RxGybiGcIImRc7wsdaay7Es1GONLQDdpTbC4jLk='/>
                        <div className="section-text">
                            <h4>Små vårruller med spicy kylling</h4>
                            <div className="section-price">125 kr (20 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        </div>
                    </div>
                    <div className="food-item">
                        <img className="food-img" src='https://media.istockphoto.com/id/1311559425/photo/freshly-cooked-filipino-food-called-lumpiang-shanghai.jpg?s=612x612&w=0&k=20&c=84-2RxGybiGcIImRc7wsdaay7Es1GONLQDdpTbC4jLk='/>
                        <div className="section-text">
                            <h4>Store vårruller m/ spicy kylling & grønnsaker</h4>
                            <div className="section-price">125 kr (10 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        </div>
                    </div>
                    <div className="food-item">
                        <img className="food-img" src="https://media.istockphoto.com/id/1135543257/photo/steamed-meat-dumpling.jpg?s=612x612&w=0&k=20&c=45e4NN7SpWbAbr3csIkni5U7IefYoBrYSvR0Gmb23ww="/>
                        <div className="section-text">
                            <h4>Siomai med spicy kylling</h4>
                            <div className="section-price">125 kr (12 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        </div>
                    </div>
                    
                </section>
            </div>
        
    )
}