import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-1 md:py-24 lg:py-32 bg-black text-white mt-2">
  <div className="container mx-auto px-4 md:px-6">
    
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
      Sign in to use these Powerful Features for Your Career Growth
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border-2 border-black hover:border-white bg-white shadow-md hover:text-white"
        >
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-black text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Stats Section */}
<div className="flex justify-center mb-8 -mt-4">
  <h3 className="text-5xl font-bold text-center text-white bg-black py-4 px-6 inline-block">
    OUR STATS
  </h3>
</div>
<section className="w-full py-8 md:py-16 bg-black -mt-10 text-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
      
      {/* Industry Covered */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700">
        <h3 className="text-5xl font-bold text-white shine-text mb-4 heart-beat">50+</h3>
        <p className="text-white">Industries Covered</p>
      </div>

      {/* Real Interview Questions */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700">
        <h3 className="text-5xl font-bold text-white shine-text mb-4 heart-beat">1000+</h3>
        <p className="text-white">Real Interview Questions</p>
      </div>

      {/* Success Rate */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700">
        <h3 className="text-5xl font-bold text-white shine-text mb-4 heart-beat">95%</h3>
        <p className="text-white">Success Rate</p>
      </div>

      {/* AI Support */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700">
        <h3 className="text-5xl font-bold text-white shine-text mb-4 heart-beat">24/7</h3>
        <p className="text-white">AI Interviewer & Resume Optimization Support</p>
      </div>
    </div>
  </div>
</section>



      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-white bg-black border">
              Follow these 4 simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto -mt-16">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-black">{testimonial.author}</p>
                        <p className="text-sm text-black">
                          {testimonial.role}
                        </p>
                        <p className="text-opacity-40 text-black">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-black italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg bg-gray-100 text-black">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
  <Button
    size="lg"
    variant="secondary"
    className="h-16 mt-5 -mb-8 animate-bounce bg-black text-xl text-white px-20"
  >
    Start Your Journey Today <ArrowRight className="ml-4 h-10 w-10" />
  </Button>
</Link>

          </div>
        </div>
      </section>
    </>
  );
}
