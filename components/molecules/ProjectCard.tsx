import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import { SkillItem } from "./SkillItem";

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  skills: string[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  link,
  imageUrl,
  skills,
}) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <Image
          src={imageUrl}
          alt={name}
          fill={true}
          className="absolute top-0 left-0 w-full h-full scale-75 hover:scale-100 duration-300 object-cover"
          priority={true}
        />
      </div>
      <Heading level={3} className="my-2">
        {name}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <ul className="flex flex-wrap mt-2">
        {skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
};
