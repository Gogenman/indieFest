import style from './Card.module.scss';

const Card = ({title, descr, imgUrl, setActive}) => {
    return (
        <div onClick={() => setActive({status: true, imgUrl: imgUrl, title: title, descr: descr})} className={style.box}>
            <img
                className={style.photo}
                src={imgUrl}
                alt="#"
            />

            <div className={style.content}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.descr}>
                    {descr.length > 20 ? `${descr.slice(0, 20)}...` : descr}
                </p>
            </div>
        </div>
    );
};

export default Card;
