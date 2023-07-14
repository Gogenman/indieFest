import style from './BtnGroup.module.scss'
import { MyButton } from 'shared/ui/button';

const BtnGroup = () => {
    return ( 
        <div className={style.btns_group}>
            <MyButton>Забронировать</MyButton>
            <MyButton>Информация</MyButton>
        </div>
    )
}
 
export default BtnGroup;