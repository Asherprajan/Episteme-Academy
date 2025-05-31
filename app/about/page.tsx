import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, GraduationCap, Heart, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Episteme Academy</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                A legacy of educational excellence led by Marzan Sir and Farha Ma'am
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/log.png" alt="Episteme Academy" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-500">
                Episteme Academy was founded in 2010 with a singular vision: to provide quality education that makes a
                difference in students' academic journeys. What began as a small tutoring center has grown into a
                trusted educational institution that has helped thousands of students across South Mumbai achieve their
                academic goals.
              </p>
              <p className="text-gray-500">
                Our name "Episteme" comes from the Greek word for knowledge and understanding - reflecting our
                commitment to not just teaching subjects, but fostering true comprehension and mastery. Today, we
                continue to evolve our methods and materials while staying true to our founding principles of academic
                excellence, personalized attention, and result-oriented approaches.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-amber-500" />
                  <span className="text-gray-600">5000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-amber-500" />
                  <span className="text-gray-600">14+ Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-amber-500" />
                  <span className="text-gray-600">20+ Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span className="text-gray-600">Top Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Educators</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                The heart and soul behind Episteme Academy's educational excellence
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-24 items-start">
            {/* Marzan Sir */}
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src="/marzansir.png"
                  alt="Marzan Sir"
                  width={600}
                  height={600}
                  style={{ borderRadius: "10px" }}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Marzan Sir</h3>
                <p className="text-amber-500 font-medium">Mathematics Expert & Co-founder</p>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Marzan Sir holds a master's degree in Mathematics from a prestigious university and has been
                    teaching for over 15 years. His approach to teaching mathematics focuses on building strong
                    fundamentals while ensuring students are well-prepared for examinations.
                  </p>
                  <p>
                    His unique teaching style breaks down complex concepts into easily understandable modules, helping
                    students overcome their fear of mathematics. He has personally mentored over 3,000 students, many of
                    whom have secured top ranks in various competitive examinations.
                  </p>
                  <p>
                    As the author of the highly regarded "Mathematics Made Simple" series, Marzan Sir continues to
                    contribute to educational literature that benefits students beyond his classroom.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">15+</span>
                    <span className="text-gray-600">Years Teaching</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">3000+</span>
                    <span className="text-gray-600">Students Mentored</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">12</span>
                    <span className="text-gray-600">Publications</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">98%</span>
                    <span className="text-gray-600">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Farha Ma'am */}
            <div className="space-y-8">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/farha.png"
                  alt="Farha Ma'am"
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Farha Ma'am</h3>
                <p className="text-amber-500 font-medium">Science Expert & Co-founder</p>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Farha Ma'am is a distinguished science educator with a master's degree in Biochemistry. With over 12
                    years of teaching experience, she specializes in making complex science concepts accessible and
                    engaging for students of all learning levels.
                  </p>
                  <p>
                    Her comprehensive approach to Physics, Chemistry, and Biology has helped countless students achieve
                    outstanding results in board examinations. She is particularly known for her innovative teaching
                    methods that connect theoretical concepts with real-world applications.
                  </p>
                  <p>
                    As the creator of the "Science Simplified" series of notes and study materials, Farha Ma'am has
                    developed resources that are used by students throughout South Mumbai for exam preparation.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">12+</span>
                    <span className="text-gray-600">Years Teaching</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">2500+</span>
                    <span className="text-gray-600">Students Mentored</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">8</span>
                    <span className="text-gray-600">Publications</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">96%</span>
                    <span className="text-gray-600">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values & Mission</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                The principles that guide our approach to education
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3 p-6 border rounded-lg">
              <div className="rounded-full bg-amber-100 p-3">
                <GraduationCap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Academic Excellence</h3>
              <p className="text-gray-500">
                We believe in pushing the boundaries of academic achievement through rigorous, well-structured
                educational approaches that challenge and inspire.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 border rounded-lg">
              <div className="rounded-full bg-amber-100 p-3">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Student-Centered</h3>
              <p className="text-gray-500">
                Our teaching methodologies and materials are designed with the student's learning journey in mind,
                emphasizing clarity, engagement, and retention.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 border rounded-lg">
              <div className="rounded-full bg-amber-100 p-3">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Result-Oriented</h3>
              <p className="text-gray-500">
                While we value deep understanding, we also recognize the importance of examination success and design
                our resources to maximize student performance.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-amber-50 p-8 rounded-lg">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                To empower students across South Mumbai with accessible, high-quality educational resources that build
                confidence, inspire curiosity, and lead to academic success. We aim to make complex subjects
                approachable, develop critical thinking skills, and prepare students not just for examinations but for
                lifelong learning.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-amber-500 hover:bg-amber-600">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
