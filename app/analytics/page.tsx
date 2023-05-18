"use client"

import { useTheme } from "next-themes"
import Iframe from "react-iframe"

import { Card } from "@/components/ui/card"

export default function AnalyticsPage() {
  const { theme } = useTheme()
  return (
    <section className="container grid items-center gap-6 py-2 md:pt-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          You see what I see.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Transparency is a core principle that I highly prioritize, visit the{" "}
          <a
            href="https://www.troypoulter.com/analytics/"
            className="font-medium text-primary underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Analytics
          </a>{" "}
          page on my website to learn more.
        </p>
      </div>
      <Card className="container grid items-center shadow-md">
        <Iframe
          url={`https://plausible.io/share/base64.troypoulter.com?auth=LrZAywaBGFVksCIk0lvVL&period=30d&embed=true&theme=${theme}&background=transparent`}
          width="100%"
          height="1600px"
          id="plausible-embed"
          display="block"
          position="relative"
          frameBorder={0}
          loading="lazy"
        />
      </Card>
    </section>
  )
}
