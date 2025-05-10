"use client";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  useGetOrdersQuery,
  useGetUserOrdersQuery,
} from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/auth/authSlice";

type Order = {
  totalAmount?: number;
  // Add other fields as needed
};

export function TotalSell() {
  const user = useAppSelector(selectUser);
  const { data } = useGetUserOrdersQuery(user?.id);

  const { data: ordersData, isLoading: isGetLoading } = useGetOrdersQuery({});

  // For user
  // Type guard to ensure data?.data is an array
  const orders: Order[] = Array.isArray(data?.data) ? data.data : [];

  const totalAmount = orders.reduce(
    (sum, order) => sum + (order.totalAmount ?? 0),
    0
  );

  // For admin
  const ordersAmount: Order[] = Array.isArray(ordersData?.data)
    ? ordersData.data
    : [];

  const adminTotalAmount = ordersAmount.reduce(
    (sum, order) => sum + (order.totalAmount ?? 0),
    0
  );

  const isAdmin = user?.role === "admin";
  const total = isAdmin ? adminTotalAmount : totalAmount;
 const chartData = total
  ? [
      {
        label: "Total Sales",
        ordersCount: total,
        fill: "var(--color-safari)",
      },
    ]
  : [
      {
        label: "No Sales",
        ordersCount: 1, // fake 1 for visible chart
        fill: "#E5E7EB", // gray color for "empty"
      },
    ];



  // const adminChartData = [
  //   {
  //     browser: "safari",
  //     ordersCount: adminTotalAmount,
  //     fill: "var(--color-safari)",
  //   },
  // ];

  const chartConfig = {
    ordersCount: {
      label: "Visitors",
    },

    safari: {
      label: "Amount",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  if (isGetLoading) return <div>Loading...</div>;

  return (
    <>
      {user?.role === "user" && (
        <Card className="flex flex-col">
          <CardHeader className="items-center text-center pb-0">
            <CardTitle>Total Sales Revenue</CardTitle>
            <CardDescription>From All Your Orders</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="ordersCount"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-semibold"
                              style={{ fill: "rgb(75, 85, 99)" }}
                            >
                              ${totalAmount.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Order Amount
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Great job! Keep it going <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              This is your total earning of all orders!
            </div>
          </CardFooter>
        </Card>
      )}
      {user?.role === "admin" && (
        <Card className="flex flex-col">
          <CardHeader className="items-center text-center pb-0">
            <CardTitle>Total Sales Revenue</CardTitle>
            <CardDescription>From All Your Orders</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="ordersCount"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-semibold"
                              style={{ fill: "rgb(75, 85, 99)" }}
                            >
                              ${adminTotalAmount.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Order Amount
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Great job! Keep it going <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              This is your total earning of all orders!
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
