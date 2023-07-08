import style from './Promo.module.scss'

import PromoLeft from '../promoLeft/PromoLeft';

import PromoRight from '../promoRight/PromoRight';

const Promo = ({cards, setActive}) => {
    return ( 
        <div className={style.promo}>
            <PromoLeft />

            <PromoRight setActive={setActive} cards={cards}/>
        </div>
    );
}
 
export default Promo;