import { useEffect } from "react";
import style from "./CardModal.module.scss"
import { BtnGroup } from "shared/ui/btnGroup";

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
    }, [active]);

    const onClose = () => {
        setActive({ status: false, imgUrl: "", title: "", descr: "" })
    }

    return (
        <div
            className={
                active.status ? `${style.modal} ${style.active}` : style.modal
            }
            onClick={() => onClose()}
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
                            onClick={() => onClose()}
                        >
                            &times;
                        </div>
                    </div>

                    <div className={style.right_container}>
                        <p className={style.descr}>{active.descr}</p>
                        <BtnGroup />
                    </div> 

                </div>
            </div>
        </div>
    );
};

export default CardModal;
