import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: '1',
    name: 'Ana Silva',
    avatar: 'https://i.pravatar.cc/150?img=1',
    comment: 'Incrível organização! O evento superou todas as expectativas.',
    rating: 5,
    eventName: 'TechConf 2023'
  },
  {
    id: '2',
    name: 'João Santos',
    avatar: 'https://i.pravatar.cc/150?img=2',
    comment: 'Excelente plataforma para encontrar os melhores eventos.',
    rating: 5,
    eventName: 'Dev Summit'
  },
  {
    id: '3',
    name: 'Maria Costa',
    avatar: 'https://i.pravatar.cc/150?img=3',
    comment: 'Interface intuitiva e ótimo suporte ao cliente.',
    rating: 4,
    eventName: 'Rock Festival'
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">O que dizem nossos usuários</h2>
        <p className="text-default-600">Depoimentos de quem já participou dos nossos eventos</p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody className="text-center space-y-4">
                  <Avatar
                    src={testimonial.avatar}
                    className="mx-auto"
                    size="lg"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-small text-default-500">{testimonial.eventName}</p>
                  </div>
                  <p className="text-default-600">"{testimonial.comment}"</p>
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-warning">★</span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};