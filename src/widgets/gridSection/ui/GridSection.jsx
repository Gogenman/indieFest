import { Card } from 'shared/ui/card'
import style from './GridSection.module.scss'

const GridSection = ({cards, setActive}) => {
    return (
        <div className={style.gridSection}>
            {cards.map(card => 
                <Card 
                    setActive={setActive}
                    key={card.id} 
                    title={card.title} 
                    descr={card.descr} 
                    imgUrl={card.imgUrl}
                    
                    // onClick={() => setActive({status: true, imgUrl: card.imgUrl, title: card.title, descr: card.descr})}
                />
            )}
        </div>
    );
};

export default GridSection;
