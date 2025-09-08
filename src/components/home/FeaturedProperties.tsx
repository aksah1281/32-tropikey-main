'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import Link from 'next/link';

const FeaturedProperties = () => {
  const services = [
    {
      id: 1,
      title: 'Soft Cost Consulting',
      description: 'Expert guidance through early development stages',
      features: ['Land Surveys', 'Rezoning', 'Permits', 'Environmental Assessments'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Construction Design Support',
      description: 'From concept to blueprint coordination',
      features: ['Architect Coordination', 'Engineering Support', 'Design Planning', 'Compliance Review'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 3,
      title: 'Resident Support Solutions',
      description: 'Monthly hands-off tenant management',
      features: ['Tenant Inquiries', 'Maintenance Scheduling', 'Communication Updates', 'Hands-off Management'],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
  ];

  return (
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive property management and development services tailored to your investment needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#FBF8F3] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {service.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#B9A590] to-[#A0926B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Service
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-[#B9A590] transition-colors duration-200" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#B9A590] transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-[#B9A590] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className="px-4 py-2 bg-gradient-to-r from-[#B9A590] to-[#A0926B] text-white rounded-lg hover:from-[#A0926B] hover:to-[#8B7355] transition-all duration-200 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B9A590] to-[#A0926B] text-white font-semibold rounded-full hover:from-[#A0926B] hover:to-[#8B7355] transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
