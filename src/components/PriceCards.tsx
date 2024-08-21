import React from "react";
import { Check } from 'lucide-react';

interface PriceCardsProps {
  title: string;
  subTitle: string;
  price: string;
  buttonText: string;
  featureLimits: string[];
  featureHeading: string;
  featureList: string[];
  strikePrice?: string;
}

const PriceCards = ({
  title,
  subTitle,
  price,
  buttonText,
  featureLimits,
  featureHeading,
  featureList,
  strikePrice,
}: PriceCardsProps) => {
  return (
    <div className="w-[375px] bg-white px-6 py-8 border rounded-sm mb-8">
      <div className="font-semibold text-3xl">{title}</div>
      <div className=" text-base mt-6 h-9">{subTitle}</div>
      {strikePrice ? <div className="mt-9 line-through">{strikePrice}</div>:<div className="h-[60px]"></div>}
      <div className="text-3xl font-semibold">{price}</div>
      <div className="mt-14 w-80 text-center bg-[#FFC7C7] rounded-full px-5 py-3">
        {buttonText}
      </div>
      <hr className="my-7" />
      <div className="gap-y-4">
        {featureLimits.map((feature, index) => (
          <div key={index}>
            <div>{feature}</div>
          </div>
        ))}
      </div>
      <hr className="my-7" />
      <div className="mb-4 text-lg font-semibold">{featureHeading}</div>
        <div className="gap-y-4">
            {featureList.map((feature, index) => (
            <div key={index}>
                <div className="flex gap-1"><Check size={16} className="mt-1"/>{feature}</div>
            </div>
            ))}
            </div>

    </div>
  );
};

export default PriceCards;
