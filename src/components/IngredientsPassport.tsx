
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
        origin: "Midwest, USA",
        farmer: "Heartland Family Farms",
        datePicked: "Daily",
        location: "Iowa Plains",
        processes: ["Grass-fed", "No antibiotics", "Hormone-free"]
      },
      {
        name: "Bacon",
        origin: "Pennsylvania, USA",
        farmer: "Harris Valley Ranch",
        datePicked: "Weekly",
        location: "Lancaster County",
        processes: ["Naturally cured", "No artificial preservatives"]
      },
      {
        name: "Beef Hot Dogs",
        origin: "Nebraska, USA",
        farmer: "Prairie Ranchers Collective",
        datePicked: "Weekly",
        location: "Platte River Valley",
        processes: ["100% beef", "No fillers", "Natural smoking process"]
      }
    ]
  },
  {
    title: "BAKERY",
    color: "bg-amber-600",
    items: [
      {
        name: "Hamburger Buns",
        origin: "Local Bakeries",
        farmer: "Five Guys Bakery Network",
        datePicked: "Daily",
        location: "Within 50 miles of restaurants",
        processes: ["Made fresh daily", "No preservatives", "Traditional recipe"]
      },
      {
        name: "Hot Dog Buns",
        origin: "Local Bakeries",
        farmer: "Five Guys Bakery Network",
        datePicked: "Daily",
        location: "Within 50 miles of restaurants",
        processes: ["Made fresh daily", "No preservatives", "Traditional recipe"]
      }
    ]
  },
  {
    title: "POTATOES",
    color: "bg-yellow-500",
    items: [
      {
        name: "Idaho Potatoes",
        origin: "Snake River Valley, Idaho",
        farmer: "Russet Farms Cooperative",
        datePicked: "Weekly",
        location: "Eastern Idaho",
        processes: ["Volcanic soil grown", "Hand-selected", "Unwashed until preparation"]
      },
      {
        name: "Cajun Seasoning",
        origin: "Louisiana, USA",
        farmer: "Bayou Spice Company",
        datePicked: "Monthly",
        location: "New Orleans",
        processes: ["Small-batch blending", "No artificial flavors", "Traditional recipe"]
      }
    ]
  },
  {
    title: "VEGETABLES & PRODUCE",
    color: "bg-green-600",
    items: [
      {
        name: "Tomatoes",
        origin: "California Central Valley",
        farmer: "SunRipe Cooperative",
        datePicked: "Every 48 hours",
        location: "San Joaquin Valley",
        processes: ["Vine-ripened", "Hand-picked", "No pesticides"]
      },
      {
        name: "Lettuce",
        origin: "Salinas Valley, California",
        farmer: "Coastal Greens Farm",
        datePicked: "Every 24 hours",
        location: "Monterey County",
        processes: ["Hydroponically grown", "Hand-harvested", "Cold chain maintained"]
      },
      {
        name: "Green Peppers",
        origin: "Florida, USA",
        farmer: "Everglades Produce",
        datePicked: "Every 48 hours",
        location: "South Florida",
        processes: ["Shade-grown", "Hand-picked", "Organic methods"]
      },
      {
        name: "Onions",
        origin: "Vidalia, Georgia",
        farmer: "Sweet Valley Farms",
        datePicked: "Weekly",
        location: "Tattnall County",
        processes: ["Low-sulfur soil", "Hand-harvested", "Air-dried"]
      },
      {
        name: "Jalapeños",
        origin: "New Mexico, USA",
        farmer: "Rio Grande Chili Co.",
        datePicked: "Weekly",
        location: "Hatch Valley",
        processes: ["Sun-ripened", "Hand-picked", "Naturally grown"]
      },
      {
        name: "Mushrooms",
        origin: "Pennsylvania, USA",
        farmer: "Keystone Mushroom Farm",
        datePicked: "Every 72 hours",
        location: "Chester County",
        processes: ["Organic substrate", "Climate-controlled", "Hand-harvested"]
      },
      {
        name: "Pickles",
        origin: "Michigan, USA",
        farmer: "Great Lakes Pickling Co.",
        datePicked: "Seasonal harvest",
        location: "Western Michigan",
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
        origin: "Midwest, USA",
        farmer: "Pure Foods Inc.",
        datePicked: "Weekly batches",
        location: "Evansville, Indiana",
        processes: ["Real egg yolks", "Small batch", "Cold-processed"]
      },
      {
        name: "Ketchup",
        origin: "Ohio, USA",
        farmer: "Heartland Tomato Company",
        datePicked: "Small batches weekly",
        location: "Central Ohio",
        processes: ["Slow-cooked", "Low sugar recipe", "No artificial preservatives"]
      },
      {
        name: "Mustard",
        origin: "Vermont, USA",
        farmer: "Green Mountain Mustard Works",
        datePicked: "Monthly small batches",
        location: "Burlington",
        processes: ["Stone-ground", "Barrel-aged", "Authentic recipe"]
      },
      {
        name: "BBQ Sauce",
        origin: "Texas, USA",
        farmer: "Lone Star Sauce Co.",
        datePicked: "Weekly batches",
        location: "Austin",
        processes: ["Slow-simmered", "Hickory-smoked flavor", "Family recipe"]
      },
      {
        name: "Hot Sauce",
        origin: "Louisiana, USA",
        farmer: "Delta Pepper Farm",
        datePicked: "Monthly batches",
        location: "Avery Island",
        processes: ["Fermented peppers", "Aged in oak", "Original recipe"]
      },
      {
        name: "Peanut Oil",
        origin: "Georgia, USA",
        farmer: "Southern Oil Cooperative",
        datePicked: "Seasonal pressing",
        location: "Albany",
        processes: ["Cold-pressed", "Filtered naturally", "No additives"]
      }
    ]
  },
  {
    title: "DAIRY & SHAKES",
    color: "bg-purple-600",
    items: [
      {
        name: "American Cheese",
        origin: "Wisconsin, USA",
        farmer: "Dairyland Cheese Co-op",
        datePicked: "Weekly",
        location: "Green County",
        processes: ["Pasteurized milk", "Traditional recipe", "No artificial colors"]
      },
      {
        name: "Vanilla Ice Cream",
        origin: "Vermont, USA",
        farmer: "Green Mountain Creamery",
        datePicked: "Small batches weekly",
        location: "Burlington",
        processes: ["Madagascar vanilla", "Cream from local dairies", "Hand-churned"]
      },
      {
        name: "Chocolate Syrup",
        origin: "Pennsylvania, USA",
        farmer: "Keystone Chocolate Works",
        datePicked: "Monthly batches",
        location: "Hershey",
        processes: ["Real cocoa", "Small batch", "Traditional recipe"]
      },
      {
        name: "Whipped Cream",
        origin: "Wisconsin, USA",
        farmer: "Meadowland Dairy",
        datePicked: "Weekly",
        location: "Door County",
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
