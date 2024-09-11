type SkillItemProps = {
  skill: string;
};

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return <li className="mr-4 my-1 bg-emerald-200 p-2 rounded-lg">{skill}</li>;
};
