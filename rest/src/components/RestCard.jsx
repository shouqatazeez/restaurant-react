/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,

  } = resData?.data || {};
  return (
    <div className="rest-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestCard;