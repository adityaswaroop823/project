import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles((theme) => ({
    modalStyle: {
        height: "600px",
        width: "80%",
        margin: "0px auto",
        display: "flex",
        flexWrap: "wrap",
        overflowX: "scroll",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "grey",
        border: "none",
        outline: "none",
        "@media (max-width: 1280px)": {
            marginRight: "0px",
        },
    },
    leftdiv: {
        maxWidth: "320px",
        height: "100%",
        minWidth: "300px",
        backgroundColor: "red",
        display: "none",
        "@media (max-width: 1280px)": {
            display: "none",
        },
    },
    rightdiv: {
        display: "none",
        "@media (max-width: 1280px)": {
            display: "none",
        },
    },
}));

const PopUpModal = ({ children, isOpen = false, handleclose = false }) => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles();

    return (
        <div>
            <Modal open={isOpen} onClose={handleClose}>
                <div className={classes.modalStyle}>
                    <div className={classes.leftdiv}></div>
                    {children}
                    <div className={classes.rightdiv}></div>
                </div>
            </Modal>
        </div>
    );
};

export default PopUpModal;
