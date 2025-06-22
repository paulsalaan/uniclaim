interface FooterProps {
  isOpen: boolean;
}

export default function FooterComp({ isOpen }: FooterProps) {
  return (
    <>
      <div
        className={`fixed bottom-0 bg-gray-200 flex items-center justify-center font-manrope h-9 pl-4 w-full text-gray-500 md:justify-start md:ml-${
          isOpen ? "0" : "0"
        }
      ml-0`}
      >
        <h1 className="text-xs">© 2025 Team UniClaim. All rights reserved.</h1>
      </div>
    </>
  );
}
