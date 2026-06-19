'use client';

// New part: Imports for React hooks, Framer Motion animations, Next.js link, and Lucide React icons
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Utensils, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Sparkles, 
  ChefHat, 
  CheckCircle2,
  Users
} from 'lucide-react';

// New part: Define the menu item type and items representing modern Sri Lankan cuisine
type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  spicy: 'None' | 'Mild' | 'Medium' | 'High' | 'Extreme';
  tag?: string;
  // Added optional imageSrc for item photos
  imageSrc?: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Crispy Egg Hopper Duo",
    description: "Traditional fermented rice batter crepes with a soft-cooked egg, served with fresh Pol Sambol and caramelized onion Lunu Miris.",
    price: "Rs. 1,850",
    category: "starters",
    spicy: "Medium",
    tag: "Popular",
    // Added generated dish image
    imageSrc: "/ceylon_dish_hero.png"
  },
  {
    name: "Mutton Roll Cones",
    description: "Spiced minced mutton and potato filling wrapped in a thin pastry, breaded, golden fried, and served with spicy mango chutney.",
    price: "Rs. 2,100",
    category: "starters",
    spicy: "High",
    tag: "Chef Special",
    // Added generated mutton rolls image
    imageSrc: "/mutton_rolls.png"
  },
  {
    name: "Spiced Jackfruit Cutlets",
    description: "Deep-fried croquettes filled with young jackfruit (polos), potatoes, and black pepper, served with a chili-lime dip.",
    price: "Rs. 1,400",
    category: "starters",
    spicy: "None",
    // Added generated jackfruit cutlets image
    imageSrc: "/jackfruit_cutlets.png"
  },
  {
    name: "Devilled Cashew & Cashew Apple",
    description: "Local raw cashews and sweet cashew apple chunks stir-fried with green chilies, onions, and curry leaves.",
    price: "Rs. 1,650",
    category: "starters",
    spicy: "Medium",
    tag: "Best Seller",
    // Added generated devilled cashews image
    imageSrc: "/devilled_cashews.png"
  },
  {
    name: "Street-Style Isso Vade",
    description: "Crispy deep-fried lentil patties topped with local whole prawns, served with coconut sambol and red onions.",
    price: "Rs. 1,200",
    category: "starters",
    spicy: "Mild",
    tag: "Beach Classic",
    // Added generated isso vade image
    imageSrc: "/isso_vade.png"
  },
  {
    name: "Galle Face Cassava Chips",
    description: "Crispy fried fresh cassava root discs, seasoned with chili powder and sea salt.",
    price: "Rs. 950",
    category: "starters",
    spicy: "Medium",
    // Added generated cassava chips image
    imageSrc: "/cassava_chips.png"
  },
  {
    name: "Claypot Black Pork Curry",
    description: "Tender local pork slow-roasted in dark toasted Sri Lankan spices, sour goraka (garcinia), and coconut cream, served with red rice.",
    price: "Rs. 3,800",
    category: "mains",
    spicy: "High",
    tag: "Signature",
    // Added generated black pork curry image
    imageSrc: "/black_pork_curry.png"
  },
  {
    name: "Jaffna Crab Kottu Roti",
    description: "Shredded flatbread flash-fried on a griddle with fresh vegetables, egg, and a rich, heavily-spiced Jaffna crab curry reduction.",
    price: "Rs. 4,500",
    category: "mains",
    spicy: "Extreme",
    tag: "Spicy Legend",
    // Added generated crab kottu image
    imageSrc: "/crab_kottu.png"
  },
  {
    name: "Aromatic Fish Ambul Thiyal",
    description: "Traditional dry-spiced fish curry made with sour garcinia (goraka), black pepper, and curry leaves, served with yellow rice.",
    price: "Rs. 3,600",
    category: "mains",
    spicy: "High",
    tag: "Traditional",
    // Added generated fish ambul thiyal image
    imageSrc: "/ambul_thiyal.png"
  },
  {
    name: "Signature Beef Smore",
    description: "Slow-braised marinated beef tenderloin roll in a rich coconut gravy, served with toasted milk rice (Kiribath) triangles.",
    price: "Rs. 4,100",
    category: "mains",
    spicy: "Mild",
    tag: "Royal Dish",
    // Added generated beef smore image
    imageSrc: "/beef_smore.png"
  },
  {
    name: "Traditional Chicken Kukul Mas Curry",
    description: "A spicy, country-style chicken curry cooked in thin coconut milk, served with woodfired flat bread (Pol Roti).",
    price: "Rs. 2,950",
    category: "mains",
    spicy: "High",
    tag: "Woodfired",
    // Temporary placeholder image until quota resets in 1h 23m
    imageSrc: "/ceylon_dish_hero.png"
  },
  {
    name: "Matara Claypot Dhal & Spinach",
    description: "Red lentils slow-cooked with fresh spinach, turmeric, mustard seeds, and rich coconut cream.",
    price: "Rs. 2,200",
    category: "mains",
    spicy: "None",
    // Temporary placeholder image until quota resets in 1h 23m
    imageSrc: "/black_pork_curry.png"
  },
  {
    name: "Cardamom Watalappam Crème Brûlée",
    description: "A contemporary twist on the classic Sri Lankan coconut custard made with dark kithul jaggery, cardamom, and sugar crust.",
    price: "Rs. 1,600",
    category: "desserts",
    spicy: "None",
    tag: "Must Try",
    // Added generated watalappam image
    imageSrc: "/watalappam_brulee.png"
  },
  {
    name: "Kithul Treacle & Buffalo Curd Parfait",
    description: "Traditional creamy buffalo curd layered with wild bee honey, toasted cashew crumble, and fresh woodapple purée.",
    price: "Rs. 1,450",
    category: "desserts",
    spicy: "None",
    // Added generated parfait image
    imageSrc: "/curd_parfait.png"
  },
  {
    name: "Coconut Pancakes with Sweet Pani Pol",
    description: "Soft crepes rolled with caramelized coconut, cardamom, and palm honey, served with a scoop of kithul ice cream.",
    price: "Rs. 1,250",
    category: "desserts",
    spicy: "None",
    // Added generated coconut pancake image
    imageSrc: "/coconut_pancakes.png"
  },
  {
    name: "Falooda Ice Cream Trifle",
    description: "Rose-scented syrup, sweet basil seeds (kasakasa), milk jelly, and vanilla bean ice cream layered with cardamom-spiced sponge cake.",
    price: "Rs. 1,500",
    category: "desserts",
    spicy: "None",
    // Added generated falooda trifle image
    imageSrc: "/falooda_trifle.png"
  },
  {
    name: "Woodapple Sorbet with Ginger Tuile",
    description: "Tangy local woodapple purée whipped into a refreshing sorbet, served with a crispy ginger lace cookie.",
    price: "Rs. 1,150",
    category: "desserts",
    spicy: "None",
    tag: "Refreshing",
    // Added generated woodapple sorbet image
    imageSrc: "/woodapple_sorbet.png"
  },
  {
    name: "Sri Lankan Love Cake Mousse",
    description: "Spiced honey semolina cake crumbs layered with a light nutmeg and rosewater mousse, topped with chopped cashews.",
    price: "Rs. 1,350",
    category: "desserts",
    spicy: "None",
    tag: "New Style",
    // Added generated love cake mousse image
    imageSrc: "/love_cake_mousse.png"
  },
  {
    name: "Tamarind & Chili Margarita Mocktail",
    description: "Tangy tamarind nectar shaken with fresh lime juice, agave syrup, and a splash of sparkling water, rimmed with chili salt.",
    price: "Rs. 1,200",
    category: "drinks",
    spicy: "Mild",
    tag: "Unique",
    // Added generated drink image
    imageSrc: "/tamarind_margarita.png"
  },
  {
    name: "Ceylon Ginger & Lemongrass Fizz",
    description: "Cold-pressed local ginger root, bruised lemongrass, fresh mint, and sparkling water, sweetened with wild flower honey.",
    price: "Rs. 1,100",
    category: "drinks",
    spicy: "None",
    tag: "Refreshing",
    // Added generated drink image
    imageSrc: "/ginger_fizz.png"
  },
  {
    name: "Spiced Mango Lassi Mocktail",
    description: "A creamy blend of ripe Sri Lankan mangoes, buffalo yogurt, a dash of cardamom, and toasted pistachios, served chilled.",
    price: "Rs. 1,250",
    category: "drinks",
    spicy: "None",
    tag: "Popular",
    // Added generated mango lassi image
    imageSrc: "/mango_lassi.png"
  },
  {
    name: "Woodapple & Coconut Nectar",
    description: "Pure local woodapple pulp mixed with organic coconut water and sweet palm syrup, garnished with a mint sprig.",
    price: "Rs. 1,150",
    category: "drinks",
    spicy: "None",
    // Added generated woodapple nectar image
    imageSrc: "/woodapple_nectar.png"
  },
  {
    name: "King Coconut & Lime Cooler",
    description: "Fresh Thambili (King Coconut) water infused with fresh lime juice, crushed lemongrass, and sweet basil seeds.",
    price: "Rs. 1,050",
    category: "drinks",
    spicy: "None",
    tag: "Hydrating",
    // Added generated king coconut cooler image
    imageSrc: "/king_coconut_cooler.png"
  },
  {
    name: "Hibiscus & Cinnamon Iced Tea",
    description: "Ceylon black tea cold-brewed with dried hibiscus flowers and local Ceylon cinnamon bark, sweetened with wild bee honey.",
    price: "Rs. 1,200",
    category: "drinks",
    spicy: "None",
    tag: "Signature",
    // Added generated hibiscus iced tea image
    imageSrc: "/hibiscus_tea.png"
  }
];

export default function RestaurantPreviewPage() {
  // New part: State management for active menu category and reservation status
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: ''
  });

  // Selected menu item for the single item detail page & checkout view
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    addressOrTable: 'Table 5'
  });
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `CCS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
    setOrderSubmitted(true);
  };

  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
  };

  // Helper for rendering spice levels
  const getSpiceColor = (spicy: MenuItem['spicy']) => {
    switch(spicy) {
      case 'Extreme': return 'text-red-600 font-extrabold';
      case 'High': return 'text-orange-600 font-bold';
      case 'Medium': return 'text-amber-600';
      case 'Mild': return 'text-green-600';
      default: return 'text-stone-400';
    }
  };

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-[#ff6b35] selection:text-white pb-24">
        {/* Header for Item Detail View */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F5]/80 border-b border-[#ff6b35]/15 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedItem(null);
                setQuantity(1);
                setIsCheckingOut(false);
                setOrderSubmitted(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-stone-700 bg-white hover:border-accent-orange hover:text-accent-orange transition-all duration-300 text-xs sm:text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Menu</span>
            </button>
            
            <span className="text-xl font-bold bg-gradient-to-r from-[#b84a1e] to-[#ff6b35] bg-clip-text text-transparent">
              THE CEYLON SPICE CLUB
            </span>
            
            <div className="w-24 sm:w-28" />
          </div>
        </header>

        {/* Main Item Detail Area */}
        <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Big Image Card */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-md transition-all duration-300 transform hover:shadow-[0_10px_25px_rgba(217,119,6,0.12),_0_0_15px_rgba(253,224,71,0.2)] hover:border-amber-400/40">
              {selectedItem.imageSrc ? (
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-50">
                  <Utensils className="w-16 h-16 text-stone-300" />
                </div>
              )}
              {selectedItem.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-accent-orange text-white text-xs font-bold uppercase tracking-wider shadow">
                  {selectedItem.tag}
                </span>
              )}
            </div>

            {/* Right Column: Details & Ordering / Checkout */}
            <div className="space-y-6">
              
              {orderSubmitted ? (
                // ORDER SUCCESS SCREEN
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl border border-stone-200 bg-white shadow-lg text-center space-y-6 transition-all duration-300 transform hover:shadow-[0_15px_30px_rgba(217,119,6,0.1),_0_0_20px_rgba(253,224,71,0.2)] hover:border-amber-400/40"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-stone-900">Payment Successful!</h3>
                    <p className="text-emerald-700 text-sm font-semibold">Order ID: {orderId}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Your order for <span className="font-semibold text-stone-900">{selectedItem.name}</span> (Qty: {quantity}) has been successfully placed at <span className="font-semibold text-stone-900">{paymentData.addressOrTable}</span>.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 text-left space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Item:</span>
                      <span className="font-medium text-stone-900">{selectedItem.name} x {quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Destination:</span>
                      <span className="font-medium text-stone-900">{paymentData.addressOrTable}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-dashed border-stone-100">
                      <span className="text-stone-900">Total Paid:</span>
                      <span className="text-accent-orange">
                        Rs. {(parsePrice(selectedItem.price) * quantity + Math.round(parsePrice(selectedItem.price) * quantity * 0.1)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        setQuantity(1);
                        setIsCheckingOut(false);
                        setOrderSubmitted(false);
                      }}
                      className="w-full py-3 rounded-full bg-accent-orange hover:bg-accent-orange/90 text-white font-bold tracking-wide uppercase transition-all duration-300"
                    >
                      Return to Menu
                    </button>
                  </div>
                </motion.div>
              ) : (
                // DETAIL OR CHECKOUT STATE
                <div className="space-y-6">
                  
                  {/* Item Info Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-orange px-2.5 py-0.5 rounded-full bg-accent-orange/10 border border-accent-orange/20">
                        {selectedItem.category}
                      </span>
                      <span className="text-xs text-stone-500">
                        Spiciness: <span className={getSpiceColor(selectedItem.spicy)}>{selectedItem.spicy}</span>
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                      {selectedItem.name}
                    </h1>
                    <p className="text-2xl font-bold text-accent-orange">
                      {selectedItem.price}
                    </p>
                  </div>

                  <p className="text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {selectedItem.description}
                  </p>

                  {!isCheckingOut ? (
                    // QUANTITY SELECTION STATE
                    <div className="space-y-6 pt-4 border-t border-stone-100">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-800">Select Quantity</span>
                        <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-full px-3 py-1.5 shadow-sm">
                          <button
                            type="button"
                            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-50 font-bold transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold text-stone-900 text-lg">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(prev => prev + 1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-50 font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F5F2EB]/60 border border-stone-200/80 space-y-2 text-sm transition-all duration-300 hover:shadow-[0_8px_20px_rgba(217,119,6,0.06),_0_0_10px_rgba(253,224,71,0.15)] hover:border-amber-400/30">
                        <div className="flex justify-between">
                          <span className="text-stone-500">Subtotal</span>
                          <span className="font-medium text-stone-900">
                            Rs. {(parsePrice(selectedItem.price) * quantity).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Service Charge & VAT (10%)</span>
                          <span className="font-medium text-stone-900">
                            Rs. {Math.round(parsePrice(selectedItem.price) * quantity * 0.1).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between font-bold text-base pt-2 border-t border-stone-200">
                          <span className="text-stone-900">Total Price</span>
                          <span className="text-accent-orange">
                            Rs. {(parsePrice(selectedItem.price) * quantity + Math.round(parsePrice(selectedItem.price) * quantity * 0.1)).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(true)}
                        className="w-full py-4 rounded-full bg-accent-orange hover:bg-accent-orange/90 text-white font-bold tracking-wide uppercase shadow-lg shadow-accent-orange/15 transition-all duration-300"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  ) : (
                    // MOCK PAYMENT & CHECKOUT STATE
                    <motion.form
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handlePaymentSubmit}
                      className="space-y-6 pt-4 border-t border-stone-100"
                    >
                      <div className="space-y-4">
                        <h3 className="font-bold text-stone-900 text-lg">Checkout Details</h3>
                        
                        {/* Table Number or Delivery Address */}
                        <div>
                          <label className="block text-xs font-semibold text-stone-600 mb-1">Dine-in Table # / Delivery Address</label>
                          <input
                            type="text"
                            name="addressOrTable"
                            value={paymentData.addressOrTable}
                            onChange={handlePaymentInputChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-accent-orange transition-all"
                            placeholder="Table 5 / Colombo 03 Address"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div>
                          <label className="block text-xs font-semibold text-stone-600 mb-1">Cardholder Name</label>
                          <input
                            type="text"
                            name="cardName"
                            value={paymentData.cardName}
                            onChange={handlePaymentInputChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-accent-orange transition-all"
                            placeholder="Dinesh Perera"
                          />
                        </div>

                        {/* Card Number */}
                        <div>
                          <label className="block text-xs font-semibold text-stone-600 mb-1">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handlePaymentInputChange}
                            required
                            pattern="\d{16}"
                            maxLength={16}
                            className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-accent-orange transition-all"
                            placeholder="4111222233334444"
                          />
                        </div>

                        {/* Expiry & CVV */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1">Expiry Date</label>
                            <input
                              type="text"
                              name="expiry"
                              value={paymentData.expiry}
                              onChange={handlePaymentInputChange}
                              required
                              pattern="\d{2}/\d{2}"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-accent-orange transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1">CVV</label>
                            <input
                              type="password"
                              name="cvv"
                              value={paymentData.cvv}
                              onChange={handlePaymentInputChange}
                              required
                              pattern="\d{3}"
                              maxLength={3}
                              placeholder="123"
                              className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-accent-orange transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Checkout Breakdown */}
                      <div className="p-4 rounded-xl bg-[#F5F2EB]/60 border border-stone-200/80 space-y-2 text-sm transition-all duration-300 hover:shadow-[0_8px_20px_rgba(217,119,6,0.06),_0_0_10px_rgba(253,224,71,0.15)] hover:border-amber-400/30">
                        <div className="flex justify-between">
                          <span className="text-stone-500">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
                          <span className="font-medium text-stone-900">
                            Rs. {(parsePrice(selectedItem.price) * quantity).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Service Charge & VAT (10%)</span>
                          <span className="font-medium text-stone-900">
                            Rs. {Math.round(parsePrice(selectedItem.price) * quantity * 0.1).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between font-bold text-base pt-2 border-t border-stone-200">
                          <span className="text-stone-900">Total Price</span>
                          <span className="text-accent-orange">
                            Rs. {(parsePrice(selectedItem.price) * quantity + Math.round(parsePrice(selectedItem.price) * quantity * 0.1)).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setIsCheckingOut(false)}
                          className="py-3 rounded-full border border-stone-300 hover:border-stone-400 text-stone-700 bg-white font-bold text-sm uppercase transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="py-3 rounded-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-bold text-sm uppercase shadow transition-all duration-300"
                        >
                          Pay & Order
                        </button>
                      </div>

                    </motion.form>
                  )}

                </div>
              )}

            </div>

          </div>

        </main>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-[#ff6b35] selection:text-white">
      
      {/* New part: Sticky Premium Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F5]/80 border-b border-[#ff6b35]/15 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#b84a1e] to-[#ff6b35] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              THE CEYLON SPICE CLUB
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-stone-600">
            <a href="#menu" className="hover:text-accent-orange transition-colors">MENU</a>
            <a href="#about" className="hover:text-accent-orange transition-colors">OUR STORY</a>
            <a href="#reservations" className="hover:text-accent-orange transition-colors">RESERVATIONS</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Main Portfolio Navigation Action */}
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-orange text-accent-orange bg-accent-orange/5 hover:bg-accent-orange hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Ours.lk</span>
            </Link>
          </div>
        </div>
      </header>

      {/* New part: Hero Section with animated elements */}
      <section id="hero" className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#ff6b35]/3 to-[#FAF9F5]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-orange/20 bg-accent-orange/10 text-accent-orange text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-accent-orange" />
              Modern Sri Lankan Gastronomy
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-stone-900">
              Spices Reimagined <br />
              <span className="bg-gradient-to-r from-[#b84a1e] to-[#ff6b35] bg-clip-text text-transparent">
                For The Senses
              </span>
            </h1>
            
            <p className="text-stone-600 text-lg leading-relaxed max-w-xl">
              Embark on an exquisite culinary journey celebrating Sri Lanka's heritage. Hand-selected regional spices, authentic claypot slow-cooking techniques, and contemporary presentations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#menu" 
                className="px-8 py-3 rounded-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold shadow-lg shadow-accent-orange/20 transition-all duration-300"
              >
                Explore Menu
              </a>
              <a 
                href="#reservations" 
                className="px-8 py-3 rounded-full border border-stone-200 hover:border-accent-orange/50 text-stone-800 hover:text-accent-orange font-semibold bg-white shadow-sm hover:shadow transition-all duration-300"
              >
                Book A Table
              </a>
            </div>
          </motion.div>

          {/* Hero Right Image (Custom generated) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden border border-accent-orange/20 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent z-10" />
              <Image 
                src="/ceylon_dish_hero.png" 
                alt="Modern Sri Lankan Egg Hopper" 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md border border-[#ff6b35]/25 p-4 rounded-xl max-w-xs shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(217,119,6,0.15),_0_0_15px_rgba(253,224,71,0.25)] hover:border-amber-400/50 cursor-default">
                <p className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-1">Featured Dish</p>
                <h3 className="text-stone-900 font-bold text-sm">Crispy Egg Hopper Duo</h3>
                <p className="text-stone-600 text-xs mt-1">Fermented rice flour & coconut milk crepes with a perfectly soft egg center.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* New part: Interactive Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] border-y border-[#ff6b35]/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-stone-900">
              Our Culinary <span className="text-accent-orange">Menu</span>
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto">
              A curated collection of small and large plates representing different regions of Sri Lanka, crafted with modern techniques.
            </p>
            
            {/* Menu Tabs / Categories */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {['all', 'starters', 'mains', 'desserts', 'drinks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 uppercase ${
                    activeCategory === cat
                      ? 'bg-accent-orange border-accent-orange text-white shadow-sm'
                      : 'border-stone-200 text-stone-600 hover:border-accent-orange/40 hover:text-accent-orange bg-white shadow-sm'
                  }`}
                >
                  {cat === 'all' ? 'All Items' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout with AnimatePresence for smooth filtering */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.name}
                  onClick={() => {
                    setSelectedItem(item);
                    setQuantity(1);
                    setIsCheckingOut(false);
                    setOrderSubmitted(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-6 rounded-xl border border-stone-200 bg-white transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(217,119,6,0.15),_0_0_15px_rgba(253,224,71,0.25)] hover:border-amber-400/50 flex flex-col sm:flex-row gap-5 justify-between group shadow-sm cursor-pointer"
                >
                  {/* New part: Added image rendering for menu items with images */}
                  {item.imageSrc && (
                    <div className="relative w-full sm:w-28 h-28 shrink-0 rounded-lg overflow-hidden border border-stone-200 self-center">
                      <Image 
                        src={item.imageSrc} 
                        alt={item.name} 
                        fill 
                        sizes="(max-width: 640px) 100vw, 112px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold text-stone-900 group-hover:text-accent-orange transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-accent-orange font-bold text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
 
                      <div className="flex flex-wrap gap-2 items-center text-xs">
                        {item.tag && (
                          <span className="px-2 py-0.5 rounded bg-accent-orange/10 border border-accent-orange/30 text-accent-orange font-medium">
                            {item.tag}
                          </span>
                        )}
                        <span className="text-stone-500">
                          Spiciness: <span className={getSpiceColor(item.spicy)}>{item.spicy}</span>
                        </span>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed pt-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 pt-4 border-t border-stone-100 mt-4 text-xs text-accent-orange/80">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Ceylon Culinary Signature</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* New part: Story / Philosophy Section */}
      <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F2EB] via-[#FAF9F5] to-[#FAF9F5]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Left Image (Custom generated) */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden border border-accent-orange/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60 z-10" />
              <Image 
                src="/ceylon_rest_interior.png" 
                alt="The Ceylon Spice Club Interior" 
                fill 
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center bg-white/95 backdrop-blur-md border border-stone-200 p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(217,119,6,0.15),_0_0_15px_rgba(253,224,71,0.25)] hover:border-amber-400/50">
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Fine Dining Space</h4>
                  <p className="text-stone-600 text-xs">Colombo 03, Sri Lanka</p>
                </div>
                <div className="flex text-accent-orange gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-orange/30 bg-accent-orange/10 text-accent-orange text-xs font-semibold uppercase tracking-wider">
              <ChefHat className="w-3 h-3" />
              The Art of Flavor
            </div>

            <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight text-stone-900">
              Rooted In Heritage, <br />
              <span className="text-accent-orange">Refined for Today</span>
            </h2>

            <p className="text-stone-600 leading-relaxed">
              At The Ceylon Spice Club, we honor the ancient legacy of spice-trading and traditional home kitchens. Our black pork curry is slow-roasted in seasoned clay pots for hours, while our hoppers are prepared on hand-beaten iron pans just as they have been for generations.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div>
                <h4 className="text-accent-orange text-lg font-bold">100% Organic Spices</h4>
                <p className="text-stone-600 text-sm mt-1">Sourced directly from certified family farms in Matale.</p>
              </div>
              <div>
                <h4 className="text-accent-orange text-lg font-bold">Master Craftsmanship</h4>
                <p className="text-stone-600 text-sm mt-1">Head Chef Dinesh Perera brings over 15 years of Michelin experience.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* New part: Premium Reservations Section */}
      <section id="reservations" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] border-t border-[#ff6b35]/10">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-stone-900">
              Secure A <span className="text-accent-orange">Table</span>
            </h2>
            <p className="text-stone-600 text-base">
              Due to limited capacity, we highly recommend booking your dining experience in advance.
            </p>
          </div>

          {/* Booking Card & Form */}
          <div className="p-8 rounded-2xl border border-stone-200 bg-white shadow-xl relative overflow-hidden transition-all duration-300 transform hover:shadow-[0_15px_30px_rgba(217,119,6,0.1),_0_0_20px_rgba(253,224,71,0.2)] hover:border-amber-400/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b35]/5 rounded-bl-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!bookingSubmitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBookingSubmit}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm transition-all focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm transition-all focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">WhatsApp / Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm transition-all focus:bg-white"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    {/* Guests */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                      <div className="relative">
                        <select 
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm appearance-none cursor-pointer transition-all focus:bg-white"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People</option>
                        </select>
                        <Users className="w-4 h-4 text-stone-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Select Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm transition-all focus:bg-white"
                      />
                    </div>
                    {/* Time */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Select Time</label>
                      <input 
                        type="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-accent-orange focus:outline-none text-stone-900 text-sm transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg bg-accent-orange hover:bg-accent-orange/90 text-white font-bold tracking-wide uppercase shadow-lg shadow-accent-orange/15 transition-all duration-300"
                  >
                    Send Reservation Request
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-stone-900">Reservation Request Sent!</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-stone-900 font-semibold">{formData.name}</span>. We are checking availability for <span className="text-stone-900 font-semibold">{formData.guests} guests</span> on <span className="text-stone-900 font-semibold">{formData.date}</span> at <span className="text-stone-900 font-semibold">{formData.time}</span>.
                  </p>
                  <p className="text-accent-orange text-xs font-semibold">
                    We will send a confirmation code to {formData.phone} via WhatsApp shortly.
                  </p>
                  
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setBookingSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', guests: '2', date: '', time: '' });
                      }}
                      className="px-6 py-2 rounded-full border border-stone-200 text-xs text-stone-600 hover:text-accent-orange hover:border-accent-orange transition-all"
                    >
                      Book Another Table
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* New part: Restaurant Footer with contact information */}
      <footer className="bg-[#1A1813] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#ff6b35]/15">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm text-gray-400">
          
          <div className="space-y-4">
            <span className="text-white font-bold tracking-wider text-base">THE CEYLON SPICE CLUB</span>
            <p className="max-w-xs leading-relaxed">
              Refined Sri Lankan dining. Discover the depth of traditional woodfired claypot cuisine.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold tracking-wider text-base">HOURS & LOCATION</span>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <span>42 Galle Road, Colombo 03, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Tue - Sun: 5:00 PM - 11:00 PM (Mon Closed)</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-bold tracking-wider text-base">CONTACT & ENQUIRIES</span>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-orange shrink-0" />
                <span>+94 11 234 5678</span>
              </p>
              <p className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-accent-orange shrink-0" />
                <span>reservations@ceylonspiceclub.lk</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© 2026 The Ceylon Spice Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#menu" className="hover:text-stone-300 transition-colors">Menu</a>
            <a href="#about" className="hover:text-stone-300 transition-colors">Our Story</a>
            <a href="#reservations" className="hover:text-stone-300 transition-colors">Reservations</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
