import { type } from "os";
import React from "react";
import style from "./ItemMessage.module.css";

interface Props {
    isMyMessage: boolean;
    name: string;
    message: string;
    time?: Date;
    avatar: string;
    type?: string;
}
function ItemMessage(props: Props) {
    const ComponentMessage = () => {
        
        if (props.type === "file") {
            var nameFile = props.message.split("/").at(-1);
            var typeName = nameFile?.split(".")[1];
            var urlPic;
            if (typeName === "pdf") {
                urlPic =
                    "https://play-lh.googleusercontent.com/kIwlXqs28otssKK_9AKwdkB6gouex_U2WmtLshTACnwIJuvOqVvJEzewpzuYBXwXQQ";
            } else if (typeName === "doc" || typeName === "docx") {
                urlPic =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/2048px-.docx_icon.svg.png";
            } else if (typeName === "xlsx") {
                urlPic =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/.xlsx_icon.svg/2048px-.xlsx_icon.svg.png";
            }
            return <>
                <div className={style.ItemMessage_content_mesage_message}>{nameFile}</div>
                <img style={{width:"30px", height:"30px"}} src={urlPic} alt="" />
            </>;
        } else if (props.type === "image") {
            return <img style={{width:"300px", height:"400px", objectFit:"contain"}} src={props.message} alt="" />;
        } else return <div className={style.ItemMessage_content_mesage_message}>{props.message}</div>;
            // } else return <div></div>;
    };

    return (
        <div className={style.ItemMessage} style={{}}>
            {props.isMyMessage ? (
                <div
                    className={style.ItemMessage_content}
                    style={{ justifyContent: "flex-end" }}
                >
                    <div className={style.ItemMessage_content_mesage}>
                        <div className={style.ItemMessage_content_mesage_name}>
                            {props.name}
                        </div>
                        {/* <div
                            className={style.ItemMessage_content_mesage_message}
                        >
                            {props.message}
                        </div> */}
                        <ComponentMessage />
                        <div className={style.ItemMessage_content_mesage_time}>
                            12:30
                        </div>
                    </div>
                    <div className={style.ItemMessage_content_avatar}>
                        <img src={props.avatar} alt="" />
                    </div>
                </div>
            ) : (
                <div className={style.ItemMessage_content}>
                    <div className={style.ItemMessage_content_avatar}>
                        <img src={props.avatar} alt="" />
                    </div>
                    <div className={style.ItemMessage_content_mesage}>
                        <div className={style.ItemMessage_content_mesage_name}>
                            {props.name}
                        </div>
                        {/* <div
                            className={style.ItemMessage_content_mesage_message}
                        >
                            {props.message}
                        </div> */}
                        <ComponentMessage />
                        <div className={style.ItemMessage_content_mesage_time}>
                            13:09
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemMessage;
