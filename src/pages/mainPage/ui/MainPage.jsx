import { Promo } from "widgets/promo"

const MainPage = ({setActive, cards}) => {
    return ( 
        <div>
            <Promo setActive={setActive} cards={cards}/>
        </div>
    )
}
 
export default MainPage