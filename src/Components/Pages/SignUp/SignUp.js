import { useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./SignUp.module.css"
import classNames from "classnames";
import axios from "axios";



const SignUp = () => {

    const [usernameEntered, setUsernameEntered] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [passEntered, setPassEntered] = useState("");
    const [confirmPassEntered, setConfirmPassEntered] = useState("");
    const [validateUser, setValidateUser] = useState(true);
    const [validatePass, setValidatePass] = useState(true);
    const [validateConfirmPass, setValidateConfirmPass] = useState(true);

    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    let navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUsernameEntered(event.target.value)
        if(!usernameEntered.trim().length || usernameEntered.trim().length < 5){
            setValidateUser(false);
            return;
        }
        setValidateUser(true);
    }

    const validatePassword = (password) => {
        return regex.test(password);
    }

    const passChangeHandler = (event) => {
        setPassEntered(event.target.value)
        if(!validatePassword(passEntered)){
            setValidatePass(false);
            return;
        }
        setValidatePass(true);
    }

    const confirmPassChangeHandler = (event) => {
        setConfirmPassEntered(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(!(validateUser && validatePass && (confirmPassEntered === passEntered))) {
            setValidateConfirmPass(false);
            return;
        }
        let newUser = {
            firstName: prenom,
            lastName: nom,
            username: usernameEntered,
            email: email,
            password: passEntered
,            joindate: new Date(),
        }
        axios.post('https://kanbanboardbackend.herokuapp.com/users/add', newUser)
            .then(res =>{
                console.log(res);
            }).catch(e =>
            console.log(e)
        )
        navigate('/');
    }

    return (
        <div className={styles.page}>
            <div className={styles.signup}>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={usernameEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validateUser})}
                           onChange={usernameChangeHandler} placeholder="Nom d'utilisateur" required="required"/>
                    {!validateUser && <p className={styles.errorMessage}>username non valide au moins 5 caractères!</p>}
                    <input type="text" value={nom}
                           className={classNames(styles.input, {[styles.invalid]: !validateUser})}
                           onChange={(e) => setNom(e.target.value)} placeholder="Nom" required="required"/>
                    <input type="text" value={prenom}
                           className={classNames(styles.input, {[styles.invalid]: !validateUser})}
                           onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" required="required"/>

                    <input type="email" value={email}
                           className={classNames(styles.input, {[styles.invalid]: !validateUser})}
                           onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="required"/>
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validatePass})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    {!validatePass && <p className={styles.errorMessage}>Le mot de passe doit comporter au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial, et doit comporter au moins huit caractères.</p>}
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validateConfirmPass})}
                           onChange={confirmPassChangeHandler} placeholder="Confirmer mot de passe" required="required"/>
                    {!validateConfirmPass && <p className={styles.errorMessage}>le mot de passe ne correspond pas à la confirmation du mot de passe</p>}
                    <button type="submit" className={styles.button}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
