import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import ImageList from "./ImageList";

const ColumnLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const RowLayout = styled.div`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const FruitView = ({ images, themeObject }) => (
  <div style={styles}>
    <RowLayout>
      <ImageList images={images} />
    </RowLayout>
  </div>
);

export default FruitView;
