import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const ModelViewer = ({ modelPath }) => {
  const mountRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Hide overlay on first interaction
    const handleUserInteraction = () => {
      if (showOverlay) {
        setShowOverlay(false);
        currentMount.removeEventListener('mousedown', handleUserInteraction);
        currentMount.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    currentMount.addEventListener('mousedown', handleUserInteraction);
    currentMount.addEventListener('touchstart', handleUserInteraction);

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      50,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    camera.zoom = 2;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth + 10, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 800;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-90, -180, 0); // adjust lighting as needed
    scene.add(directionalLight);

    // Load the OBJ model using the passed modelPath
    const loader = new OBJLoader();
    loader.load(modelPath, (obj) => {
        obj.position.y = - 100; // Adjust vertical position as needed
        scene.add(obj);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('An error occurred while loading the OBJ:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth + 10, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount or before re-running effect (on modelPath change)
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', handleUserInteraction);
      currentMount.removeEventListener('touchstart', handleUserInteraction);
      currentMount.removeChild(renderer.domElement);
    };
  }, [modelPath, showOverlay]); // Re-run effect when modelPath changes

  return (
    <div className="model-viewer" ref={mountRef}>
      {showOverlay && <div className="overlay">Drag to rotate, scroll to zoom</div>}
    </div>
  );
};

export default ModelViewer;
