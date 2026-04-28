import { 
  Search, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Menu,
  ShoppingBag,
  Star,
  ArrowRight,
  Clock,
  Store,
  Truck,
  Percent,
  CheckCircle,
  Leaf
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a2e]">
      {/* Top Banner */}
      <div className="bg-[#1a1a2e] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Store size={14} className="text-[#22C55E]" />
            <span className="font-medium">Ouvert aujourd'hui jusqu'à 20:00</span>
          </div>
          <span className="opacity-30">|</span>
          <div className="flex items-center gap-2 text-gray-300">
            <ShoppingBag size={14} className="text-[#22C55E]" />
            <span className="font-medium">Click & Collect Gratuit en 30 min</span>
          </div>
        </div>
      </div>

      {/* Header Container */}
      <header className="px-4 py-4 md:py-6 border-b border-gray-100 sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Main Header Row */}
          <div className="flex items-center justify-between gap-6 lg:gap-12">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-display font-bold text-[#22C55E]">
                Sitis Market
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 hover:border-[#22C55E] focus-within:border-[#22C55E] focus-within:ring-2 focus-within:ring-[#22C55E]/20 transition-all">
              <button className="flex items-center gap-2 text-sm font-medium text-gray-700 pr-4 border-r border-gray-300">
                Catégories <ChevronDown size={14} />
              </button>
              <input 
                type="text" 
                placeholder="Rechercher des produits frais, épicerie..." 
                className="flex-1 bg-transparent px-4 text-sm focus:outline-none text-[#1a1a2e]"
              />
              <Search size={18} className="text-gray-400" />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden lg:flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs">Des questions ? Appelez-nous</span>
                  <a href="tel:+33164488219" className="font-semibold text-[#1a1a2e]">+33 1 64 48 82 19</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a 
                  href="#contact"
                  className="hidden sm:flex px-6 py-3 ml-2 bg-[#1a1a2e] text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors min-h-[44px] items-center gap-2"
                >
                  <MapPin size={16} />
                  Nous trouver
                </a>
                <button className="p-2.5 lg:hidden ml-2 rounded-lg hover:bg-gray-50">
                  <Menu size={24} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-8 mt-6">
            <a href="#" className="text-[#22C55E] font-medium text-sm transition-colors">Accueil</a>
            <button className="flex items-center gap-1 text-gray-600 hover:text-[#22C55E] font-medium text-sm transition-colors">
              Nos Rayons <ChevronDown size={14} />
            </button>
            <a href="#promotions" className="text-gray-600 hover:text-[#22C55E] font-medium text-sm transition-colors">Promotions en magasin</a>
            <a href="#about" className="text-gray-600 hover:text-[#22C55E] font-medium text-sm transition-colors">Pourquoi nous choisir</a>
            <a href="#contact" className="text-gray-600 hover:text-[#22C55E] font-medium text-sm transition-colors">Accès & Horaires</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-[#f2efe9] rounded-[24px] min-h-[480px] lg:min-h-[560px] flex items-center px-6 sm:px-12 lg:px-16 py-12 relative overflow-hidden">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-xl">
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium text-gray-800 mb-6 shadow-sm border border-white">
                <MapPin size={14} className="text-[#22C55E]" />
                Centre commercial des templiers, Ballainvilliers
              </div>
              
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-display font-bold leading-[1.1] text-[#1a1a2e] mb-6 tracking-tight">
                Vos Produits Frais,<br />
                <span className="text-[#22C55E]">À Côté De Chez Vous</span>
              </h1>
              
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-[65ch] leading-relaxed">
                Le Petit Marché de Ballain vous accueille tous les jours. Gagnez du temps : réservez vos courses en ligne ou par téléphone et venez les récupérer quand vous voulez !
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#rayons" className="inline-flex items-center justify-center px-8 py-4 bg-[#16a34a] text-white font-medium rounded-xl hover:bg-[#15803d] shadow-[0_8px_24px_rgba(22,163,74,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 transition-all min-h-[48px]">
                  Découvrir nos rayons
                </a>
                <a href="tel:+33164488219" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a2e] font-medium rounded-xl hover:bg-gray-50 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 transition-all min-h-[48px] gap-2 border border-gray-200">
                  <Phone size={18} />
                  Appeler le magasin
                </a>
              </div>
              
              {/* Proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" alt="Client satisfait" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Client satisfait" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" alt="Client satisfait" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1a1a2e] text-white flex items-center justify-center text-xs font-bold">
                    +50
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex text-[#F59E0B] mb-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="font-bold text-[#1a1a2e]">4.9/5 sur Google Maps</span>
                </div>
              </div>
            </div>
            
            {/* Right Image Container - Desktop */}
            <div className="hidden lg:block relative w-full h-[500px] ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=1000" 
                alt="Rayon de fruits et légumes frais de Sitis Market"
                className="w-full h-full object-cover rounded-[24px] shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 border border-gray-50">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#22C55E]">
                  <ShoppingBag size={24} />
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold text-[#1a1a2e] leading-tight">Click & Collect</p>
                  <p className="text-xs text-gray-500 mt-0.5">Retrait en 30 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Categories Section */}
      <section id="rayons" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-[#1a1a2e] mb-2">Nos Rayons</h2>
            <p className="text-gray-600">Explorez notre sélection de produits frais et du quotidien</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {[
             { name: "Fruits & Légumes", img: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=300&h=300" },
             { name: "Épicerie", img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=300&h=300" },
             { name: "Frais & Laitier", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=300&h=300" },
             { name: "Surgelés", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300&h=300" },
             { name: "Boissons", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=300&h=300" },
             { name: "Snacks", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=300&h=300" },
          ].map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#f8f9fa] rounded-2xl p-6 aspect-square flex items-center justify-center mb-3 transition-all group-hover:bg-[#22C55E]/5 group-hover:shadow-sm">
                <img src={cat.img} alt={`Rayon ${cat.name}`} className="w-full h-full object-contain rounded-xl mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-center font-medium text-[#1a1a2e]">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Deals Section */}
      <section id="promotions" className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold text-[#1a1a2e] mb-2">Les Bons Plans En Magasin</h2>
              <p className="text-gray-600">Des prix imbattables sur des produits sélectionnés chaque semaine.</p>
            </div>
            <a href="#contact" className="hidden md:flex text-[#16a34a] font-bold items-center gap-1 hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 rounded transition-all">
              Venir les découvrir <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fraises Gariguette", price: "4.50€", oldPrice: "6.00€", unit: "la barquette 250g", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400&h=300", tag: "-25%" },
              { name: "Avocats Hass Mûrs", price: "2.90€", oldPrice: "3.90€", unit: "le lot de 3", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400&h=300", tag: "Promo" },
              { name: "Tomates Grappes", price: "2.50€", oldPrice: "3.20€", unit: "le kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400&h=300", tag: "Saison" },
              { name: "Jus d'Orange Pressé", price: "3.80€", oldPrice: "4.50€", unit: "la bouteille 1L", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Orangejuice.jpg/960px-Orangejuice.jpg", tag: "Frais" }
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-shadow group relative flex flex-col">
                <span className="absolute top-4 left-4 bg-[#EF4444] text-white text-xs font-bold px-2 py-1 rounded z-10">
                  {product.tag}
                </span>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-4 items-center justify-center flex">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">{product.unit}</span>
                  <h4 className="font-semibold text-[#1a1a2e] mb-2 leading-tight flex-1">{product.name}</h4>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-[#22C55E] text-xl font-bold">{product.price}</span>
                    <span className="text-gray-400 text-sm line-through mb-0.5">{product.oldPrice}</span>
                  </div>
                  <button className="w-full py-2.5 rounded-xl border-2 border-[#16a34a] text-[#16a34a] font-bold hover:bg-[#16a34a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 transition-colors flex justify-center items-center gap-2">
                    <ShoppingBag size={16} />
                    Mettre de côté
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos Banners */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f0fdf4] rounded-3xl p-8 md:p-12 flex items-center relative overflow-hidden group">
            <div className="relative z-10 max-w-[240px]">
              <span className="inline-block px-3 py-1 bg-white rounded-full text-[#22C55E] text-xs font-bold tracking-wide mb-4 shadow-sm">NOUVEAU</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e] mb-4">Primeur & Qualité</h3>
              <p className="text-gray-600 mb-6 text-sm">Une sélection rigoureuse pour vous garantir un goût authentique.</p>
              <a href="#contact" className="inline-block px-6 py-3 bg-[#16a34a] text-white rounded-xl font-bold text-sm hover:bg-[#15803d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2">
                Nous rendre visite
              </a>
            </div>
            <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600&h=600" alt="Légumes frais" className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ mixBlendMode: 'multiply' }} />
          </div>
          
          <div className="bg-[#fdf8f6] rounded-3xl p-8 md:p-12 flex items-center relative overflow-hidden group">
            <div className="relative z-10 max-w-[240px]">
              <span className="inline-block px-3 py-1 bg-white rounded-full text-[#EA580C] text-xs font-bold tracking-wide mb-4 shadow-sm">LOCAL</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e] mb-4">Saveurs d'Ici</h3>
              <p className="text-gray-600 mb-6 text-sm">Favoriser les circuits courts pour une meilleure fraîcheur.</p>
              <a href="#contact" className="inline-block px-6 py-3 bg-[#1a1a2e] text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors">
                En savoir plus
              </a>
            </div>
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600&h=600" alt="Pain artisanal" className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e] mb-6">
              Pourquoi choisir Sitis Market pour vos courses ?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nous sommes bien plus qu'une simple supérette. Nous sommes le commerce de proximité qui facilite votre quotidien avec des produits de qualité.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Clock className="text-[#22C55E]" size={24} />, title: "Ouvert tous les jours", desc: "De 8h à 20h, nous sommes là quand vous en avez besoin." },
                { icon: <ShoppingBag className="text-[#22C55E]" size={24} />, title: "Click & Collect Rapide", desc: "Commandez par téléphone et récupérez tout prêt en 30 minutes." },
                { icon: <Leaf className="text-[#22C55E]" size={24} />, title: "Sélection Fraîcheur", desc: "Des arrivages quotidiens pour des fruits et légumes toujours croquants." },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] mb-1 text-lg">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200&h=1200" alt="Commerçant préparant une commande" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-50 md:block hidden">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-[#22C55E]" size={24} />
                <h4 className="font-bold text-[#1a1a2e]">Service Client</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Notre équipe prépare vos courses avec le même soin que si c'était pour nous.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 border-b-0">Ce que disent nos clients</h2>
            <p className="text-gray-400">La satisfaction de nos voisins est notre plus belle récompense.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marie L.", role: "Habitante de Ballainvilliers", text: "Client régulier ! Pratique, pas mal de choix et souvent ouvert. Je recommande vivement ce supermarché de quartier pour son accueil chaleureux et ses bons produits." },
              { name: "Thomas D.", role: "Client local", text: "Je suis venu chercher quelques courses en urgence. J'ai trouvé tout ce dont j'avais besoin rapidement. Le fait qu'ils fassent relais colis est aussi un grand plus !" },
              { name: "Sophie G.", role: "Voisine du quartier", text: "De très bons fruits et légumes avec des prix vraiment intéressants pour une boutique de proximité. Et toujours servis avec le sourire. Merci Sitis Market." }
            ].map((review, i) => (
              <div key={i} className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700/50">
                <div className="flex text-[#F59E0B] mb-6">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Call US Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-[#16a34a] rounded-[32px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-green-600/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Besoin de passer commande ?</h2>
            <p className="text-green-50 mb-10 max-w-2xl mx-auto text-lg">
              Préparez votre liste, appelez-nous et venez récupérer vos sacs tout prêts au magasin. Simple, rapide et sans frais supplémentaires.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+33164488219" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#16a34a] font-bold rounded-xl hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors text-lg shadow-lg">
                <Phone size={20} />
                01 64 48 82 19
              </a>
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#15803d] text-white font-bold rounded-xl hover:bg-[#14532d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors text-lg">
                <MapPin size={20} />
                Voir l'itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-[#1a1a2e] mb-4">Une demande particulière ?</h2>
          <p className="text-gray-600 mb-10">Un produit introuvable ? Une commande de gros pour un événement ? Écrivez-nous.</p>
          
          <form action="" method="POST" className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/20 outline-none transition-all" placeholder="Jean Dupont" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/20 outline-none transition-all" placeholder="06 12 34 56 78" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Votre message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/20 outline-none transition-all resize-none" placeholder="Bonjour, je cherche à savoir si vous avez..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-[#1a1a2e] text-white font-bold rounded-xl hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a2e] focus-visible:ring-offset-2">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a2e] pt-20 pb-10 border-t border-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Sitis Market</h2>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Votre Petit Marché de Ballainvilliers. Découvrez une large sélection de produits pour vos courses quotidiennes, à un tarif juste.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Liens Rapides</h4>
              <ul className="space-y-4">
                <li><a href="#rayons" className="hover:text-white transition-colors text-sm">Nos Rayons</a></li>
                <li><a href="#promotions" className="hover:text-white transition-colors text-sm">Promotions</a></li>
                <li><a href="#about" className="hover:text-white transition-colors text-sm">Philosophie</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">Recrutement</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Horaires</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Lundi - Samedi</span>
                  <span className="text-white">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Dimanche</span>
                  <span className="text-white">08:00 - 13:00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Nous Contacter</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#22C55E] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm">Centre commercial des templiers<br/>Rue du Rouillon<br/>91160 Ballainvilliers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#22C55E] flex-shrink-0" size={18} />
                  <a href="tel:+33164488219" className="text-sm hover:text-white transition-colors">01 64 48 82 19</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} Sitis Market - Le Petit Marché De Ballain. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Sticky */}
      <a href="tel:+33164488219" className="lg:hidden fixed bottom-6 right-6 bg-[#16a34a] text-white p-4 rounded-full shadow-[0_8px_32px_rgba(22,163,74,0.4)] z-50 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform animate-bounce" aria-label="Appeler le magasin">
         <Phone size={24} />
      </a>
    </div>
  );
}
