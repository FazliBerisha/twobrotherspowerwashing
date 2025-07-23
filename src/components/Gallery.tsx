'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const beforeAfterImages = [
    {
      id: 1,
      before: "/Back Patio Before.jpg",
      after: "/Back Patio After.jpg",
      title: "Back Patio Restoration",
      description: "Complete transformation of weathered patio stone"
    },
    {
      id: 2,
      before: "/Backyard Patio Before.jpg",
      after: "/Backyard Patio After.jpg",
      title: "Backyard Patio Transformation",
      description: "Outdoor space restored to its original pristine condition"
    },
    {
      id: 3,
      before: "/Front Patio Before.jpg",
      after: "/Front Patio After.jpg",
      title: "Front Entrance Patio",
      description: "Professional cleaning restored original beauty"
    },
    {
      id: 4,
      before: "/Stone Railing Before.jpg",
      after: "/Stone Railing After.jpg",
      title: "Stone Railing Cleaning",
      description: "Years of dirt and stains completely removed"
    },
    {
      id: 5,
      before: "/Stone Stairs Before.jpg",
      after: "/Stone Stairs After.jpg",
      title: "Stone Stairway Revival",
      description: "Deep cleaning brought these stairs back to life"
    },
    {
      id: 6,
      before: "/Stone Wall Before.jpg",
      after: "/Stone Wall After.jpg",
      title: "Stone Wall Restoration",
      description: "Professional pressure washing revealed pristine stonework"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Before & After Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations we have achieved for our clients. 
            These results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <div className="flex-1 relative">
                  <Image 
                    src={project.before} 
                    alt={`${project.title} - Before`}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(project.before)}
                  />
                  <div className="absolute top-2 left-2 bg-white text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="flex-1 relative">
                  <Image 
                    src={project.after} 
                    alt={`${project.title} - After`}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(project.after)}
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image 
              src={selectedImage} 
              alt="Enlarged view"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}