const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `En una línia de producció que consta de tres estacions, les operacions que s’efectuen
        per a cada unitat produïda requereixen 10 s, 25 s i 20 s, respectivament. En règim estacionari i si la línia funciona a màxim rendiment, quantes unitats es produeixen cada
        hora?`, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `En una línia de producció que consta de tres estacions, les operacions que s’efectuen per a cada unitat produïda requereixen 10 s, 25 s i 20 s respectivament. En règim estacionari i si la línia funciona a màxim rendiment, quantes unitats es produeixen cada hora?`,
        options: [
            { text: "180", value: "a" },
            { text: "144", value: "b" },
            { text: "120", value: "c" },
            { text: "80", value: "d" }
        ],
        correctAnswer: "b",
        steps:
        \\[ 
          t_1 = 10, text{s},
          t_2 = 25, text{s},
          t_3 = 20, text{s},
          t_operació = 1, text{h},
          t_total = \(t_operació * 3600\),
           \\]
          
        
        
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una família que anualment generava 525 kg d’envasos, en un any ha aconseguit reduir aquesta quantitat un 60 %. Quina reducció en emissions de GEH ha obtingut respecte a l’any anterior, tenint en compte que el factor d’emissió dels envasos és de 120,09 g CO2eq/kg residu?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Quantitat inicial d’envasos} = 525 \\, \\text{kg}
            \\]
            \\[
            \\text{Percentatge de reducció} = 60\\%
            \\]
            \\[
            \\text{Quantitat reduïda} = 525 \\, \\text{kg} \\times 0{,}60 = 315 \\, \\text{kg}
            \\]
            \\[
            \\text{Quantitat de residu restant} = 525 \\, \\text{kg} - 315 \\, \\text{kg} = 210 \\, \\text{kg}
            \\]
            \\[
            \\text{Emissions inicials} = 525 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions inicials} = 63047,25 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions inicials} = 63{,}05 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 210 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25218{,}9 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25{,}22 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Reducció en emissions} = 63{,}05 \, \\text{kg CO2eq} - 25{,}22 \, \\text{kg CO2eq} = 37{,}83 \, \\text{kg CO2eq}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    }
];
