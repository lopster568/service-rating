"use client";
import { useContext, useState } from "react";
import { FormDataContext } from "@/contexts/formdata-context";

interface RatingStarsProps {
  ratingFor: string;
}

const RatingStars = ({ ratingFor }: RatingStarsProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const formContext = useContext(FormDataContext);
  if (!formContext) {
    throw new Error("FormDataContext must be used within a FormDataProvider");
  }
  const { formData, setFormData } = formContext;

  const clickHandler = () => {
    setRating(hover);
    setFormData({ ...formData, [ratingFor]: hover });
  };

  return (
    <div className="flex gap-2 my-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={32}
          height={32}
          className={
            star <= (hover || rating) ? "fill-yellow-500" : "fill-gray-300"
          }
          onMouseOver={() => setHover(star)}
          onMouseOut={() => setHover(0)}
          onClick={() => clickHandler()}
          onTouchStart={() => setHover(star)}
          onTouchEnd={() => setRating(star)}
          viewBox="0 -0.03 60.062 60.062"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <defs></defs>
            <path
              className="cls-1"
              d="M670.68,227.733a3.03,3.03,0,0,0,.884,1.072,3.168,3.168,0,0,0,1.282.578l14.662,2.965a3.067,3.067,0,0,1,2.394,2.284,3,3,0,0,1-1.118,3.084l-11.408,8.654a3.01,3.01,0,0,0-.994,1.3,2.956,2.956,0,0,0-.16,1.618L679.3,266.42a3,3,0,0,1-1.275,3.01,3.166,3.166,0,0,1-3.328.146l-13.18-7.407a3.165,3.165,0,0,0-3.091,0l-13.181,7.407a3.156,3.156,0,0,1-3.327-.146,3,3,0,0,1-1.275-3.01l3.078-17.129a2.956,2.956,0,0,0-.16-1.618,3.01,3.01,0,0,0-.994-1.3l-11.408-8.654a3,3,0,0,1-1.118-3.084,3.068,3.068,0,0,1,2.393-2.284l14.66-2.965a3.141,3.141,0,0,0,1.281-.578,3.044,3.044,0,0,0,.885-1.072l7.918-16.013a3.133,3.133,0,0,1,5.587,0Z"
              id="rating"
              transform="translate(-629.938 -210)"
            />
          </g>
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
