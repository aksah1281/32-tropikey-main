'use client';

import { motion } from 'framer-motion';
import { Home, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Award,
      title: 'Soft Cost Consulting',
      description: 'Expert guidance through the early stages of property development—covering land surveys, rezoning, permitting, environmental assessments, and utility coordination. We help you plan, budget, and manage soft costs with clarity and efficiency.',
      features: ['Land Surveys', 'Rezoning Support', 'Permit Management', 'Environmental Assessments', 'Utility Coordination'],
      color: 'from-[#B9A590] to-[#A0926B]',
    },
    {
      icon: Home,
      title: 'Construction Design Support',
      description: 'From concept to blueprint, we coordinate the design phase of your project. Our team connects you with architects, engineers, and other professionals, ensuring your plans are practical, compliant, and build-ready.',
      features: ['Architect Coordination', 'Engineering Support', 'Design Planning', 'Compliance Review', 'Blueprint Management'],
      color: 'from-[#A0926B] to-[#8B7355]',
    },
    {
      icon: Users,
      title: 'Resident Support Solutions',
      description: 'A monthly support service for landlords who want to stay hands-off while keeping their tenants cared for. We handle tenant inquiries, schedule maintenance, and provide communication updates so your property runs smoothly without full property management.',
      features: ['Tenant Inquiries', 'Maintenance Scheduling', 'Communication Updates', 'Hands-off Management', 'Monthly Support'],
      color: 'from-[#C4B59A] to-[#B9A590]',
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
              Our <span className="bg-gradient-to-r from-[#B9A590] to-[#A0926B] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Three focused services to support your property development and management needs. From early-stage consulting to ongoing tenant support, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F4F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#FBF8F3] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#E5DDD3]"
              >
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#B9A590] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#B9A590] hover:text-[#A0926B] font-semibold group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure the best outcomes for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We start with understanding your needs and goals.' },
              { step: '02', title: 'Strategy', description: 'Develop a customized plan tailored to your situation.' },
              { step: '03', title: 'Execution', description: 'Implement the plan with expert guidance and support.' },
              { step: '04', title: 'Success', description: 'Achieve your real estate goals with confidence.' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#B9A590] to-[#A0926B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you manage your properties and development projects. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center px-8 py-4 bg-white text-[#B9A590] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
