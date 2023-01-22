import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../../Shared/LeftSide/LeftSide';
import RightSide from '../../Shared/RightSide/RightSide';
import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.bg}> 
                <Container>
                    <Row>
                        <Col lg="7">
                                <LeftSide></LeftSide>
                        </Col>

                        <Col lg="5">
                                <RightSide></RightSide>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Home;