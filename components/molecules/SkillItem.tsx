type SkillItemProps = {
  skill: string;
};

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <li className="mr-4 mb-2 bg-emerald-200 p-2 rounded-lg">
      {skill}
    </li>
  );
};
