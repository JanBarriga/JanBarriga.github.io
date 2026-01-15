const questions = [
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 1: Una cinta transportadora d'un aeroport es mou a 0,7 m/s i té una ocupació nominal de 3 passatgers per metre. Quina és la capacitat nominal de transport de la cinta en passatgers per hora?",
    "options": [
      {
        "value": "a",
        "text": "7560"
      },
      {
        "value": "b",
        "text": "3780"
      },
      {
        "value": "c",
        "text": "5040"
      },
      {
        "value": "d",
        "text": "2520"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "materials assaigs",
    "text": "Qüestió 2: El peltre és un aliatge format per un 92% d'estany (Sn), un 3% de coure (Cu) i un 5% d'altres elements... Quina quantitat dels dos components principals, en kg, hi ha en 450 kg d'aquest aliatge?",
    "options": [
      {
        "value": "a",
        "text": "Sn: 414, Cu: 13,5"
      },
      {
        "value": "b",
        "text": "Sn: 414, Cu: 22,5"
      },
      {
        "value": "c",
        "text": "Sn: 427,5, Cu: 22,5"
      },
      {
        "value": "d",
        "text": "Sn: 427,5, Cu: 13,5"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "energia",
    "text": "Qüestió 3: Una placa solar d'1,188 m x 0,540 m està formada per cèl·lules fotovoltaiques rectangulars de 17820 mm². Quantes cèl·lules hi ha, com a màxim?",
    "options": [
      {
        "value": "a",
        "text": "35"
      },
      {
        "value": "b",
        "text": "36"
      },
      {
        "value": "c",
        "text": "37"
      },
      {
        "value": "d",
        "text": "38"
      }
    ],
    "correctAnswer": "b",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "maquines sistemes electrics",
    "text": "Qüestió 4: Una resistència de constantà de 0,8 mm de diàmetre, 2 m de llargària i 0,5 μΩ·m de resistivitat. Valor?",
    "options": [
      {
        "value": "a",
        "text": "198,9 Ω"
      },
      {
        "value": "b",
        "text": "19,89 Ω"
      },
      {
        "value": "c",
        "text": "1,989 Ω"
      },
      {
        "value": "d",
        "text": "0,1989 Ω"
      }
    ],
    "correctAnswer": "c",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 5: Fiabilitat d'un lot de 320 màquines on 240 funcionen després de 1800 h.",
    "options": [
      {
        "value": "a",
        "text": "75%"
      },
      {
        "value": "b",
        "text": "66%"
      },
      {
        "value": "c",
        "text": "33%"
      },
      {
        "value": "d",
        "text": "25%"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
  type: "exercicis",
  category: "control",
  text: "Un cotxe disposa d’una alarma que sona si, a partir d’una velocitat límit v_lim, algun passatger porta el cinturó de seguretat descordat o hi ha alguna porta oberta. Es defineixen les variables: v = 1 si v ≥ v_lim (0 si v < v_lim), c = 1 si el cinturó està cordat (0 si està descordat), p = 1 si les portes estan tancades (0 si estan obertes) i a = 1 si l’alarma sona (0 si no sona).",
  options: null,
  correctAnswer: null,
  steps: `
    <p><strong>a) Taula de veritat del sistema</strong></p>

    <table border="1" cellpadding="6" cellspacing="0">
      <tr>
        <th>v</th>
        <th>c</th>
        <th>p</th>
        <th>a</th>
      </tr>
      <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
      <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
      <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
      <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
      <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
      <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
      <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
      <tr><td>1</td><td>1</td><td>1</td><td>0</td></tr>
    </table>

    <p><strong>b) Funció lògica</strong></p>
    <p>a = v · (¬c + ¬p)</p>

    <p><strong>c) Esquema de portes lògiques equivalent</strong></p>
    <p>Dues portes NOT aplicades a c i p. Les seves sortides entren a una porta OR. El resultat entra en una porta AND amb la variable v.</p>
  `
},

  {
  type: "exercicis",
  category: "motors",
  text: "Pel motor d’una serra circular elèctrica que s’alimenta a una tensió U = 230 V circula un corrent I = 5,5 A. En règim de funcionament nominal, proporciona a l’eix de sortida, que gira a n = 5 300 min⁻¹, una potència Ps = 850 W. Determineu el parell a l’eix de sortida, el rendiment electromecànic, l’energia consumida i dissipada en 10 minuts, i el cost econòmic si el preu de l’energia és 0,09 €/kWh.",
  options: null,
  correctAnswer: null,
  steps: `
    <p><strong>a) Parell Γ<sub>s</sub> a l’eix de sortida</strong></p>
    <p>
      Velocitat angular:<br>
      ω = 2π·n / 60 = 2π·5300 / 60 = 554,17 rad/s
    </p>
    <p>
      Γ<sub>s</sub> = P<sub>s</sub> / ω = 850 / 554,17 = <strong>1,53 N·m</strong>
    </p>

    <p><strong>b) Rendiment electromecànic η</strong></p>
    <p>
      Potència elèctrica absorbida:<br>
      P<sub>el</sub> = U·I = 230·5,5 = 1265 W
    </p>
    <p>
      η = P<sub>s</sub> / P<sub>el</sub> = 850 / 1265 = <strong>0,672 (67,2 %)</strong>
    </p>

    <p><strong>c) Energia consumida i dissipada en 10 min</strong></p>
    <p>
      Temps de funcionament: t = 10 min = 600 s
    </p>
    <p>
      Energia elèctrica consumida:<br>
      E<sub>el</sub> = P<sub>el</sub>·t = 1265·600 = <strong>759 000 J = 210,8 Wh</strong>
    </p>
    <p>
      Energia dissipada:<br>
      E<sub>diss</sub> = E<sub>el</sub>·(1 − η) = 759 000·(1 − 0,672) = <strong>249 000 J = 69,2 Wh</strong>
    </p>

    <p><strong>d) Cost econòmic</strong></p>
    <p>
      Cost = 0,09 · 0,2108 = <strong>0,019 €</strong>
    </p>
  `
},
 {
  type: "exercicis",
  category: "electrics",
  images: `<img src="2010-Sept-E4.png">`,
  text: "L’esquema representa un circuit elèctric amb dues resistències iguals R = 30 Ω connectades en paral·lel i un potenciòmetre Rp en sèrie, amb 0 ≤ Rp ≤ 45 Ω. La tensió d’alimentació és U = 18 V. Es demana determinar els corrents màxim i mínim, representar qualitativament el corrent en funció de Rp i calcular la potència màxima dissipada per les resistències i pel potenciòmetre.",
  options: null,
  correctAnswer: null,
  steps: `
    <p><strong>Dades del problema</strong></p>
    <p>
      U = 18 V<br>
      R = 30 Ω (dues resistències iguals en paral·lel)<br>
      0 ≤ R<sub>p</sub> ≤ 45 Ω<br>
      P<sub>max</sub> = 10 W
    </p>

    <p><strong>a) Corrent màxim i mínim</strong></p>
    <p>
      Equivalent de les dues resistències en paral·lel:<br>
      R<sub>eq</sub> = (R·R)/(R + R) = 30·30 / 60 = 15 Ω
    </p>
    <p>
      Resistència total del circuit:<br>
      R<sub>total</sub> = R<sub>eq</sub> + R<sub>p</sub>
    </p>
    <p>
      Corrent màxim (R<sub>p</sub> = 0):<br>
      I<sub>max</sub> = U / R<sub>total</sub> = 18 / 15 = <strong>1,2 A</strong>
    </p>
    <p>
      Corrent mínim (R<sub>p</sub> = 45 Ω):<br>
      I<sub>min</sub> = 18 / (15 + 45) = 18 / 60 = <strong>0,3 A</strong>
    </p>

    <p><strong>b) Variació del corrent en funció de R<sub>p</sub></strong></p>
    <p>
      El corrent ve donat per:<br>
      I(R<sub>p</sub>) = 18 / (15 + R<sub>p</sub>)
    </p>
    <p>
      La gràfica I(R<sub>p</sub>) és una corba decreixent: quan R<sub>p</sub> augmenta de 0 a 45 Ω, el corrent disminueix de 1,2 A a 0,3 A.
    </p>

    <p><strong>c) Potència màxima dissipada</strong></p>
    <p>
      La potència dissipada al potenciòmetre és màxima quan:<br>
      R<sub>p</sub> = R<sub>eq</sub> / 2 = 15 / 2 = 7,5 Ω
    </p>
    <p>
      Corrent en aquesta situació:<br>
      I = 18 / (15 + 7,5) = 18 / 22,5 = 0,8 A
    </p>
    <p>
      Potència dissipada pel potenciòmetre:<br>
      P<sub>p</sub> = I² · R<sub>p</sub> = 0,8² · 7,5 = <strong>4,8 W</strong>
    </p>
    <p>
      Potència dissipada per cada resistència R:<br>
      Tensió sobre el paral·lel: U = I · R<sub>eq</sub> = 0,8 · 15 = 12 V<br>
      Potència per resistència: P = U² / R = 12² / 30 = <strong>4,8 W</strong>
    </p>
    <p>
      Com que totes les potències són inferiors a 10 W, <strong>no se supera el límit màxim permès</strong>.
    </p>
  `
},
  {
    type: "exercicis",
    category: "principis de les maquines",
    text: "Un remolque de masa $m = 395\\text{ kg}$ está articulado en el punto $O$ a una distancia $L = 1950\\text{ mm}$ del eje de la rueda. El centro de masas $G$ se encuentra a una distancia $d$ del eje de la rueda. Determina las expresiones de la fuerza de la rueda sobre el suelo ($F$) y la fuerza vertical en el enganche ($F_O$), y selecciona la afirmación correcta sobre la distribución de carga.",
    options: null,
    correctAnswer: null,
    steps: "<p><em>a) Força F en funció de d (roda sobre terra).</em><br>F = mg (1 + d/1950)</p><p><em>b) Força vertical Fo en funció de d.</em><br>Fo = -mg (d/L) (Força vertical avall)</p><p><em>c) Gràfiques de F i Fo.</em><br>F lineal creixent; Fo lineal decreixent (negativa).</p><p><em>d) Distribució per minimitzar Fo.</em><br>Si d=0, llavors Fo=0. En aquest cas F = 3874 N.</p>"
  },
  {
    type: "exercicis",
    category: "motors reductors",
    text: "Un elevador accionat amb un motor reductor de vis sens fi aixeca a velocitat constant una càrrega m = 3 000 kg fins a una altura h = 2 m en un temps t = 35 s. El motor, pel qual circula un corrent I = 16 A, s’alimenta a U = 230 V i té un rendiment ηmot = 0,75. La velocitat de gir d’aquest motor és n = 1 390 min–1. Les resistències passives a l’elevador es consideren negligibles.",
    text: "a) La potència, Pm, i el parell, Γm, a l’eix de sortida del motor.",
    text: "b) El rendiment, ηred, del reductor.",
    text: "c) La potència total dissipada, Pdiss, en el motoreductor.",
    options: null,
    correctAnswer: null,
    steps: "<p><em>a) Potència Pm i parell Γm a l'eix motor.</em><br>Pm = 230 · 16 · 0,75 = 2760 W; Γm = 2760 / (1390 · 2π/60) = 18,96 Nm</p><p><em>b) Rendiment del reductor ηred.</em><br>η_red = (m·g·v) / Pm = (3000 · 9,807 · 2/35) / 2760 = 0,6091 (60,91%)</p><p><em>c) Potència total dissipada Pdiss.</em><br>P_diss = P_elec - P_carrega = (230·16) - (3000·9,807·2/35) = 1999 W</p>",
  },
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 1: Línia de producció (10s, 25s, 20s). Unitats per hora?",
    "options": [
      {
        "value": "a",
        "text": "180"
      },
      {
        "value": "b",
        "text": "144"
      },
      {
        "value": "c",
        "text": "120"
      },
      {
        "value": "d",
        "text": "80"
      }
    ],
    "correctAnswer": "b",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "metrologia",
    "text": "Qüestió 2: Pesatge (460,9; 460,4; 460,5; 460,5; 460,7). Resultat?",
    "options": [
      {
        "value": "a",
        "text": "460,7 g"
      },
      {
        "value": "b",
        "text": "460,5 g"
      },
      {
        "value": "c",
        "text": "460,6 g"
      },
      {
        "value": "d",
        "text": "460,4 g"
      }
    ],
    "correctAnswer": "c",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "principis de les maquines",
    "text": "Qüestió 3: Trepant (n=1200, p=80μm). Velocitat avanç?",
    "options": [
      {
        "value": "a",
        "text": "0,016 mm/s"
      },
      {
        "value": "b",
        "text": "0,16 mm/s"
      },
      {
        "value": "c",
        "text": "1,6 mm/s"
      },
      {
        "value": "d",
        "text": "16 mm/s"
      }
    ],
    "correctAnswer": "c",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "energia",
    "text": "Qüestió 4: Emissions CO2 (4,5L/100km, 2,35kg/L, 950km).",
    "options": [
      {
        "value": "a",
        "text": "100,5 kg"
      },
      {
        "value": "b",
        "text": "1005 kg"
      },
      {
        "value": "c",
        "text": "181,9 kg"
      },
      {
        "value": "d",
        "text": "1819 kg"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 5: Fiabilitat (1400 màquines, 112 fallades, 2000h).",
    "options": [
      {
        "value": "a",
        "text": "89,6%"
      },
      {
        "value": "b",
        "text": "92%"
      },
      {
        "value": "c",
        "text": "92,6%"
      },
      {
        "value": "d",
        "text": "94,4%"
      }
    ],
    "correctAnswer": "b",
    "steps": ""
  },
  {
    "type": "exercicis",
    "category": "control logic",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Escriviu la taula de veritat (Guillotina: pedal p, polsadors p1, p2).</em><br>M = 1 quan (p1=1 OR p2=1) AND p=1.</p><p><em>b) Funció lògica i simplificació.</em><br>m = (p1 + p2) · pe</p><p><em>c) Esquema de contactes.</em><br>Dos contactes en paral·lel (p1, p2) en sèrie amb un contacte (pe).</p>"
  },
  {
    "type": "exercicis",
    "category": "principis de les maquines",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Diagrama de cos lliure pantalla.</em><br>Dibuix vectorial (Forces Fs, Fbc, Fv, Fh).</p><p><em>b) Força Fbc de la barra sobre la pantalla.</em><br>Fbc = Fs / (L · cos 60) = (840 · 1,25) / (2 · 0,5) = 1050 N</p><p><em>c) Forces Fv i Fh en el punt A.</em><br>Fv = -909,3 N (sentit contrari); Fh = 315 N</p><p><em>d) Força horitzontal Ft del terra sobre la barra.</em><br>Ft = Fbc · cos 60 = 525 N</p>"
  },
  {
    "type": "exercicis",
    "category": "motors reductors",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Parell a l'eix de sortida Γs.</em><br>Γs = 60000 / (5000 · 2π/60) = 114,6 Nm</p><p><em>b) Consum horari ch.</em><br>ch = 180 g/kWh · 60 kW = 10,8 kg/h</p><p><em>c) Rendiment η del motor.</em><br>η = 60000 / ( (35500·10^3 / 0,85) · (10,8/3600) ) = 0,4789 (47,9%)</p><p><em>d) Volum de combustible en 3h.</em><br>V = (10,8 · 3) / 0,85 = 38,12 L</p>"
  },
  {
    "type": "exercicis",
    "category": "sistemes pneumatics oleohidràulics",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Potència hidràulica Ph.</em><br>Ph = q · ρ · g · h = 17 · 1 · 9,807 · 2,8 = 466,8 W</p><p><em>b) Treball fet per la bomba Wbomba.</em><br>W_bomba = 466,8 · 7 = 3268 Wh</p><p><em>c) Rendiment η.</em><br>η = 3268 / 5500 = 0,5941 (59,4%)</p><p><em>d) Cost econòmic total.</em><br>Cost = 0,12 · 5,5 = 0,66 €</p>"
  },
  {
    "type": "exercicis",
    "category": "maquines sistemes electrics",
    images: `<img src="2010-Juny-E4.png">`,
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Configuracions i posicions commutador.</em><br>Posició 1: Paral·lel. Posició 2: Sèrie.</p><p><em>b) Corrents (paral·lel i sèrie).</em><br>Pos 1: I_total = 9,2 A (4,6 A per branca). Pos 2: I_total = 2,3 A.</p><p><em>c) Potència consumida.</em><br>Pos 1: P = 2116 W. Pos 2: P = 529 W.</p>"
  },
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 1: Beneficis producció c=(45000+80n), venda=130.",
    "options": [
      {
        "value": "a",
        "text": "215"
      },
      {
        "value": "b",
        "text": "450"
      },
      {
        "value": "c",
        "text": "565"
      },
      {
        "value": "d",
        "text": "900"
      }
    ],
    "correctAnswer": "d",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "maquines sistemes electrics",
    "text": "Qüestió 2: Tolerància de 3 resistències sèrie ±5%.",
    "options": [
      {
        "value": "a",
        "text": "±2,5%"
      },
      {
        "value": "b",
        "text": "±5%"
      },
      {
        "value": "c",
        "text": "±10%"
      },
      {
        "value": "d",
        "text": "±15%"
      }
    ],
    "correctAnswer": "d",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "principis de les maquines",
    "text": "Qüestió 3: Torn (v=3mm/s, pas=0,4mm). Velocitat gir?",
    "options": [
      {
        "value": "a",
        "text": "8 min⁻¹"
      },
      {
        "value": "b",
        "text": "72 min⁻¹"
      },
      {
        "value": "c",
        "text": "472 min⁻¹"
      },
      {
        "value": "d",
        "text": "450 min⁻¹"
      }
    ],
    "correctAnswer": "d",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "energia",
    "text": "Qüestió 4: Emissions g/km (6,5L/100km, 2,3kg/L).",
    "options": [
      {
        "value": "a",
        "text": "149,5 g/km"
      },
      {
        "value": "b",
        "text": "14,95 g/km"
      },
      {
        "value": "c",
        "text": "282,6 g/km"
      },
      {
        "value": "d",
        "text": "28,26 g/km"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
    "type": "questions",
    "category": "organitzacio industrial",
    "text": "Qüestió 5: Càrrega camió (MMA 15500, Tara 10000, Contenidor 1500).",
    "options": [
      {
        "value": "a",
        "text": "3"
      },
      {
        "value": "b",
        "text": "4"
      },
      {
        "value": "c",
        "text": "6"
      },
      {
        "value": "d",
        "text": "10"
      }
    ],
    "correctAnswer": "a",
    "steps": ""
  },
  {
    "type": "exercicis",
    "category": "control logic",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Taula de veritat (Bomba incendi, 2 interruptors, porta oberta p=0).</em><br>La bomba s'activa quan p=0 i (i1=1 o i2=1).</p><p><em>b) Funció lògica.</em><br>b = (i1 + i2) · (not p)</p><p><em>c) Esquema de contactes.</em><br>Paral·lel (i1, i2) en sèrie amb un contacte tancat (p).</p>"
  },
  {
    "type": "exercicis",
    "category": "motors reductors",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Massa m del plafó.</em><br>m = 1,6 · 1,1 · 7 = 12,32 kg</p><p><em>b) Potència Ps a l'eix de sortida.</em><br>Ps = 38 · 17 · 2π/60 = 67,65 W</p><p><em>c) Rendiment electromecànic η.</em><br>η = 67,65 / (230 · 1,3) = 0,2263 (22,6%)</p><p><em>d) Energia consumida i dissipada en 30s.</em><br>E_elec = 8970 J; E_diss = 6941 J</p>"
  },
  {
    "type": "exercicis",
    "category": "materials assaigs",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Distància L2.</em><br>L2 = 2 · L1 · cos 40 = 3,064 m</p><p><em>b) Força F cable.</em><br>F = mg / (2 · sin 40) = 1526 N</p><p><em>c) Tensió normal σ.</em><br>σ = 1526 / (π · 2,5^2 mm^2) = 77,70 MPa</p><p><em>d) Deformació unitària ε.</em><br>ε = 77,70e6 / 20e9 = 3,885·10^-3</p>"
  },
  {
    "type": "exercicis",
    "category": "maquines sistemes electrics",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Energia E en 8h.</em><br>E = 75 · 1,8 · 1,35 · 8 = 1,458 kWh (5249 kJ)</p><p><em>b) Resistència R i corrent I.</em><br>I = 0,7924 A; R = 290,3 Ω</p><p><em>c) Potència Pc a 110V.</em><br>Pc = 110^2 / 290,3 = 41,69 W</p><p><em>d) Longitud L del fil.</em><br>L = (290,3 · π · 0,3^2 mm^2) / 0,2 = 410,3 m</p>"
  },
  {
    "type": "exercicis",
    "category": "motors reductors",
    "text": "",
    "options": null,
    "correctAnswer": null,
    "steps": "<p><em>a) Treball W fet per l'elevador.</em><br>W = 800 · 9,807 · 15 = 117,7 kJ</p><p><em>b) Potència útil Pm.</em><br>Pm = 9415 W (càlcul via W/t o mgv)</p><p><em>c) Rendiment η.</em><br>η = 9415 / 12000 = 0,7846 (78,46%)</p><p><em>d) Potència dissipada Pdiss.</em><br>P_diss = 12000 - 9415 = 2585 W</p>"
  }
];
