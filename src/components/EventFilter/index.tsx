import React from 'react';
import { Tabs, Tab, Card } from '@heroui/react';
import { motion } from 'framer-motion';
import type { Event } from '../../@types/event';

interface EventFilterProps {
  events: Event[];
  onFilterChange: (category: string) => void;
}

export const EventFilter: React.FC<EventFilterProps> = ({ events, onFilterChange }) => {
  const [selected, setSelected] = React.useState('all');

  const handleSelectionChange = (key: React.Key) => {
    setSelected(key as string);
    onFilterChange(key as string);
  };

  return (
    <Card className="w-full">
      <Tabs
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        aria-label="Event categories"
        color="primary"
        variant="bordered"
        classNames={{
          tabList: "gap-4",
          cursor: "w-full",
          tab: "px-4 py-2",
        }}
      >
        <Tab key="all" title="Todos" />
        <Tab key="academic" title="Acadêmico" />
        <Tab key="show" title="Show" />
        <Tab key="security" title="Portaria" />
      </Tabs>
    </Card>
  );
};