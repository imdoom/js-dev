import React from 'react';
import Statistics from './Statistics.js';
import {Container, Row, Col, Table} from 'react-bootstrap';

const Attendance = ({chamber}) => {
    const stats = <Statistics/>; //stats not imported
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Attendance</h2>
                    <br/>
                    <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.
                    The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.</p>
                </Col>
                <Col>
                    <h3>{chamber} at a glance</h3> //chamber is not being reflected
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Party</th>
                            <th>Number of Reps</th>
                            <th>% Voted with Prty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Democrats</td>
                            {/* <td>{stats.senate.numberOfDemocrats}</td> */}       //not able to use stats here
                            {/* <td>{stats.house.averageVotesWithPartyDem}</td> */}
                            </tr>
                            <tr>
                            <td>Republicans</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <td>Independents</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Least Engaged (Bottom 10% Attendance)</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Number of Missed Votes</th>
                            <th>% Missed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            </tr>
                            <tr>
                            <td>Republicans</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <td>Independents</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h3>Most Engaged (Top 10% Attendance)</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Number of Missed Votes</th>
                            <th>% Missed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Name</td>
                            <td>{}</td>
                            <td>{}</td>
                            </tr>
                            <tr>
                            <td>Name</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <td>Name</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Attendance;
