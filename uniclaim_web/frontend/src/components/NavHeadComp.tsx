interface NavTitleProps {
  title: string;
  description: string;
}

export default function NavHeadComp({ title, description }: NavTitleProps) {
  return (
    <>
      <div className="w-full bg-gray-200 py-2 font-manrope text-center lg:hidden">
        <h1 className="font-medium">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </>
  );
}
