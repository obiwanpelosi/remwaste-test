import React from "react";

// Define the types for our component props
type StepStatus = "completed" | "active" | "upcoming";

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
  status: StepStatus;
}

interface ProgressNavbarProps {
  steps: Step[];
  currentStepIndex: number;
  className?: string;
}

// Component for individual step items
const StepItem: React.FC<{
  step: Step;
}> = ({ step }) => {
  const getIconContainerStyles = () => {
    switch (step.status) {
      case "completed":
        return "bg-amber-400 text-white";
      case "active":
        return "bg-amber-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getLabelStyles = () => {
    switch (step.status) {
      case "completed":
        return "text-amber-400";
      case "active":
        return "text-white";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <button
          type="button"
          className={`flex items-center gap-3 lg:gap-5 focus:outline-none ${
            step.status == "upcoming" ? "cursor-not-allowed" : ""
          }`}
          aria-current={step.status === "active" ? "step" : undefined}
        >
          <span
            className={`flex items-center justify-center rounded-full w-10 h-10 ${getIconContainerStyles()}`}
          >
            {step.icon}
          </span>
          <span
            className={`mt-2 text-base font-medium ${getLabelStyles()} text-center`}
          >
            {step.label}
          </span>
        </button>
      </div>
    </div>
  );
};

export const ProgressNavbar: React.FC<ProgressNavbarProps> = ({
  steps,
  className = "",
}) => {
  return (
    <nav className={`w-full ${className}`} aria-label="Progress">
      <ol className="flex flex-row items-start items-center justify-between px-4 py-2 md:px-6">
        {steps.map((step) => {
          return (
            <li
              key={step.id}
              className={`lg:flex items-center ${
                step.status == "active" ? "w-full lg:w-auto" : "hidden"
              } 
              `}
            >
              <StepItem step={step} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProgressNavbar;
