import React from 'react';
import {Card} from "react-bootstrap";
import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react";


const Photo = () => {
    return (
        <>
            <Card style={{
                margin:'20px 20px 210px 210px',
                padding: "30px",
                height: "86.5vh",
                overflow: "auto"
            }}>
                <Card>
                    <Card.Header>photos</Card.Header>
                    <Card.Body><UnsplashReact accessKey={"WxYS4ZB8AICntbHlPdQ5EYSwJ8aNFF2sSdds-l3G1ZU"} Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}/></Card.Body>
                </Card>
            </Card>
        </>
    );
};

export default Photo;
