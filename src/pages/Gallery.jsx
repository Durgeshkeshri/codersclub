import React from 'react';

const imageUrls = [
  "https://via.placeholder.com/369x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245",
  "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/369x245",
  "https://via.placeholder.com/369x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245",
  "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/369x245",
  "https://via.placeholder.com/369x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245",
  "https://via.placeholder.com/245x245", "https://via.placeholder.com/245x245", "https://via.placeholder.com/369x245"
];

const Gallery = () => {
  return (
    <div className="w-full max-w-[859px] mx-auto max-sm:px-2 mt-6">
      {imageUrls.map((url, index) => {
        const rowIndex = Math.floor(index / 3);
        const isOddRow = rowIndex % 2 === 0;
        const isLargeImage = (index % 3 === 0 && isOddRow) || (index % 3 === 2 && !isOddRow);

        return (
          
          <div
            key={index}
            className={`inline-block ${
              isLargeImage ? "w-[369px] h-[245px]" : "w-[245px] h-[245px]"
            } object-cover p-1 rounded-2xl`}
            style={{
              verticalAlign: 'top',
              width: isLargeImage ? 'calc(100% * 369 / 859)' : 'calc(100% * 245 / 859)',
              height: 'auto'
            }}
          >
            <img
              src={url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover p-1 max-sm:p-[1px] rounded-2xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
