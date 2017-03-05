// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

type Props = {
  humidity: number,
  luminosity: number,
}

export default (props: Props) => (
  <Row>
    <Col xs={6}>Humidity: {props.humidity}%</Col>
    <Col xs={6}>Luminosity: {props.luminosity} lux</Col>
  </Row>
);
