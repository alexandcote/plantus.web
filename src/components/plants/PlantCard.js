// @flow
import React from 'react';
import { Thumbnail, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PLANT } from '../../routes';
import type Plant from '../../types/plant';

type Props = {
  plant: Plant,
};

const PatchThumbnail = (props) => {
  // eslint-disable-next-line
  const { active, src, alt, ...otherProps } = props;
  return <Thumbnail {...otherProps} src={src} alt={alt} />;
};

class PlantCard extends React.Component {
  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Col xs={6}>
        <LinkContainer to={PLANT(this.props.plant.id)}>
          <PatchThumbnail
            src="http://www.ikea.com/gb/en/images/range-introduction/ikea-plant-and-pot__1364310122805-s4.jpg"
            alt={this.props.plant.name}
          >
            <h3>{this.props.plant.name}</h3>
            <Row>
              <Col xs={6}>Luminosity</Col>
              <Col xs={6}>Humidity</Col>
            </Row>
          </PatchThumbnail>
        </LinkContainer>
      </Col>
    );
  }
}

export default PlantCard;
