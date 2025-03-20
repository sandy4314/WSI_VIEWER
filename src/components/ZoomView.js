import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import wsiImage from '../assets/wsi-image.png';
import detectionData from '../data.json';

const ZoomView = ({ setZoomArea }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  const handleTransform = (e) => {
    const { positionX, positionY, scale } = e.state;
    setPosition({ x: positionX, y: positionY, scale });

    const hubWidth = 200;
    const hubHeight = 100;
    const imageWidth = 1024;
    const imageHeight = 512;

    const visibleWidth = hubWidth / scale;
    const visibleHeight = hubHeight / scale;
    const x = (-positionX * hubWidth) / imageWidth;
    const y = (-positionY * hubHeight) / imageHeight;

    setZoomArea({
      x: x > 0 ? x : 0,
      y: y > 0 ? y : 0,
      width: visibleWidth,
      height: visibleHeight,
    });
  };

  // Log the raw detectionData
  console.log('Raw detectionData:', detectionData);

  // Parse the inference_results string into a JavaScript object
  let inferenceResults;
  try {
    inferenceResults = JSON.parse(detectionData.inference_results);
    console.log('Parsed inferenceResults:', inferenceResults);
  } catch (error) {
    console.error('Error parsing inference_results:', error);
    inferenceResults = { output: { detection_results: [] } };
  }

  // Access detection_results from the parsed object
  const detectionResults = inferenceResults?.output?.detection_results || [];
  console.log('Detection Results:', detectionResults);

  return (
    <div className="zoom-view">
      <TransformWrapper onTransformed={handleTransform}>
        <TransformComponent>
          <div className="zoom-image-container">
            <img src={wsiImage} alt="Whole Slide Image" className="zoom-image" />
            {detectionResults.length > 0 ? (
              detectionResults.map((box, index) => {
                const [x1, y1, x2, y2] = box;
                return (
                  <div
                    key={index}
                    className="bounding-box"
                    style={{
                      left: x1,
                      top: y1,
                      width: x2 - x1,
                      height: y2 - y1,
                    }}
                  ></div>
                );
              })
            ) : (
              <p>No detection results available.</p>
            )}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomView;