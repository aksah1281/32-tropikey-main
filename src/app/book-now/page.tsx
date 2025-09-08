'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const BookNow = () => {
  useEffect(() => {
    // Redirect to Google Calendar after a short delay
    const timer = setTimeout(() => {
      window.open('https://calendar.google.com/calendar/u/0?cid=YWRtaW5AMzJ0cm9waWtleS5jb20', '_blank');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0EBE5] via-[#F4F0EA] to-[#E5DDD3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Book Your <span className="bg-gradient-to-r from-[#B9A590] to-[#A0926B] bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a personalized consultation with our expert team. We're here to help you achieve your property goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-[#F4F0EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBF8F3] rounded-2xl shadow-xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex p-4 bg-gradient-to-r from-[#B9A590] to-[#A0926B] rounded-2xl mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Redirecting to Calendar</h2>
              <p className="text-gray-600 text-lg mb-8">
                You will be redirected to our Google Calendar booking system in a moment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B9A590] to-[#A0926B] text-white font-semibold rounded-full">
                <Calendar className="w-5 h-5 mr-2" />
                Opening Calendar...
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-gray-500 text-sm">
                If you are not redirected automatically, click the button below:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://calendar.google.com/calendar/u/0?cid=YWRtaW5AMzJ0cm9waWtleS5jb20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#B9A590] text-[#B9A590] font-semibold rounded-full hover:bg-[#B9A590] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Open Calendar
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F0EBE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team provides personalized guidance to help you make informed decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Flexible Scheduling',
                description: 'Book appointments that fit your schedule with our convenient online booking system.'
              },
              {
                icon: ExternalLink,
                title: 'Easy Access',
                description: 'Direct access to our calendar system for seamless appointment booking.'
              },
              {
                icon: Calendar,
                title: 'Expert Guidance',
                description: 'Get personalized advice from our experienced property development professionals.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-[#B9A590] to-[#A0926B] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;