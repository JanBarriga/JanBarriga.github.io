
//tipos de pregunta : energia / material / metrologia / pneumatica / motors / maquinas / electrics / control logic / organització industrial
const questions = [
    {
        type: "exercicis",
        category: "Control Logic",
        text: `Una guillotina disposa de dos polsadors i d’un pedal. El motor de la guillotina es posa en marxa si s’acciona 
        el pedal i, com a mínim, es prem un dels polsadors. Utilitzant les variables d’estat següent: 
        `, 
        text: `Polsador P1 P2: 0 no premut, 1 premut`,
        text: `Pedal P3: 0 no accionat, 1 accionat`,
        text: `Motor M: 0 aturat 1 funcionant`,
            
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong> a) Taula de veritat:</strong>
            <br>
<table border="1">
  <thead>
    <tr>
      <th>v</th>
      <th>c</th>
      <th>p</th>
      <th>a</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
    <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
    <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
    <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
    <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
    <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
    <tr><td>1</td><td>1</td><td>1</td><td>0</td></tr>
  </tbody>
</table>
            <strong> B) Taula de veritat:</strong>
            <p> a = v · </p>

          
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
    `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En una línia de producció que consta de tres estacions, les operacions que s’efectuen per a cada unitat produïda requereixen 10 s, 25 s i 20 s respectivament. En règim estacionari i si la línia funciona a màxim rendiment, quantes unitats es produeixen cada hora?`,
        options: [
            { text: "180", value: "a" },
            { text: "144", value: "b" },
            { text: "120", value: "c" },
            { text: "80", value: "d" }
        ],
        correctAnswer: "b",
        steps:
        \[  
            t_1 &= 10\,\text{s} \\
            t_2 &= 25\,\text{s} \\
            t_3 &= 20\,\text{s}, \\
            t_{\text{operació}} &= 1\,\text{h} = 3600\,\text{s} \\
            n &= \frac{t_{\text{operació}}}{t_3}
            n &= \frac{3600}{25}
            n &= 144\,\text{unitats/hora}
\]
},
           
    
          
        
        
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Per a garantir l’exactitud d’un mesurament, s’utilitza una balança i un procediment de pesatge que consisteix a pesar cinc vegades el mateix objecte. S’obtenen els resultats següents: 460,9 g, 460,4 g, 460,5 g, 460,5 g i 460,7 g. Quina de les quantitats següents, amb l’interval d’incertesa corresponent, es pot prendre com a resultat de la pesada?`,
        options: [
            { text: "460,7 g ", value: "a" },
            { text: "460,5 kg ", value: "b" },
            { text: "460,6 kg ", value: "c" },
            { text: "460,4 kg ", value: "d" }
        ],
        correctAnswer: "b",
        steps:
        
    }
];
