import React, {useState} from 'react';
import {Navbar, Section} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useParams} from "react-router-dom";

const Workspace = (props) => {

    let { sessionId } = useParams();
    const [sections, setSections] = useState(props.sessions[sessionId].sections);

    const newSection = {
        id:6,
        sectionName:"New Section"
    }

    const addSection = (newSection) => {
        setSections((prevSections => [...prevSections,newSection]));
    }

    return (
            <div className={styles.body}>
                <Navbar sessionInfo={props.sessions[sessionId]}/>
                <div className={styles.layout}>
                    {sections.map((e) => (
                        <Section section={e} key={e.sectionId}>
                            {
                                e.tasks.map((task,i) =>(
                                    <Task task={task} key={task.taskId}/>
                                ))
                            }
                        </Section>))
                    }
                    <div className={styles.addSection} onClick={()=>addSection(newSection)}>
                        <span>Ajouter une Section</span>
                        <FontAwesomeIcon icon={faCirclePlus}/>
                    </div>
                </div>
            </div>
    );
};

export default Workspace;
