"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Avatar from "@/assets/avatar.jpg"

export function Imagery() {
  return (
    <Card className="about-card">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Image src={Avatar} alt="avatar" width={400} height={200} />
      </CardContent>
    </Card>
  )
}