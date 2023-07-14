import { GridSection } from 'widgets/gridSection'
import style from './PromoRight.module.scss'

const PromoRight = ({cards, setActive}) => {
    return ( 
        <div className={style.right}>
            <GridSection setActive={setActive} cards={cards}/>
        </div>
    )
}
 
export default PromoRight