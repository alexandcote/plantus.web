// @flow
import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

type Props = {
  img: string,
  alt: string,
  title: string,
  link: string,
  children?: [],
};

const PatchThumbnail = (props) => {
  // eslint-disable-next-line
  const { active, src, alt, ...otherProps } = props;
  return <Thumbnail {...otherProps} src={src} alt={alt} />;
};

class Card extends React.Component {
  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Col xs={6}>
        <LinkContainer to={this.props.link}>
          <PatchThumbnail src={this.props.img} alt={this.props.alt}>
            <h3>{this.props.title}</h3>
            {this.props.children}
          </PatchThumbnail>
        </LinkContainer>
      </Col>
    );
  }
}

export default Card;
