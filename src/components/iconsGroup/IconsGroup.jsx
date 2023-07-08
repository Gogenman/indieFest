import style from './IconsGroup.module.scss'
import Insta from "../../assets/icons/Insta";
import Twitter from "../../assets/icons/Twitter";
import Facebook from "../../assets/icons/Facebook";

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