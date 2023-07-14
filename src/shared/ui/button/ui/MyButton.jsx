import style from './MyButton.module.scss'

const MyButton = ({children}) => {
    return ( 
        <button className={style.btn}>{children}</button>
    )
}
 
export default MyButton