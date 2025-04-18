import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';
// import { toast } from 'react-toastify';
import api from '../libs/apiCall'; // Assuming api is correctly imported
import Info from '../components/info';
import Stats from '../components/wrappers/stats';
import Chart from '../components/chart';
import DoughnutChart from '../components/piechart';
import RecentTransaction from '../components/recent-transactions';
import Accounts from '../components/accounts';

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDashboardData = async () => {
    const URL = '/transaction/dashboard';
    try {
      const { data } = await api.get(URL);
      setData(data);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to fetch dashboard data");
      if (error?.response?.data?.status === "auth_failed") {
        localStorage.removeItem("user");
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-0 md:px-5 2xl:px-20">
      <Info title="DashBoard" subTitle={"Monitor your Financial activites"} />
      <Stats
        dt={{
          income: data?.totalIncome,
          expense: data?.totalExpense,
          balance: data?.availableBalance,
        }}
      />
      <div className="flex flex-col-reverse items-center gap-10 w-full md:flex-row">
        <Chart data={data?.chartData} />
        {data?.totalIncome > 0 && (
          <DoughnutChart
            dt={{
              balance: data?.availableBalance,
              income: data?.totalIncome,
              expense: data?.totalExpense,
            }}
          />
        )}
      </div>
      <div className="flex flex-col-reverse gap-0 mt-10 md:flex-row 2xl:gap-20">
        <RecentTransaction data={data?.lastTransactions} />
        {data?.lastAccount?.length > 0 && <Accounts data={data?.lastAccount} />}
      </div>
    </div>
  );
};

export default DashBoard;
