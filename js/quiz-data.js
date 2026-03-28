const quizData = {
  sports: {
    title: "Sports",
    quizzes: [
      [
        { q: "Which country won the FIFA World Cup 2018?", options: ["Germany", "Brazil", "France", "Argentina"], correct: 2 },
        { q: "How many players are on a football team?", options: ["9", "10", "11", "12"], correct: 2 },
        { q: "What sport is known as the 'gentleman's game'?", options: ["Football", "Cricket", "Tennis", "Golf"], correct: 1 },
        { q: "Which player has won the most Ballon d'Or awards?", options: ["Ronaldo", "Messi", "Zidane", "Pele"], correct: 1 },
        { q: "In tennis, what is a score of zero called?", options: ["Null", "Nil", "Love", "Zero"], correct: 2 },
        { q: "How long is a marathon?", options: ["26.2 miles", "20 miles", "13.1 miles", "30 miles"], correct: 0 },
        { q: "Which Williams sister has won more Grand Slam titles?", options: ["Serena", "Venus", "Equal", "None"], correct: 0 },
        { q: "What color is the center of an archery target?", options: ["Red", "Gold", "Blue", "Black"], correct: 1 },
        { q: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Gymnastics"], correct: 1 },
        { q: "The Olympics are held every how many years?", options: ["2", "4", "6", "8"], correct: 1 }
      ],
      [
        { q: "Who is known as 'The Greatest' in boxing?", options: ["Mike Tyson", "Muhammad Ali", "Mayweather", "Marciano"], correct: 1 },
        { q: "Which country hosts the Wimbledon tennis tournament?", options: ["USA", "France", "UK", "Australia"], correct: 2 },
        { q: "How many points is a touchdown worth?", options: ["3", "5", "6", "7"], correct: 2 },
        { q: "In bowling, knocking down all pins on the first roll is?", options: ["Spare", "Strike", "Split", "Turkey"], correct: 1 },
        { q: "What is the maximum break in snooker?", options: ["147", "155", "100", "120"], correct: 0 },
        { q: "Which sport uses a shuttlecock?", options: ["Badminton", "Table Tennis", "Squash", "Tennis"], correct: 0 },
        { q: "Country associated with Taekwondo?", options: ["Japan", "China", "South Korea", "Thailand"], correct: 2 },
        { q: "How many holes are played in an average round of golf?", options: ["9", "18", "27", "36"], correct: 1 },
        { q: "Which driver has the most F1 World Championships?", options: ["Senna", "Hamilton", "Schumacher", "Both B and C"], correct: 3 },
        { q: "What is the national sport of Japan?", options: ["Judo", "Karate", "Sumo Wrestling", "Kendo"], correct: 2 }
      ],
      [
        { q: "Which baseball team won the most World Series?", options: ["Red Sox", "Dodgers", "Yankees", "Cubs"], correct: 2 },
        { q: "In ice hockey, how many players per team?", options: ["5", "6", "7", "8"], correct: 1 },
        { q: "Term for a zero score in cricket?", options: ["Duck", "Goose", "Swan", "Bird"], correct: 0 },
        { q: "Which country hosted the 2008 Summer Olympics?", options: ["UK", "Australia", "China", "Greece"], correct: 2 },
        { q: "Highest belt color in martial arts like karate?", options: ["Red", "Black", "Brown", "White"], correct: 1 },
        { q: "In basketball, how high is the hoop?", options: ["9 feet", "10 feet", "11 feet", "12 feet"], correct: 1 },
        { q: "Swimmer with the most Olympic gold medals?", options: ["Thorpe", "Spitz", "Phelps", "Lochte"], correct: 2 },
        { q: "Heaviest weight class in boxing?", options: ["Cruiserweight", "Heavyweight", "Super Heavyweight", "Light Heavyweight"], correct: 1 },
        { q: "Sport where teams compete for the Stanley Cup?", options: ["Football", "Baseball", "Ice Hockey", "Basketball"], correct: 2 },
        { q: "Equipment used to hit a hockey puck?", options: ["Bat", "Stick", "Club", "Racket"], correct: 1 }
      ],
      [
        { q: "First Olympic gymnast to score a perfect 10?", options: ["Nadia Comaneci", "Mary Lou Retton", "Simone Biles", "Olga Korbut"], correct: 0 },
        { q: "Type of race is the Tour de France?", options: ["Running", "Swimming", "Cycling", "Auto Racing"], correct: 2 },
        { q: "In rugby, points for a try?", options: ["3", "4", "5", "7"], correct: 2 },
        { q: "African country that won 1995 Rugby World Cup?", options: ["Kenya", "South Africa", "Nigeria", "Ghana"], correct: 1 },
        { q: "Men's 100m sprint world record holder?", options: ["Tyson Gay", "Usain Bolt", "Yohan Blake", "Justin Gatlin"], correct: 1 },
        { q: "Distance of an Olympic swimming pool?", options: ["25m", "50m", "100m", "200m"], correct: 1 },
        { q: "Sport featuring a 'peloton'?", options: ["Cycling", "Marathon", "Sailing", "Rowing"], correct: 0 },
        { q: "Lightest weight class in UFC?", options: ["Bantamweight", "Flyweight", "Strawweight", "Featherweight"], correct: 2 },
        { q: "In volleyball, players per team on the court?", options: ["5", "6", "7", "8"], correct: 1 },
        { q: "Country won the first ever FIFA World Cup in 1930?", options: ["Brazil", "Italy", "Uruguay", "Argentina"], correct: 2 }
      ]
    ]
  },
  maths: {
    title: "Mathematics",
    quizzes: [
      [
        { q: "What is 15 + 23?", options: ["35", "37", "38", "40"], correct: 2 },
        { q: "What is 8 * 7?", options: ["54", "56", "58", "60"], correct: 1 },
        { q: "What is the square root of 144?", options: ["10", "12", "14", "16"], correct: 1 },
        { q: "What is 100 / 4?", options: ["20", "25", "30", "35"], correct: 1 },
        { q: "What is 50 - 18?", options: ["30", "32", "34", "36"], correct: 1 },
        { q: "Calculate 12 * 12", options: ["124", "134", "144", "154"], correct: 2 },
        { q: "What is 3 squared?", options: ["6", "9", "12", "27"], correct: 1 },
        { q: "What is 10 cubed?", options: ["100", "1000", "10000", "100000"], correct: 1 },
        { q: "Solve 2x = 10 for x", options: ["3", "4", "5", "6"], correct: 2 },
        { q: "What is 20% of 100?", options: ["10", "20", "30", "40"], correct: 1 }
      ],
      [
        { q: "What is 18 + 35?", options: ["43", "53", "63", "73"], correct: 1 },
        { q: "What is 9 * 9?", options: ["71", "81", "91", "101"], correct: 1 },
        { q: "Square root of 81?", options: ["7", "8", "9", "10"], correct: 2 },
        { q: "Solve 4x = 20 for x", options: ["3", "4", "5", "6"], correct: 2 },
        { q: "What is 15 * 5?", options: ["65", "75", "85", "95"], correct: 1 },
        { q: "Value of Pi up to 2 decimals?", options: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
        { q: "What is 5! (5 factorial)?", options: ["60", "100", "120", "140"], correct: 2 },
        { q: "What is 1/2 as a percentage?", options: ["25%", "50%", "75%", "100%"], correct: 1 },
        { q: "What is 75 / 3?", options: ["20", "25", "30", "35"], correct: 1 },
        { q: "Calculate 11 * 11", options: ["111", "121", "131", "141"], correct: 1 }
      ],
      [
        { q: "What is 30 * 4?", options: ["100", "110", "120", "130"], correct: 2 },
        { q: "What is 100 - 45?", options: ["45", "50", "55", "60"], correct: 2 },
        { q: "Find x: x + 15 = 25", options: ["5", "10", "15", "20"], correct: 1 },
        { q: "What is the next prime after 7?", options: ["9", "10", "11", "13"], correct: 2 },
        { q: "What is 8 squared?", options: ["16", "32", "64", "128"], correct: 2 },
        { q: "What is 50% of 200?", options: ["50", "100", "150", "200"], correct: 1 },
        { q: "What is 3/4 as a decimal?", options: ["0.25", "0.5", "0.75", "1.0"], correct: 2 },
        { q: "Calculate 14 * 2", options: ["24", "26", "28", "30"], correct: 2 },
        { q: "Solve 10 / 2 + 5", options: ["10", "15", "20", "25"], correct: 0 },
        { q: "What is 0 * 1000?", options: ["0", "100", "1000", "Infinity"], correct: 0 }
      ],
      [
        { q: "What is 45 + 55?", options: ["90", "100", "110", "120"], correct: 1 },
        { q: "What is 6 * 8?", options: ["42", "46", "48", "52"], correct: 2 },
        { q: "Square root of 16?", options: ["2", "4", "6", "8"], correct: 1 },
        { q: "Solve 5x = 50 for x", options: ["5", "10", "15", "20"], correct: 1 },
        { q: "Find the perimeter of a 5x5 square", options: ["10", "20", "25", "30"], correct: 1 },
        { q: "Calculate 13 * 3", options: ["29", "39", "49", "59"], correct: 1 },
        { q: "What is 2 cubed?", options: ["4", "6", "8", "10"], correct: 2 },
        { q: "What is 10% of 500?", options: ["5", "50", "500", "5000"], correct: 1 },
        { q: "What is 100 / 10?", options: ["5", "10", "15", "20"], correct: 1 },
        { q: "Calculate 25 * 4", options: ["50", "75", "100", "125"], correct: 2 }
      ]
    ]
  },
  history: {
    title: "History",
    quizzes: [
      [
        { q: "Who was the first President of the USA?", options: ["Lincoln", "Washington", "Jefferson", "Adams"], correct: 1 },
        { q: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
        { q: "Which ancient civilization built the pyramids of Giza?", options: ["Romans", "Greeks", "Egyptians", "Mayans"], correct: 2 },
        { q: "Who discovered America in 1492?", options: ["Magellan", "Columbus", "Vespucci", "Cook"], correct: 1 },
        { q: "What was the name of the ship that brought the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Nina", "Pinta"], correct: 0 },
        { q: "Who was the British Prime Minister during most of WWII?", options: ["Chamberlain", "Churchill", "Attlee", "Eden"], correct: 1 },
        { q: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], correct: 1 },
        { q: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Persian", "Mongol"], correct: 1 },
        { q: "Who was the primary author of the US Declaration of Independence?", options: ["Washington", "Franklin", "Jefferson", "Hamilton"], correct: 2 },
        { q: "What wall was torn down in 1989?", options: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Western Wall"], correct: 1 }
      ],
      [
        { q: "Who painted the Sistine Chapel ceiling?", options: ["Da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 1 },
        { q: "Which country gifted the Statue of Liberty to the USA?", options: ["UK", "Spain", "France", "Italy"], correct: 2 },
        { q: "In what year did the Apollo 11 moon landing occur?", options: ["1967", "1968", "1969", "1970"], correct: 2 },
        { q: "Which US President issued the Emancipation Proclamation?", options: ["Washington", "Lincoln", "Grant", "Roosevelt"], correct: 1 },
        { q: "Who was the first woman to win a Nobel Prize?", options: ["Curie", "Nightingale", "Parks", "Earhart"], correct: 0 },
        { q: "The Magna Carta was signed in which country?", options: ["France", "Spain", "England", "Italy"], correct: 2 },
        { q: "Which famous conqueror never lost a battle?", options: ["Caesar", "Napoleon", "Alexander the Great", "Genghis Khan"], correct: 2 },
        { q: "Who was the last Tsar of Russia?", options: ["Nicholas II", "Peter the Great", "Ivan IV", "Alexander III"], correct: 0 },
        { q: "What year did World War I begin?", options: ["1912", "1914", "1916", "1918"], correct: 1 },
        { q: "Who was known as the Maid of Orleans?", options: ["Marie Antoinette", "Joan of Arc", "Catherine de Medici", "Eleanor of Aquitaine"], correct: 1 }
      ],
      [
        { q: "Which civilization built Machu Picchu?", options: ["Inca", "Maya", "Aztec", "Olmec"], correct: 0 },
        { q: "Who wrote 'The Communist Manifesto'?", options: ["Lenin", "Stalin", "Marx", "Trotsky"], correct: 2 },
        { q: "What was the capital of the Byzantine Empire?", options: ["Rome", "Athens", "Constantinople", "Jerusalem"], correct: 2 },
        { q: "Who was the longest-reigning British monarch before Elizabeth II?", options: ["Victoria", "George III", "Henry VIII", "Elizabeth I"], correct: 0 },
        { q: "In which year did the French Revolution begin?", options: ["1776", "1789", "1799", "1812"], correct: 1 },
        { q: "Which explorer first circumnavigated the globe?", options: ["Columbus", "Magellan", "Cook", "Drake"], correct: 1 },
        { q: "What ancient wonder was located in Alexandria?", options: ["Pyramid", "Hanging Gardens", "Lighthouse", "Colossus"], correct: 2 },
        { q: "Who was the 16th US President?", options: ["Washington", "Adams", "Lincoln", "Roosevelt"], correct: 2 },
        { q: "The Cold War was primarily between the USA and?", options: ["China", "Germany", "Soviet Union", "Japan"], correct: 2 },
        { q: "Which famous battle ended Napoleon's rule?", options: ["Trafalgar", "Waterloo", "Austerlitz", "Leipzig"], correct: 1 }
      ],
      [
        { q: "Who was the first man in space?", options: ["Armstrong", "Aldrin", "Gagarin", "Glenn"], correct: 2 },
        { q: "The Renaissance originated in which country?", options: ["France", "England", "Italy", "Spain"], correct: 2 },
        { q: "Which US President was assassinated in Dallas?", options: ["Lincoln", "Garfield", "McKinley", "Kennedy"], correct: 3 },
        { q: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Hawking"], correct: 1 },
        { q: "The ancient city of Troy is in which modern country?", options: ["Greece", "Turkey", "Italy", "Egypt"], correct: 1 },
        { q: "Who was the 'Iron Lady' of British politics?", options: ["May", "Thatcher", "Sturgeon", "Queen Elizabeth"], correct: 1 },
        { q: "What was the main currency of Rome?", options: ["Drachma", "Denarius", "Shekel", "Pound"], correct: 1 },
        { q: "Which explorer 'discovered' the Pacific Ocean?", options: ["Balboa", "Columbus", "Magellan", "Cortez"], correct: 0 },
        { q: "Who wrote the play 'Romeo and Juliet'?", options: ["Dickens", "Hemingway", "Shakespeare", "Austen"], correct: 2 },
        { q: "What empire was founded by Genghis Khan?", options: ["Roman", "Ottoman", "Mongol", "Persian"], correct: 2 }
      ]
    ]
  },
  tech: {
    title: "Technology",
    quizzes: [
      [
        { q: "What does CPU stand for?", options: ["Computer Processing Unit", "Central Processing Unit", "Control Processing Unit", "Core Processing Unit"], correct: 1 },
        { q: "Who founded Microsoft?", options: ["Jobs", "Gates", "Zuckerberg", "Musk"], correct: 1 },
        { q: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "Hyper Text Transmission Protocol", "Hyperlink Transfer Technology", "Hyperlink Text Transfer Protocol"], correct: 0 },
        { q: "Which programming language is known as the language of the web?", options: ["Python", "Java", "C++", "JavaScript"], correct: 3 },
        { q: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2 },
        { q: "What company owns Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: 2 },
        { q: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Real Access Memory"], correct: 0 },
        { q: "Who is the CEO of Tesla?", options: ["Gates", "Bezos", "Musk", "Zuckerberg"], correct: 2 },
        { q: "Which social media platform uses a bird logo?", options: ["Facebook", "Instagram", "Twitter", "Snapchat"], correct: 2 },
        { q: "What is the primary function of an OS?", options: ["Word processing", "Manage hardware/software", "Browse web", "Play games"], correct: 1 }
      ],
      [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup", "Hyper Tool Markup Language"], correct: 0 },
        { q: "Which device is used to route internet traffic?", options: ["Switch", "Router", "Modem", "Hub"], correct: 1 },
        { q: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Link", "Universal Reference Link"], correct: 0 },
        { q: "Which company created the Java language?", options: ["Microsoft", "Apple", "Sun Microsystems", "Oracle"], correct: 2 },
        { q: "What is Linux?", options: ["Browser", "Antivirus", "Operating System", "Programming Language"], correct: 2 },
        { q: "What does USB stand for?", options: ["Universal Serial Bus", "Universal System Bus", "Unified Serial Bus", "Unified System Bus"], correct: 0 },
        { q: "Who invented the World Wide Web?", options: ["Gates", "Jobs", "Berners-Lee", "Cerf"], correct: 2 },
        { q: "Which is not an Earth-orbiting satellite network?", options: ["GPS", "GLONASS", "Galileo", "Ethernet"], correct: 3 },
        { q: "What does SQL stand for?", options: ["Structured Question Language", "Structured Query Language", "Strong Question Language", "Strong Query Language"], correct: 1 },
        { q: "What company bought LinkedIn in 2016?", options: ["Google", "Facebook", "Microsoft", "Salesforce"], correct: 2 }
      ],
      [
        { q: "What does VPN stand for?", options: ["Video Private Network", "Virtual Private Network", "Visual Private Network", "Virtual Public Network"], correct: 1 },
        { q: "What is the term for malicious software?", options: ["Badware", "Malware", "Spyware", "Adware"], correct: 1 },
        { q: "Which storage uses lasers to read data?", options: ["Hard Drive", "SSD", "CD/DVD", "Flash Drive"], correct: 2 },
        { q: "What is Apple's voice assistant?", options: ["Alexa", "Cortana", "Siri", "Bixby"], correct: 2 },
        { q: "What does IP stand for?", options: ["Internet Protocol", "Internal Protocol", "Internet Process", "Internal Process"], correct: 0 },
        { q: "Which tag is used for the largest heading in HTML?", options: ["<heading>", "<h6>", "<head>", "<h1>"], correct: 3 },
        { q: "What company makes the Snapdragon processor?", options: ["Intel", "AMD", "Qualcomm", "Nvidia"], correct: 2 },
        { q: "Which protocol is used to send secure web pages?", options: ["HTTP", "HTTPS", "FTP", "SSH"], correct: 1 },
        { q: "What is the main brain of an AI system often called?", options: ["Algorithm", "Neural Network", "Database", "Processor"], correct: 1 },
        { q: "Which tech giant's original name was 'Cadabra'?", options: ["Google", "Amazon", "Microsoft", "Apple"], correct: 1 }
      ],
      [
        { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 0 },
        { q: "What is the most popular database model today?", options: ["Hierarchical", "Network", "Relational", "Object-Oriented"], correct: 2 },
        { q: "Which company developed the React library?", options: ["Google", "Facebook", "Microsoft", "Twitter"], correct: 1 },
        { q: "What unit measures processor speed?", options: ["Bytes", "Pixels", "Hertz", "Watts"], correct: 2 },
        { q: "Which symbol denotes an ID selector in CSS?", options: [".", "#", "*", "@"], correct: 1 },
        { q: "What was the first computer bug?", options: ["Spider", "Fly", "Moth", "Beetle"], correct: 2 },
        { q: "Which programming language uses indentation to block code?", options: ["Java", "C++", "JavaScript", "Python"], correct: 3 },
        { q: "What is an SSD?", options: ["Super Speed Drive", "Solid State Drive", "System Storage Device", "Solid Storage Drive"], correct: 1 },
        { q: "What company acquired YouTube in 2006?", options: ["Microsoft", "Yahoo", "Google", "Facebook"], correct: 2 },
        { q: "What does GUI stand for?", options: ["Graphical User Interface", "General User Interface", "Global User Interface", "Graphic User Illusion"], correct: 0 }
      ]
    ]
  },
  biolo: {
    title: "Biology",
    quizzes: [
      [
        { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], correct: 2 },
        { q: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
        { q: "What is the genetic material in human cells?", options: ["RNA", "DNA", "Protein", "Lipid"], correct: 1 },
        { q: "How many bones are in the adult human body?", options: ["200", "206", "212", "218"], correct: 1 },
        { q: "Which organ pumps blood throughout the body?", options: ["Brain", "Lungs", "Heart", "Liver"], correct: 2 },
        { q: "What is the largest organ of the human body?", options: ["Skin", "Liver", "Brain", "Heart"], correct: 0 },
        { q: "What pigment gives leaves their green color?", options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"], correct: 1 },
        { q: "What type of animal is a frog?", options: ["Reptile", "Amphibian", "Mammal", "Bird"], correct: 1 },
        { q: "What system protects the body from disease?", options: ["Nervous", "Digestive", "Immune", "Respiratory"], correct: 2 },
        { q: "Which blood cells carry oxygen?", options: ["White", "Red", "Platelets", "Plasma"], correct: 1 }
      ],
      [
        { q: "What part of the plant absorbs water and nutrients?", options: ["Stem", "Leaf", "Flower", "Root"], correct: 3 },
        { q: "What is the process of a caterpillar turning into a butterfly?", options: ["Evolution", "Metamorphosis", "Mutation", "Adaptation"], correct: 1 },
        { q: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], correct: 2 },
        { q: "What is the longest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"], correct: 0 },
        { q: "Animals that eat both plants and meat are called?", options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"], correct: 2 },
        { q: "What is the fluid part of blood called?", options: ["Plasma", "Serum", "Hemoglobin", "Lymph"], correct: 0 },
        { q: "Which structure connects muscle to bone?", options: ["Ligament", "Cartilage", "Tendon", "Joint"], correct: 2 },
        { q: "What part of the eye dictates its color?", options: ["Pupil", "Cornea", "Retina", "Iris"], correct: 3 },
        { q: "Which vitamin is synthesized by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3 },
        { q: "What is the basic unit of life?", options: ["Tissue", "Organ", "Cell", "Molecule"], correct: 2 }
      ],
      [
        { q: "What is the study of heredity called?", options: ["Anatomy", "Genetics", "Ecology", "Botany"], correct: 1 },
        { q: "Which shape best describes a DNA molecule?", options: ["Single Strand", "Double Helix", "Triple Helix", "Circle"], correct: 1 },
        { q: "How many chromosomes are in a normal human cell?", options: ["23", "46", "22", "44"], correct: 1 },
        { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: 1 },
        { q: "What type of blood type is considered the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
        { q: "What process do bacteria use to reproduce?", options: ["Meiosis", "Binary Fission", "Budding", "Conjugation"], correct: 1 },
        { q: "Which organ filters blood to produce urine?", options: ["Liver", "Pancreas", "Kidney", "Bladder"], correct: 2 },
        { q: "Which animal is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1 },
        { q: "What kingdom do mushrooms belong to?", options: ["Plantae", "Animalia", "Fungi", "Protista"], correct: 2 },
        { q: "What is the term for cold-blooded animals?", options: ["Endothermic", "Exothermic", "Ectothermic", "Isothermic"], correct: 2 }
      ],
      [
        { q: "What carries nerve impulses towards the cell body?", options: ["Axon", "Dendrite", "Synapse", "Myelin"], correct: 1 },
        { q: "Which layer of the skin is the outermost?", options: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"], correct: 1 },
        { q: "What part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], correct: 1 },
        { q: "What enzyme breaks down starch?", options: ["Pepsin", "Lipase", "Amylase", "Trypsin"], correct: 2 },
        { q: "Which type of joint is the knee?", options: ["Ball and Socket", "Hinge", "Pivot", "Saddle"], correct: 1 },
        { q: "What is the name for the windpipe?", options: ["Esophagus", "Pharynx", "Trachea", "Larynx"], correct: 2 },
        { q: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correct: 1 },
        { q: "What is the male part of a flower called?", options: ["Pistil", "Stamen", "Petal", "Sepal"], correct: 1 },
        { q: "What is the normal resting heart rate for adults?", options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"], correct: 1 },
        { q: "What pathogen causes the common cold?", options: ["Bacterium", "Fungus", "Virus", "Parasite"], correct: 2 }
      ]
    ]
  },
  movies: {
    title: "Movies",
    quizzes: [
      [
        { q: "Who directed 'Avatar'?", options: ["Spielberg", "Cameron", "Nolan", "Scorsese"], correct: 1 },
        { q: "Which movie features the quote 'I am your father'?", options: ["Star Trek", "Star Wars", "Lord of the Rings", "Harry Potter"], correct: 1 },
        { q: "Who played Jack Dawson in 'Titanic'?", options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"], correct: 2 },
        { q: "What is the name of the hobbit played by Elijah Wood?", options: ["Sam", "Merry", "Pippin", "Frodo"], correct: 3 },
        { q: "Which actor plays Iron Man?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2 },
        { q: "What was the first feature-length animated movie released?", options: ["Pinocchio", "Snow White", "Cinderella", "Dumbo"], correct: 1 },
        { q: "In which city is 'La La Land' set?", options: ["New York", "Chicago", "Los Angeles", "Las Vegas"], correct: 2 },
        { q: "Who directed 'Pulp Fiction'?", options: ["Tarantino", "Scorsese", "Coppola", "Fincher"], correct: 0 },
        { q: "What movie universe contains Batman?", options: ["MCU", "DC", "Dark Horse", "Image"], correct: 1 },
        { q: "Which movie is about a theme park with dinosaurs?", options: ["King Kong", "Jurassic Park", "Godzilla", "Tremors"], correct: 1 }
      ],
      [
        { q: "Who won Best Actor for 'The Revenant'?", options: ["DiCaprio", "Hardy", "Pitt", "Fassbender"], correct: 0 },
        { q: "What is the highest-grossing film of all time (as of 2021)?", options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars"], correct: 2 },
        { q: "Which movie features a Delorean time machine?", options: ["Terminator", "Back to the Future", "Blade Runner", "Matrix"], correct: 1 },
        { q: "Who plays Wolverine?", options: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Ryan Reynolds"], correct: 0 },
        { q: "What is the name of the magical school in Harry Potter?", options: ["Ilvermorny", "Beauxbatons", "Durmstrang", "Hogwarts"], correct: 3 },
        { q: "Which Disney princess has ice powers?", options: ["Ariel", "Belle", "Elsa", "Jasmine"], correct: 2 },
        { q: "Who directed 'E.T.'?", options: ["Lucas", "Spielberg", "Zemeckis", "Cameron"], correct: 1 },
        { q: "What character says 'I'll be back'?", options: ["Rambo", "Rocky", "Terminator", "John McClane"], correct: 2 },
        { q: "Which movie won Best Picture in 1994?", options: ["Pulp Fiction", "Shawshank Redemption", "Forrest Gump", "Four Weddings"], correct: 2 },
        { q: "Who played the Joker in 'The Dark Knight'?", options: ["Nicholson", "Leto", "Phoenix", "Ledger"], correct: 3 }
      ],
      [
        { q: "What color pill does Neo take in 'The Matrix'?", options: ["Red", "Blue", "Green", "Yellow"], correct: 0 },
        { q: "Who voiced Woody in 'Toy Story'?", options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "Robin Williams"], correct: 1 },
        { q: "Which movie features the song 'My Heart Will Go On'?", options: ["Bodyguard", "Armageddon", "Titanic", "Ghost"], correct: 2 },
        { q: "What is the name of the lion in 'The Lion King'?", options: ["Mufasa", "Scar", "Simba", "Both A and C"], correct: 3 },
        { q: "Who plays Captain Jack Sparrow?", options: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Jude Law"], correct: 1 },
        { q: "In 'Finding Nemo', what kind of fish is Nemo?", options: ["Clownfish", "Blue Tang", "Angelfish", "Pufferfish"], correct: 0 },
        { q: "Which director is famous for cameo appearances in his films?", options: ["Spielberg", "Hitchcock", "Scorsese", "Kubrick"], correct: 1 },
        { q: "What is the name of the fictional African country in 'Black Panther'?", options: ["Zamunda", "Wakanda", "Genovia", "Latveria"], correct: 1 },
        { q: "Who played Forest Gump?", options: ["Tom Cruise", "Tom Hanks", "Robin Williams", "Bill Murray"], correct: 1 },
        { q: "Which movie features an alien bursting from a chest?", options: ["Predator", "Alien", "The Thing", "E.T."], correct: 1 }
      ],
      [
        { q: "Who directed 'The Godfather'?", options: ["Francis Ford Coppola", "Martin Scorsese", "Sergio Leone", "Brian De Palma"], correct: 0 },
        { q: "What is the real name of Batman?", options: ["Clark Kent", "Peter Parker", "Bruce Wayne", "Tony Stark"], correct: 2 },
        { q: "Who played the lead role in 'Gladiator'?", options: ["Russell Crowe", "Mel Gibson", "Joaquin Phoenix", "Tom Hardy"], correct: 0 },
        { q: "Which movie features the quote 'Here's looking at you, kid'?", options: ["Gone with the wind", "Casablanca", "Citizen Kane", "Maltese Falcon"], correct: 1 },
        { q: "What animated movie features a rat that can cook?", options: ["Up", "Ratatouille", "Wall-E", "Brave"], correct: 1 },
        { q: "Who plays Wonder Woman in the DCEU?", options: ["Gal Gadot", "Margot Robbie", "Scarlett Johansson", "Brie Larson"], correct: 0 },
        { q: "What language are the 'Minions' speaking?", options: ["Spanish", "French", "Minionese", "Italian"], correct: 2 },
        { q: "Who directed 'Jurassic Park'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], correct: 1 },
        { q: "What is the name of the wizard who mentors Harry Potter?", options: ["Gandalf", "Saruman", "Dumbledore", "Snape"], correct: 2 },
        { q: "Which movie won the first Academy Award for Best Picture?", options: ["Sunrise", "Wings", "The Jazz Singer", "Metropolis"], correct: 1 }
      ]
    ]
  }
};
