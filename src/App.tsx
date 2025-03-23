import { useEffect, useState } from "react";
import { SummarySection } from "./components/Summary";
import SkipOptionCard from "./components/skip-option-card";
import { FiCalendar, FiCreditCard, FiMapPin, FiTruck } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import ProgressNavbar from "./components/progress-navbar";

export type OptionItem = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};
const options: OptionItem[] = [
  {
    id: 11554,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 311,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 11555,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 342,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 11556,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 420,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 11557,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 448,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 11558,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 491,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 11559,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 527,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 11560,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 556,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 11561,
    size: 20,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: 236,
    price_before_vat: 944,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 11562,
    size: 40,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: 236,
    price_before_vat: 944,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];
function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    {
      id: "postcode",
      label: "Postcode",
      icon: <FiMapPin />,
      status: "completed" as const,
    },
    {
      id: "waste-type",
      label: "Waste Type",
      icon: <RiDeleteBin5Line />,
      status: "completed" as const,
    },
    {
      id: "select-skip",
      label: "Select Skip",
      icon: <FiTruck />,
      status: "active" as const,
    },
    {
      id: "permit-check",
      label: "Permit Check",
      icon: <MdOutlineShield />,
      status: "upcoming" as const,
    },
    {
      id: "choose-date",
      label: "Choose Date",
      icon: <FiCalendar />,
      status: "upcoming" as const,
    },
    {
      id: "payment",
      label: "Payment",
      icon: <FiCreditCard />,
      status: "upcoming" as const,
    },
  ];
  const selectedOption =
    options.find((option) => option.id === selectedId) || null;
  const handleSelect = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  function handleContinue() {
    console.log("Continue");
  }
  useEffect(() => {
    if (selectedId) {
      const element = document.getElementById("isSelected");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedId]);
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20  pt-6 pb-16 bg-neutral-900 max-md:px-5">
      <ProgressNavbar
        steps={steps}
        currentStepIndex={currentStep}
        className="mb-8"
      />

      <div className="flex flex-col w-full max-w-[1112px] max-md:max-w-full">
        <h1 className="self-center text-2xl  lg:text-3xl font-bold leading-relaxed text-center text-amber-400">
          Choose your skip size
        </h1>
        <p className="self-center mt-5 text-xl lg:text-2xl leading-loose text-center text-zinc-300 max-md:max-w-full">
          Select the skip size that best suits your need, you can cancel anytime
        </p>

        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
            {options.map((option) => (
              <SkipOptionCard
                key={option.id}
                option={option}
                isSelected={selectedId === option.id}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </div>
      <SummarySection
        selectedOption={selectedOption}
        onContinue={handleContinue}
      />
    </section>
  );
}

export default App;
