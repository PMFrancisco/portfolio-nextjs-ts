import React from "react";
import { Contact } from "../molecules/Contact";
import { PresentationCard } from "../molecules/PresentationCard";

export const Header = () => {
  return (
    <header className="grid justify-center">
      <PresentationCard />
      <Contact />
    </header>
  );
};
