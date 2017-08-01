import React, { Component } from 'react';
import { Row, Col, Footer } from 'react-materialize';
import '../../styles/App.css';

class Footerr extends Component {
  render() {
    return (
      <Footer id='footer' className='z-10 blue darken-2' copyrights="&copy; 2017 Copyright"
        moreLinks={
          <a className="grey-text text-lighten-2 right" href="#!">More Links</a>
        }
        links={
          <Row>
            <h5 className="grey-text text-lighten-2 example">Connect</h5>
            <Col s={3}><a className="grey-text text-lighten-2" href="#!">Link 1</a></Col>
            <Col s={3}><a className="grey-text text-lighten-2" href="#!">Link 2</a></Col>
            <Col s={3}><a className="grey-text text-lighten-2" href="#!">Link 3</a></Col>
            <Col s={3}><a className="grey-text text-lighten-2" href="#!">Link 4</a></Col>
          </Row>
        }
      >
          <h5 className="grey-text text-lighten-2">Back-Taxes Canada</h5>
          <p className="grey-text text-lighten-2">Late File Tax Return Specialists | Filing all outstanding tax returns and making payment arrangements with the Canada Revenue Agency</p>
      </Footer>
    );
  }
}

export default Footerr;
