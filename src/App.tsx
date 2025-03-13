import React from 'react';
import { useTheme } from '@heroui/use-theme';
import { Icon } from '@iconify/react';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Divider } from '@heroui/react';
import { HeroSection } from './components/Hero';
import { EventFilter } from './components/EventFilter';
import { EventCard } from './components/EventCard';
import { TestimonialSection } from './components/Testimonials';
import { PartnerSection } from './components/Partner';
import { motion } from 'framer-motion';
import type { Event } from './@types/event';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'TechConf 2024',
    category: 'academic',
    date: '15 Mar 2024',
    location: 'São Paulo Convention Center',
    image: 'https://picsum.photos/seed/event1/1200/600',
    description: 'The biggest tech conference in Latin America',
    coordinates: {
      lat: -23.5505,
      lng: -46.6333
    }
  },
  {
    id: '2',
    title: 'Rock Festival',
    category: 'show',
    date: '20 Mar 2024',
    location: 'Allianz Parque',
    image: 'https://picsum.photos/seed/event2/1200/600',
    description: 'A night of classic rock',
    coordinates: {
      lat: -23.5277,
      lng: -46.6789
    }
  },
  {
    id: '3',
    title: 'Dev Summit 2024',
    category: 'academic',
    date: '25 Mar 2024',
    location: 'WTC Events Center',
    image: 'https://picsum.photos/seed/event3/1200/600',
    description: 'The ultimate developer conference',
    coordinates: {
      lat: -23.5505,
      lng: -46.6333
    }
  }
];

export default function App() {
  const { theme, setTheme } = useTheme();
  const [filteredEvents, setFilteredEvents] = React.useState(mockEvents);

  const handleFilterChange = (category: string) => {
    if (category === 'all') {
      setFilteredEvents(mockEvents);
    } else {
      setFilteredEvents(mockEvents.filter(event => event.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        shouldHideOnScroll
        className="bg-background/80 backdrop-blur-md"
        maxWidth="xl"
      >
        <NavbarBrand>
          <p className="font-bold text-inherit text-2xl">EventHubs</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#events">
              Eventos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#testimonials">
              Depoimentos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#partners">
              Parceiros
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Icon
                icon={theme === 'light' ? 'lucide:moon' : 'lucide:sun'}
                className="h-5 w-5"
              />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              Entrar
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main>
        <HeroSection events={mockEvents} />
        
        <div className="mx-auto max-w-7xl px-4 py-12" id="events">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
            <EventFilter events={mockEvents} onFilterChange={handleFilterChange} />
          </motion.div>
          
          <motion.div 
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Divider className="my-12" />
        
        <div id="testimonials" className="py-12 bg-default-50">
          <TestimonialSection />
        </div>

        <Divider className="my-12" />
        
        <div id="partners" className="py-12">
          <PartnerSection />
        </div>
      </main>

      <footer className="bg-default-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EventHubs</h3>
              <p className="text-default-600">
                Sua plataforma completa para eventos personalizados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#events">Eventos</Link></li>
                <li><Link href="#testimonials">Depoimentos</Link></li>
                <li><Link href="#partners">Parceiros</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon icon="lucide:mail" />
                  contato@eventhubs.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="lucide:phone" />
                  (11) 99999-9999
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <Button isIconOnly variant="light">
                  <Icon icon="lucide:instagram" className="h-5 w-5" />
                </Button>
                <Button isIconOnly variant="light">
                  <Icon icon="lucide:facebook" className="h-5 w-5" />
                </Button>
                <Button isIconOnly variant="light">
                  <Icon icon="lucide:linkedin" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}