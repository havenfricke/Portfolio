import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

export default function LazyImage({ src, alt = '', height = 300, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <Skeleton variant="rectangular" width="100%" height={height} animation={false} />;
  }

  return (
    <>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          className="skeleton"
          width="100%"
          height={height}
          animation="wave"
        />
      )}
      {loaded && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          {...props}
        />
      )}
    </>
  );
}
