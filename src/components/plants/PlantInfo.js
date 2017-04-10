// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

type Props = {
  spec: {
    humidity: number,
    luminosity: number,
    temperature: number,
    waterLevel: number,
  },
}

export default (props: Props) => {
  if (!props.spec) {
    return (
      <Row>
        <Col xs={6}>Humidity: <br />NA</Col>
        <Col xs={6}>Luminosity: <br />NA</Col>
        <Col xs={6}>Temperature: <br />NA</Col>
        <Col xs={6}>Water level: <br />NA</Col>
      </Row>
    );
  }
  return (
    <Row>
      <Col xs={6}>Humidity: <br />{props.spec.humidity}%</Col>
      <Col xs={6}>Luminosity: <br />{props.spec.luminosity}%</Col>
      <Col xs={6}>Temperature: <br />{props.spec.temperature}°C</Col>
      <Col xs={6}>Water level: <br />{props.spec.waterLevel}%</Col>
    </Row>
  );
};
