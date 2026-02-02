import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import { SkillItem } from "./SkillItem";
import { Button } from "../atoms/Button";

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  skills: string[];
  viewProjectLabel: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  link,
  imageUrl,
  skills,
  viewProjectLabel,
}) => {
  return (
    <div className="bg-white border-2 border-black shadow-neo p-4 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      <div className="relative w-full border-2 border-black mb-4 overflow-hidden bg-gray-100 group">
         <div style={{ paddingBottom: "56.25%" }} /> 
         <Image
            src={imageUrl}
            alt={name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute top-0 left-0 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
         />
      </div>
      
      <Heading level={3} className="mb-2 uppercase tracking-tight">
        {name}
      </Heading>
      
      <div className="flex-grow">
        <Paragraph className="text-gray-700 mb-4 text-sm leading-relaxed">
          {description}
        </Paragraph>
      </div>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </ul>
        <Button href={link} variant="outline" className="w-full text-center text-sm">
          {viewProjectLabel}
        </Button>
      </div>
    </div>
  );
};
