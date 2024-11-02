import { useState, ReactNode, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="border border-gray-300 rounded-md mb-2 overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div
          ref={contentRef}
          className="px-4 py-2 bg-white border-t border-gray-200"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
