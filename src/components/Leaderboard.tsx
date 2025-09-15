import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
interface Player {
  id: number;
  gamerTag: string;
  points: number;
}
interface User { 
    id: number;
    username: string;
}   

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await response.json();
        
        // Transform users to players with random points
        const playerData: Player[] = users.slice(0, 10).map((user, index) => ({
          id: user.id,
          gamerTag: user.username,
          points: Math.floor(Math.random() * 10000) + 1000 - (index * 50)
        })).sort((a, b) => b.points - a.points);
        
        setPlayers(playerData);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
            LEADER<span className="text-lime-400">BOARD</span>
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          LEADER<span className="text-lime-400">BOARD</span>
        </h2>
        
        <div className="space-y-4">
          {players.map((player, index) => {
            const isTop3 = index < 3;
            const rankColors = ['text-yellow-400', 'text-gray-300', 'text-orange-400'];
            
            return (
                    <div
                    key={player.id}
                    className={`card flex items-center justify-between ${
                        isTop3 ? 'border-l-4 border-lime-400 bg-gray-900/90' : ''
                    }`}
                    >
                <div className="flex items-center gap-4">
                  <div className={`text-2xl font-black w-8 ${isTop3 ? rankColors[index] : 'text-gray-400'}`}>
                    #{index + 1}
                  </div>
                  {isTop3 && <Star className="w-5 h-5 text-lime-400" />}
                  <div>
                    <div className="text-white font-bold">{player.gamerTag}</div>
                    <div className="text-gray-400 text-sm">Player ID: {player.id}</div>
                  </div>
                </div>
                <div className="text-lime-400 font-black text-xl">
                  {player.points.toLocaleString()} pts
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;