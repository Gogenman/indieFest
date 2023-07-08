import GridSection from '../gridSection/GridSection';
import style from './PromoRight.module.scss'
import { useState } from 'react';

const PromoRight = ({cards, setActive}) => {


    return ( 
        <div className={style.right}>
            <GridSection setActive={setActive} cards={cards}/>
        </div>
    );
}
 
export default PromoRight;