const participantes = [
"David Cristhian Armando Ysique Ataucusi",
"Abraham Paniagua Garcia",
"Yngrid Tarrillo Mendoza",
"Johanna Andrea Castañeda Santisteban",
"Omar Alonso Yañez Juarez",
"Yenifer Gisela Sifuentes Calderon",
"Rosee Merly Villalobos Arbiza",
"Shessira Alejandra Saavedra Loayza",
"Claire Armida Caycho Palma",
"Jennifer Alessandra Falcon Peramas",
"Anthonye Alessandre Angeles Gonzales",
"Luis Angel Martinez Rojas",
"Katherinne Esther Herrera Llanque",
"Giomar Fabian Cruz Barron",
"Sandra Elizabeth Amaya Callao",
"Ana Christina Huari Arana",
"Jimena Patricia Luis Oscanoa",
"Pamela Fabiola Espinoza Mendoza",
"Miguel Angel Sevilla Silva",
"Luis Italo Pequeño Ramirez",
"Evelyn Nathali Garcia Llantoy",
"Anthony Espinoza Perez",
"Xuxa Tiazinha Bosantes Guerra",
"Kiara Laura Huayta Laura",
"Myllenne Isabella Trigoso Santillan",
"Jeniffer Mellissa Romero Cardenas",
"Bryan Leonardo Quispe Almeyda",
"Brayan Smith Custodio Montesinos",
"Jhair Miguel Angel Matute Huamanciza",
"Carmen Rosa De La Torre Benel",
"Jocelyn Aracelli Arellano Puente",
"Alejandro Raul Ponce Poma",
"Diego Enrique Gonzaga Sampen",
"Juan Paolo Orue Gonzales",
"Edith Juana Vivian Fretel",
"Sadith Alithú Mejía Urquia",
"Rose Marie Chiquinta Cordova",
"Freddy Erick Romero Pasache",
"Yanira Leslie Romero Limpe",
"Valeria Viviana Casafranca Sanchez",
"Jazmin Adel Cumpen Cuya",
"Fiorella Jazmin Zarate Castro",
"Mirtha Maricielo Buiza Quispe",
"Dany Alvarez Mendoza",
"Robinson Manuel Vera Yupanqui",
"Mariella Alessandra Morales Palacios",
"Hanni Betty Nanchi Mayak",
"Joseline Michaell Salas Cornejo",
"Milagros Varinia Yzusqui Abarca",
"Marlene Joyce Romero Roca De Cisneros",
"Ana Lucia Moreno Lazarte",
"David Jesus Moreno Pittman",
"Cristopher Johnny Berru Serna",
"Rocio Patricia Diaz Vega",
"Tifani Yrene Amarillo Quispe",
"Jaime Nizama Carranza",
"Edwin Francisco Caceres Beteta",
"Kiara Grety Milagros Celestino Rios",
"Stefano Humberto Novoa Queirolo",
"Geraldine Karina Valverde Valverde",
"Dabney Danna Melo Perez",
"Fabiola Katia Yapu Pampamallco",
"Gianella Francesca Cuya Pacheco",
"Karina Juana Ferreyra Alejos",
"Maria Ines Baca Villanueva",
"Cynthia Stephany Sosa Licas",
"Joyce Alison Fernandez Gonzales",
"Alicia Gabriela Vasquez Angeles",
"Diego Alonso Osorio Yalico",
"Valeria Alexandra Gomero Guevara",
"Flavia Alexa Sambrano Canela",
"Maria Alexandra Orihuela Medina",
"Alexandra Melanie Pinzon Cora",
"Dayna Madelen Marcani Rosales",
"Amelia Emperatriz Gamarra Ramos",
"Ursula Andrea Peralta Carlos",
"Sarita Esther Bermeo Zamudio",
"Isabel Fabiola Condori Coaquira",
"Andrea Milagros Penadillo Escudero",
"Vanessa Vilca Challapa",
"Angelica Sofia Fatama Villegas",
"Lilian Del Rocio Tarrillo Cardenas",
"Alexandra Maria Sanchez Puruguay",
"Edson Andres Rios Cosser",
"Victor Yuseff Medina Vargas",
"Fiorella Dina Rosas Huanay",
"Ricardo Miguel Quispe Monge",
"Adrian Marcelo Hurtado Herrera",
"Janet Herlinda Mamani Minaya",
"Gloria Isabel Martinez Huaman",
"Brenda Ivonne Barreda Perez",
"Luz Maria Casas Castillejo",
"Mary Carmen Moreno Estrada",
"Junior Pedro Maldonado Parimango",
"Isabel Hernandez Goycochea",
"Daleska Thatiana Dominguez Quispe",
"Valeri Yordana Huamani Huamani",
"Carlo Franccesco Garcia Casabona",
"Betty Alarcon Villaseca",
"Maria Teresa Segura Ccerhuayo",
"Jose Rogelio Rengifo Espinal",
"Víctor Emilio Chirinos Santoyo",
"Gissela Alexandra Navarro Galicio",
"Oliver Gianfranco Panduro Ojanama",
"William Miguel Salazar De La Vega",
"Ulda Paola Maria Leon Mendoza De Tenocio",
"Enriquemarcial Pullo Ninanya",
"Arnold Christopher Rojas Gonzales",
"Estrella Almeyda Hinostroza",
"Eduardo Narciso Vidal Ibañez",
"Jehimmy Lorens Chumpitaz Pinto",
"Karla Tatiana Villano Paitan",
"Rosas Huayta Mendoza",
"Marco Raul Antonio Cuzcano Meza",
"Lisbeth Melanie Portilla Salazar",
"Cristian Carlos Ventura Angeles",
"Melyna Ivonne Bustamante Fuentes",
"Erick Pedro Espejo Lopez",
"Yesenia Raquel Lopez Ticlio",
"Karen Stefany Sonco Berceras",
"Gabriela Ariana Aguilar Montalban",
"Jorge Luis Infante Garcia",
"Francesca Adriana Carrillo Perfecto",
"Jesus Ysmael Yarleque Elejalde",
"Carmen Rosa Castillo Lizana",
"Thania Yamely Calisaya Flores",
"Giovani Alonso Alvarez Alcantara",
"Jeremy Fernando Gomez Reyna",
"Viviana Estefani Cruz Vilca",
"Claudia Karen Meza Ruiz",
"Saul Antonio Iparraguirre Melgarejo",
"Juan Pablo Alvites Pizango",
"Karen Cecilia Aguilar Salazar",
"Kaira Marely Bartra Huaman",
"Andrea Susana Merino Peralta",
"Pool Jean Pierre Sandoval Velasquez",
"Erick Aldo Gonzales Davalos",
"Junior Fernando Terrones Espinoza",
"Andres Diaz Robles",
"Jorge Luis Tavara Lopez",
"William Jesus Conde Nuñez",
"Gianella Mirtha Bravo Castillo",
"Carmen Rosa Yance Lliuyocc",
"Luis Armando Borja Becerra",
"Alex Jordan Aguilar Huamantalla",
"Danitza Marnit Arribasplata Bazan",
"Carlos Alberto Leonardo Huayhua",
"Eamon Aldair Sanoni Tello",
"Andersson Mijahel Salvatierra Quispe",
"Carol Guiannina Gutierrez Huarcaya",
"Milene Gabriela Garcia Ramirez",
"Diego Alonso Bejar Torres",
"Rodrigo Amador Bozzo Vega",
"Sandra Joely Llontop Fernandez",
"Aldhair Antonio Zamora Loayza",
"Victor Alfonso Lopez Falcon",
"Yamile Paola Geronimo Chavez",
"Kassandra Julia Adan Adan",
"Rosa Vanessa Hernandez Sanchez",
"Maria Fernanda Aquiño Vargas",
"Karlo Jose Jesus Silva Ferrel",
"Jorge Eduardo Campos Jaime",
"Xiomara Rocio Cardoso Saavedra",
"Adrian Renzo Bravo Pozo",
"Allison Nicole Carbonero Vargas",
"Eny Samanta Gonzales Paucarcaja",
"Catherine Rossie Francia Morales",
"Josue Alexander De La Torre Tamani",
"Victor Alessandro Cabrera Guerrero",
"Daniel Fernando Miguel Carranza Garcia",
"Cesar Manuel Gutierrez Herrera",
"Marycielo Quispe Ceron",
"Elizabeth Sthefany Maguiña Huanca",
"Ronny Junior Vega Cenepo",
"Ivan Marcos Portilla Zans",
"Nayeli Del Pilar Leon Silva",
"Stephanie Catherine Echevarria Babilon",
"Isis Yahaira Chava Abriles",
"Fabian Silva Ccoicca",
"Luis Gilberto Camacho Bancayan",
"Candy Leslie Sanchez Gallardo",
"Diana Torres Sayago",
"Milagros De Guadalupe Quispe Lopez",
"Samir Andre Nizama Zapata",
"Haydee Maria Martinez Delgado",
"Klissman Meyer Espinoza Huamani",
"Kiara Nayely Limahuaya Serrano",
"Antonieta Mercedes Huaman Mendoza",
"Karen Gabriela Lenzt Hostia",
"Frank Geroni Vizcarra Zegarra",
"Marlon Byron Marchand Salvador",
"Cristian Javier Inocente Hireña",
"Diana Carolina Figueroa Castañeda",
"Ariana Angelli Olivera Montalvan",
"Sandra Lorena Jacobe Ruiz",
"Pedro Claudio Sanchez Mayleva",
"Mariam De Los Angeles Neira Shapiama",
"Mildreth Fabiola Garcia Nazario",
"Jacqueline Tomasa Mercedes Cutipa Obando",
"Olga Ines De La Cruz Caycho",
"Gustavo Enrique Reynoso Quispe",
"Jose Geraldo Huillca Inga",
"Liliana Roncal Cordova",
"Raquel Diaz Tello",
"Priscylla Fatima Portilla Rincon",
"Sarita Concepcion Emperatriz Zuñiga Cordova",
"Lisbeth Janeth Fernandez Vergara",
"Gabriel Alfredo Martinez Ochoa",
"Lucas Poma Carrera",
"Kevin Castro Guerrero",
"Harold Fabbian Salazar Huamayalli",
"Debora Daniela Desiglioli Sihuacollo",
"Vanessa Lopez Paredes",
"Christian Dehin Rios Davila",
"Magaly Jhomira Contreras Mantilla",
"Wendy Pamela Celis Ernau",
"Olga Pilar Amaya Cornejo",
"Gloria Yocelin Velasquez Gomez",
"Rafaella Nicole Barrera Mansilla",
"Alfredo Enrique Marquezado Huaman",
"Leslie Marlene Vargas Cazal",
"Miguel Angel Eche Caceres",
"Felix Jesus Maco Romero",
"Julie Fiorella Ramirez Rivera",
"Sandra Rosmery Carrion Bravo",
"Linda Victoria Parra Perez",
"Jackelyn Lisbeth Paredes Tapayuri",
"Rut Noemi Arapa Mamani",
"Brizza Pierina Farfan Castro",
"Xiomara Maria Fernanda Arguedas Palacios",
"Vivian Almendra Gallegos Paz",
"Christian Hugo Arevalo Carrizales",
"Allison Beatriz Llaullipoma Ordoñez",
"Andre Fabian Giuseppe Guillen Mendoza",
"Nidia Marife Carrera Huaman",
"Javier Jesus Figueroa Zegarra",
"Cynthia Antuanet Ciurlizza Arias",
"Jesus Antonio Silva Chiroque",
"Eduardo De Jesus Torres Arias",
"Gianella Andrea Saenz Jimenez",
"Gustavo Gabriel Espinoza Rojas",
"Yanely Paola Sullon Perez",
"Ruben Eduardo Loayza Sullon",
"Sheyla Carolina Mendizabal Cardenas",
"Sofia Marcela Ramirez Isique",
"Jesus Enrique Condori Aguirre",
"Kevin Essar Rueda Soto",
"Pablo Alexander Velasquez Reyes",
"Erick Anthony Cafferata Billinghurst",
"Nayeli Maribel Yauri Raymi",
"Aldo Andres Vega Mercado",
"Jean Pierre Barboza Guillermo",
"Gianella Shandy Tito Vasquez",
"Jacquelin Nicol Bautista Quispe",
"Gardenia Flores Roque",
"Ethel Rosa Balcazar Zavala",
"Roque Martin Olivares Peña",
"Maria Laura Paraguay Perez",
"Maria Vicenta Carranza Albornoz",
"Maria Fernanda Nuñuvero Abt",
"Estefani Geraldine Fernandez Falla",
"Flor Nayda Rivera Zuñiga",
"Gustavo Adolfo Sosa Vergara",
"Sebastian Paolo Dextre Palma",
"Britney Karime Marla Ramos Arca",
"Maria Fernanda Nathaly Pasache Olascoaga",
"Hector Jesus Moreno Urrunaga",
"Brenda Nayelli Quispe Mondragon",
"Raitza Nicole Acosta Olortegui",
"Ricardo Dante Escobar Aristizabal",
"Keyko Janela Gomez Rodriguez",
"Ursula Maria Cancino Ugarte",
"Maria Esther Santos Porras",
"Jamilette Valentina Landeo Manco",
"Anyhela Consuelo Huaman Paulino",
"Ayrton Jose Cordova Velasquez",
"Lesly Melany Esperanza Capa Terry",
"Raul Manuel Supanta Rivera",
"Ixia Jamille Orellana Peruano",
"Fiorella Keila Gutierrez Caballero",
"Janet Del Pilar Cueva Zavaleta",
"Eduvi Karen Leon Barrios",
"Meryuri Analucia Antonio Ferre",
"Alejandro Miguel Hinojosa Gamarra",
"Betty Maria Aponte Llacccho",
"Maria Ysabel Vargas Velazco",
"Diego Stalyn Encalada Rojas",
"Stefany Marisol Carrion Fabian",
"Ruth Deassy Santibañez Castañeda",
"Maria Fernanda Trigoso Buitriagos",
"Sidney Giannina Mejia Garcia",
"Nedith Araceli Grimaldo Rivera",
"Jonathan Lino Alcantara Villa",
"Nathali Pilar Bron Paredes",
"Judith Magaly Jeri Herrera",
"Yosselin Fany Ilizarbe Cardoso",
"Gianni Santino Maceda Davila",
"Ricardo Jonathan Farromeque Pacheco",
"Daniel Esteban Reyes Facundo",
"Sofia Arias Bedoya",
"Karla Paola Zapata Vilchez",
"Marco Alexander Capulian Rondo",
"Eliana Bustamante Rodriguez",
"Antonio Valentino Chacón Aponte",
"Roberto Luis Rodriguez Acuña",
"Rita Stefanny Leon Mundaca",
"Ariana Lisbeth Aldazabal Gonzales",
"Edinson Aldair Soriano Rubina",
"Gloria Lisette Lopez Velasquez",
"Jose Gabriel Levano Salazar",
"Angelica Marina Cordova Reyes",
"Javier Aco Trucios",
"Shirley Ana Zegarra Vasquez",
"Greysi Francheska Stancovich Meza",
"Karen Sheyla Marquina Rojas",
"Marbelith Tunjar Navarrete",
"Juan Carlos Mendoza Rodriguez",
"Enrique Andre Chirinos Torre",
"Edinson Argenis Nieto Lopez",
"Nayelli Mariana Vaca Portella",
"Andres Arturo Sanchez Sparrow",
"Cindy Alfonzo Mendivil",
"Cynthia Picon Rebaza",
"Yessica Milagros Muñoz Zavaleta",
"Alessandra Alithu Cabos Davila",
"Luis Antonio Ricaldi Laguna",
"Jean Pierre Roberto Supo Moreno",
"Luis Fernando Salinas Corro",
"Angie Dayrem Ulloa Cotrina",
"Elder Randy Lujan Jimenez",
"Carlo Andre Hoyos Bernal",
"Valery Juleissy Vega Azurin",
"Lucia Flor Mendez Camones",
"Mayra Ibette Mamani Rojas",
"Maricielo Areche Jara",
"Darlin Miluska Marcos Mendoza",
"Marjory Luisa Cordova Palomino",
"Valeria Ines Diaz Herrera",
"Pilar Margot Padilla Salvador",
"Mitsy Andreina Salazar Levano",
"Mayra Alejandra Lopez Ubaldo",
"Manuel Alejandro Chavez Aburto",
"Kirria Altemira Olemar Abanto",
"Hayde Peralta Borda",
"Natali Del Rosario Ramos Cruz",
"Jose Nicolas Fernandez Davila Vega",
"Jorge Alberto Mora Ayvar",
"Wendy Jacqueline Vasquez Honorio",
"Gaby Zevallos Gallegos",
"Yosseline Isaura Gaspar Ricci",
"Jhampier Axel Espinoza Saavedra",
"Sergio Roberto Carrillo Garcia",
"Jaqueline Joana Inche Gonzales",
"Maria Fe Avendaño Mendizabal",
"Jesus Jose Morales Mercado",
"Katherine Paola Quispe Carbajal",
"Juan Victor Porongo Davila",
"Oscar Yorman Flores Leon",
"Karla Alejandra Muñoz Sotomayor",
"Jasmin Lhy Arenas Arias",
"Pamela Lyseth Lozano Gavino",
"Jeremy Bladimir Gonzales Dueñas",
"Gloria Madeleine Morales Moncada",
"Rosa Olenka Aparicio Grandes",
"Carlos Nikolai Serguei Perez Coronel",
"Lesly Siomara Maguiña Silva",
"Jorge Elias Jimenez Arroyo",
"Katherine Adriana Canturin Paccohuanca",
"Liliana Silvia Mezarina Fernandez",
"Valeria Shamira Suarez Huayllasco",
"Diego Paul Justino Paredes",
"Wilmer Eduardo Alvarez Villamizar",
"Melissa Hellen Cordova Sevillano",
"Thalia Juliet Grande Zea",
"Jorge Daniel Chunga Juarez",
"Valeria Victoria Vasquez Dazevedo",
"Yanet Isabel Pariona Caldas",
"Jorge Luis Manrique Chiroque",
"Noelia Victoria Ayala Noblecilla",
"Jhenifer Dayana Palomino Mayta",
"Lissette Johana Altamirano Silva",
"Valeria Alexandra Cisneros Manrique",
"Lourdes Maria Vega Solano",
"Gisella Gabriela Toledo Herrera",
"Alexander Francisco Vega Lazon",
"Maria Almendra Brigghitte Cuya Acuña",
"Shirley Patricia Escalante Tenorio",
"Jimena Mayta Ramos",
"Jiarella Flor Alexandra Cabrera Miranda",
"Elizabeth Lifoncio Santana",
"Diana Marie Rodriguez Rojas",
"Javier Palian Cordova",
"Nicoll Jasmin Salvador Quinchos",
"Jorman David Castañeda Calvo",
"Rosario Del Pilar Rojo Reto",
"Mercedes Chumbe Gutierrez",
"Milagros Teresa Carnero Johnston",
"Victoria Patricia Quispe Maticorena",
"Katherine Michelle Candela Barzola",
"Ruby Medina Garcia",
"Andrea Joanny Guerra Berrocal",
"Carla Sofia Poma Bernardo",
"Kriss Mirella Barraza Lescano",
"Maricielo Aguilar Trujillo",
"Katherine Paola Aparcana Castillo",
"Cesar Dumma Claudio Calle",
"Shirley Isela Vasquez Morales",
"Esthefany Mishel Mori Avalo",
"Danitza Eleana Arroyo Inti",
"Aracely Stephanie Bonifaz Miguel",
"Kevin Anderson Cherres Tavera",
"Esteban Daniel Huaman Menzala",
"Enzo Salvador Alva Llacsa",
"Patricia Estefany Huaman Garcia",
"Rosario Tereza Quispe Pezo",
"Geraldine Lizet Vargas Torres",
"Yessenia Ninoshka Gaviria Espiritu",
"Katherine Ingry Mayo Leon",
"Miguel Angel Macedo Chumpe",
"Ivet Evelin Almeida Fuentes",
"Angelo Joel Gutierrez Loarte",
"Nelly Isabel Balta Tello",
"Diego Alonso Zuta Cornejo",
"Melanny Xiomara Casavilca Jeronimo",
"Ana Silvia Choque Chara",
"Ruth Jackelin Rivera Mendoza",
"Mayra Cruz Alberca",
"Angelica Maria Garagatti Balvin",
"Grecia Geraldine Bringas Narvasta",
"Diego Alonso Herrera Fajardo",
"Luz Clarita Oliva Rojas",
"Carla Mariela Astorga Canela",
"Judit Alaiza Meza Cabrera",
"Carla Alejandra Fajardo Tirado",
"Sergio Enrique Cardenas Guardales",
"Leidy Dana Paredes Lecaros",
"Valeria Alessandra Meza Ballon",
"Alejandra Maribel Alarcon Huayhuameza",
"Katia Isabella Trigozo Lam",
"Nataly Patricia Asian Rojas",
"Kiara Nazareth Caytuero Soaña",
"Guadalupe Del Pilar Medina Huarcaya",
"Jerson Antonio Caja Urpeque",
"Cielo Nehussa Rojas Vecco",
"Valeria Del Rosario Villanueva Araujo",
"Piero Alejandro Miranda Martinez",
"Gian Pierre Chiriboga Chuquipul",
"Albert Julio Bazan Tineo",
"Rhommel Erwin Bautista Huamani",
"Claudia Cecilia Contreras Huatuco",
"Yamileth Kiara Patricio Garay",
"Carla Melisa Areche Duran",
"Luis Enrrique Hertz Gutierrez Leyva",
"Gabriel Marcelo Cerron Carrion",
"Claudia Carolina Perez Ugarte",
"Maribell Eileen Zelada Villarreal",
"Jevenin Juliza Chavez Perez",
"Michael Zelada De La Cruz",
"Denisse Esther Hinostroza Alipio",
"Erika Alvarez Guzman",
"Sandra Vanesa Mayo Lopez",
"Luis Alberto Huamán Eslava",
"Antony Omar Atahuaman Aquino",
"Sharon Brigeth Garcia Gadea",
"Roy Ellery Araucano Varas",
"Yessenia Marghiory Destefano Condor",
"Maria Cristina Del Pilar Suyo Pomalia",
"Maria Victoria Cardoza Coral",
"Raul Javier Leyva Salazar",

  ];

// Elementos de los premios para cada bloque
const premiosBloque1 = ['Medias'];
const premiosBloque2 = ['Tomatodo', 'Gorro'];
const premiosBloque3 = ['Polo Piqué', 'Hoodie'];

// Función para realizar el sorteo
function realizarSorteo(bloque) {
  let ganadores = [];
  let premios = [];
  let bloqueAnterior = [];

  // Mostrar el GIF de carga correspondiente
  document.getElementById(`gif-sorteo-bloque${bloque}`).classList.remove('hidden');

  // Determinamos los ganadores para cada bloque
  if (bloque === 1) {
    ganadores = sortearGanadores(participantes, 19);
    premios = premiosBloque1;
  } else if (bloque === 2) {
    bloqueAnterior = document.querySelectorAll('#ganadores-bloque1 .ganador');
    const ganadoresBloque1 = Array.from(bloqueAnterior).map(ganador => ganador.querySelector('p').textContent);
    ganadores = sortearGanadores(participantes.filter(p => !ganadoresBloque1.includes(p)), 21);
    premios = premiosBloque2;
  } else if (bloque === 3) {
    bloqueAnterior = [...document.querySelectorAll('#ganadores-bloque1 .ganador'), ...document.querySelectorAll('#ganadores-bloque2 .ganador')];
    const ganadoresBloques1Y2 = Array.from(bloqueAnterior).map(ganador => ganador.querySelector('p').textContent);
    ganadores = sortearGanadores(participantes.filter(p => !ganadoresBloques1Y2.includes(p)), 20);
    premios = premiosBloque3;
  }

  // Simulamos el tiempo de sorteo y luego mostramos los ganadores
  setTimeout(() => {
    // Ocultamos el GIF de carga correspondiente
    document.getElementById(`gif-sorteo-bloque${bloque}`).classList.add('hidden');
    mostrarGanadores(bloque, ganadores, premios);
  }, 3000); // Esperamos 3 segundos para mostrar los ganadores después del GIF
}

// Función para sortear ganadores
function sortearGanadores(participantes, cantidad) {
  let seleccionados = [];
  let participantesRestantes = [...participantes];

  for (let i = 0; i < cantidad; i++) {
    const indice = Math.floor(Math.random() * participantesRestantes.length);
    seleccionados.push(participantesRestantes[indice]);
    participantesRestantes.splice(indice, 1); // Eliminar del pool para evitar repetidos
  }
  return seleccionados;
}

// Función para mostrar los ganadores en pantalla
function mostrarGanadores(bloque, ganadores, premios) {
    const contenedor = document.getElementById(`ganadores-bloque${bloque}`);
    contenedor.innerHTML = ''; // Limpiar resultados previos
  
    ganadores.forEach((ganador) => {
      const divGanador = document.createElement('div');
      
      // Modificado: Cambiar 'col-md-4' a 'col-md-3' para 4 columnas
      divGanador.classList.add('col-md-3', 'ganador', 'd-flex', 'flex-column', 'align-items-center', 'text-center', 'p-3');
  
      const premioAleatorio = asignarPremioAleatorio(premios); // Asignar premio aleatorio
      const img = document.createElement('img');
      img.src = getImagenParaPremio(premioAleatorio); // Asignar imagen según el premio
      divGanador.appendChild(img);
  
      const nombre = document.createElement('p');
      nombre.textContent = ganador;
      divGanador.appendChild(nombre);
  
      contenedor.appendChild(divGanador);
  
      // Animación de aparición
      setTimeout(() => {
        divGanador.classList.add('aparecer');
      }, 100 * (ganadores.indexOf(ganador) + 1)); // Retardamos para que aparezcan con efectos
    });
  }

// Función para obtener un premio aleatorio para cada ganador
function asignarPremioAleatorio(premios) {
  const randomIndex = Math.floor(Math.random() * premios.length);
  return premios[randomIndex];
}

// Función para obtener la imagen referencial según el premio
function getImagenParaPremio(premio) {
  const imagenes = {
    'Medias': 'https://github.com/StalynJD/sorteoibk/blob/main/medias.png?raw=true',
    'Tomatodo': 'https://github.com/StalynJD/sorteoibk/blob/main/tomatodo.png?raw=true',
    'Gorro': 'https://github.com/StalynJD/sorteoibk/blob/main/gorro.png?raw=true',
    'Polo Piqué': 'https://github.com/StalynJD/sorteoibk/blob/main/polopique.png?raw=true',
    'Hoodie': 'https://github.com/StalynJD/sorteoibk/blob/main/hoodie.png?raw=true'
  };
  return imagenes[premio] || 'https://via.placeholder.com/120x120'; // Fallback a imagen por defecto si no se encuentra el premio
}


// Función para crear nieve en el fondo
const mainContainer = document.querySelector(".main-container");

const getRandomValue = (max, min = 1) => {
    return Math.floor(Math.random() * max) + min;
};

const createSnow = (density) => {
    for (let i = 0; i < density; i++) {
        const snowFlake = document.createElement("span");
        const horizontalPosition = `${getRandomValue(100)}%`;
        const fallDelay = `${getRandomValue(100)}s`;
        const fallDuration = `${getRandomValue(20, 5)}s`;
        const flakeSize = `${getRandomValue(7, 1)}px`;
        const flakeOpacity = Math.random().toFixed(2);

        snowFlake.classList.add("snow");
        snowFlake.style.opacity = flakeOpacity;
        snowFlake.style.width = flakeSize;
        snowFlake.style.height = flakeSize;
        snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
        snowFlake.style.right = horizontalPosition;

        mainContainer.appendChild(snowFlake);
    }
};

// Ajusta la densidad de nieve según el tamaño de la pantalla
createSnow(window.innerWidth > 1200 ? 1000 : 1000);

// Función para mostrar los ganadores en pantalla y habilitar la descarga
function mostrarGanadores(bloque, ganadores, premios) {
    const contenedor = document.getElementById(`ganadores-bloque${bloque}`);
    contenedor.innerHTML = ''; // Limpiar resultados previos
    const premiosAsignados = [];
  
    ganadores.forEach((ganador) => {
      const divGanador = document.createElement('div');
      divGanador.classList.add('col-md-3', 'ganador', 'd-flex', 'flex-column', 'align-items-center', 'text-center', 'p-3');
  
      // Asignar un premio aleatorio de los premios del bloque
      const premioAleatorio = asignarPremioAleatorio(premios); // Asignar premio aleatorio
      premiosAsignados.push(premioAleatorio); // Almacenar el premio asignado
  
      const img = document.createElement('img');
      img.src = getImagenParaPremio(premioAleatorio); // Asignar imagen según el premio
      divGanador.appendChild(img);
  
      const nombre = document.createElement('p');
      nombre.textContent = ganador;
      divGanador.appendChild(nombre);
      contenedor.appendChild(divGanador);
  
      // Animación de aparición
      setTimeout(() => {
        divGanador.classList.add('aparecer');
      }, 100 * (ganadores.indexOf(ganador) + 1)); // Retardamos para que aparezcan con efectos
    });
  
    // Habilitar el botón de descarga para el bloque correspondiente
    const downloadBtn = document.getElementById(`download-bloque${bloque}`);
    downloadBtn.classList.remove('hidden');
  
    // Almacenar los premios asignados en el contexto global para usarlos al descargar
    window.premiosAsignados = premiosAsignados; // Guardamos los premios para usarlos en la descarga
  }
  
  // Función para crear un archivo descargable con los ganadores
  function descargarGanadores(bloque) {
    let ganadores = [];
    let premios = [];
  
    if (bloque === 1) {
      ganadores = Array.from(document.querySelectorAll('#ganadores-bloque1 .ganador p')).map(p => p.textContent);
      premios = premiosBloque1;
    } else if (bloque === 2) {
      ganadores = Array.from(document.querySelectorAll('#ganadores-bloque2 .ganador p')).map(p => p.textContent);
      premios = premiosBloque2;
    } else if (bloque === 3) {
      ganadores = Array.from(document.querySelectorAll('#ganadores-bloque3 .ganador p')).map(p => p.textContent);
      premios = premiosBloque3;
    }
  
    // Usar los premios asignados desde la función mostrarGanadores
    if (window.premiosAsignados) {
      premios = window.premiosAsignados;
    }
  
    // Generar el contenido del archivo
    const contenido = generarArchivoTexto(ganadores, premios);
    
    // Crear un Blob con el contenido del archivo
    const blob = new Blob([contenido], { type: 'text/plain' });
  
    // Crear un enlace para la descarga
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `ganadores_bloque${bloque}.txt`; // Nombre del archivo descargable
    enlace.click();
  }
  
  // Función para generar el contenido del archivo de texto
  function generarArchivoTexto(ganadores, premios) {
    let texto = 'Lista de Ganadores:\n\n';
    ganadores.forEach((ganador, index) => {
      texto += `Premio: ${premios[index]}\n`;
      texto += `Ganador: ${ganador}\n\n`;
    });
    return texto;
  }
  
