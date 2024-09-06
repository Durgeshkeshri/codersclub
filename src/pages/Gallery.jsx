import img1 from '../ImagesCC/img1.jpg';
import img2 from '../ImagesCC/img2.jpg';
import img3 from '../ImagesCC/img3.jpg';
import img4 from '../ImagesCC/img4.jpg';
import img5 from '../ImagesCC/img5.jpg';
import img6 from '../ImagesCC/img6.jpg';
import img7 from '../ImagesCC/img7.jpg';
import img8 from '../ImagesCC/img8.jpg';
import img9 from '../ImagesCC/img9.jpg';
import img10 from '../ImagesCC/img10.jpg';
import img11 from '../ImagesCC/img11.jpg';
import img12 from '../ImagesCC/img12.jpg';
import img13 from '../ImagesCC/img13.jpg';
import img14 from '../ImagesCC/img14.jpg';
import img15 from '../ImagesCC/img15.jpg';
import img16 from '../ImagesCC/img16.jpg';
import img17 from '../ImagesCC/img17.png';
import img18 from '../ImagesCC/img18.png';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18
];

const Gallery = () => {
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  return (
    <div className="flex justify-center items-center lg:px-[8%] px-6">
      <div className="flex flex-wrap justify-center sm:gap-2 mt-6">
        {shuffledImages.map((image, index) => {
          const rowIndex = Math.floor(index / 3);
          const isOddRow = rowIndex % 2 === 0;
          const isLargeImage = (index % 3 === 0 && isOddRow) || (index % 3 === 2 && !isOddRow);

          return (
            <div
              key={index}
              className={`w-full sm:w-[calc(33.333%_-_8px)] lg:w-[calc(33.333%_-_8px)] ${
                isLargeImage
                  ? "lg:w-[369px] lg:h-[245px] tab:w-[313px] tab:h-[208px] md:w-[277px] md:h-[184px] sm:w-[240px] sm:h-[159px] smevent:w-[203px] smevent:h-[135px] smvideo:w-[147px] smvideo:h-[98px]"
                  : "lg:w-[245px] lg:h-[245px] tab:w-[208px] tab:h-[208px] md:w-[184px] md:h-[184px] sm:w-[159px] sm:h-[159px] smevent:w-[135px] smevent:h-[135px] smvideo:w-[98px] smvideo:h-[98px]"
              } object-fit p-1 rounded-2xl`}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover sm:p-1 rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
