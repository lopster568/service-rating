import SurveyForm from "@/components/survey-form";
import { FormDataProvider } from "@/contexts/formdata-context";

const Page = () => {
  return (
    <FormDataProvider>
      <SurveyForm />
    </FormDataProvider>
  );
};

export default Page;
