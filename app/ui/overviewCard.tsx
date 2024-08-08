"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/card"
import { Progress } from "@/app/ui/progress"

export default function OverviewCard({
    cardInfo,
  }: {
    cardInfo: {
        title: string;
        value: number;
        trendValue: string;
        percentageIncrease: number;
    }
  }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardDescription>{cardInfo.title}</CardDescription>
        <CardTitle className="text-4xl">{cardInfo.value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{cardInfo.trendValue}% from last week</div>
      </CardContent>
      <CardFooter>
        <Progress value={cardInfo.percentageIncrease} aria-label="25% increase" />
      </CardFooter>
    </Card>
  )
}
