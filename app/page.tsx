import Image from "next/image";
import {
  FaBatteryFull,
  FaRoute,
  FaShieldAlt,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaBolt,
  FaCar,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const highlightedCar = {
  name: "Denza D9",
  type: "Highlighted Product",
  tagline: "Luxury Redefined",
  description:
    "Kendaraan premium dengan teknologi terdepan dan kenyamanan maksimal",
  variants: [
    {
      name: "Premium",
      price: "Rp 996.000.000",
      range: "600 km",
      battery: "230 kwh",
    },
  ],
  image: "/Denza D9.png",
  features: [
    "Desain Mewah & Futuristik",
    "Kabin Ultra Luas",
    "Teknologi Blade Battery",
    "Sistem Keselamatan Canggih",
  ],
};

const cars = [
  {
    name: "BYD Sealion 7",
    type: "Regular",
    variants: [
      {
        name: "Premium",
        price: "Rp 647.000.000",
        range: "567 km",
        battery: "82.56 kwh",
      },
      {
        name: "Performance",
        price: "Rp 737.000.000",
        range: "520 km",
        battery: "82.56 kwh",
      },
    ],
    image: "/byd sealion 7.png",
  },
  {
    name: "BYD Seal",
    type: "Regular",
    variants: [
      {
        name: "Premium",
        price: "Rp 659.000.000",
        range: "650 km",
        battery: "82.56 kwh",
      },
      {
        name: "Performance",
        price: "Rp 770.000.000",
        range: "580 km",
        battery: "82.56 kwh",
      },
    ],
    image: "/byd seal.png",
  },
  {
    name: "BYD Atto 1",
    type: "Regular",
    variants: [
      {
        name: "Dynamic",
        price: "Rp 209.000.000",
        range: "300 km",
        battery: "30.08 kwh",
      },
      {
        name: "Premium",
        price: "Rp 250.000.000",
        range: "380 km",
        battery: "38.88 kwh",
      },
    ],
    image: "/byd atto 1.png",
  },
  {
    name: "BYD Atto 3",
    type: "Regular",
    variants: [
      {
        name: "Advance Standard",
        price: "Rp 410.000.000",
        range: "410 km",
        battery: "49.92 kwh",
      },
      {
        name: "Superior",
        price: "Rp 540.000.000",
        range: "480 km",
        battery: "38.88 kwh",
      },
    ],
    image: "/byd atto 3.png",
  },
  {
    name: "BYD M6",
    type: "Regular",
    variants: [
      {
        name: "Standard",
        price: "Rp 403.000.000",
        range: "420 km",
        battery: "55.4 kwh",
      },
      {
        name: "Superior",
        price: "Rp 443.000.000",
        range: "530 km",
        battery: "71.8 kwh",
      },
      {
        name: "Superior Capt Seat",
        price: "Rp 453.000.000",
        range: "530 km",
        battery: "71.8 kwh",
      },
    ],
    image: "/byd m6.png",
  },
  {
    name: "BYD Dolphin",
    type: "Regular",
    variants: [
      {
        name: "Dynamic",
        price: "Rp 389.000.000",
        range: "410 km",
        battery: "44.9 kwh",
      },
      {
        name: "Premium",
        price: "Rp 449.000.000",
        range: "490 km",
        battery: "60.48 kwh",
      },
    ],
    image: "/byd dolphin.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md text-white shadow-2xl border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/byd logo.svg"
              alt="BYD Logo"
              width={70}
              height={35}
              className="brightness-0 invert w-16 sm:w-20"
              priority
            />
            <div className="hidden sm:block border-l border-gray-700 pl-3">
              <h2 className="text-xs sm:text-sm font-bold tracking-wide">
                BYD HAKA AUTO
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400">Balikpapan</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+628115422449"
              className="hidden sm:flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-green-500" />
              <span>+62 811-5422-449</span>
            </a>
            <a
              href="https://wa.me/628115422449"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="text-base sm:text-lg" />
              <span className="hidden sm:inline">Hubungi Kami</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fadeInUp shadow-lg">
              <FaBolt className="text-yellow-400" />
              <span>Build Your Dreams - Electric Vehicle Revolution</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fadeInUp animation-delay-200">
              Masa Depan Mobilitas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-pulse">
                Dimulai Hari Ini
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fadeInUp animation-delay-400 leading-relaxed px-4">
              Rasakan pengalaman berkendara listrik yang revolusioner dengan
              teknologi Blade Battery, desain futuristik, dan performa luar
              biasa
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-12 sm:mt-16 animate-fadeInUp animation-delay-800">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                <div className="text-2xl sm:text-4xl font-extrabold text-black mb-1 sm:mb-2">
                  650km
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Max Range
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                <div className="text-2xl sm:text-4xl font-extrabold text-black mb-1 sm:mb-2">
                  8 Thn
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Garansi
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                <div className="text-2xl sm:text-4xl font-extrabold text-black mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Electric
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Product - Denza D9 */}
      <section
        id="highlighted"
        className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image Side */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-700">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    <Image
                      src={highlightedCar.image}
                      alt={highlightedCar.name}
                      fill
                      className="object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-yellow-400 font-semibold text-sm sm:text-base mb-2 sm:mb-3 tracking-wider uppercase">
                    {highlightedCar.tagline}
                  </p>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {highlightedCar.name}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    {highlightedCar.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {highlightedCar.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-medium text-gray-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-yellow-500/30">
                        <FaRoute className="text-yellow-400 text-lg sm:text-xl" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {highlightedCar.variants[0].range}
                      </div>
                      <div className="text-xs text-gray-400">Jarak Tempuh</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-yellow-500/30">
                        <FaBatteryFull className="text-yellow-400 text-lg sm:text-xl" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {highlightedCar.variants[0].battery}
                      </div>
                      <div className="text-xs text-gray-400">Kapasitas</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-yellow-500/30">
                        <FaBolt className="text-yellow-400 text-lg sm:text-xl" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        100%
                      </div>
                      <div className="text-xs text-gray-400">Electric</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 sm:pt-6">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">
                          Harga Mulai
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                          {highlightedCar.variants[0].price}
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/628115422449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <FaWhatsapp className="text-xl sm:text-2xl" />
                      <span>Pesan Sekarang</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Mengapa Memilih BYD?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi terdepan dan jaminan terbaik untuk kendaraan listrik
              Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-black transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <FaBatteryFull className="text-white group-hover:text-black text-2xl sm:text-3xl transition-colors duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500">
                  Garansi Baterai
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-500">
                  8 Tahun / 160.000 km
                </p>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                  SOH &gt; 70% dengan teknologi Blade Battery terdepan
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-black transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <FaRoute className="text-white group-hover:text-black text-2xl sm:text-3xl transition-colors duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500">
                  Jarak Jauh
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-500">
                  Hingga 650 km
                </p>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                  Dalam sekali pengisian untuk perjalanan bebas khawatir
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-black transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <FaShieldAlt className="text-white group-hover:text-black text-2xl sm:text-3xl transition-colors duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500">
                  Perlindungan Lengkap
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-500">
                  8 Tahun Garansi Motor
                </p>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                  150.000 km dengan sistem keselamatan canggih
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="text-center bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
              <FaCar className="text-3xl sm:text-4xl text-black mx-auto mb-2 sm:mb-3" />
              <div className="font-bold text-sm sm:text-base text-gray-900">
                Teknologi Canggih
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
              <FaLeaf className="text-3xl sm:text-4xl text-green-600 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold text-sm sm:text-base text-gray-900">
                Ramah Lingkungan
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
              <FaBolt className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold text-sm sm:text-base text-gray-900">
                Charging Cepat
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
              <FaShieldAlt className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold text-sm sm:text-base text-gray-900">
                Keamanan Tinggi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Koleksi Lengkap BYD
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              Temukan kendaraan listrik yang sesuai dengan kebutuhan Anda
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              *OTR Kalimantan Timur | *Harga sewaktu-waktu bisa berubah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {cars.map((car, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white p-6 sm:p-8 h-56 sm:h-64 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {car.name}
                  </h3>

                  {/* Variants */}
                  <div className="space-y-4 sm:space-y-5 mb-6">
                    {car.variants.map((variant, vIndex) => (
                      <div
                        key={vIndex}
                        className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 sm:p-5 border-l-4 border-black hover:border-blue-600 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                              {variant.name}
                            </p>
                            <p className="text-2xl sm:text-3xl font-extrabold text-black">
                              {variant.price}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                              <FaRoute className="text-white text-sm" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs text-gray-500">Range</div>
                              <div className="font-bold text-sm text-gray-900 truncate">
                                {variant.range}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                              <FaBatteryFull className="text-white text-sm" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs text-gray-500">
                                Battery
                              </div>
                              <div className="font-bold text-sm text-gray-900 truncate">
                                {variant.battery}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/628115422449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-black text-white px-6 py-3.5 sm:py-4 rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" />
                    <span>Konsultasi & Pesan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
              Jaminan & Garansi Terbaik
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Investasi Anda terlindungi dengan garansi komprehensif dari BYD
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-500 border border-gray-700 hover:border-yellow-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <FaBatteryFull className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-400">
                Garansi Baterai
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold mb-2 sm:mb-3">
                8 Tahun
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-2">
                160.000 km
              </p>
              <p className="text-xs sm:text-sm text-gray-500">SOH &gt; 70%</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-500 border border-gray-700 hover:border-yellow-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <FaBolt className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-400">
                Garansi Motor
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold mb-2 sm:mb-3">
                8 Tahun
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-2">
                150.000 km
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Full Protection
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-500 border border-gray-700 hover:border-yellow-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 sm:col-span-3 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <FaShieldAlt className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-400">
                Garansi Mobil
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold mb-2 sm:mb-3">
                6 Tahun
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-2">
                150.000 km
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Comprehensive</p>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-500 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 inline-block mx-auto">
            *Syarat & Ketentuan Berlaku
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                Hubungi Kami
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Tim kami siap membantu Anda menemukan kendaraan listrik yang
                sempurna
              </p>
            </div>

            {/* Office Address */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-10 mb-8 sm:mb-12 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-xl sm:text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    BYD Haka Auto Balikpapan
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Jln. Ruhui Rahayu No.124
                    <br />
                    Balikpapan, Kalimantan Timur
                    <br />
                    Indonesia
                  </p>
                  <a
                    href="tel:+628115422449"
                    className="inline-flex items-center gap-2 mt-4 text-sm sm:text-base font-semibold text-black hover:text-blue-600 transition-colors"
                  >
                    <FaWhatsapp className="text-green-600 text-lg" />
                    +62 811-5422-449
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <a
                href="https://wa.me/628115422449"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-5 sm:py-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl relative z-10" />
                <span className="text-sm sm:text-base relative z-10">
                  WhatsApp
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://www.instagram.com/byd.tomy.balikpapan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-6 py-5 sm:py-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FaInstagram className="text-2xl sm:text-3xl relative z-10" />
                <span className="text-sm sm:text-base relative z-10">
                  Instagram
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://tiktok.com/@bydtomybalikpapan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-5 sm:py-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 sm:col-span-3 lg:col-span-1"
              >
                <FaTiktok className="text-2xl sm:text-3xl relative z-10" />
                <span className="text-sm sm:text-base relative z-10">
                  TikTok
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* CTA Banner */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                  Siap Beralih ke Mobilitas Listrik?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Hubungi kami sekarang untuk konsultasi gratis dan dapatkan
                  penawaran terbaik
                </p>
                <a
                  href="https://wa.me/628115422449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold transition-all duration-300 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transform hover:scale-105 text-sm sm:text-base"
                >
                  <FaWhatsapp className="text-xl sm:text-2xl" />
                  <span>Konsultasi Gratis Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 sm:py-12 border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src="/byd logo.svg"
              alt="BYD Logo"
              width={120}
              height={60}
              className="brightness-0 invert mx-auto mb-6 opacity-90"
            />
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              © 2025 BYD Haka Auto Balikpapan. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              Build Your Dreams - Leading The Electric Vehicle Revolution
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <span>*OTR Kalimantan Timur</span>
              <span className="hidden sm:inline">|</span>
              <span>*Harga sewaktu-waktu bisa berubah</span>
              <span className="hidden sm:inline">|</span>
              <span>*S&K Berlaku</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
