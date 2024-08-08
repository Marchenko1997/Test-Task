import { useState } from "react";
import { useModalContext } from "../../../context/useModalContext";
import PropTypes from "prop-types";
import css from "./CamperDetails.module.css";
import ImageView from "../ImageView/ImageView";
import BookForm from '../BookForm/BookForm'
import Reviews from "../Reviews/Reviews";
import BenefitsList from "../Features/BenefitsList/BenefitsList";
import Icon from "../../Icon/Icon";
import VehicleTable from "../Features/VehicleTable/VehicleTable";

const CamperDetails = ({ camper }) => {
  const [selectedTab, setSelectedTab] = useState("Features");
  const { openModal } = useModalContext();

  const switchTab = (tabName) => {
    setSelectedTab(tabName);
    console.log(`Tab switched to: ${tabName}`);
  };

  const TabContent = ({ tabName, children }) => {
    return selectedTab === tabName ? (
      <div className={css.tabContent}>{children}</div>
    ) : null;
  };

  TabContent.propTypes = {
    tabName: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  return (
    <div className={css.modalBody}>
      <div className={css.modalHeader}>
        <h2 className={css.modalTitle}>{camper.name}</h2>
        <div className={css.modalStats}>
          <Icon nameIcon="rating" className={css.ratingIcon} />
          <p className={css.ratingText}>{camper.rating}</p>
          <p className={css.reviewCount}>
            &#x2768;{camper.reviews.length} Reviews&#x2769;
          </p>
          <Icon nameIcon="location" className={css.locationIcon} />
          <p>{camper.location}</p>
        </div>
        <p className={css.priceText}>&#8364;{camper.price.toFixed(2)}</p>
      </div>

      <div className={css.modalContent}>
        <ul className={css.galleryList}>
          {camper.gallery.map((image, idx) => (
            <li key={idx} className={css.imageItem}>
              <img
                src={image}
                alt={camper.name}
                className={css.camperImage}
                onClick={() => {
                  console.log(
                    `Opening imageViewer modal with image index: ${idx}`
                  );
                  openModal(
                    "images_modal",
                    <ImageView images={camper.gallery} imageIndex={idx} />
                  );
                }}
              />
            </li>
          ))}
        </ul>
        <p className={css.descriptionText}>{camper.description}</p>
        <div className={css.tabButtons}>
          <button
            type="button"
            onClick={() => switchTab("Features")}
            className={
              selectedTab === "Features" ? css.activeButton : css.tabButton
            }
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => switchTab("Reviews")}
            className={
              selectedTab === "Reviews" ? css.activeButton : css.tabButton
            }
          >
            Reviews
          </button>
        </div>
        <div className={css.featuresContainer}>
          <TabContent tabName="Features">
            <div className={css.benAndTable}>
            <BenefitsList camper={camper} />
            <h3 className={css.featuresTitle}>Vehicle details</h3>
      
              <VehicleTable camper={camper} />
              </div>

            <BookForm />
          </TabContent>
        </div>
        <div className={css.reviewContainer}>
        <TabContent tabName="Reviews">
          {camper.reviews && camper.reviews.length > 0 ? (
            <Reviews feedbacks={camper.reviews} />
          ) : (
            <p>No reviews available.</p>
          )}
          <BookForm/>
        </TabContent>
        </div>
        
      </div>
    </div>
  );
};

CamperDetails.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CamperDetails;
