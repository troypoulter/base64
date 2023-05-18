import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <section className="container grid items-center gap-6 py-6 md:pt-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            404 not found.
          </h1>
        </div>
      </section>
    </div>
  )
}
