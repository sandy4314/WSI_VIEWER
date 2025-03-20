import React from 'react';
import wsiImage from '../assets/wsi-image.png';

const HubView = ({ zoomArea }) => {
  return (
    <div className="hub-view">
      <h3>Hub View</h3>
      <div className="hub-image-container">
        <img src={wsiImage} alt="Hub View" className="hub-image" />
        {zoomArea && (
          <div
            className="zoom-pointer"
            style={{
              left: zoomArea.x,
              top: zoomArea.y,
              width: zoomArea.width,
              height: zoomArea.height,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default HubView;