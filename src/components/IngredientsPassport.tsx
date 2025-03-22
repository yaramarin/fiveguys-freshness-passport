
import React, { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';

type IngredientCategory = {
  title: string;
  items: IngredientItem[];
  color: string;
};

type IngredientItem = {
  name: string;
  composition: string;
};

const ingredientData: IngredientCategory[] = [
  {
    title: "CARNE",
    color: "bg-red-600",
    items: [
      {
        name: "Bacon",
        composition: "Cerdo, regulador de acidez: Lactato sódico, sal, azúcar, estabilizadores: Trifosfatos, antioxidantes: Isoascorbato sódico, conservante: Nitrito sódico."
      },
      {
        name: "Hamburguesa de vacuno",
        composition: "Ternera picada."
      },
      {
        name: "Perrito de vacuno",
        composition: "Ternera, agua, sal, especias, extractos de especias, estabilizadores: Difosfato de dihidrógeno disódico, acetato sódico, sirope de glucosa, dextrosa, condimento, antioxidante: Ácido Ascórbico, Conservante: Nitrito sódico, proteína de SOJA, humo de madera de haya."
      }
    ]
  },
  {
    title: "PANES",
    color: "bg-amber-600",
    items: [
      {
        name: "Pan de hamburguesa",
        composition: "Nuestro pan es una receta patentada. Los ingredientes primarios son: Harina de TRIGO, agua, azúcar, grasa vegetal (Palma), aceite vegetal (Colza), semillas de SÉSAMO (2.3 %), levadura, LECHE entera en polvo, HUEVO líquido, sal, emulgentes (E-471, E-472e, E-481), vinagre de vino, agente de tratamiento de la harina Ácido Ascórbico (E300)."
      },
      {
        name: "Pan de perrito",
        composition: "Nuestro pan es una receta patentada. Los ingredientes primarios son: Harina de TRIGO, agua, azúcar, grasa vegetal (Palma), aceite vegetal (Colza), levadura, LECHE entera en polvo, HUEVO líquido, sal, emulgentes (E-471, E-481), vinagre de vino, agente de tratamiento de la harina Ácido Ascórbico (E300)."
      }
    ]
  },
  {
    title: "PATATAS FRITAS",
    color: "bg-yellow-500",
    items: [
      {
        name: "Estilo Five Guys",
        composition: "Patatas, aceite de CACAHUETE, sal."
      },
      {
        name: "Condimento cajun",
        composition: "Ajo, sal, cebolla, pimentón, orégano, pimienta blanca, cayena, SEMILLAS DE APIO, aceite de colza."
      }
    ]
  },
  {
    title: "INGREDIENTES",
    color: "bg-green-600",
    items: [
      {
        name: "Salsa barbacoa",
        composition: "Vinagre destilado, azúcar, pasta de tomate, agua, melaza, sal, salvado de MOSTAZA, extracto de tamarindo, saborizante de humo, conservante: benzoato de sodio, especias, polvo de ajo, cebolla en polvo."
      },
      {
        name: "Queso",
        composition: "Queso Chedder LECHE, Agua, mantequilla (LECHE), Queso (LECHE), Proteínas de la LECHE, LECHE desnatada en polvo, suero en polvo (LECHE), emulsionantes: (E331, E339), aroma natural de queso (LECHE), sal, colorantes (E160a, E160c) corrector de acidez (E270), conservante (E200), antiaglomerante: lecitina de girasol."
      },
      {
        name: "Pimientos verdes",
        composition: "Pimientos verdes."
      },
      {
        name: "Champiñones",
        composition: "Champiñones, agua, azúcar, sal, reguladores de la acidez: ácido cítrico, ácido ascórbico."
      },
      {
        name: "Salsa picante",
        composition: "Pimienta roja de cayena, vinagre destilado, agua, sal, ajo en polvo."
      },
      {
        name: "Salsa steak",
        composition: "Tomates, vinagre de malta (GLUTEN), melaza, jarabe de glucosa-fructosa, vinagre de alcohol, azúcar, dátiles, harina de maíz, harina de centeno (GLUTEN), sal, especias, sabores, tamarindo."
      },
      {
        name: "Jalapeños",
        composition: "Jalapeños."
      },
      {
        name: "Ketchup",
        composition: "Tomates, vinagre de alcohol, azúcar, sal, extractos de hierbas y especias (APIO), especias."
      },
      {
        name: "Lechuga",
        composition: "Lechuga."
      },
      {
        name: "Mayonesa",
        composition: "Aceite de soja, yema de HUEVO, vinagre de alcohol, azúcar, vinagre de sidra de manzana, sal, semillas de MOSTAZA molidas, antioxidante (ácido disódico EDTA), especias."
      },
      {
        name: "Mostaza",
        composition: "Vinagre de alcohol, agua, semillas de MOSTAZA, sal, cúrcuma, pimentón, especias, aromatizantes, ajo molido."
      },
      {
        name: "Cebollas",
        composition: "Cebollas."
      },
      {
        name: "Pepinillos",
        composition: "Pepinillos, agua, vinagre, sal, estabilizante: Cloruro cálcico, ácido láctico, conservante: Benzoato sódico, sabor natural de eneldo, colorante: Riboflavina."
      },
      {
        name: "Relish",
        composition: "Pepinillo, azúcar, vinagre de alcohol, agua, sal, aromatizantes, estabilizante: Goma de xantano."
      },
      {
        name: "Tomates",
        composition: "Tomates."
      }
    ]
  },
  {
    title: "BATIDOS",
    color: "bg-purple-600",
    items: [
      {
        name: "Base de batidos Five Guys",
        composition: "Leche desnatada reconstituida (LECHE), crema (LECHE), azúcar, agua, dextrosa, sólidos lácteos (LECHE), emulsionantes: Mono y diglicéridos de ácidos grasos, ésteres de propilenglicol de los ácidos grasos, estabilizadores: Carragenina, goma de guar, goma de celulosa, condimento natural."
      },
      {
        name: "Nata montada",
        composition: "Crema (LECHE), propulsores: N2O, N2, emulsionante: Mono y diglicéridos, estabilizador: Carragenina."
      }
    ]
  },
  {
    title: "MEZCLA PARA BATIDO",
    color: "bg-blue-600",
    items: [
      {
        name: "Plátano",
        composition: "Plátano, azúcar, agua, sal, aroma natural, conservante: Sorbato potásico, corrector de acidez: Ácido cítrico."
      },
      {
        name: "Chocolate",
        composition: "Azúcar, agua, azúcar invertido, cacao procesado con álcali, chocolate sin azúcar, extractos de orégano, linaza y ciruela (para conservar la frescura), lecitina de SOJA, jarabe de glucosa, chocolate simple (masa de cacao, azúcar, manteca de cacao, sabor a vainilla natural), Polvo de caseína (proteína de casina, estabilizador: Almidón de maíz cierto modificado, LECHE desnatada condensada, mantequilla (LECHE)), emulsionante: Hidroxipropilmetilcelulosa, saborizante natural, conservante: Sorbato de potasio."
      },
      {
        name: "Lotus Biscoff®",
        composition: "Harina de TRIGO, azúcar, aceites vegetales (aceite de canola), jarabe de azúcar moreno, gasificante (bicarbonato sódico), harina de SOJA, sal."
      },
      {
        name: "Café",
        composition: "Café, agua."
      },
      {
        name: "Leche malteada",
        composition: "Harina de trigo (contiene carbonato de calcio, pirofosfato férrico, niacina y vitamina B1) (GLUTEN), cebada malteada (GLUTEN), LECHE desremada, suero seco (LECHE), azúcar, proteínas de LECHE, sal, emulsionante: lecitina de SOJA, antiaglomerante: E341(iii), aromatizante de malta."
      }
    ]
  }
];

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
        <div className="passport-header bg-fiveguys-red text-white p-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">The Five Guys Freshness Passport</h2>
          <p className="text-lg mt-2">All ingredients - Transparent sourcing</p>
        </div>
        
        <div className="passport-stamp absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full p-4 border-2 border-white/30 transform rotate-12">
          <div className="text-white text-sm font-bold">AUTHENTICATED</div>
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
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.items.map((item, index) => (
                      <tr 
                        key={`${category.title}-${item.name}`}
                        className={`transition-colors hover:bg-gray-50`}
                      >
                        <td className="py-3 px-4 whitespace-nowrap border-r border-gray-200 font-medium w-1/4">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {item.composition}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        
        <div className="passport-footer p-6 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-gray-700">This passport certifies the authentic ingredients used in all Five Guys products.</p>
          <p className="text-sm text-gray-500 mt-2">Valid at all Five Guys locations worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPassport;
