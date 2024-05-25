"use client";
import { ReactNode, createContext, useState } from "react";
import { RecommendationType } from "../types/types";

interface FormData {
  safety: number;
  communication: number;
  recommendation: RecommendationType;
  praises: string[];
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    safety: 0,
    communication: 0,
    recommendation: RecommendationType.Unset,
    praises: [],
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
