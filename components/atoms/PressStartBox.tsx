export const PressStartBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
    <div className="p-8 text-center relative border-8 border-white animate-pulse">
      {children}
    </div>
    </div>
  );
};
