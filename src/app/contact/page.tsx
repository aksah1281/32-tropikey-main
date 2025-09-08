'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Contact Information',
      details: ['Rajesh Patel', 'contact@32tropikey.com'],
      color: 'from-[#B9A590] to-[#A0926B]',
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
              Contact <span className="bg-gradient-to-r from-[#B9A590] to-[#A0926B] bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get in touch with us for your development and property needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#F4F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FBF8F3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-[#E5DDD3]"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
