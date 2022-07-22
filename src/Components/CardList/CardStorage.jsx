import React from 'react';
import { Link } from 'react-router-dom';

const CardStorage = ({list}) => {
  return (
    <>
      <div className="cardStorage" key={list.id}>
            <h3>{list.id}</h3>
            <Link to={`/${list.id}`}><h4>{list.name}</h4></Link>
            <h5>{list.username}</h5>
      </div>
    </>
  );
};

export default CardStorage;
