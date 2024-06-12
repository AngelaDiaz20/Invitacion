"use client"
import React from 'react';

const GalleryImage = ({ src, alt, span = 1 }) => (
    <div className={`h-auto max-w-full rounded-lg object-cover object-center row-span-${span}`}>
      <img
        className="h-full w-full rounded-lg object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );

export default GalleryImage;
