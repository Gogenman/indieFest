import style from './PromoRight.module.scss'
import { useState } from 'react';

const PromoRight = () => {
    const [boxes, setBoxes] = useState([
        {id: 'box_1', img: '#'},
        {id: 'box_2', img: '#'},
        {id: 'box_3', img: '#'},
        {id: 'box_4', img: '#'},
        {id: 'box_5', img: '#'},
        {id: 'box_6', img: '#'},
    ])
    return ( 
        <div className={style.right}>
            <div className={style.gridSection}>
                <div className={`${style.box_1} ${style.box}`}>
                    <img className={style.photo} src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="#" />

                    <div className={style.content}>
                        <h2 className={style.title}>События</h2>
                        <p className={style.descr}>Maecenas tempus odio velit, at bibendum urna pharetra in.</p>
                    </div>
                </div>
                {/* <div className={`${style.box_2} ${style.box}`}></div>
                <div className={`${style.box_3} ${style.box}`}></div>
                <div className={`${style.box_4} ${style.box}`}></div>
                <div className={`${style.box_5} ${style.box}`}></div>
                <div className={`${style.box_6} ${style.box}`}></div> */}
            </div>

        </div>
    );
}
 
export default PromoRight;