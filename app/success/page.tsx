import { Medal, Star } from "lucide-react"
import Image from "next/image"

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Celebrating the achievements of students who have excelled with our guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Top Performers</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                Our students who have achieved exceptional results in board examinations
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Top Performer 1 */}
            <div className="relative flex flex-col rounded-lg border shadow-sm overflow-hidden">
              <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1">
                <Medal className="h-3 w-3" /> Top Rank
              </div>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Student 1" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl">Aditya Sharma</h3>
                  <p className="text-sm text-amber-500">STD XII - 2023 Batch</p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 my-4">
                  "Marzan Sir's mathematics guidance was instrumental in my success. His clear explanations and practice
                  materials helped me score 98% in mathematics."
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mathematics:</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Physics:</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Overall:</span>
                    <span className="font-bold">94%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performer 2 */}
            <div className="relative flex flex-col rounded-lg border shadow-sm overflow-hidden">
              <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1">
                <Medal className="h-3 w-3" /> Top Rank
              </div>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Student 2" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl">Priya Desai</h3>
                  <p className="text-sm text-amber-500">STD XII - 2023 Batch</p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 my-4">
                  "Farha Ma'am's biology lectures and notes were incredible. The diagrams and explanations made complex
                  topics so easy to understand. I scored 96% in biology!"
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Biology:</span>
                    <span className="font-bold">96%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Chemistry:</span>
                    <span className="font-bold">94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Overall:</span>
                    <span className="font-bold">93%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performer 3 */}
            <div className="relative flex flex-col rounded-lg border shadow-sm overflow-hidden">
              <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1">
                <Medal className="h-3 w-3" /> Top Rank
              </div>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Student 3" fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl">Rahul Patil</h3>
                  <p className="text-sm text-amber-500">STD XII - 2023 Batch</p>
                </div>
                <div className="flex items-center gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 my-4">
                  "The IMP Notes and video lectures from Episteme Academy were game-changers. I improved my scores
                  dramatically in just three months of study."
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Physics:</span>
                    <span className="font-bold">97%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Mathematics:</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Overall:</span>
                    <span className="font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Academic Performance</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                Our students consistently outperform in board examinations
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-500">92%</div>
              <h3 className="text-xl font-medium">Average Mathematics Score</h3>
              <p className="text-sm text-gray-500">
                Our students consistently score above 90% in Mathematics across both STD X and XII
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-500">89%</div>
              <h3 className="text-xl font-medium">Average Science Score</h3>
              <p className="text-sm text-gray-500">
                Significant improvement in Physics, Chemistry, and Biology performance
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-500">95%</div>
              <h3 className="text-xl font-medium">Student Satisfaction</h3>
              <p className="text-sm text-gray-500">
                Students and parents report high satisfaction with our educational materials
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Testimonials</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                What our students and parents have to say about Episteme Academy
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student 4"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Sneha Jadhav</h3>
                  <p className="text-sm text-gray-500">STD XII Student - 2022 Batch</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "Marzan Sir's mathematics book was a lifesaver during my board exam preparation. The concepts were
                explained so clearly, and the practice problems covered every type of question that appeared in the
                exam. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student 5"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Kiran Patil</h3>
                  <p className="text-sm text-gray-500">STD X Student - 2023 Batch</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "The IMP Notes for Science subjects were incredibly helpful. They condensed all the important
                information and made revision much more manageable. I credit my 95% in Science to these notes."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Parent 1"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Suresh Sharma</h3>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "As a parent, I was worried about my daughter's performance in mathematics. After using Marzan Sir's
                books and video lectures, her confidence improved dramatically. She scored 90% in her board exams, and
                we couldn't be happier!"
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student 6"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Amit Kumar</h3>
                  <p className="text-sm text-gray-500">STD XII Student - 2023 Batch</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i <= 4 ? "fill-amber-500 text-amber-500" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "Farha Ma'am's chemistry video lectures were excellent. The way she explained chemical reactions and
                mechanisms made everything so clear. The visual aids in the videos were particularly helpful."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Parent 2"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Priya Joshi</h3>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "The comprehensive package of notes and video lectures from Episteme Academy was worth every rupee. My
                son improved from average grades to scoring in the top 10% of his class. Thank you!"
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student 7"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Neha Kulkarni</h3>
                  <p className="text-sm text-gray-500">STD X Student - 2022 Batch</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                "I was struggling with mathematics until I started using the study materials from Episteme Academy. The
                step-by-step solutions and tips made a huge difference. I ended up scoring 92% in my board exams!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
