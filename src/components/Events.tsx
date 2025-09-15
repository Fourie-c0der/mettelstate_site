import React from 'react';
import { Calendar, MapPin, DollarSign, Trophy } from 'lucide-react';

const Events: React.FC = () => {
  const details = [
    { icon: Calendar, label: 'Date & Time', value: 'August 10, 2025 at 6PM SAST' },
    { icon: MapPin, label: 'Location', value: 'Online - Streamed live on Twitch' },
    { icon: DollarSign, label: 'Prize Pool', value: 'R50,000' },
    { icon: Trophy, label: 'Format', value: 'Round Robin, Double Elimination' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          EVENT <span className="text-lime-400">DETAILS</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map(({ icon: Icon, label, value }) => (
            <div className="card text-center" key={label}>
              <Icon className="w-12 h-12 text-lime-400 mx-auto mb-4" />
              <h3 className="text-lime-400 font-bold mb-2">{label}</h3>
              <p className="text-white text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;