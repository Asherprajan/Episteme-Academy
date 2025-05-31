import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoIcon } from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Educational Products</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Comprehensive resources designed by expert educators to help you excel in your examinations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="notes">IMP Notes</TabsTrigger>
                <TabsTrigger value="videos">Video Lectures</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Mathematics Book */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mathematics Book"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Book
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Mathematics Book</h3>
                      <p className="text-sm text-amber-500">STD VIII - X</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      A comprehensive mathematics textbook covering essential concepts for high school students.
                      Includes solved examples and practice problems to strengthen foundational math skills.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹450</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Physics IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Physics IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Physics IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Condensed and effective notes covering all important concepts and formulas for Physics.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Chemistry IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Chemistry IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Chemistry IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Comprehensive notes for organic and inorganic chemistry with reaction mechanisms and important
                      conversions for board examinations.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Biology IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Biology IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Biology IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Clear and concise notes covering all important topics in Botany and Zoology with diagrams and
                      important questions for revision.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Mathematics Video Lectures */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mathematics Video Lectures"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Video
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <VideoIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Mathematics Video Lectures</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Comprehensive video lectures by Marzan Sir covering all chapters with problem-solving techniques
                      and shortcuts.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹1200</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Science Video Lectures */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Science Video Lectures"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Video
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <VideoIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Science Video Lectures</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      In-depth video lectures by Farha Ma'am covering Physics, Chemistry, and Biology with visual
                      explanations and exam-oriented tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹1500</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="books" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Mathematics Book */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mathematics Book"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Book
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Mathematics Book</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      A comprehensive mathematics textbook covering the entire South Mumbai Board syllabus.
                      Includes solved examples, practice problems, and exam tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹450</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Physics IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Physics IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Physics IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Condensed and effective notes covering all important concepts, formulas, and solved numerical
                      problems for Physics.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Chemistry IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Chemistry IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Chemistry IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Comprehensive notes for organic and inorganic chemistry with reaction mechanisms and important
                      conversions for board examinations.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Biology IMP Notes */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Biology IMP Notes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Notes
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Biology IMP Notes</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Clear and concise notes covering all important topics in Botany and Zoology with diagrams and
                      important questions for revision.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹250</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Mathematics Video Lectures */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mathematics Video Lectures"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Video
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <VideoIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Mathematics Video Lectures</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      Comprehensive video lectures by Marzan Sir covering all chapters with problem-solving techniques
                      and shortcuts.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹1200</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>

                {/* Science Video Lectures */}
                <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Science Video Lectures"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
                      Video
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <VideoIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">Science Video Lectures</h3>
                      <p className="text-sm text-amber-500">STD XII</p>
                    </div>
                    <p className="text-sm text-gray-500 my-4 flex-1">
                      In-depth video lectures by Farha Ma'am covering Physics, Chemistry, and Biology with visual
                      explanations and exam-oriented tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹1500</span>
                      <Button className="bg-amber-500 hover:bg-amber-600">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Looking for Custom Packages?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                Contact us for special discounts on bulk orders or custom educational packages for schools and coaching
                centers
              </p>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">Contact for Bulk Orders</Button>
          </div>
        </div>
      </section> */}
    </main>
  )
}
