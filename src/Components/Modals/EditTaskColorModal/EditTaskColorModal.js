import styles from "./EditTaskColorModal.module.css";
import {Modal} from "../../index";
import {SwatchesPicker} from "react-color";
import React from "react";
import classNames from "classnames";

const EditTaskColorModal = (props) => {

    const editTaskColorSubmitHandler = () => {
        /*logic*/
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editTaskColorSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la couleur de la tâche</div>
                <SwatchesPicker className='mt-2' color={props.color} onChange={props.changeColor}/>
                <button type="submit" className={classNames(styles["editTask__color"], styles["btn-1"])}>Modifier la couleur de la tâche</button>
            </form>
        </Modal>
    );
};

export default EditTaskColorModal;