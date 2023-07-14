import style from './IconsGroup.module.scss'
import { Insta } from 'shared/assets';
import { Twitter } from 'shared/assets';
import { Facebook } from 'shared/assets';

const IconstGroup = () => {
    return ( 
        <div className={style.icons_group}>
            <Insta w={'23px'} h={'23px'} c={'#fff'}/>
            <Facebook w={'23px'} h={'23px'} c={'#fff'}/>
            <Twitter w={'23px'} h={'23px'} c={'#fff'}/>
        </div>
    );
}
 
export default IconstGroup;