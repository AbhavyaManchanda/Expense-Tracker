import React from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";

import { formatCurrency } from "../../libs";
import { Card } from "../ui/card";

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];

const Stats = ({ dt }) => {
  const data = [
    {
      label: "Total Balance",
      amount: dt?.balance,
      increase: 10.9,
      icon: <BsCurrencyDollar size={26} />,
    },
    {
      label: "Total Income",
      amount: dt?.income,
      increase: 8.9,
      icon: <BsCashCoin size={26} />,
    },
    {
      label: "Total Expense",
      amount: dt?.expense,
      increase: -10.9,
      icon: <SiCashapp size={26} />,
    },
  ];

  const ItemCard = ({ item, index }) => {
    return (
      <Card className="flex items-center justify-between w-full h-48 gap-5 px-4 py-12 shadow-lg 2xl:min-w-96 2xl:px-8 dark:border">
        <div className="flex items-center w-full gap-4">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}
          >
            {item.icon}
          </div>

          <div className="space-y-3">
            <span className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
              {item.label}
            </span>
            <p className="text-2xl font-medium text-black 2xl:text-3xl dark:text-gray-400">
              {formatCurrency(item.amount || 0.0)}
            </p>
            <span className="text-xs text-gray-600 md:text-sm 2xl:text-base dark:text-gray-500">
              Overall {item.label}
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col gap-10 items-center justify-between w-full md:flex-row 2xl:gap-20">
                {data.map((item, index) => (
        <ItemCard item={item} key={index} index={index} />
      ))}
          </div>
    
    </div>
  );
};

export default Stats;
