import React, {useState} from 'react';

import styles from "./Appearance.module.css";
import {SliderPicker, TwitterPicker} from "react-color";
import {Button, Card, Col, Row} from "react-bootstrap";

const Appearance = (props) => {
    const [color, setColor] = useState('');
    const [colorsutilise, setColorsutilise] = useState([]);
    const [colors, setColors] = useState(["#0079BF", "#DDAF6F", "#89609E", "#C57B6E", "#AA8DB9", "#CD5A91", "#4BBF6B", "#4AC3D9", "#838C91"]);

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <h4>App Background Color</h4>
                <SliderPicker color={color} onChange={e => setColor(e.hex)}/>
                <span style={{margin: "5px"}}/>
                <TwitterPicker color={color} onChange={e => setColor(e.hex)}/>
                <hr size="5px"/>
                <h4>Couleurs recents</h4>
                <div className={styles.row}>
                    {colorsutilise.map((cu, i) => (
                        <Col>
                            <Card className={"ccard"}
                                  style={{backgroundColor: cu, padding: "60px", border: "3px solid lightgrey"}}
                                  onClick={() => {
                                      setColor(colors[i]);
                                  }}/>
                        </Col>
                    ))}
                </div>
                <hr size="5px"/>
                <h4>Couleurs Kanban</h4>
                <div className={styles.row}>
                    {colors.map((cols, i) => (
                        <Col>
                            <Card className={"ccard"}
                                  style={{backgroundColor: cols, padding: "60px", border: "3px solid lightgrey"}}
                                  onClick={() => {
                                      setColor(colors[i]);
                                  }}/>
                        </Col>
                    ))}

                </div>
                <Button variant={"success"} onClick={() => {
                    props.bg(color);
                    setColorsutilise([...colorsutilise, color])
                }}>Save</Button>
            </div>
        </div>
    );
};

export default Appearance;
