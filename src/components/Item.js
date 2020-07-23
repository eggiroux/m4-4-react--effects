import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick }) => {
  return (
    <Wrapper onMouseDown={handleClick}>
      <div>
        <Title>{item.name}</Title>
        <Description>
          <span>Cost: {item.cost} cookie(s). </span>
          <span>Produces: {item.value} cookie(s)/second. </span>
        </Description>
      </div>
      <Amount>{numOwned}</Amount>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 1px white solid;
  background-color: transparent;
  padding: 20px 0;
`;

const Title = styled.h2`
  margin-bottom: 4px;
  text-align: left;
  color: white;
`;

const Description = styled.div`
  color: grey;
`;

const Amount = styled.h2`
  font-size: 2em;
  color: white;
`;

export default Item;