import { useEffect } from "react";
import style from "./CardModal.module.scss";
import MyButton from "../button/MyButton";

const CardModal = ({ active, setActive }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setActive({ status: false });
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            className={
                active.status ? `${style.modal} ${style.active}` : style.modal
            }
            onClick={() =>
                setActive({ status: false, imgUrl: "", title: "", descr: "" })
            }
        >
            <div
                className={
                    active.status
                        ? `${style.content} ${style.active}`
                        : style.content
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={style.left}>
                    <img src={active.imgUrl} alt="#" />
                </div>

                <div className={style.right}>
                    <div className={style.right_header}>
                        <h2 className={style.title}>{active.title}</h2>
                        <div
                            className={style.closeBtn}
                            onClick={() =>
                                setActive({
                                    status: false,
                                    imgUrl: "",
                                    title: "",
                                    descr: "",
                                })
                            }
                        >
                            &times;
                        </div>
                    </div>
                    <p className={style.descr}>{active.descr}</p>

                    <div className={style.btns}>
                        <MyButton text="забронировать" />
                        <MyButton text="информация" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
