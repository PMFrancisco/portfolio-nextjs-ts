export const PressStartBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#00FF00] animate-pulse text-black hover:text-white hover:bg-[#007F00] hover:animate-none">
      <div className="p-8 text-center relative border-8 border-white">
        {children}
      </div>
    </button>
  );
};
