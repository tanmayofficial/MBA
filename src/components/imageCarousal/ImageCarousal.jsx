import React from "react";
import { CCarousel, CImage, CCarouselItem } from "@coreui/react";

function ImageCarousal(props) {
  const { images } = props;

  return (
    <div className="shadow-lg">
      <CCarousel controls indicators transition="crossfade">
        {images.map((image, index) => {
          return (
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={image}
                alt={`slide ${index + 1}`}
                key={index+1}
              />
            </CCarouselItem>
          );
        })}
      </CCarousel>
    </div>
  );
}

export default ImageCarousal;
