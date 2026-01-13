const questions = [

  // SETEMBRE 2010 - SÈRIE 2
  
  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 1: Una cinta transportadora d'un aeroport es mou a 0,7 m/s i té una ocupació nominal de 3 passatgers per metre. Quina és la capacitat nominal de transport de la cinta en passatgers per hora?",
    options: ["a) 7560", "b) 3780", "c) 5040", "d) 2520"],
    correctOption: "a",
    imgCode: "2010-Set-S2-Q1"
  },
  {
    type: "Questions",
    category: "Materials i assaigs",
    question: "Qüestió 2: El peltre és un aliatge format per un 92% d'estany (Sn), un 3% de coure (Cu) i un 5% d'altres elements... Quina quantitat dels dos components principals, en kg, hi ha en 450 kg d'aquest aliatge?",
    options: ["a) Sn: 414, Cu: 13,5", "b) Sn: 414, Cu: 22,5", "c) Sn: 427,5, Cu: 22,5", "d) Sn: 427,5, Cu: 13,5"],
    correctOption: "a",
    imgCode: "2010-Set-S2-Q2"
  },
  {
    type: "Questions",
    category: "Energia",
    question: "Qüestió 3: Una placa solar d'1,188 m x 0,540 m està formada per cèl·lules fotovoltaiques rectangulars de 17820 mm². Quantes cèl·lules hi ha, com a màxim?",
    options: ["a) 35", "b) 36", "c) 37", "d) 38"],
    correctOption: "b",
    imgCode: "2010-Set-S2-Q3"
  },
  {
    type: "Questions",
    category: "Màquines i sistemes elèctrics",
    question: "Qüestió 4: Una resistència de constantà de 0,8 mm de diàmetre, 2 m de llargària i 0,5 μΩ·m de resistivitat. Valor?",
    options: ["a) 198,9 Ω", "b) 19,89 Ω", "c) 1,989 Ω", "d) 0,1989 Ω"],
    correctOption: "c",
    imgCode: "2010-Set-S2-Q4"
  },
  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 5: Fiabilitat d'un lot de 320 màquines on 240 funcionen després de 1800 h.",
    options: ["a) 75%", "b) 66%", "c) 33%", "d) 25%"],
    correctOption: "a",
    imgCode: "2010-Set-S2-Q5"
  },
  {
    type: "Exercicis",
    category: "Control lògic",
    imgCode: "2010-Set-S2-Ex2",
    steps: [
      {
        statement: "a) Escriviu la taula de veritat del sistema (alarma de cotxe).",
        solution: "Veure taula a la solució (les sortides 'a' són 1 quan v=1 i (c=0 o p=0))."
      },
      {
        statement: "b) Determineu la funció lògica i simplifiqueu-la.",
        solution: "a = v · (not c) + v · (not p)"
      },
      {
        statement: "c) Dibuixeu l'esquema de portes lògiques equivalent.",
        solution: "Esquema amb portes AND i NOT sumades (OR)."
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Motors reductors",
    imgCode: "2010-Set-S2-Ex3-A",
    steps: [
      {
        statement: "a) El parell, Γs, a l'eix de sortida.",
        solution: "Γs = Ps / ωs = 850 / (5300 · 2π/60) = 1,532 Nm"
      },
      {
        statement: "b) El rendiment electromecànic, η.",
        solution: "η = Ps / (U·I) = 850 / (230 · 5,5) = 0,6719 (67,19%)"
      },
      {
        statement: "c) Energia consumida i dissipada en 10 min.",
        solution: "E_elec = 230 · 5,5 · 10 · 60 = 759 kJ (210,8 Wh); E_diss = E_elec · (1-η) = 249 kJ (69,16 Wh)"
      },
      {
        statement: "d) Cost econòmic (0,09 €/kWh).",
        solution: "Cost = 0,09 · 0,2108 = 0,019 €"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Màquines i sistemes elèctrics",
    imgCode: "2010-Set-S2-Ex4-A",
    steps: [
      {
        statement: "a) Corrents màxim i mínim (Imax, Imin).",
        solution: "I_max (Rp=0) = 18 / 15 = 1,2 A; I_min (Rp=45) = 18 / (15+45) = 0,3 A"
      },
      {
        statement: "b) Dibuixeu el corrent I en funció de Rp.",
        solution: "Gràfica decreixent de 1,2 A a 0,3 A."
      },
      {
        statement: "c) Potència màxima dissipada per resistència i potenciòmetre.",
        solution: "P_Rmax = 10,8 W (supera els 10W màxims!); P_Pmax = 5,4 W."
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Principis de les màquines",
    imgCode: "2010-Set-S2-Ex3-B",
    steps: [
      {
        statement: "a) Força F en funció de d (roda sobre terra).",
        solution: "F = mg (1 + d/1950)"
      },
      {
        statement: "b) Força vertical Fo en funció de d.",
        solution: "Fo = -mg (d/L) (Força vertical avall)"
      },
      {
        statement: "c) Gràfiques de F i Fo.",
        solution: "F lineal creixent; Fo lineal decreixent (negativa)."
      },
      {
        statement: "d) Distribució per minimitzar Fo.",
        solution: "Si d=0, llavors Fo=0. En aquest cas F = 3874 N."
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Motors reductors",
    imgCode: "2010-Set-S2-Ex4-B",
    steps: [
      {
        statement: "a) Potència Pm i parell Γm a l'eix motor.",
        solution: "Pm = 230 · 16 · 0,75 = 2760 W; Γm = 2760 / (1390 · 2π/60) = 18,96 Nm"
      },
      {
        statement: "b) Rendiment del reductor ηred.",
        solution: "η_red = (m·g·v) / Pm = (3000 · 9,807 · 2/35) / 2760 = 0,6091 (60,91%)"
      },
      {
        statement: "c) Potència total dissipada Pdiss.",
        solution: "P_diss = P_elec - P_carrega = (230·16) - (3000·9,807·2/35) = 1999 W"
      }
    ]
  },
  
  // JUNY 2010 - SÈRIE 1

  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 1: Línia de producció (10s, 25s, 20s). Unitats per hora?",
    options: ["a) 180", "b) 144", "c) 120", "d) 80"],
    correctOption: "b",
    imgCode: "2010-Jun-S1-Q1"
  },
  {
    type: "Questions",
    category: "Metrologia",
    question: "Qüestió 2: Pesatge (460,9; 460,4; 460,5; 460,5; 460,7). Resultat?",
    options: ["a) 460,7 g", "b) 460,5 g", "c) 460,6 g", "d) 460,4 g"],
    correctOption: "c",
    imgCode: "2010-Jun-S1-Q2"
  },
  {
    type: "Questions",
    category: "Principis de les màquines",
    question: "Qüestió 3: Trepant (n=1200, p=80μm). Velocitat avanç?",
    options: ["a) 0,016 mm/s", "b) 0,16 mm/s", "c) 1,6 mm/s", "d) 16 mm/s"],
    correctOption: "c",
    imgCode: "2010-Jun-S1-Q3"
  },
  {
    type: "Questions",
    category: "Energia",
    question: "Qüestió 4: Emissions CO2 (4,5L/100km, 2,35kg/L, 950km).",
    options: ["a) 100,5 kg", "b) 1005 kg", "c) 181,9 kg", "d) 1819 kg"],
    correctOption: "a",
    imgCode: "2010-Jun-S1-Q4"
  },
  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 5: Fiabilitat (1400 màquines, 112 fallades, 2000h).",
    options: ["a) 89,6%", "b) 92%", "c) 92,6%", "d) 94,4%"],
    correctOption: "b",
    imgCode: "2010-Jun-S1-Q5"
  },
  {
    type: "Exercicis",
    category: "Control lògic",
    imgCode: "2010-Jun-S1-Ex2",
    steps: [
      {
        statement: "a) Escriviu la taula de veritat (Guillotina: pedal p, polsadors p1, p2).",
        solution: "M = 1 quan (p1=1 OR p2=1) AND p=1."
      },
      {
        statement: "b) Funció lògica i simplificació.",
        solution: "m = (p1 + p2) · pe"
      },
      {
        statement: "c) Esquema de contactes.",
        solution: "Dos contactes en paral·lel (p1, p2) en sèrie amb un contacte (pe)."
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Principis de les màquines",
    imgCode: "2010-Jun-S1-Ex3-A",
    steps: [
      {
        statement: "a) Diagrama de cos lliure pantalla.",
        solution: "Dibuix vectorial (Forces Fs, Fbc, Fv, Fh)."
      },
      {
        statement: "b) Força Fbc de la barra sobre la pantalla.",
        solution: "Fbc = Fs / (L · cos 60) = (840 · 1,25) / (2 · 0,5) = 1050 N"
      },
      {
        statement: "c) Forces Fv i Fh en el punt A.",
        solution: "Fv = -909,3 N (sentit contrari); Fh = 315 N"
      },
      {
        statement: "d) Força horitzontal Ft del terra sobre la barra.",
        solution: "Ft = Fbc · cos 60 = 525 N"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Motors reductors",
    imgCode: "2010-Jun-S1-Ex4-A",
    steps: [
      {
        statement: "a) Parell a l'eix de sortida Γs.",
        solution: "Γs = 60000 / (5000 · 2π/60) = 114,6 Nm"
      },
      {
        statement: "b) Consum horari ch.",
        solution: "ch = 180 g/kWh · 60 kW = 10,8 kg/h"
      },
      {
        statement: "c) Rendiment η del motor.",
        solution: "η = 60000 / ( (35500·10^3 / 0,85) · (10,8/3600) ) = 0,4789 (47,9%)"
      },
      {
        statement: "d) Volum de combustible en 3h.",
        solution: "V = (10,8 · 3) / 0,85 = 38,12 L"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Sistemes pneumàtics i oleohidràulics",
    imgCode: "2010-Jun-S1-Ex3-B",
    steps: [
      {
        statement: "a) Potència hidràulica Ph.",
        solution: "Ph = q · ρ · g · h = 17 · 1 · 9,807 · 2,8 = 466,8 W"
      },
      {
        statement: "b) Treball fet per la bomba Wbomba.",
        solution: "W_bomba = 466,8 · 7 = 3268 Wh"
      },
      {
        statement: "c) Rendiment η.",
        solution: "η = 3268 / 5500 = 0,5941 (59,4%)"
      },
      {
        statement: "d) Cost econòmic total.",
        solution: "Cost = 0,12 · 5,5 = 0,66 €"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Màquines i sistemes elèctrics",
    imgCode: "2010-Jun-S1-Ex4-B",
    steps: [
      {
        statement: "a) Configuracions i posicions commutador.",
        solution: "Posició 1: Paral·lel. Posició 2: Sèrie."
      },
      {
        statement: "b) Corrents (paral·lel i sèrie).",
        solution: "Pos 1: I_total = 9,2 A (4,6 A per branca). Pos 2: I_total = 2,3 A."
      },
      {
        statement: "c) Potència consumida.",
        solution: "Pos 1: P = 2116 W. Pos 2: P = 529 W."
      }
    ]
  },

  // =======================================================
  // JUNY 2010 - SÈRIE 4
  // =======================================================
  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 1: Beneficis producció c=(45000+80n), venda=130.",
    options: ["a) 215", "b) 450", "c) 565", "d) 900"],
    correctOption: "d",
    imgCode: "2010-Jun-S4-Q1"
  },
  {
    type: "Questions",
    category: "Màquines i sistemes elèctrics",
    question: "Qüestió 2: Tolerància de 3 resistències sèrie ±5%.",
    options: ["a) ±2,5%", "b) ±5%", "c) ±10%", "d) ±15%"],
    correctOption: "b",
    imgCode: "2010-Jun-S4-Q2"
  },
  {
    type: "Questions",
    category: "Principis de les màquines",
    question: "Qüestió 3: Torn (v=3mm/s, pas=0,4mm). Velocitat gir?",
    options: ["a) 8 min⁻¹", "b) 72 min⁻¹", "c) 472 min⁻¹", "d) 450 min⁻¹"],
    correctOption: "d",
    imgCode: "2010-Jun-S4-Q3"
  },
  {
    type: "Questions",
    category: "Energia",
    question: "Qüestió 4: Emissions g/km (6,5L/100km, 2,3kg/L).",
    options: ["a) 149,5 g/km", "b) 14,95 g/km", "c) 282,6 g/km", "d) 28,26 g/km"],
    correctOption: "a",
    imgCode: "2010-Jun-S4-Q4"
  },
  {
    type: "Questions",
    category: "Organització industrial",
    question: "Qüestió 5: Càrrega camió (MMA 15500, Tara 10000, Contenidor 1500).",
    options: ["a) 3", "b) 4", "c) 6", "d) 10"],
    correctOption: "a",
    imgCode: "2010-Jun-S4-Q5"
  },
  {
    type: "Exercicis",
    category: "Control lògic",
    imgCode: "2010-Jun-S4-Ex2",
    steps: [
      {
        statement: "a) Taula de veritat (Bomba incendi, 2 interruptors, porta oberta p=0).",
        solution: "La bomba s'activa quan p=0 i (i1=1 o i2=1)."
      },
      {
        statement: "b) Funció lògica.",
        solution: "b = (i1 + i2) · (not p)"
      },
      {
        statement: "c) Esquema de contactes.",
        solution: "Paral·lel (i1, i2) en sèrie amb un contacte tancat (p)."
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Motors reductors",
    imgCode: "2010-Jun-S4-Ex3-A",
    steps: [
      {
        statement: "a) Massa m del plafó.",
        solution: "m = 1,6 · 1,1 · 7 = 12,32 kg"
      },
      {
        statement: "b) Potència Ps a l'eix de sortida.",
        solution: "Ps = 38 · 17 · 2π/60 = 67,65 W"
      },
      {
        statement: "c) Rendiment electromecànic η.",
        solution: "η = 67,65 / (230 · 1,3) = 0,2263 (22,6%)"
      },
      {
        statement: "d) Energia consumida i dissipada en 30s.",
        solution: "E_elec = 8970 J; E_diss = 6941 J"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Materials i assaigs",
    imgCode: "2010-Jun-S4-Ex4-A",
    steps: [
      {
        statement: "a) Distància L2.",
        solution: "L2 = 2 · L1 · cos 40 = 3,064 m"
      },
      {
        statement: "b) Força F cable.",
        solution: "F = mg / (2 · sin 40) = 1526 N"
      },
      {
        statement: "c) Tensió normal σ.",
        solution: "σ = 1526 / (π · 2,5^2 mm^2) = 77,70 MPa"
      },
      {
        statement: "d) Deformació unitària ε.",
        solution: "ε = 77,70e6 / 20e9 = 3,885·10^-3"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Màquines i sistemes elèctrics",
    imgCode: "2010-Jun-S4-Ex3-B",
    steps: [
      {
        statement: "a) Energia E en 8h.",
        solution: "E = 75 · 1,8 · 1,35 · 8 = 1,458 kWh (5249 kJ)"
      },
      {
        statement: "b) Resistència R i corrent I.",
        solution: "I = 0,7924 A; R = 290,3 Ω"
      },
      {
        statement: "c) Potència Pc a 110V.",
        solution: "Pc = 110^2 / 290,3 = 41,69 W"
      },
      {
        statement: "d) Longitud L del fil.",
        solution: "L = (290,3 · π · 0,3^2 mm^2) / 0,2 = 410,3 m"
      }
    ]
  },
  {
    type: "Exercicis",
    category: "Motors reductors",
    imgCode: "2010-Jun-S4-Ex4-B",
    steps: [
      {
        statement: "a) Treball W fet per l'elevador.",
        solution: "W = 800 · 9,807 · 15 = 117,7 kJ"
      },
      {
        statement: "b) Potència útil Pm.",
        solution: "Pm = 9415 W (càlcul via W/t o mgv)"
      },
      {
        statement: "c) Rendiment η.",
        solution: "η = 9415 / 12000 = 0,7846 (78,46%)"
      },
      {
        statement: "d) Potència dissipada Pdiss.",
        solution: "P_diss = 12000 - 9415 = 2585 W"
      }
    ]
  }
];
