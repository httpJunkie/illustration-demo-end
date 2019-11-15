import React from "react";
import PropTypes from 'prop-types';
import NoImage from './NoImage';

function IllustrationDetails({ illustration }) {
  return (illustration
    ? (<>
      <div><img className={`illCrop`} src={illustration.product.product_image} alt={`alt`}></img></div>
      <div className="illPrice">{illustration.product.name} (${illustration.product.price})</div>
    </>)
    : (<>
      <div><NoImage fill={`#FEF1F4`} stroke={`#4C4F5A`} /></div>
      <div className="illMessage">Select an Illustration</div>
    </>)
  );
};

export default IllustrationDetails;

IllustrationDetails.propTypes = {
  illustrationData: PropTypes.object
};
