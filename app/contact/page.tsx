"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxwplOO7XO8i8eNeYvgkm4E2y7-7EiYF2Zj97tOzqSbp_Tyjp6P8uGdjD1pd3b6Xec/exec";
    
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });
      
      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-amber-500 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-90 animate-gradient-x"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Connect with Episteme
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Your academic success is just a message away. Reach out to our dedicated team of educators.
          </motion.p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="container relative z-10 -mt-12 md:-mt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white rounded-2xl shadow-2xl p-8 border border-amber-50"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Get in Touch</h2>
            
            {/* Contact Details with Modern Icons */}
            <div className="space-y-4">
              {[
                { 
                  icon: <MapPin className="text-amber-500 h-7 w-7" />, 
                  title: "Address", 
                  content: "123 Education Street, South Mumbai, Maharashtra 400001" 
                },
                { 
                  icon: <Phone className="text-amber-500 h-7 w-7" />, 
                  title: "Phone", 
                  content: "+91 22 1234 5678" 
                },
                { 
                  icon: <Mail className="text-amber-500 h-7 w-7" />, 
                  title: "Email", 
                  content: "Marzan@epistemeacademy.in" 
                },
                { 
                  icon: <Clock className="text-amber-500 h-7 w-7" />, 
                  title: "Business Hours", 
                  content: "Monday – Saturday: 10AM – 9PM\nSunday: Closed" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-amber-50/50 rounded-xl hover:bg-amber-100/50 transition-colors">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-amber-900">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>        
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-50"
          >
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">Send Your Message</h2>
            
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg text-center ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                    required
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Subject <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={handleSubjectChange}
                    required
                  >
                    <SelectTrigger className="bg-amber-50 border-amber-200 focus:ring-amber-500">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="admission">Admission Information</SelectItem>
                      <SelectItem value="courses">Course Details</SelectItem>
                      <SelectItem value="tutoring">Tutoring Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts, questions, or concerns..."
                  rows={5}
                  required
                  className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 text-base rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Embedded Map */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6833348348!2d72.8397!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTAnMjMuMiJF!5e0!3m2!1sen!2sin!4v1744158200245!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How can I enroll in Episteme Academy?",
                answer: "You can enroll by contacting us through this form, calling our office, or visiting our location. We offer personalized guidance for STD X and XII students."
              },
              {
                question: "What subjects do you specialize in?",
                answer: "We specialize in Mathematics, Physics, Chemistry, and Biology for HSC Science stream students. Our expert educators provide comprehensive coaching and study materials."
              },
              {
                question: "Do you offer online classes?",
                answer: "Yes, we offer both in-person and online classes to cater to different student needs. Our video lectures and online resources are designed to provide flexible learning options."
              },
              {
                question: "What makes Episteme Academy unique?",
                answer: "Our unique approach combines expert educators, comprehensive study materials, personalized attention, and a proven track record of student success in board examinations."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
