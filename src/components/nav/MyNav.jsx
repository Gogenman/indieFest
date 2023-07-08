import style from './MyNav.module.scss'

const MyNav = () => {
    return ( 
        <nav className={style.nav}>
            <li className={style.link}>новости</li>
            <li className={style.link}>инфо</li>
            <li className={style.link}>билеты</li>
            <li className={style.link}>контакты</li>
        </nav>
    );
}
 
export default MyNav;