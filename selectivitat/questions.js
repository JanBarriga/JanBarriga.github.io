const questions = [
    // -------------------------------------------------------------------------
    // ORGANITZACIÓ INDUSTRIAL
    // -------------------------------------------------------------------------
    {
        text: "En una línia de producció que consta de tres estacions, les operacions que s'efectuen per a cada unitat produïda requereixen 10 s, 25 s i 20 s, respectivament. En règim estacionari i si la línia funciona a màxim rendiment, quantes unitats es produeixen cada hora?",
        type: "questions",
        category: "organitzacio",
        options: [
            { value: "a", text: "180" },
            { value: "b", text: "144" },
            { value: "c", text: "120" },
            { value: "d", text: "80" }
        ],
        correctAnswer: "b",
        steps: `
            <p>Per trobar la producció de la línia, hem d'identificar l'estació que actua com a "coll d'ampolla", és a dir, la més lenta.</p>
            <ul>
                <li>Estació 1: 10 s/unitat</li>
                <li>Estació 2: 25 s/unitat (Més lenta)</li>
                <li>Estació 3: 20 s/unitat</li>
            </ul>
            <p>El temps de cicle de la línia el determina l'estació més lenta: $T_{cicle} = 25\\ s$.</p>
            <p>Càlcul de la producció per hora:</p>
            $$ P = \\frac{3600\\ s/h}{25\\ s/u} = 144\\ unitats/h $$
        `
    },
    {
        text: "Una cinta transportadora d'un aeroport es mou a 0,7 m/s i té una ocupació nominal de 3 passatgers per metre. [cite_start]Quina és la capacitat nominal de transport de la cinta en passatgers per hora? [cite: 226, 227]",
        type: "questions",
        category: "organitzacio",
        options: [
            { value: "a", text: "7560" },
            { value: "b", text: "3780" },
            { value: "c", text: "5040" },
            { value: "d", text: "2520" }
        ],
        correctAnswer: "a",
        steps: `
            <p>Tenim les següents dades:</p>
            <ul>
                <li>Velocitat ($v$) = $0,7\\ m/s$</li>
                <li>Densitat lineal ($d$) = $3\\ passatgers/m$</li>
            </ul>
            <p>La capacitat de transport ($C$) es calcula multiplicant la velocitat per la densitat i convertint els segons a hores:</p>
            $$ C = v \\cdot d = 0,7 \\frac{m}{s} \\cdot 3 \\frac{pass}{m} = 2,1 \\frac{pass}{s} $$
            $$ C_{hora} = 2,1 \\cdot 3600 = 7560\\ passatgers/h $$
        `
    },

    // -------------------------------------------------------------------------
    // MATERIALS I ASSAIGS
    // -------------------------------------------------------------------------
    {
        text: "El peltre és un aliatge format per un 92% d'estany (Sn), un 3% de coure (Cu) i un 5% d'altres elements. Quina quantitat dels dos components principals hi ha en 450 kg d'aquest aliatge?",
        type: "questions",
        category: "materials",
        options: [
            { value: "a", text: "Sn: 414 kg, Cu: 13,5 kg" },
            { value: "b", text: "Sn: 414 kg, Cu: 22,5 kg" },
            { value: "c", text: "Sn: 427,5 kg, Cu: 22,5 kg" },
            { value: "d", text: "Sn: 427,5 kg, Cu: 13,5 kg" }
        ],
        correctAnswer: "a",
        steps: `
            <p>Calculem la massa corresponent a cada percentatge sobre el total de 450 kg:</p>
            <ul>
                <li><strong>Estany (Sn):</strong> $0,92 \\cdot 450\\ kg = 414\\ kg$</li>
                <li><strong>Coure (Cu):</strong> $0,03 \\cdot 450\\ kg = 13,5\\ kg$</li>
            </ul>
        `
    },

    // -------------------------------------------------------------------------
    // MAQUINES I MECANISMES
    // -------------------------------------------------------------------------
    {
        text: "Un trepant amb avanç automàtic es programa de manera que la velocitat de rotació de la broca sigui n = 1200 min⁻¹ i el pas (avanç per volta) p = 80 μm. Quina és la velocitat d'avanç de la broca?",
        type: "questions",
        category: "maquines",
        options: [
            { value: "a", text: "0,016 mm/s" },
            { value: "b", text: "0,16 mm/s" },
            { value: "c", text: "1,6 mm/s" },
            { value: "d", text: "16 mm/s" }
        ],
        correctAnswer: "c",
        steps: `
            <p>La velocitat d'avanç ($v_a$) és el producte de la velocitat de rotació ($n$) pel pas ($p$).</p>
            <ol>
                <li>Convertim les unitats:
                    <ul>
                        <li>$n = 1200\\ min^{-1} = \\frac{1200}{60}\\ s^{-1} = 20\\ s^{-1}$</li>
                        <li>$p = 80\\ \\mu m = 0,08\\ mm$</li>
                    </ul>
                </li>
                <li>Calculem:
                    $$ v_a = n \\cdot p = 20\\ s^{-1} \\cdot 0,08\\ mm = 1,6\\ mm/s $$
                </li>
            </ol>
        `
    },

    // -------------------------------------------------------------------------
    // MÀQUINES ELÈCTRIQUES I ELECTROTECNIA
    // -------------------------------------------------------------------------
    {
        text: "Una resistència està feta de fil de constantà de 0,8 mm de diàmetre, 2 m de llargària i 0,5 μΩ·m de resistivitat. Quin és el valor d'aquesta resistència?",
        type: "questions",
        category: "electrics",
        options: [
            { value: "a", text: "198,9 Ω" },
            { value: "b", text: "19,89 Ω" },
            { value: "c", text: "1,989 Ω" },
            { value: "d", text: "0,1989 Ω" }
        ],
        correctAnswer: "c",
        steps: `
            <p>Utilitzem la llei de Pouillet: $R = \\rho \\cdot \\frac{L}{S}$.</p>
            <ul>
                <li><strong>Resistivitat ($\rho$):</strong> $0,5\\ \\mu\\Omega\\cdot m = 0,5 \\cdot 10^{-6}\\ \\Omega\\cdot m$</li>
                <li><strong>Longitud ($L$):</strong> $2\\ m$</li>
                <li><strong>Diàmetre ($d$):</strong> $0,8\\ mm = 0,8 \\cdot 10^{-3}\\ m$</li>
            </ul>
            <p>Primer calculem la secció ($S$):</p>
            $$ S = \\pi \\cdot \\left(\\frac{d}{2}\\right)^2 = \\pi \\cdot (0,4 \\cdot 10^{-3})^2 \\approx 5,027 \\cdot 10^{-7}\\ m^2 $$
            <p>Ara calculem la resistència:</p>
            $$ R = \\frac{0,5 \\cdot 10^{-6} \\cdot 2}{5,027 \\cdot 10^{-7}} = \\frac{1 \\cdot 10^{-6}}{0,5027 \\cdot 10^{-6}} \\approx 1,989\\ \\Omega $$
        `
    },
    {
        text: "Un calefactor disposa de dues resistències (R = 50 Ω cadascuna) que es poden connectar segons dues configuracions diferents (Sèrie i Paral·lel) a una tensió U = 230 V. Calcula la potència consumida en cada cas.",
        type: "exercicis",
        category: "electrics",
        images: "",
        options: [
            { value: "a", text: "Sèrie: 529 W, Paral·lel: 2116 W" },
            { value: "b", text: "Sèrie: 1058 W, Paral·lel: 529 W" },
            { value: "c", text: "Sèrie: 264 W, Paral·lel: 1058 W" },
            { value: "d", text: "Sèrie: 2116 W, Paral·lel: 529 W" }
        ],
        correctAnswer: "a",
        steps: `
            <p>La potència es calcula com $P = \\frac{U^2}{R_{eq}}$. Tenim $U = 230\\ V$ i $R = 50\\ \\Omega$.</p>
            
            <h3>Cas 1: Connexió en Sèrie</h3>
            <p>La resistència equivalent és la suma:</p>
            $$ R_{eq} = R + R = 50 + 50 = 100\\ \\Omega $$
            $$ P_{serie} = \\frac{230^2}{100} = \\frac{52900}{100} = 529\\ W $$

            <h3>Cas 2: Connexió en Paral·lel</h3>
            <p>La resistència equivalent de dues resistències iguals en paral·lel és la meitat:</p>
            $$ R_{eq} = \\frac{R}{2} = 25\\ \\Omega $$
            $$ P_{paral·lel} = \\frac{230^2}{25} = \\frac{52900}{25} = 2116\\ W $$
        `
    },

    // -------------------------------------------------------------------------
    // CONTROL I AUTOMATITZACIÓ
    // -------------------------------------------------------------------------
    {
        text: "Una guillotina disposa de dos polsadors ($PP_1, PP_2$) i d'un pedal ($p$). El motor ($m$) de la guillotina es posa en marxa (m=1) si s'acciona el pedal (p=1) i, com a mínim, es prem un dels polsadors. Troba la funció lògica.",
        type: "exercicis",
        category: "control",
        options: [
            { value: "a", text: "m = p + (PP1 · PP2)" },
            { value: "b", text: "m = p · (PP1 + PP2)" },
            { value: "c", text: "m = p + PP1 + PP2" },
            { value: "d", text: "m = p · PP1 · PP2" }
        ],
        correctAnswer: "b",
        steps: `
            <p>Analitzem l'enunciat:</p>
            <ul>
                <li>"S'acciona el pedal": Variable $p$. Condició necessària (AND).</li>
                <li>"Com a mínim un dels polsadors": Això és una suma lògica (OR) entre $PP_1$ i $PP_2$.</li>
            </ul>
            <p>Per tant, la funció és el pedal AND (Polsador 1 OR Polsador 2).</p>
            $$ m = p \\cdot (PP_1 + PP_2) $$
            
            <p><strong>Taula de veritat:</strong></p>
            <style>
                .truth-table { border-collapse: collapse; width: 100%; max-width: 400px; margin: 10px 0; }
                .truth-table th, .truth-table td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                .truth-table th { background-color: #f2f2f2; color: #333; }
                .dark-mode .truth-table th { background-color: #333; color: #f2f2f2; }
            </style>
            <table class="truth-table">
                <tr><th>p</th><th>PP1</th><th>PP2</th><th>m</th></tr>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            </table>
                    `
    },
    {
        text: "Un cotxe disposa d'una alarma ($a$) que sona si la velocitat supera un límit ($v=1$) i algun passatger porta el cinturó descordat ($c=0$) o hi ha una porta oberta ($p=0$). Les variables són: $c=1$ (cordat), $p=1$ (tancada). [cite_start]Quina és la funció lògica? [cite: 268, 271]",
        type: "exercicis",
        category: "control",
        options: [
            { value: "a", text: "a = v · (c + p)" },
            { value: "b", text: "a = v · (NOT c + NOT p)" },
            { value: "c", text: "a = v + (NOT c · NOT p)" },
            { value: "d", text: "a = v · NOT c · NOT p" }
        ],
        correctAnswer: "b",
        steps: `
            <p>Condicions per a que soni l'alarma ($a=1$):</p>
            <ol>
                <li>Velocitat superior al límit ($v=1$).</li>
                <li><strong>I</strong> (Operació AND).</li>
                <li>(Cinturó descordat <strong>O</strong> Porta oberta).</li>
            </ol>
            <p>Traducció a variables:</p>
            <ul>
                <li>Cinturó descordat: Si $c=1$ és cordat, descordat és $\\bar{c}$ (NOT c).</li>
                <li>Porta oberta: Si $p=1$ és tancada, oberta és $\\bar{p}$ (NOT p).</li>
            </ul>
            <p>Funció final:</p>
            $$ a = v \\cdot (\\bar{c} + \\bar{p}) $$
            <p>Aplicant Morgan, també es podria escriure com $a = v \\cdot \\overline{(c \\cdot p)}$.</p>
        `
    },

    // -------------------------------------------------------------------------
    // MOTORS I PNEUMÀTICA/HIDRÀULICA
    // -------------------------------------------------------------------------
    {
        text: "Una instal·lació de reg disposa d'una bomba que puja q = 17 L/s d'aigua a una altura h = 2,8 m. Quina és la potència hidràulica desenvolupada?",
        type: "exercicis",
        category: "pneumatica",
        images: "",
        options: [
            { value: "a", text: "466,5 W" },
            { value: "b", text: "47,6 W" },
            { value: "c", text: "46648 W" },
            { value: "d", text: "166,6 W" }
        ],
        correctAnswer: "a",
        steps: `
            <p>La potència hidràulica es calcula amb la fórmula:</p>
            $$ P_h = \\rho \\cdot g \\cdot q \\cdot h $$
            <p>On:</p>
            <ul>
                <li>$\\rho$ (densitat aigua) = $1000\\ kg/m^3$</li>
                <li>$g$ (gravetat) = $9,8\\ m/s^2$</li>
                <li>$q$ (cabal) = $17\\ L/s = 0,017\\ m^3/s$</li>
                <li>$h$ (altura) = $2,8\\ m$</li>
            </ul>
            <p>Càlcul:</p>
            $$ P_h = 1000 \\cdot 9,8 \\cdot 0,017 \\cdot 2,8 $$
            $$ P_h = 466,48\\ W \\approx 466,5\\ W $$
        `
    },
    {
        text: "Un motor d'explosió consumeix 4,5 L/100 km i fa servir un gasoil que produeix 2,35 kg de CO₂ per litre. [cite_start]En un viatge de 950 km, quina quantitat de CO₂ emet? [cite: 36, 37]",
        type: "questions",
        category: "energia",
        options: [
            { value: "a", text: "100,5 kg" },
            { value: "b", text: "1005 kg" },
            { value: "c", text: "181,9 kg" },
            { value: "d", text: "1819 kg" }
        ],
        correctAnswer: "a",
        steps: `
            <p>Primer calculem el consum total de combustible per als 950 km:</p>
            $$ Consum_{total} = \\frac{4,5\\ L}{100\\ km} \\cdot 950\\ km = 42,75\\ L $$
            <p>Ara multipliquem pels kg de CO₂ emesos per litre:</p>
            $$ Emissions = 42,75\\ L \\cdot 2,35\\ \\frac{kg CO_2}{L} = 100,4625\\ kg $$
            <p>Arrodonint, obtenim 100,5 kg.</p>
        `
    }
];
