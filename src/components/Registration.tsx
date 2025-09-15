import React, { useState } from 'react';

interface FormData {
  fullName: string;
  gamerTag: string;
  email: string;
  favoriteGame: string;
}

interface FormErrors {
  fullName?: string;
  gamerTag?: string;
  email?: string;
  favoriteGame?: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gamerTag: '',
    email: '',
    favoriteGame: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.gamerTag.trim()) newErrors.gamerTag = 'Gamer tag is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.favoriteGame.trim()) newErrors.favoriteGame = 'Favorite game is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Registration successful!');
    setFormData({ fullName: '', gamerTag: '', email: '', favoriteGame: '' });
    setIsSubmitting(false);
    setShowForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          JOIN THE <span className="text-lime-400 drop-shadow-[0_0_10px_#84cc16]">BATTLE</span>
        </h2>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-4 bg-lime-400 text-black font-extrabold rounded-2xl shadow-lg hover:bg-lime-300 transition transform hover:scale-105"
          >
            REGISTER NOW
          </button>
        ) : (
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-lime-400/50 animate-fadeIn">
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-lime-400 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-lime-400 focus:outline-none"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-lime-400 font-semibold mb-2">Gamer Tag</label>
                <input
                  type="text"
                  name="gamerTag"
                  value={formData.gamerTag}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-lime-400 focus:outline-none"
                  placeholder="Enter your gamer tag"
                />
                {errors.gamerTag && <p className="text-red-400 text-sm mt-1">{errors.gamerTag}</p>}
              </div>

              <div>
                <label className="block text-lime-400 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-lime-400 focus:outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-lime-400 font-semibold mb-2">Favorite Game</label>
                <select
                  name="favoriteGame"
                  value={formData.favoriteGame}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:ring-2 focus:ring-lime-400 focus:outline-none"
                >
                  <option value="">Select your favorite game</option>
                  <option value="Fortnite">Fortnite</option>
                  <option value="PUBG">PUBG</option>
                  <option value="Apex Legends">Apex Legends</option>
                  <option value="Call of Duty">Call of Duty</option>
                  <option value="Valorant">Valorant</option>
                  <option value="Other">Other</option>
                </select>
                {errors.favoriteGame && <p className="text-red-400 text-sm mt-1">{errors.favoriteGame}</p>}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-6 bg-lime-400 text-black font-extrabold rounded-lg shadow-lg hover:bg-lime-300 transition transform hover:scale-105 disabled:bg-gray-600 disabled:text-gray-400"
                >
                  {isSubmitting ? 'REGISTERING...' : 'SUBMIT'}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-6 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-500 transition transform hover:scale-105 my-6"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;
