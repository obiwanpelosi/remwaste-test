import { OptionItem } from "../App";
import PriceDetail from "./price-detail";

type OptionCardProps = {
  option: OptionItem;
  isSelected: boolean;
  onSelect: (id: number) => void;
};
function SkipOptionCard({ option, isSelected, onSelect }: OptionCardProps) {
  const totalPrice =
    option.price_before_vat + option.price_before_vat * (option.vat / 100);

  const weeklyPrice = totalPrice / (option.hire_period_days / 7);

  return (
    <article
      className={`group cursor-pointer flex overflow-hidden flex-col items-center px-5 py-6 mx-auto w-full rounded-3xl max-md:mt-10 hover:bg-neutral-800 transition-all duration-300 ${
        isSelected
          ? "bg-neutral-800 shadow-[0px_0px_20px_5px_rgba(239,165,6,1)]"
          : "bg-neutral-950"
      }`}
      id={`${isSelected ? "isSelected" : ""}`}
      onClick={() => onSelect(option.id)}
    >
      <header className="flex gap-10 justify-between items-start self-stretch w-full">
        <div className="w-full">
          <div className="w-full font-semibold">
            <p className="text-xs leading-5 text-zinc-300">ID:{option.id}</p>
            <h2 className="mt-2.5 text-xl leading-none text-amber-400">
              {option.size} Yard Skip
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-end">
            <span className="text-xs leading-none text-stone-300 px-2 py-1 rounded-full bg-zinc-700 text-center">
              {option.allowed_on_road
                ? "All roads access"
                : "Private roads only"}
            </span>
          </div>
          <div className="flex justify-end">
            <span className="text-xs leading-none text-stone-300 px-2 py-1 rounded-full bg-zinc-700 text-center">
              {option.allows_heavy_waste ? "Heavy waste" : "Light waste"}
            </span>
          </div>
        </div>
      </header>
      <div className="flex gap-1.5 items-end mt-4 w-full">
        <p className="text-4xl font-semibold leading-none text-center text-white">
          £{weeklyPrice}
        </p>
        <p className="text-xs leading-relaxed text-amber-400">weekly rate</p>
      </div>

      <hr className="w-full border-t border-zinc-700 my-10" />

      <div className="text-xs leading-none text-stone-300 flex flex-col gap-4 w-full lg:px-3">
        <PriceDetail
          label="Hire period"
          value={`${option.hire_period_days.toLocaleString()} days`}
        />
        <PriceDetail
          label="Price (before VAT)"
          value={`£ ${option.price_before_vat.toFixed(2)}`}
        />
        <PriceDetail label="VAT Rate" value={`${option.vat.toFixed(2)}%`} />
        <PriceDetail
          label="Total price"
          value={`£ ${totalPrice.toLocaleString()}`}
        />
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onSelect(option.id);
        }}
        className={`gap-2 self-stretch px-1.5 py-2 mt-8 max-w-full text-sm font-semibold leading-snug rounded-2xl min-h-[34px] group-hover:bg-white group-hover:text-black transition-all duration-300 
          ${isSelected ? "bg-white text-black" : "bg-[#2F2F2F] text-white"}`}
        aria-selected={isSelected}
      >
        {isSelected ? "Selected " : "Select this skip"}
      </button>
    </article>
  );
}

export default SkipOptionCard;
