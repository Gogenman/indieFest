import style from './MyButton.module.scss'

const MyButton = ({text}) => {
    return ( 
        <button className={style.btn}>{text}</button>
    );
}
 
export default MyButton;