"use client";
import { useContext, useState } from "react";
import { RecommendationType } from "../types/types";
import { FormDataContext } from "@/contexts/formdata-context";

const Recommendation = () => {
  const formContext = useContext(FormDataContext);
  if (!formContext) {
    throw new Error("FormDataContext must be used within a FormDataProvider");
  }
  const { formData, setFormData } = formContext;

  const [recommended, setRecomended] = useState<RecommendationType>(
    RecommendationType.Unset
  );
  const [hover, setHover] = useState<RecommendationType>(
    RecommendationType.Unset
  );

  const clickHandler = (type: RecommendationType) => {
    if (
      type === RecommendationType.Yes &&
      recommended === RecommendationType.Yes
    ) {
      setRecomended(RecommendationType.Unset);
      setHover(RecommendationType.Unset);
    } else if (
      type === RecommendationType.No &&
      recommended === RecommendationType.No
    ) {
      setRecomended(RecommendationType.Unset);
      setHover(RecommendationType.Unset);
      return;
    } else {
      setRecomended(type);
      setFormData({ ...formData, recommendation: type });
    }
  };

  return (
    <div className="flex gap-8 my-2">
      <button
        className="flex items-center gap-2"
        onClick={() => clickHandler(RecommendationType.No)}
        onMouseOver={() => setHover(RecommendationType.No)}
        onMouseLeave={() => setHover(RecommendationType.Unset)}
      >
        <svg
          height={40}
          width={40}
          className={`fill-gray-400 ${
            recommended === RecommendationType.No ||
            hover === RecommendationType.No
              ? "fill-red-500"
              : ""
          } hover:fill-red-500`}
          viewBox="0 0 14 14"
          role="img"
          focusable="false"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path d="M 2.92,3.5005 Q 2.92,3.7035 2.77744,3.852 2.63488,4.0005 2.44,4.0005 2.23744,4.0005 2.09872,3.852 1.96,3.7035 1.96,3.5005 1.96,3.2895 2.09872,3.145 2.23744,3.0005 2.44,3.0005 2.63488,3.0005 2.77744,3.145 2.92,3.2895 2.92,3.5005 z m 1.2,4 v -5 Q 4.12,2.2975 3.97744,2.149 3.83488,2.0005 3.64,2.0005 H 1.48 Q 1.28512,2.0005 1.14256,2.149 1,2.2975 1,2.5005 v 5 Q 1,7.7035 1.14256,7.852 1.28512,8.0005 1.48,8.0005 h 2.16 q 0.19488,0 0.33744,-0.1485 Q 4.12,7.7035 4.12,7.5005 z m 8.46768,-1.164 Q 13,6.813 13,7.5005 12.99232,8.11 12.56896,8.555 12.1456,9 11.56,9.0005 H 9.48256 Q 9.5128,9.11 9.54256,9.188 9.57232,9.266 9.62512,9.36 9.67792,9.454 9.7,9.5005 q 0.13488,0.289 0.20256,0.4455 0.06768,0.1565 0.14256,0.457 0.07488,0.3005 0.07488,0.5975 0,0.1875 -0.0038,0.3045 -0.0038,0.117 -0.03744,0.3515 Q 10.04516,11.891 9.989,12.047 9.93284,12.203 9.809,12.3985 9.68516,12.594 9.509,12.715 9.3328,12.836 9.05872,12.918 8.78464,13 8.44,13 8.24512,13 8.10256,12.8515 7.95232,12.695 7.84768,12.461 7.74304,12.227 7.70128,12.055 7.65952,11.883 7.60768,11.5785 7.54,11.2505 7.5064,11.106 7.4728,10.9615 7.37536,10.727 7.27792,10.4925 7.14304,10.352 6.89536,10.094 6.3856,9.4145 6.01792,8.9145 5.62816,8.469 5.2384,8.0235 5.05792,8.008 4.87024,7.9925 4.73536,7.848 4.60048,7.7035 4.60048,7.508 V 2.5 q 0,-0.203 0.14256,-0.3475 Q 4.8856,2.008 5.08048,2 5.34304,1.992 6.2656,1.656 6.84304,1.453 7.16944,1.3475 7.49584,1.242 8.08048,1.121 8.66512,1 9.16048,1 h 0.96768 q 0.99744,0.0155 1.47744,0.6095 0.43488,0.539 0.36768,1.414 0.29232,0.289 0.40512,0.7345 0.12768,0.4765 0,0.914 0.34512,0.4765 0.32256,1.0705 0,0.25 -0.11232,0.594 z" />
          </g>
        </svg>

        <h3
          className={`text-gray-400 ${
            recommended === RecommendationType.No ||
            hover === RecommendationType.No
              ? "text-red-500"
              : ""
          } hover:text-red-500`}
        >
          No
        </h3>
      </button>
      <button
        className="flex items-center gap-2"
        onClick={() => clickHandler(RecommendationType.Yes)}
        onMouseOver={() => setHover(RecommendationType.Yes)}
        onMouseLeave={() => setHover(RecommendationType.Unset)}
      >
        <svg
          className={`fill-gray-400 ${
            recommended === RecommendationType.Yes ||
            hover === RecommendationType.Yes
              ? "fill-green-500"
              : ""
          } hover:fill-green-500`}
          height={40}
          width={40}
          viewBox="0 0 14 14"
          role="img"
          focusable="false"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path d="M 2.92,10.4995 Q 2.92,10.2965 2.77744,10.148 2.63488,9.9995 2.44,9.9995 2.23744,9.9995 2.09872,10.148 1.96,10.2965 1.96,10.4995 q 0,0.211 0.13872,0.3555 0.13872,0.1445 0.34128,0.1445 0.19488,0 0.33744,-0.1445 Q 2.92,10.7105 2.92,10.4995 z m 1.2,-4 v 5 q 0,0.203 -0.14256,0.3515 Q 3.83488,11.9995 3.64,11.9995 H 1.48 q -0.19488,0 -0.33744,-0.1485 Q 1,11.7025 1,11.4995 v -5 Q 1,6.2965 1.14256,6.148 1.28512,5.9995 1.48,5.9995 h 2.16 q 0.19488,0 0.33744,0.1485 Q 4.12,6.2965 4.12,6.4995 z m 8.88,0 q 0,0.672 -0.41232,1.164 0.11232,0.344 0.11232,0.594 0.02256,0.594 -0.32256,1.0705 0.12768,0.4375 0,0.914 -0.11232,0.4455 -0.40512,0.7345 0.06768,0.875 -0.36768,1.414 -0.48,0.594 -1.47744,0.6095 H 9.15952 Q 8.66464,13 8.07952,12.879 7.4944,12.758 7.16848,12.6525 6.84256,12.547 6.26464,12.344 5.34208,12.008 5.07952,12 4.88464,11.992 4.74208,11.8475 4.59952,11.703 4.59952,11.5 V 6.492 q 0,-0.1955 0.13488,-0.34 Q 4.86928,6.0075 5.05696,5.992 5.23696,5.9765 5.6272,5.531 6.01744,5.0855 6.38464,4.5855 6.8944,3.906 7.14208,3.648 7.27696,3.5075 7.3744,3.273 7.47184,3.0385 7.50544,2.894 7.53904,2.7495 7.60672,2.4215 7.65904,2.117 7.70032,1.945 7.7416,1.773 7.84672,1.539 7.95184,1.305 8.1016,1.1485 8.24416,1 8.43904,1 8.78416,1 9.05776,1.082 9.33136,1.164 9.508,1.285 q 0.17664,0.121 0.3,0.3165 0.12336,0.1955 0.18,0.3515 0.05664,0.156 0.08976,0.3905 0.03312,0.2345 0.03744,0.3515 0.0043,0.117 0.0038,0.3045 0,0.297 -0.07104,0.594 -0.071,0.297 -0.14252,0.469 Q 9.83392,4.2345 9.69904,4.5 9.67648,4.547 9.62416,4.6405 9.57184,4.734 9.5416,4.8125 9.51136,4.891 9.4816,5 h 2.07744 q 0.58512,0 1.01232,0.4455 0.4272,0.4455 0.42768,1.0545 z" />
          </g>
        </svg>

        <h3
          className={`text-gray-400 ${
            recommended === RecommendationType.Yes ||
            hover === RecommendationType.Yes
              ? "text-green-500"
              : ""
          } hover:text-green-500`}
        >
          Yes
        </h3>
      </button>
    </div>
  );
};

export default Recommendation;
