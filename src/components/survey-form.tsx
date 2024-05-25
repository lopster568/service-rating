"use client";
import RatingStars from "./rating-stars";
import Recommendation from "./recommendation";
import Praises from "./praises";
import { RecommendationType } from "../types/types";
import { useContext, useState } from "react";
import { FormDataContext } from "@/contexts/formdata-context";
import { useRouter } from "next/navigation";

const SurveyForm = () => {
  const router = useRouter();

  const formContext = useContext(FormDataContext);
  if (!formContext) {
    throw new Error("FormDataContext must be used within a FormDataProvider");
  }
  const { formData } = formContext;

  const handleSubmit = () => {
    if (formData.safety === 0) {
      alert("Please rate safety");
      return;
    } else if (formData.communication === 0) {
      alert("Please rate communication");
      return;
    } else if (formData.recommendation === RecommendationType.Unset) {
      alert("Please recommend");
      return;
    } else if (formData.praises.length === 0) {
      alert("Please provide praises");
      return;
    }
    alert(`Thank you for your feedback \n ${JSON.stringify(formData)}`);
  };

  return (
    <div className="bg-white h-[600px] w-96 rounded-lg overflow-y-scroll scroll-smooth">
      <div className="m-4">
        <div className="flex gap-2 items-center">
          <svg
            onClick={() => router.back()}
            fill="#000000"
            width={35}
            height={35}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />{" "}
            </g>
          </svg>
          <h1 className="text-2xl lg:text-3xl font-extrabold">
            Leave a review
          </h1>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <div>
            <h2 className="text-xl font-bold">Safety</h2>
            <p className="text-sm font-light">
              How safe did you feel with Ayuvya Ayurveda
            </p>
            <RatingStars ratingFor="safety" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Communication</h2>
            <p className="text-sm font-light">
              How was your communication with Ayuvya Ayurveda
            </p>
            <RatingStars ratingFor="communication" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              Would you recommend Ayuvya Ayurveda
            </h2>
            <p className="text-sm font-light">
              Your feedback is valueable to us
            </p>
            <Recommendation />
          </div>
          <div>
            <h2 className="text-xl font-bold">Praise</h2>
            <p className="text-sm font-light">
              What did you like about Ayuvya Ayurveda
            </p>
            <Praises />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 py-3 text-white hover:bg-slate-600 transition-all ease-in"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
