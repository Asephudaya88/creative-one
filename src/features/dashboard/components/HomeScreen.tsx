type HomeScreenProps = {
  children: React.ReactNode;
};

export default function HomeScreen({
  children,
}: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#f8fafc]">
      {children}
    </div>
  );
}