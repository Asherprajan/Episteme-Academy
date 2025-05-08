import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, VideoIcon, FileText, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Maharashtra's Premier Education Academy
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Empowering Maharashtra's Brightest Minds
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Specialized educational resources by expert educators Marzan Sir and Farha Ma'am to help students excel
                in their board examinations.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  Explore Products <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Episteme Academy students"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Educators */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Expert Educators</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Dedicated to academic excellence and student success
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {/* Marzan Sir */}
            <div className="grid gap-4 md:gap-8">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Marzan Sir"
                    width={400}
                    height={400}
                    className="aspect-square object-cover w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Marzan Sir</h3>
                  <p className="text-amber-500 font-medium">Mathematics Specialist</p>
                  <p className="text-gray-500">
                    With over 15 years of teaching experience, Marzan Sir has guided thousands of students to academic
                    success in Mathematics. His unique teaching methodology focuses on building strong fundamentals
                    while ensuring exam readiness.
                  </p>
                  <Link href="/about" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                    Read full bio <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Farha Ma'am */}
            <div className="grid gap-4 md:gap-8">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Farha Ma'am"
                    width={400}
                    height={400}
                    className="aspect-square object-cover w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Farha Ma'am</h3>
                  <p className="text-amber-500 font-medium">Science Specialist</p>
                  <p className="text-gray-500">
                    Farha Ma'am specializes in making complex science concepts accessible and engaging. Her
                    comprehensive approach to Physics, Chemistry, and Biology has helped students achieve outstanding
                    results in board examinations.
                  </p>
                  <Link href="/about" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                    Read full bio <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Educational Resources</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Carefully crafted materials to help students excel in their academic journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Mathematics Book */}
            <div className="flex flex-col rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 bg-amber-100">
                <BookOpen className="absolute inset-0 m-auto h-16 w-16 text-amber-600" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Mathematics Book</h3>
                  <p className="text-sm text-gray-500">
                    Board-aligned, comprehensive mathematics textbook with solved examples, practice problems, and exam
                    tips.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* IMP Notes */}
            <div className="flex flex-col rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 bg-amber-100">
                <FileText className="absolute inset-0 m-auto h-16 w-16 text-amber-600" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">IMP Notes</h3>
                  <p className="text-sm text-gray-500">
                    Condensed and effective notes for Physics, Chemistry, Mathematics, and Biology for STD X & XII
                    students.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Video Lectures */}
            <div className="flex flex-col rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 bg-amber-100">
                <VideoIcon className="absolute inset-0 m-auto h-16 w-16 text-amber-600" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Video Lectures</h3>
                  <p className="text-sm text-gray-500">
                    High-quality, board-targeted video lectures for STD X & XII, covering all major subjects and topics.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/products"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                See the outstanding results our students have achieved
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col rounded-lg border bg-white shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={`Student ${i}`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Student Name</h3>
                    <p className="text-sm text-gray-500">STD XII - 2023 Batch</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex-grow">
                  "Thanks to Episteme Academy and the guidance of Marzan Sir, I scored 95% in Mathematics. The teaching
                  methodology and study materials were incredibly helpful."
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber-500 font-medium">
                  <span>Mathematics: 95%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/success"
              className="inline-flex h-10 items-center justify-center rounded-md border border-amber-500 px-8 py-2 text-sm font-medium text-amber-500 shadow-sm transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-1"
            >
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-amber-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Excel in Your Exams?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join thousands of successful students who have transformed their academic performance with Episteme
                Academy
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-amber-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
