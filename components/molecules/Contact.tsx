import Github from "@/public/svg/Github";
import LinkedIn from "@/public/svg/Linkedin";

export const Contact = () => {
  return (
    <div>
      <button className="flex bg-slate-500 rounded-full py-2 px-4 gap-2">
        <LinkedIn />
        Linkedin
      </button>
      <button className="flex bg-slate-500 rounded-full py-2 px-4 gap-2">
        <Github />
        Github
      </button>
    </div>
  );
};
