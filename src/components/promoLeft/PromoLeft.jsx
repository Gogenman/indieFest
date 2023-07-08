import style from './PromoLeft.module.scss'
import MyNav from '../nav/MyNav';
import MyButton from '../../UI/button/MyButton';
import IconstGroup from '../iconsGroup/IconsGroup';

const PromoLeft = () => {
    return ( 
        <div className={style.left}>
            <MyNav />
            <div className={style.left_container}>
                <div className={style.left_inner}>
                    <div className={style.title}>
                        <h1>indie fest</h1>
                    </div>

                    <div className={style.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tellus id nisl maximus laoreet sit amet vel purus. Maecenas tempus odio velit</div>

                    <div className={style.btns_group}>
                        <MyButton text='забронировать'/>
                        <MyButton text='информация' />
                    </div>
                </div>
                
            </div>
            <IconstGroup />
        </div>
     );
}
 
export default PromoLeft;