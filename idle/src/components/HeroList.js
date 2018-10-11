import React, { Component } from 'react';
import Characters from '../data/Characters.json'
import {Grid, Row, Col} from 'react-bootstrap';
import ExpCounter from './ExpCounter'
import '../App.css'

class HeroList extends Component {
  render() {
    return (
      <div>
        {Characters.map((postDetail, index)=>{
            return(
            <Grid key={index}>
                <Row >
                    <Col xs = {2} sm={2} md={2}> 
                        <div>
                            <h5>{postDetail.name}</h5>
                        </div>
                    </Col>
                    <Col xs = {1} sm={1} md={1}> 
                        <div>
                            <h5>{postDetail.level}</h5>
                        </div>
                    </Col>
                    <Col xs = {2} sm={2} md={2}>
                        <div>
                            <h5><ExpCounter/></h5>
                        </div>
                    </Col>
                    <Col xs = {1} sm={1} md={1}> 
                        <div>
                            <h5>{postDetail.hp}</h5>
                        </div>
                    </Col>
                    <Col xs = {2} sm={2} md={2}> 
                        <div>
                            <h5>{postDetail.mana}</h5>
                        </div>
                    </Col>
                    <Col xs = {2} sm={2} md={2}> 
                        <div>
                            <h5>{postDetail.dmg}</h5>
                        </div>
                    </Col>
                    <Col xs = {2} sm={2} md={2}> 
                        <div>
                            <h5>{postDetail.items}</h5>
                        </div>
                    </Col>
                </Row>
            </Grid>
            )
        })}
      </div>
    );
  }
}

export default HeroList;
