import style from './PromoLeft.module.scss'
import { MyNav } from 'widgets/nav'
import { BtnGroup } from 'shared/ui/btnGroup'
import { IconstGroup } from 'shared/ui/iconsGroup'

const PromoLeft = () => {
    return ( 
        <div className={style.left}>
            <div className={style.left_container}>
                <div className={style.left_inner}>
                    <MyNav /> 
                    
                    <div className={style.title}>
                        <h1>indie fest</h1>
                    </div>

                    <div className={style.descr}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tellus id nisl maximus laoreet sit amet vel purus. Maecenas tempus odio velit
                        </p>
                    </div>

                    <BtnGroup />
                </div>
            </div>
            <IconstGroup />
        </div>
     )
}
 
export default PromoLeft