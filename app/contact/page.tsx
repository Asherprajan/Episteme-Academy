"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                We'd love to hear from you. Reach out to our team for inquiries, support, or partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <Link href="mailto:contact@epistemeacademy.com" className="text-amber-600 hover:underline">
                      contact@epistemeacademy.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <Link href="tel:+919876543210" className="text-amber-600 hover:underline">
                      +91 98765 43210
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      123 Education Street, <br />
                      Knowledge Park, <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="rounded-full bg-amber-100 p-3 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-amber-100 p-3 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-amber-100 p-3 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium mb-4">Operating Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed mx-auto">
                Find answers to common questions about our educational materials and services
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-medium mb-2">How can I purchase your educational materials?</h3>
              <p className="text-gray-600">
                You can purchase our products directly through our website by visiting the Products page. For bulk
                orders or special packages, please contact us directly.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-medium mb-2">Do you offer any discounts for students?</h3>
              <p className="text-gray-600">
                Yes, we offer special student discounts, especially for group enrollments. We also run seasonal
                promotions and scholarship opportunities for deserving students. Contact us for more information.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-medium mb-2">
                Are your products aligned with the Maharashtra State Board curriculum?
              </h3>
              <p className="text-gray-600">
                Yes, all our educational materials are specifically designed to align with the Maharashtra State Board
                curriculum for STD X and XII. Our content is regularly updated to reflect any changes in the syllabus.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-medium mb-2">Do you offer online tutoring services?</h3>
              <p className="text-gray-600">
                While our primary focus is on providing high-quality educational materials, we do offer limited online
                tutoring sessions conducted by Marzan Sir and Farha Ma'am. These sessions have limited availability, so
                please contact us in advance to book.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-medium mb-2">How can I access the video lectures after purchase?</h3>
              <p className="text-gray-600">
                After purchasing our video lectures, you'll receive access credentials via email. You can access the
                videos through our secure online portal or download them for offline viewing (depending on the package
                purchased).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
