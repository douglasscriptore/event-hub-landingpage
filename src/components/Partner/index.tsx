import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://picsum.photos/seed/partner1/200'
  },
  {
    id: '2',
    name: 'InnovateHub',
    logo: 'https://picsum.photos/seed/partner2/200'
  },
  {
    id: '3',
    name: 'DevCompany',
    logo: 'https://picsum.photos/seed/partner3/200'
  },
  {
    id: '4',
    name: 'CreativeLab',
    logo: 'https://picsum.photos/seed/partner4/200'
  },
  {
    id: '5',
    name: 'DigitalPro',
    logo: 'https://picsum.photos/seed/partner5/200'
  },
  {
    id: '6',
    name: 'FutureTech',
    logo: 'https://picsum.photos/seed/partner6/200'
  }
];

export const PartnerSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Nossos Parceiros</h2>
        <p className="text-default-600">Empresas que confiam na EventHubs</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card isPressable isHoverable>
              <CardBody className="p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};