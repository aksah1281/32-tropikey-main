'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {

  const services = [
    {
      icon: Award,
      title: 'Soft Cost Consulting',
      description: 'Expert guidance through the early stages of property development—covering land surveys, rezoning, permitting, environmental assessments, and utility coordination.',
    },
    {
      icon: Users,
      title: 'Construction Design Support',
      description: 'From concept to blueprint, we coordinate the design phase of your project, connecting you with architects, engineers, and other professionals.',
    },
    {
      icon: Target,
      title: 'Resident Support Solutions',
      description: 'A monthly support service for landlords who want to stay hands-off while keeping their tenants cared for.',
    },
  ];


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
              About <span className="bg-gradient-to-r from-[#B9A590] to-[#A0926B] bg-clip-text text-transparent">32tropikey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              At 32tropikey LLC, we specialize in guiding property owners and investors through the most critical early stages of development.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-20 bg-[#F0EBE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our focus begins with <strong>Soft Cost Consulting</strong>—helping you plan and manage expenses like land surveys, rezoning, permitting, and utility coordination. From there, we provide <strong>Construction Design Support</strong>, connecting you with the right professionals and streamlining the design process to ensure your project is build-ready.
                </p>
                <p>
                  Alongside development services, we also offer <strong>Resident Support Solutions</strong> for landlords who need reliable tenant coordination without the burden of full property management. From maintenance scheduling to communication updates, we keep your property running smoothly while you stay hands-off.
                </p>
                <p>
                  Our mission is simple: to deliver clarity, organization, and trusted support so you can move your projects forward with confidence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/about/about.webp"
                alt="32tropikey office"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#B9A590] to-[#A0926B] rounded-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F4F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three focused services cover the essential aspects of property development and management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#B9A590] to-[#A0926B] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B9A590] to-[#A0926B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how our team can help you achieve your real estate goals. We&apos;re here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-now"
                className="inline-flex items-center px-8 py-4 bg-white text-[#B9A590] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Meeting
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
