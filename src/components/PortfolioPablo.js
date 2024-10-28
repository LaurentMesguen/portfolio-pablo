import React, { useState } from 'react';
import { Play, Pause, Download, ExternalLink, Instagram, Mail, Music } from 'lucide-react';

const PortfolioArtiste = () => {
  const [activeTab, setActiveTab] = useState('accueil');
  
  const openInstagram = () => {
    window.open('https://www.instagram.com/pablo_ponchito', '_blank');
  };

  const openSoundcloud = () => {
    window.open('https://soundcloud.com/pabloponchito', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Pablo Ponchito</h1>
            <div className="flex items-center space-x-4">
              <div className="space-x-4">
                <button 
                  onClick={() => setActiveTab('accueil')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'accueil' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                >
                  Accueil
                </button>
                <button 
                  onClick={() => setActiveTab('musique')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'musique' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                >
                  Musique
                </button>
                <button 
                  onClick={() => setActiveTab('art')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'art' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                >
                  Art
                </button>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'contact' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                >
                  Contact
                </button>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={openInstagram}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={openSoundcloud}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-colors"
                  aria-label="Soundcloud"
                >
                  <Music className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4">
        {activeTab === 'accueil' && (
          <section className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">Pablo Ponchito</h1>
                <h2 className="text-2xl text-gray-600">Musicien & Artiste Visuel</h2>
                <p className="text-lg text-gray-700">
                  Bienvenue dans mon univers créatif où musique et art visuel se rencontrent. 
                  Je crée des expériences uniques à travers mes compositions musicales et mes œuvres artistiques.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button onClick={() => setActiveTab('musique')} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center space-x-2">
                    <Music className="w-5 h-5" />
                    <span>Découvrir ma musique</span>
                  </button>
                  <button 
                    onClick={openSoundcloud}
                    className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Music className="w-5 h-5" />
                    <span>Écouter sur Soundcloud</span>
                  </button>
                  <button 
                    onClick={openInstagram}
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@pablo_ponchito</span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/600/800"
                  alt="Pablo Ponchito"
                  className="w-full h-[600px] object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-medium">Dernière création :</p>
                  <p className="text-gray-600">"A summer with oud" - 2024</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'musique' && (
          <section className="space-y-12 py-12">
            <h2 className="text-3xl font-bold text-gray-900">Ma Musique</h2>
            
            {/* Lecteur Soundcloud */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Dernière sortie</h3>
              <div className="w-full">
                <iframe 
                  width="100%" 
                  height="166" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1906908131&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="rounded"
                ></iframe>
              </div>
            </div>

            {/* Autres morceaux */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">A summer with oud</h3>
                    <p className="text-gray-600">Single / 2024</p>
                  </div>
                  <button onClick={openSoundcloud} className="p-2 rounded-full hover:bg-gray-100">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Les autres sections restent identiques */}
        {activeTab === 'art' && (
          <section className="space-y-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900">Mes Œuvres</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img 
                    src="/api/placeholder/400/400"
                    alt="Œuvre d'art"
                    className="w-full h-64 object-cover rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold">Titre de l'œuvre</h3>
                <p className="text-gray-600">Technique / Année</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="max-w-2xl mx-auto space-y-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Envoyer
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
};

export default PortfolioArtiste;