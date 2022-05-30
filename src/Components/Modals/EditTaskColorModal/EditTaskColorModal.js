import styles from "./EditTaskColorModal.module.css";
import {Modal} from "../../index";
import {SwatchesPicker} from "react-color";
import React from "react";
import classNames from "classnames";
import axios from "axios";

const EditTaskColorModal = (props) => {

    const editTaskColorSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const task = {
            nameTask: props.task.nameTask,
            descriptionTask: props.task.descriptionTask ? props.task.descriptionTask : "",
            colorTask: props.color,
            startDate: props.task.startDate,
            finishDate: props.task.finishDate,
            section: props.section
        }
        axios.put(`http://localhost:5000/tasks/update/${props.task.idTask}`, task)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        window.location.reload();
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
