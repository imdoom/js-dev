import React from 'react';
import Statistics from './Statistics.js';
import {Container, Row, Col, Table} from 'react-bootstrap';

const PartyLoyalty = ({chamber}) => {
    const stats = <Statistics/>;
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Party Loyalty</h2>
                    <br/>
                    <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda.</p>
                </Col>
                <Col>
                    <h3>{chamber} at a glance</h3>
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
                            {/* <td>{stats.senate.numberOfDemocrats}</td> */}
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
                    <h3>Least Loyal (Bottom 10% of Party)</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Number Party Votes</th>
                            <th>% Party Votes</th>
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
                    <h3>Most Loyal (Top 10% of Party)</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Number Party Votes</th>
                            <th>% Party Votes</th>
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

export default PartyLoyalty;
