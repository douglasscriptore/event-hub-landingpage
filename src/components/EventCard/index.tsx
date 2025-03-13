import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import type { Event } from '../../@types/event';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardBody className="p-0">
          <img
            src={event.image}
            alt={event.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Chip
                color={
                  event.category === 'academic'
                    ? 'primary'
                    : event.category === 'show'
                    ? 'secondary'
                    : 'success'
                }
                variant="flat"
              >
                {event.category}
              </Chip>
            </div>
            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
            <p className="flex items-center gap-2 text-default-500">
              <Icon icon="lucide:calendar" />
              {event.date}
            </p>
            <p className="flex items-center gap-2 text-default-500">
              <Icon icon="lucide:map-pin" />
              {event.location}
            </p>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            color="primary"
            variant="flat"
            endContent={<Icon icon="lucide:arrow-right" />}
            fullWidth
          >
            Ver mais
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};