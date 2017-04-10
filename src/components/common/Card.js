// @flow
import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap';

type Props = {
  img: string,
  alt: string,
  title: string,
  children?: [],
};

class Card extends React.Component {
  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Col xs={6} md={4}>
        <Thumbnail src={this.props.img} alt={this.props.alt}>
          <h3>{this.props.title}</h3>
          {this.props.children}
        </Thumbnail>
      </Col>
    );
  }
}

export default Card;
