import React from 'react';
import { Star, Calendar, Users, Clock, MapPin, Send } from 'lucide-react';
import Countdown from './components/Countdown';
import EventCard from './components/EventCard';

function App() {
  const events = [
    {
      title: "Cosmic Coding Challenge",
      description: "Test your programming skills in this space-themed hackathon",
      date: "April 15, 2024",
      icon: "Code"
    },
    {
      title: "Stellar Speaker Series",
      description: "Join renowned astronomers and space experts",
      date: "April 16, 2024",
      icon: "Mic"
    },
    {
      title: "Galactic Gaming Tournament",
      description: "Compete in space-themed video game competitions",
      date: "April 17, 2024",
      icon: "Gamepad"
    }
  ];

  // Set countdown to tomorrow night at 23:59:59
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 0);
  const eventDate = tomorrow.toISOString();

  return (
    <div className="min-h-screen bg-[#0B1026] text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("./hello.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1026]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            NOVA 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-orbitron">Where Science Meets Imagination</p>
          <Countdown targetDate={eventDate} />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl font-bold mb-8 text-center">About Nova</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Nova is the premier space-themed college festival that brings together technology,
                science, and entertainment. Join us for three days of cosmic exploration,
                innovation, and unforgettable experiences.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000"
                alt="Space"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 md:px-8 bg-[#111936]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl font-bold mb-12 text-center">Featured Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-orbitron text-4xl font-bold mb-8 text-center">Register Now</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-[#1A2342] border border-purple-500 focus:outline-none focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-[#1A2342] border border-purple-500 focus:outline-none focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2">College</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-[#1A2342] border border-purple-500 focus:outline-none focus:border-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Register
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#111936]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl font-bold mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4 text-purple-400" />
              <p>Tech University Campus<br />Innovation Street</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-4 text-purple-400" />
              <p>April 15-17, 2024<br />9:00 AM - 6:00 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Send className="w-8 h-8 mb-4 text-purple-400" />
              <p>info@nova2024.com<br />+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm">
        <p>© 2024 Nova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
