import React from "react";
import '@google/model-viewer';

import {Card, CardGroup, Container, Col, Row} from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import Button from "react-bootstrap/Button";
import {Route, Link} from "react-router-dom";
import CardInfo from "../CardInfo";



const Gallery= () =>  {
    return (
        <Container>
            <Row>
                <Col md>
                    <Link to={ROUTES.CARDINFO}>
                        <Card onClick>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>SculptureName</Card.Title>
                                <Card.Text>
                                    Quick Sculpture Info
                                </Card.Text>
                            </Card.Body>
                            <Button variant={'primary'}>ENTER GALLERY</Button>

                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Link>

                </Col>


            </Row>

        </Container>
    );
}

export default Gallery;
