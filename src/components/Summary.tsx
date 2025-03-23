import { FiArrowRight } from "react-icons/fi";
import { OptionItem } from "../App";

type SummarySectionProps = {
  selectedOption: OptionItem | null;
  onContinue: () => void;
};

export const SummarySection = ({
  selectedOption,
  onContinue,
}: SummarySectionProps) => {
  const totalPrice = selectedOption
    ? selectedOption.price_before_vat +
      selectedOption.price_before_vat * (selectedOption.vat / 100)
    : 0;

  return (
    <div
      className={`
          fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 
          transition-all duration-500 ease-in-out transform
          ${
            selectedOption
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0 pointer-events-none"
          }
          z-20 shadow-xl shadow-black/30
        `}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <div>
            <p className="text-gray-400 text-sm">Selected Option</p>
            <p className="text-gray-100 font-bold text-lg">
              {selectedOption
                ? `${selectedOption.size} Yard Skip (#${selectedOption.id})`
                : ""}
            </p>
          </div>

          <div className="hidden sm:block border-l border-gray-700 h-12 mx-2"></div>

          <div className="hidden sm:block">
            <p className="text-gray-400 text-sm">Hire Period</p>
            <p className="text-gray-200">
              {selectedOption ? `${selectedOption.hire_period_days} days` : ""}
            </p>
          </div>

          <div className="border-l border-gray-700 h-12 mx-2"></div>

          <div>
            <p className="text-gray-400 text-sm">Total Price</p>
            <p className="text-amber-400 font-bold">
              {selectedOption ? `£${totalPrice.toFixed(2)}` : ""}
            </p>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="bg-amber-400 hover:bg-amber-400/80 text-white px-4 py-2 rounded-md flex items-center transition-colors duration-200"
        >
          <span className="mr-2">Continue</span>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};
