import React from "react"
import { faCirclePlus, faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Menu() {
    return (
        <div>
           
                <header>
                    <h1>Meny</h1>
                    <p>Hjemmelaget klassiske asiatiske matretter</p>
                </header>
            <div className="menu-container">
                <section>
                    <div className="food-item">
                        <img className="food-img" src='https://media.istockphoto.com/id/1311559425/photo/freshly-cooked-filipino-food-called-lumpiang-shanghai.jpg?s=612x612&w=0&k=20&c=84-2RxGybiGcIImRc7wsdaay7Es1GONLQDdpTbC4jLk='/>
                        <h3>Små vårruller m/ spicy kylling</h3>
                        <div>125 kr (20 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        <div>⭐️⭐️⭐️⭐️⭐️ 2 Reviews</div>
                    </div>
                    <div className="food-item">
                        <img className="food-img" src='https://media.istockphoto.com/id/1311559425/photo/freshly-cooked-filipino-food-called-lumpiang-shanghai.jpg?s=612x612&w=0&k=20&c=84-2RxGybiGcIImRc7wsdaay7Es1GONLQDdpTbC4jLk='/>
                        <h3>Store vårruller m/ spicy kylling & grønnsaker</h3>
                        <div>125 kr (10 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        <div>⭐️⭐️⭐️⭐️⭐️ 2 Reviews</div>
                    </div>
                    <div className="food-item">
                        <img className="food-img" src="https://media.istockphoto.com/id/1135543257/photo/steamed-meat-dumpling.jpg?s=612x612&w=0&k=20&c=45e4NN7SpWbAbr3csIkni5U7IefYoBrYSvR0Gmb23ww="/>
                        <h3>Siomai m/ spicy kylling</h3>
                        <div>125 kr (12 stk) <button className="item-btn"><FontAwesomeIcon icon={faCircleMinus}/></button> 0 <button className="item-btn"><FontAwesomeIcon icon={faCirclePlus}/></button></div>
                        <div>⭐️⭐️⭐️⭐️⭐️ 2 Reviews</div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}