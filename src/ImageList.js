import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  max-height: 200px;
  border: solid;
  &:hover {
    background: palevioletred;
  }
`;
// 
const Image = styled.img`
  max-width: "100%",
  max-height: "100%"
`

const styles = {
  img: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
};


//Aux
const Aux = props => props.children;
const ImageList = ({ images }) => {

  return (
    <Aux>
      {images.map(image => (
        <Card>
          <Image style={styles.img} key={image} src={image} />
        </Card>
      ))}
    </Aux>
  );
};

export default ImageList;
