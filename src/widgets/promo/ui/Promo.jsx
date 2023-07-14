import style from './Promo.module.scss'
import { PromoLeft } from 'widgets/promoLeft'
import { PromoRight } from 'widgets/promoRight'

const Promo = ({cards, setActive}) => {
    return ( 
        <div className={style.promo}>
            <PromoLeft />

            <PromoRight setActive={setActive} cards={cards}/>
        </div>
    )
}

export default Promo