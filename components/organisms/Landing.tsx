import { PressStartButton } from "@/components/molecules/PressStartButton";
import { Header } from "@/components/molecules/Header";
import { Main } from "@/components/molecules/Main";

export const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-around h-full text-center p-20">
      <Header />
      <Main />
      <div className="flex ">
        <PressStartButton />
      </div>
    </div>
  );
};
