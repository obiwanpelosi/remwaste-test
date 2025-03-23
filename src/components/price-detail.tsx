import React from "react";

interface PriceDetailProps {
  label: string;
  value: string;
}

const PriceDetail: React.FC<PriceDetailProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center  w-full first:mt-0">
      <dt className="block">{label}</dt>
      <dd className="block">{value}</dd>
    </div>
  );
};

export default PriceDetail;
