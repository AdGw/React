import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Grid>
            <Row>
                <Col xs = {9} md = {9}>
                    <h1>Dashboard</h1>
                    <h4>Welcome to the dashboard</h4>
                </Col>
                <Col xs = {3} md = {3}>
                    <img src = {this.props.profile.picture} alt = "presentation"/>
                    <h3>{this.props.profile.nickname}</h3>
                    <h3>{this.props.profile.email}</h3>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
