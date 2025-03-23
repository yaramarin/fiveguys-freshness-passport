
import React, { useRef, useEffect, useState } from 'react';
import { Check, Leaf, Award, Calendar, MapPin, User, Shield } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Ingredient = {
  name: string;
  origin: string;
  farmer: string;
  datePicked: string;
  location: string;
  processes: string[];
};

type IngredientCategory = {
  title: string;
  color: string;
  items: Ingredient[];
};

const ingredientData: IngredientCategory[] = [
  {
    title: "BEEF & PROTEINS",
    color: "bg-red-600",
    items: [
      {
        name: "Premium Ground Beef",
        origin: "Extremadura, Spain",
        farmer: "Dehesas Ibéricas S.L.",
        datePicked: "Daily",
        location: "Dehesas de Extremadura",
        processes: ["Pasture-raised", "No antibiotics", "Hormone-free"]
      },
      {
        name: "Bacon",
        origin: "Salamanca, Spain",
        farmer: "Embutidos Guijuelo",
        datePicked: "Weekly",
        location: "Sierra de Guijuelo",
        processes: ["Naturally cured", "No artificial preservatives"]
      },
      {
        name: "Beef Hot Dogs",
        origin: "Navarra, Spain",
        farmer: "Carnicería Artesanal Pamplona",
        datePicked: "Weekly",
        location: "Valle del Baztán",
        processes: ["100% beef", "No fillers", "Traditional smoking process"]
      }
    ]
  },
  {
    title: "BAKERY",
    color: "bg-amber-600",
    items: [
      {
        name: "Hamburger Buns",
        origin: "Madrid, Spain",
        farmer: "Panadería Tradicional Madrileña",
        datePicked: "Daily",
        location: "Within 20 km of restaurants",
        processes: ["Made fresh daily", "No preservatives", "Traditional recipe"]
      },
      {
        name: "Hot Dog Buns",
        origin: "Madrid, Spain",
        farmer: "Panadería Tradicional Madrileña",
        datePicked: "Daily",
        location: "Within 20 km of restaurants",
        processes: ["Made fresh daily", "No preservatives", "Traditional recipe"]
      }
    ]
  },
  {
    title: "POTATOES",
    color: "bg-yellow-500",
    items: [
      {
        name: "Galician Potatoes",
        origin: "Galicia, Spain",
        farmer: "Cooperativa Agrícola Gallega",
        datePicked: "Weekly",
        location: "Ribeira Sacra, Galicia",
        processes: ["Rich soil grown", "Hand-selected", "Unwashed until preparation"]
      },
      {
        name: "Paprika Seasoning",
        origin: "La Vera, Extremadura, Spain",
        farmer: "Pimentón de la Vera",
        datePicked: "Monthly",
        location: "La Vera Valley",
        processes: ["Smoke-dried", "Traditional milling", "Protected designation of origin"]
      }
    ]
  },
  {
    title: "VEGETABLES & PRODUCE",
    color: "bg-green-600",
    items: [
      {
        name: "Tomatoes",
        origin: "Murcia, Spain",
        farmer: "Huerta Sol y Agua",
        datePicked: "Every 48 hours",
        location: "Campo de Cartagena",
        processes: ["Vine-ripened", "Hand-picked", "Sustainable farming"]
      },
      {
        name: "Lettuce",
        origin: "Almería, Spain",
        farmer: "Hortícolas El Ejido",
        datePicked: "Every 24 hours",
        location: "El Ejido, Almería",
        processes: ["Hydroponically grown", "Hand-harvested", "Cold chain maintained"]
      },
      {
        name: "Green Peppers",
        origin: "Granada, Spain",
        farmer: "Vega de Granada",
        datePicked: "Every 48 hours",
        location: "Vega de Granada",
        processes: ["Shade-grown", "Hand-picked", "Organic methods"]
      },
      {
        name: "Onions",
        origin: "Valencia, Spain",
        farmer: "Cooperativa Valenciana de Cebollas",
        datePicked: "Weekly",
        location: "L'Horta de València",
        processes: ["Traditional growing", "Hand-harvested", "Air-dried"]
      },
      {
        name: "Jalapeños",
        origin: "Cáceres, Spain",
        farmer: "Pimientos del Valle del Jerte",
        datePicked: "Weekly",
        location: "Valle del Jerte",
        processes: ["Sun-ripened", "Hand-picked", "Naturally grown"]
      },
      {
        name: "Mushrooms",
        origin: "La Rioja, Spain",
        farmer: "Cultivos Fungiseta",
        datePicked: "Every 72 hours",
        location: "Sierra de Cameros",
        processes: ["Organic substrate", "Climate-controlled", "Hand-harvested"]
      },
      {
        name: "Pickles",
        origin: "Toledo, Spain",
        farmer: "Encurtidos Castilla-La Mancha",
        datePicked: "Seasonal harvest",
        location: "La Mancha",
        processes: ["Barrel-fermented", "Small batch", "Traditional recipe"]
      }
    ]
  },
  {
    title: "CONDIMENTS & SAUCES",
    color: "bg-blue-600",
    items: [
      {
        name: "Mayonnaise",
        origin: "Barcelona, Spain",
        farmer: "Salsas Mediterráneas",
        datePicked: "Weekly batches",
        location: "Sant Cugat del Vallès",
        processes: ["Real egg yolks", "Small batch", "Cold-processed"]
      },
      {
        name: "Ketchup",
        origin: "Lleida, Spain",
        farmer: "Tomate Artesano Catalán",
        datePicked: "Small batches weekly",
        location: "Plana de Lleida",
        processes: ["Slow-cooked", "Low sugar recipe", "No artificial preservatives"]
      },
      {
        name: "Mustard",
        origin: "Girona, Spain",
        farmer: "Condimentos de l'Empordà",
        datePicked: "Monthly small batches",
        location: "Empordà",
        processes: ["Stone-ground", "Barrel-aged", "Authentic recipe"]
      },
      {
        name: "Alioli",
        origin: "Tarragona, Spain",
        farmer: "Sauces del Mediterráneo",
        datePicked: "Weekly batches",
        location: "Costa Daurada",
        processes: ["Traditional recipe", "Freshly made", "Family recipe"]
      },
      {
        name: "Hot Sauce",
        origin: "Canary Islands, Spain",
        farmer: "Mojo Canario",
        datePicked: "Monthly batches",
        location: "Tenerife",
        processes: ["Fermented peppers", "Volcanic soil grown", "Original recipe"]
      },
      {
        name: "Olive Oil",
        origin: "Jaén, Spain",
        farmer: "Aceites de Jaén",
        datePicked: "Seasonal pressing",
        location: "Sierra de Cazorla",
        processes: ["Cold-pressed", "Extra virgin", "Protected designation of origin"]
      }
    ]
  },
  {
    title: "DAIRY & SHAKES",
    color: "bg-purple-600",
    items: [
      {
        name: "Cheese",
        origin: "Asturias, Spain",
        farmer: "Quesería Asturiana",
        datePicked: "Weekly",
        location: "Picos de Europa",
        processes: ["Pasteurized milk", "Traditional recipe", "Artisanal production"]
      },
      {
        name: "Vanilla Ice Cream",
        origin: "Cantabria, Spain",
        farmer: "Helados del Norte",
        datePicked: "Small batches weekly",
        location: "Valle del Pas",
        processes: ["Natural vanilla", "Cream from local dairies", "Hand-churned"]
      },
      {
        name: "Chocolate Syrup",
        origin: "Zaragoza, Spain",
        farmer: "Chocolates Artesanales de Aragón",
        datePicked: "Monthly batches",
        location: "Cinco Villas",
        processes: ["Real cocoa", "Small batch", "Traditional recipe"]
      },
      {
        name: "Whipped Cream",
        origin: "Cantabria, Spain",
        farmer: "Lácteos Pasiegos",
        datePicked: "Weekly",
        location: "Valles Pasiegos",
        processes: ["Heavy cream", "No stabilizers", "Made fresh daily"]
      }
    ]
  }
];

// Freshness Stamp Component
const FreshnessStamp: React.FC = () => (
  <div className="absolute top-8 right-8 w-28 h-28 freshness-stamp rotate-12 z-20">
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-green-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="relative z-10 text-center">
        <Award className="w-10 h-10 text-green-600 mx-auto mb-1" />
        <div className="text-green-800 font-bold text-xs uppercase tracking-widest">Certified</div>
        <div className="text-green-800 font-bold text-lg">FRESH</div>
      </div>
    </div>
  </div>
);

const IngredientsPassport: React.FC = () => {
  const passportRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (passportRef.current) {
      observer.observe(passportRef.current);
    }

    return () => {
      if (passportRef.current) {
        observer.unobserve(passportRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={passportRef}
      className={`passport-container max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="passport bg-white border-8 border-fiveguys-red rounded-lg overflow-hidden shadow-2xl">
        <div className="passport-header bg-fiveguys-red text-white p-6 text-center relative">
          <div className="absolute top-4 left-4 flex items-center bg-white/20 backdrop-blur-sm py-1 px-2 rounded-full">
            <Leaf className="w-4 h-4 text-white mr-1" />
            <span className="text-xs font-bold uppercase tracking-wider">Fresh Guaranteed</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">The Five Guys Freshness Passport</h2>
          <p className="text-lg mt-2">All fresh ingredients - Transparent sourcing</p>
        </div>
        
        {/* Freshness Stamp */}
        <FreshnessStamp />

        <div className="passport-meta flex justify-between items-center border-b border-gray-200 bg-green-50 px-6 py-3">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <div className="w-3 h-3 rounded-full bg-green-500 freshness-pulse"></div>
            </div>
            <span className="text-sm text-green-800 font-medium">Daily Fresh Delivery</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <Check className="w-3 h-3 text-green-500" />
            </div>
            <span className="text-sm text-green-800 font-medium">Quality Approved</span>
          </div>
        </div>

        <div className="passport-content p-6">
          {ingredientData.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`mb-8 animate-fade-in`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className={`${category.color} text-white py-2 px-4 rounded-t-md font-bold flex items-center`}>
                <Check className="w-5 h-5 mr-2" />
                <h3 className="text-xl uppercase tracking-wider">{category.title}</h3>
              </div>
              
              <div className="border-x border-b border-gray-200 rounded-b-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold">Ingredient</TableHead>
                      <TableHead className="font-bold">Origin</TableHead>
                      <TableHead className="font-bold">Farmer</TableHead>
                      <TableHead className="font-bold">Harvest</TableHead>
                      <TableHead className="font-bold">Agricultural Processes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.items.map((item, index) => (
                      <TableRow 
                        key={`${category.title}-${item.name}`}
                        className={`transition-colors hover:bg-gray-50`}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 freshness-pulse"></div>
                            {item.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 text-gray-500 mr-1" />
                            {item.origin}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center">
                            <User className="w-3 h-3 text-gray-500 mr-1" />
                            {item.farmer}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 text-gray-500 mr-1" />
                            {item.datePicked}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-start">
                            <Shield className="w-3 h-3 text-gray-500 mr-1 mt-1" />
                            <ul className="flex flex-wrap gap-1">
                              {item.processes.map((process, processIndex) => (
                                <li 
                                  key={`${item.name}-process-${processIndex}`}
                                  className="bg-green-50 text-green-800 rounded-full px-2 py-0.5 text-xs inline-flex items-center"
                                >
                                  <span className="w-1 h-1 bg-green-500 rounded-full mr-1"></span>
                                  {process}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
        
        <div className="passport-footer p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">This passport certifies the authentic fresh ingredients used in all Five Guys products.</p>
            <div className="flex items-center">
              <span className="freshness-badge">Fresh Certified</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">Valid at all Five Guys locations worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPassport;
