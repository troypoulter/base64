"use client"

import { ChangeEvent, useState } from "react"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  const [encodedText, setEncodedText] = useState<string>()
  const [decodedText, setDecodedText] = useState<string>()

  const encodeBase64 = (data: string) => {
    return Buffer.from(data).toString('base64');
  }
  const decodeBase64 = (data: string) => {
    return Buffer.from(data, 'base64').toString('ascii');
  }

  const handleEncodedChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const encodedValue = event.target.value
    setEncodedText(encodedValue)
    setDecodedText(decodeBase64(encodedValue))
  }

  const handleDecodedChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const decodedValue = event.target.value
    setDecodedText(decodedValue)
    setEncodedText(encodeBase64(decodedValue))
  }

  const handleResetDataClick = () => {
    setDecodedText('');
    setEncodedText('');
  }

  const handleShowExample = () => {
    const exampleValue = "Hello, World!";
    setDecodedText(exampleValue);
    setEncodedText(encodeBase64(exampleValue));
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Effortlessly encode and decode Base64 data.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          A simple, single-use website which live updates as you type.
        </p>
      </div>
      <Card className="container grid items-center gap-6 p-6 shadow-md">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Decoded data</Label>
          <Textarea
            placeholder="Type your decoded data here."
            id="message"
            value={decodedText}
            onChange={handleDecodedChange}
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Encoded data</Label>
          <Textarea
            placeholder="Type your encoded data here."
            id="message"
            value={encodedText}
            onChange={handleEncodedChange}
          />
        </div>
        <Separator />
        <Button onClick={handleResetDataClick}>Reset data</Button>
        <Button variant="outline" onClick={handleShowExample}>Show me an example!</Button>
      </Card>
    </section>
  )
}
