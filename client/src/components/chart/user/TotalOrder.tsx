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

export function TotalOrder() {
  const user = useAppSelector(selectUser);
  const { data } = useGetUserOrdersQuery(user?.id);

  const { data: ordersData, isLoading: isGetLoading } = useGetOrdersQuery({});

  const isAdmin = user?.role === "admin";

  const orderCount = isAdmin
    ? ordersData?.data?.length || 0
    : data?.data?.length || 0;

  const chartData = orderCount
    ? [
        {
          browser: "safari",
          ordersCount: orderCount,
          fill: "var(--color-safari)",
        },
      ]
    : [
        {
          browser: "No Orders",
          ordersCount: 1,
          fill: "#E5E7EB", // Light gray
        },
      ];

  const chartConfig = {
    ordersCount: {
      label: "Visitors",
    },

    safari: {
      label: "Orders",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  const totalOrderNumber = data?.data?.length || 0;
  const totalOrderNumberAdmin = ordersData?.data?.length || 0;

  if (isGetLoading) return <div>Loading...</div>;

  return (
    <>
      {user?.role === "user" && (
        <Card className="flex flex-col">
          <CardHeader className="items-center text-center pb-0">
            <CardTitle>Total Orders Overview</CardTitle>
            <CardDescription>Orders placed till today!</CardDescription>
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
                              {totalOrderNumber.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Total Orders
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
              Order volume increasing <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Total order summary till today!
            </div>
          </CardFooter>
        </Card>
      )}
      {user?.role === "admin" && (
        <Card className="flex flex-col">
          <CardHeader className="items-center text-center pb-0">
            <CardTitle>Total Orders Overview</CardTitle>
            <CardDescription>Orders placed till today!</CardDescription>
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
                              {totalOrderNumberAdmin.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Total Orders
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
              Order volume increasing <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Total order summary till today!
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
