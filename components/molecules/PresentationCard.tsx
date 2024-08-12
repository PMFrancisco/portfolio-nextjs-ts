import { Photo } from "../atoms/Photo";
import { PresentationText } from "../atoms/PresentationText";

export const PresentationCard = () => {
  return (
    <div className="flex sm:items-center justify-center max-h gap-6 px-6 md:px-12 py-12 md:py-20">
      <Photo />
      <PresentationText />
    </div>
  );
};
