import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import type { Event } from '../../@types/event';

interface HeroSectionProps {
  events: Event[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ events }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-primary-500/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 left-1/2 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl"
          animate={{
            x: [-200, 200],
            y: [-200, 200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 right-1/2 h-96 w-96 rounded-full bg-secondary-500/30 blur-3xl"
          animate={{
            x: [200, -200],
            y: [200, -200],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge color="primary" variant="flat" className="mb-4">
            Sua plataforma de eventos
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Descubra Eventos Incríveis
          </h1>
          <p className="text-xl text-default-600 max-w-2xl mx-auto">
            Encontre e participe dos melhores eventos acadêmicos, shows e muito mais.
          </p>
        </motion.div>

        <div className="relative mt-8">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className="pb-12"
            breakpoints={{
              640: {
                slidesPerView: 1.8,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative overflow-hidden backdrop-blur-sm bg-background/60">
                    <CardBody className="p-0">
                      <div className="relative h-[300px]">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                          <Badge 
                            color={
                              event.category === 'academic' ? 'primary' :
                              event.category === 'show' ? 'secondary' : 'success'
                            }
                            variant="flat"
                            className="mb-4 self-start"
                          >
                            {event.category}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                          <div className="flex flex-col gap-2 text-sm">
                            <p className="flex items-center gap-2">
                              <Icon icon="lucide:calendar" className="text-primary-500" />
                              {event.date}
                            </p>
                            <p className="flex items-center gap-2">
                              <Icon icon="lucide:map-pin" className="text-primary-500" />
                              {event.location}
                            </p>
                          </div>
                          <Button
                            color="primary"
                            variant="shadow"
                            className="mt-4"
                            endContent={<Icon icon="lucide:arrow-right" />}
                          >
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 mt-12"
        >
          <Button
            size="lg"
            color="primary"
            variant="shadow"
            endContent={<Icon icon="lucide:search" />}
          >
            Explorar Eventos
          </Button>
          <Button
            size="lg"
            variant="bordered"
            endContent={<Icon icon="lucide:calendar-plus" />}
          >
            Criar Evento
          </Button>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: "lucide:users", label: "Usuários", value: "10k+" },
            { icon: "lucide:calendar-check", label: "Eventos", value: "500+" },
            { icon: "lucide:map-pin", label: "Cidades", value: "50+" },
            { icon: "lucide:star", label: "Avaliação", value: "4.9" },
          ].map((stat, index) => (
            <Card key={index} className="backdrop-blur-sm bg-background/60">
              <CardBody className="text-center p-4">
                <Icon icon={stat.icon} className="h-8 w-8 mx-auto mb-2 text-primary-500" />
                <p className="text-2xl font-bold text-default-900">{stat.value}</p>
                <p className="text-default-600">{stat.label}</p>
              </CardBody>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};