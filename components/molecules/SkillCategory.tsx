import { categoryMapping } from "@/data/data";
import { Heading } from "../atoms/Heading";
import { SkillItem } from "./SkillItem";

type SkillCategoryProps = {
    category: string;
    skillList: string[];
  };
  
 export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skillList }) => {
    const formattedCategory = categoryMapping[category] || category;
  
    return (
      <div className="mb-6">
        <Heading level={3} className="mb-2">
          {formattedCategory}
        </Heading>
        <ul className="flex flex-wrap">
          {skillList.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </ul>
      </div>
    );
  };