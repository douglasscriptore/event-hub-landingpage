import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export function InfoSection() {
  const features = [
    {
      icon: "lucide:presentation",
      title: "Expert Speakers",
      description: "Learn from industry leaders and innovators sharing their knowledge and experiences."
    },
    {
      icon: "lucide:layout-grid",
      title: "Interactive Workshops",
      description: "Participate in hands-on sessions to develop new skills and techniques."
    },
    {
      icon: "lucide:users",
      title: "Networking Events",
      description: "Connect with like-minded professionals and expand your professional network."
    },
    {
      icon: "lucide:lightbulb",
      title: "Innovation Showcase",
      description: "Discover the latest technologies and solutions from leading companies."
    }
  ];

  return (
    <div className="bg-black/95 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Attend <span className="text-orange-500">DEVCON 2024</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for an unforgettable experience filled with learning, networking, and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Event Schedule</h3>
                <p className="text-gray-400">October 15-17, 2024 • Tech Convention Center</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-orange-500 font-bold text-2xl">Day 1</div>
                  <div className="text-gray-400">Workshops</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-orange-500 font-bold text-2xl">Day 2</div>
                  <div className="text-gray-400">Keynotes</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-orange-500 font-bold text-2xl">Day 3</div>
                  <div className="text-gray-400">Networking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}