import css from "./CamperRoll.module.css";
import CamperUnit from "../CamperUnit/CamperUnit";
import { useState } from "react";
import PropTypes from "prop-types";

const CamperRoll = ({ ads = [] }) => { 
  const [activeCard, setActiveCard] = useState(4);
  const loadMoreCards = () => {
    setActiveCard((prevCount) => prevCount + 4);
  };

  const renderCards = () => {
    return ads.slice(0, activeCard).map((camper, index) => (
      <li className={css.camperItem} key={camper._id || index}>
        <CamperUnit camper={camper} />
      </li>
    ));
  };

  return (
    <div className={css.cardsContainer}>
      <ul className={css.cardsList}>{renderCards()}</ul>
      {activeCard < ads.length && (
        <button
          type="button"
          className={css.loadMoreButton}
          onClick={loadMoreCards}
        >
          Load more
        </button>
      )}
    </div>
  );
};

CamperRoll.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default CamperRoll;
