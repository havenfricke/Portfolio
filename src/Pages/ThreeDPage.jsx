import React, { useEffect, useState } from 'react';
import ModelViewer from '../Components/ModelViewer';


function ThreeDPage() {
  // Array of model path
  const models = [
    '/Portfolio/Environment_Tree_Large_No_Leaves.obj',
    '/Portfolio/Enironment_Rock_Medium.obj',
    '/Portfolio/low_poly_starter_humanoid.obj',
    '/Portfolio/Environment_Leaf.obj',
    '/Portfolio/Environment_Tree_Medium_No_Leaves.obj',
    '/Portfolio/Environment_Tree_Small_No_Leaves.obj'
  ];

  const [currentInfoText, setInfoText] = useState();

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect (() => {
    switch (models[currentModelIndex]) {
      case '/Portfolio/Environment_Tree_Large_No_Leaves.obj':
        setInfoText("Large tree, ready for texturing.");
        break;
      case '/Portfolio/Enironment_Rock_Medium.obj':
        setInfoText("A rock. Underwhelming even with it's textured.");
        break;
      case '/Portfolio/low_poly_starter_humanoid.obj':
        setInfoText("A simple humanoid .obj for sculpting, animating and prototyping.");
        break;
      case '/Portfolio/Environment_Leaf.obj':
        setInfoText("A small leaf for constructing foliage.");
        break;
      case '/Portfolio/Environment_Tree_Medium_No_Leaves.obj':
        setInfoText("A small leaf for constructing foliage.");
        break;
      case '/Portfolio/Environment_Tree_Small_No_Leaves.obj':
        setInfoText("A small leaf for constructing foliage.");
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
