import React, { useEffect, useState } from 'react';
import ModelViewer from '../Components/ModelViewer';


function ThreeDPage() {
  // Array of model path
  const models = [
    '/Portfolio/low_poly_starter_humanoid_TestA.obj',
    '/Portfolio/low_poly_starter_humanoid_TestB.obj',
    '/Portfolio/low_poly_starter_humanoid.obj'
  ];

  const [currentInfoText, setInfoText] = useState();

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect (() => {
    switch (models[currentModelIndex]) {
      case '/Portfolio/low_poly_starter_humanoid_TestA.obj':
        setInfoText("A simple humanoid .obj for sculpting, animating and prototyping. TestA");
        break;
      case '/Portfolio/low_poly_starter_humanoid_TestB.obj':
        setInfoText("A simple humanoid .obj for sculpting, animating and prototyping. TestB");
        break;
      case '/Portfolio/low_poly_starter_humanoid.obj':
        setInfoText("A simple humanoid .obj for sculpting, animating and prototyping.");
        break;
      default:
        setInfoText("");
    }
  }, [currentModelIndex, models]);

  const handleNext = () => {
    setCurrentModelIndex((prev) => (prev + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section className="three-d-page">
      <ModelViewer modelPath={models[currentModelIndex]}/>
        <div className="model-viewer-nav">
            <button className='back-viewer-nav' onClick={handlePrev}>&#8592; &nbsp; Back</button>
                <span> {currentModelIndex + 1} / {models.length}</span>
            <button className='next-viewer-nav' onClick={handleNext}>Next &nbsp; &#8594;</button>
        </div>
        <div className='model-viewer-info'>
            {currentInfoText}
        </div>
    </section>
  );
}

export default ThreeDPage;
