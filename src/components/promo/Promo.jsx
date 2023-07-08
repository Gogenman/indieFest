import style from './Promo.module.scss'

import PromoLeft from '../promoLeft/PromoLeft';

import PromoRight from '../promoRight/PromoRight';

const Promo = () => {
    return ( 
        <div className={style.promo}>
            <PromoLeft />

            <PromoRight />
        </div>
    );
}
 
export default Promo;