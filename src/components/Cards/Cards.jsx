

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Cards.css';

const Cards = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <Link to={`/logement/${item.id}`} className="card-link">
        <div className="img-container">
          <img src={item.cover} alt={item.title || 'No title available'} />
          <h2 className="text">{item.title || 'No title available'}</h2>

        </div>
      </Link>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Cards;
