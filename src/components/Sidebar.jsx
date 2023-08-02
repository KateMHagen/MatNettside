import { React, useState} from "react"
import { faRightFromBracket, faReceipt, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import PreviousOrders from "../pages/PreviousOrders";

export default function Sidebar() {
    const [open, isOpen] = useState("/")

    function openSidebar() {
        if(open === "/previousOrders") {
            isOpen("/")
        } else {
            isOpen("/previousOrders")
        }
    }
    return (
        <>
            <div className="icon-div-menu">
                <Link to={open}>
                    <FontAwesomeIcon icon={faReceipt} className="icon" onClick={openSidebar}/>
                </Link>
                
                <FontAwesomeIcon icon={faCartShopping} className="icon"/>
            </div>
            
            <div className="sidebar-container">
                <header>
                    <nav>
                        <h1 className="sidebar-name">Hei Kate!</h1>
                        
                    </nav>
                    <section>
                        
                              {open === "/previousOrders" ? <PreviousOrders/> : null}
                            
                        <div>
                            <FontAwesomeIcon icon={faRightFromBracket} className="icon-sidebar"/>
                            <FontAwesomeIcon icon={faRightFromBracket} className="icon-sidebar"/>
                        </div>
                      
                        <div>
                                <img className="sidebar-img" src='https://media.istockphoto.com/id/1311559425/photo/freshly-cooked-filipino-food-called-lumpiang-shanghai.jpg?s=612x612&w=0&k=20&c=84-2RxGybiGcIImRc7wsdaay7Es1GONLQDdpTbC4jLk='/>
                                <div>
                                    <p>1 x Små Vårruller</p>
                                    <p>125 kr</p>
                                    <p>x Remove</p>
                                </div>
                        </div>
                    </section>
                </header>
            </div>
        </>
    )
}