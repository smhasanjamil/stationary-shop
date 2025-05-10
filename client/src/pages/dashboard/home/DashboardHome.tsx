import { TotalOrder } from "@/components/chart/user/TotalOrder";
import { TotalSell } from "@/components/chart/user/TotalSell";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
      <TotalSell />
      <TotalOrder />
    </div>
  );
};

export default DashboardHome;
