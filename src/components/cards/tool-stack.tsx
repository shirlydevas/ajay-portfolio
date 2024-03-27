"use client"

import Image from "next/image"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ToolStack() {

  const stackData = [
    {
      id: 1,
      url: "https://framerusercontent.com/images/wW33etq1EFwQ99eLu65fj79eg.png",
      tooltip: "Figma",
    },
    {
      id: 2,
      url: "https://framerusercontent.com/images/TbtspA7KXhdNiY9lmRCWVlneQ2w.png",
      tooltip: "Miro",
    },
    {
      id: 3,
      url: "https://framerusercontent.com/images/kdLvgcoOGEgPNquojJ7MG3Isc.png",
      tooltip: "Photo Shop",
    },
    {
      id: 4,
      url: "https://framerusercontent.com/images/wW33etq1EFwQ99eLu65fj79eg.png",
      tooltip: "Figma",
    },

  ]

  return (
    <Card className="about-card">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Tool stack</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 grid-cols-6">
        {
          stackData.map((data) => (
            <TooltipProvider key={data.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image src={data.url} alt="avatar" width={40} height={40} className="rounded-lg stack-style" />
                </TooltipTrigger>
                <TooltipContent className="bg-black text-[12px] py-[2px] px-1 border-none shadow-md">
                  <p>{data.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))
        }
      </CardContent>
    </Card>
  )
}