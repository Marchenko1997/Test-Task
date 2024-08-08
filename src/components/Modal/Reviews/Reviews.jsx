import PropTypes from 'prop-types';
import css from './Reviews.module.css';
import Icon from '../../Icon/Icon';

const Reviews= ( { feedbacks = [] }) => {
  return (
    <ul className={css.reviewCollection}>
      {feedbacks.map(feedback => {
        const initial = feedback.reviewer_name.charAt(0).toUpperCase();
        const rating = feedback.reviewer_rating;
        return (
          <li key={feedback.reviewer_name + feedback.reviewer_rating} className={css.reviewItem}>
            <div className={css.itemHeader}>
              <div className={css.initialBadge}>{initial}</div>
              <div>
                <h3 className={css.reviewerName}>{feedback.reviewer_name}</h3>
                <div className={css.ratingStars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      nameIcon="rating"
                      className={
                        index < rating
                          ? css.activeStar
                          : css.inactiveStar
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.feedbackText}>{feedback.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

Reviews.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
