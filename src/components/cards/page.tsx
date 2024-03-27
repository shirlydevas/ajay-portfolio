import { Metadata } from "next"
import Image from "next/image"

import { cn } from "../../../lib/utils"
import { Introduction } from "./introduction"
import { Imagery } from "./imagery"
import { Experience } from "./experience"
import { Education } from "./education"
import { Background } from "./background"
import { ToolStack } from "./tool-stack"

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function About() {
  return (
    <>
      <h3 className="text-4xl font-bold text-white my-10">About me</h3>
      <div className="hidden items-start justify-center gap-6 rounded-lg py-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <Introduction />
          </DemoContainer>
          <DemoContainer>
            <Background />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <Imagery />
          </DemoContainer>
          <DemoContainer>
            <Education />
          </DemoContainer>
          {/* <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>  */}
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <Experience />
          </DemoContainer>
          <DemoContainer>
            <ToolStack />
          </DemoContainer>
          {/*<DemoContainer>
            <DemoCookieSettings />
          </DemoContainer> */}
        </div>
      </div>
    </>
  )
}