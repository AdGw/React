import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../App.css'

class Layout extends Component {
  render() {
     
    return (
      <div className="layout">
        <Grid className="show-grid layout">
            <Row >
            <Col xs = {2} sm={2} md={2}>
                Profession
                <br />
                Knight
                <br />
                Druid
            </Col>
            <Col xs = {2} sm={2} md={2}>
                Level
                <br />
                5
                <br />
                23
            </Col>
            <Col xs = {2} sm={2} md={2}>
                Hp
                <br />
                1000
                <br />
                500
            </Col>
            <Col xs = {2} sm={2} md={2}>
                Mana
                <br />
                300
                <br />
                245
            </Col>
            <Col xs = {2} sm={2} md={2}>
                Armor
                <br />
                23
                <br />
                33
            </Col>
            <Col xs = {2} sm={2} md={2}>
                Items
                <br />
            </Col>
            <br />
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
