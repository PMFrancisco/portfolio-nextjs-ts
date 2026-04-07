type SkillItemProps = {
  skill: string;
};

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <li className="px-3 py-1 bg-emerald-100 border-2 border-black text-xs font-mono font-bold whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-emerald-300 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default motion-reduce:transition-none motion-reduce:hover:transform-none">
      {skill}
    </li>
  );
};
