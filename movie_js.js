
  
document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOVIE DATABASE ================= */

  /* ================= Trending Movies oF this Week ================= */
  const MOVIES = {

    // ✅ Raja Saab
    "rajasaab": {
      title: "The Raja Saab",
      meta: "2026 • Telgu • Action • Horror / Comedy",
      heroImg: "Movie Database/Raja Saab cast and crew/Rajasaab posters.png",
      overview: `After the Kandahar hijacking and rising cross-border terror, Indian intelligence starts a covert mission in Pakistan. 
      IB directo Ajay Sanyal sends agent "Hamza Ali Mazari" into Lyari, Karachi, where gang rivalries and local politics shape daily life. When he earns the trust of Rehman Dakait and his gang, he quietly passes information back to India. The deeper he goes, the more his mission is tested by violence, power, and personal connections.`,
      cast: [
        { name: "Prabhas", role: "Rajasaab", img: "Movie Database/Raja Saab cast and crew/Prabhas.png" },
        { name: "Sanjay Dutt", role: "Kanakraju", img: "Movie Database/Raja Saab cast and crew/sanjay datt.png" },
        { name: "Malavika Mohanan", role: "Bhairavi", img: "Movie Database/Raja Saab cast and crew/malavika_m.png" },
        { name: "Nidhhi Agerwal", role: "Meera", img: "Movie Database/Raja Saab cast and crew/NIdhi_agrawal.png" },
        { name: "Riddhi Kumar", role: "Priya", img: "Movie Database/Raja Saab cast and crew/Riddhi kumar.png" }
      ],
      crew: [
        { name: "Maruti", role: "Director", img: "Movie Database/Raja Saab cast and crew/maruti.png" }
      ]
    },


    
   // ✅ Daredevil
     "daredevil": {
      title: "Daredevil: Born Again",
      meta: "English  • Superhero / Crime / Blood & Gore / Action",
      heroImg: "Movie Database/Daredevil cast and crew/daredevil-born Again poster.png",
      overview: `Daredevil: Born Again begins several years after the events of Daredevil (2015–2018). Matt Murdock, a blind lawyer with heightened abilities, is fighting for justice through his bustling law firm, while former mob boss Wilson Fisk pursues his own political endeavors in New York. When their past identities begin to emerge, both men find themselves on an inevitable collision course.`,
      cast: [
        { name: "Charlie Cox", role: "Matt Murdock / Daredevil", img: "Movie Database/Daredevil cast and crew/Charlie Cox.png" },
        { name: "Vincent D'Onofrio", role: "Wilson Fisk", img: "Movie Database/Daredevil cast and crew/Vincent D'Onofrio.png" },
        { name: "Margarita Levieva", role: "Heather Glenn", img: "Movie Database/Daredevil cast and crew/Margarita Levieva.png" },
        { name: "Deborah Ann Woll", role: "Karen Page", img: "Movie Database/Daredevil cast and crew/Deborah Ann Woll.png" },
        { name: "Elden Henson", role: "Franklin 'Foggy' Nelson", img: "Movie Database/Daredevil cast and crew/Elden Henson.png" }
      ],
      crew: [
        { name: "Justin Benson", role: "Director", img: "Movie Database/Daredevil cast and crew/Justin Benson.png" },
        { name: "Aaron Moorhead", role: "Director", img: "Movie Database/Daredevil cast and crew/Aaron Moorhead.png" },
        { name: "Kevin Feige", role: "Producer", img: "Movie Database/Daredevil cast and crew/Kevin Feige.png" }
      ]
    },


   // ✅  Dhurandhar
  "dhurandhar": {
    title: "Dhurandhar",
    meta: "2025 • Hindi • Action / Thriller",
    heroImg: "Movie Database/Dhurandhar cast and crew/Dhurandhar poster.png",
    overview: `After the Kandahar hijacking and rising cross-border terror, Indian intelligence starts a covert mission in Pakistan. IB director Ajay Sanyal sends agent "Hamza Ali Mazari" into Lyari, Karachi, where gang rivalries and local politics shape daily life. When he earns the trust of Rehman Dakait and his gang, he quietly passes information back to India. The deeper he goes, the more his mission is tested by violence, power, and personal connections.`,
    cast: [
      { name: "Ranveer Singh", role: "Hamza Ali Mazari", img: "Movie Database/Dhurandhar cast and crew/Ranveer Singh (1).png" },
      { name: "Akshay Khanna", role: "Rahman Dakait", img: "Movie Database/Dhurandhar cast and crew/Akshaye Khanna.png" },
      { name: "R. Madhavan", role: "Ajay Sanyal", img: "Movie Database/Dhurandhar cast and crew/R. Madhavan.png" },
      { name: "Sanjay Dutt", role: "SP Choudhary Aslam", img: "Movie Database/Dhurandhar cast and crew/sanjay datt.png" },
      { name: "Arjun Rampal", role: "Major Iqbal", img: "Movie Database/Dhurandhar cast and crew/Arjun Rampal.png" }
        
    ],
    crew: [
      { name: "Aditya Dhar", role: "Director, Writer", img: "Movie Database/Dhurandhar cast and crew/Aditya Dhar.png" }
    ]
  },

  // ✅  Border 2
  "border2": {
    title: "Border 2",
    meta: "2025 • Hindi • Action / Drama / War",
    heroImg: "Movie Database/Border 2 cast and crew/border-2 Poster....jpg",
    overview: `Border 2 focuses on untold stories and joint operations of the Indian Army, Air Force, and Navy during the 1971 Indo-Pak War. It highlights the bravery, sacrifice, and patriotism of Indian soldiers as they face overwhelming challenges.`,
    cast: [
      { name: "Sunny deol", role: "lt Con Fateh Singh Karel", img: "Movie Database/Border 2 cast and crew/sunny-deol.jpg" },
      { name: "Ahaan Shetty", role: "Lt. Cdr. Mahendra S. Rawat", img: "Movie Database/Border 2 cast and crew/ahaan shetty.jpg" },
      { name: "Varun Dhawan", role: "Major Hoshiar Singh Dahiya", img: "Movie Database/Border 2 cast and crew/Varun.jpg" },
      { name: "Diljith-Dosanjh", role: "Fg. Offr. Nirmal Jit Singh Sekhon", img: "Movie Database/Border 2 cast and crew/Diljit-Dosanjh.jpg" },
      { name: "mona singh", role: "Fateh's wife", img: "Movie Database/Border 2 cast and crew/mona singh.jpg" },
      { name: "Anya Singh", role: "Sudha Rawat", img: "Movie Database/Border 2 cast and crew/anya singh.jpg" },
      { name: "Sonam-bajwa", role: "Manjit Sekhon", img: "Movie Database/Border 2 cast and crew/sonam-bajwa.jpg" },
      { name: "paramvir singh cheema", role: "Sub. Nishan Singh", img: "Movie Database/Border 2 cast and crew/paramvir singh cheema.jpg" }
    ],
    crew: [
      { name: "Anurag Singh", role: "Director", img: "Movie Database/Border 2 cast and crew/anurag singh.png" }
    ]
  },

  // ✅  Mardaani 3
  "mardaani3": {
    title: "Mardaani 3",
    meta: "2024 • Hindi • Action / Crime / Thriller",
    heroImg: "Movie Database/mardaani 3 cast and crew/Mardaani3 Poster.png",
    overview: 'Mardaani 3 follows ACP and NIA officer Shivani Shivaji Roy as she probes a child trafficking and beggar mafia. The case leads her to a powerful female antagonist, Amma, who controls the network. As Shivani uncovers the scale of the crime and the lives affected, she races against time to dismantle the operation and rescue the abducted girls.',
    cast: [
      { name: "Rani Mukerji", role: "ACP Shivani Shivaji Roy", img: "Movie Database/mardaani 3 cast and crew/Rani Mukharji.png" },
      { name: "Janki Bodiwala", role: "Actor", img: "Movie Database/mardaani 3 cast and crew/Janki Bodiwala.png" },
      { name: "Jisshu Sengupta", role: "Dr. Bikram Roy", img: "Movie Database/mardaani 3 cast and crew/Jisshu Sengupta.png" },
      { name: "Mallika Prasad", role: "Assma", img: "Movie Database/mardaani 3 cast and crew/Mallika Prasad.png" },
    ],
  crew: [
    { name: "Abhiraj Minawala", role: "Director", img: "Movie Database/mardaani 3 cast and crew/Abhiraj MInawala.png" },
  ]
  },

/* ================= NETFLIX MOVIES  ================= */

  // ✅ Vadh 
  "Vadh": {
    title: "Vadh",
    meta: "2022 • Hindi • Thriller / Drama", 
    heroImg: "Movie Database/vadh cast and crew/Vadh Poster.png",
    overview: 'Vadh revolves around the lives of Shambhu and Manju, an elderly couple burdened with debts. Their lives take a dramatic turn when Shambhu is pushed to commit a murder while acting out of desperation.',
    cast: [
      { name: "Sanjay Mishra", role: "Sambhunath Mishra", img: "Movie Database/vadh cast and crew/Sanjay Mishra.png" },
      { name: "Neena Gupta", role: "Manju Mishra", img: "Movie Database/vadh cast and crew/Neena Gupta.png"},
      { name: "Saurab Sachdeva", role: "Prajapati Pandey", img: "Movie Database/vadh cast and crew/Saurabh Sachdeva.png"},
      { name: "Manav Vij", role: "Shakti Singh", img: "Movie Database/vadh cast and crew/Manav Vij.png"},
    ],
    crew: [
      { name: "Rajeev Barnwal", role: "Director", img: "Movie Database/vadh cast and crew/Rajiv Barnwal.png" },
      { name: "Jaspal Singh Sandhu", role: "Writer", img: "Movie Database/vadh cast and crew/Jaspal Singh.png"},
      { name: "Luv Ranjan", role: "Producer", img: "Movie Database/vadh cast and crew/Luv Ranjan.png"},
    ]
},

 // ✅ Run Away
 "Run Away": {
  title: "Run Away",
  meta: "2023 • Hindi • Thriller / Drama",
  heroImg: "Movie Database/Run Away cast and crew/Run-Away Poster.jpg",
  overview:  'Simon Greene is a father desperate to find his runaway daughter, Paige, who is struggling with addiction. His search turns dangerous when he is accused of murdering her abusive boyfriend. To prove his innocence and save his child, Simon must discover dark family secrets and face a mysterious cult before it is too late.',
  cast: [
    { name: "James Nesbitt", role: "Simon", img: "Movie Database/Run Away cast and crew/James Nesbitt.png" },
    { name: "Minnie Driver", role: "Ingrid greenie", img: "Movie Database/Run Away cast and crew/Minnie Driver.png" },
    { name: "Ellie de Lange", role: "Paige", img: "Movie Database/Run Away cast and crew/Ellie de Lange.png" },
    { name: "Alfred Enoch", role: "Isaac Fagbenle", img: "Movie Database/Run Away cast and crew/Alfred Enoch.png" },
  ],
  crew: [
    { name: "Danny Brocklehurst", role: "Director", img: "Movie Database/Run Away cast and crew/Danny Brocklehurst.png" },
    ]
},

  // ✅ My Hero Academia Vigilntes
  "My Hero Academia Vigilantes": {
    title: "My Hero Academia Vigilantes",
    meta: "2024 • Japanese • Action / Superhero / Anime",
    heroImg: "Movie Database/My hero Academia Vigilantes cast and crew/My Hero Academia Poster.jpg",
    overview:"Koichi Haimawari, a disillusioned college student with a weak Quirk, finds his stagnant life upended when he's rescued by the enigmatic vigilante, Knuckleduster. Thrust into the world of unsanctioned heroism alongside the lively Pop☆Step, he's given a second chance to pursue his abandoned dreams. Together, they navigate the blurred lines of justice, operating outside the established hero system, and redefining what it means to protect the city.",
    cast: [
      { name: "Pop☆Step", role: "Energetic Sidekick", img: "Movie Database/My hero Academia Vigilantes cast and crew/Koichi Haimawari.webp" },
    ],
    crew: [
      { name: "Hideyuki Furuhashi", role: "Writer", img: "Movie Database/My hero Academia Vigilantes cast and crew/Hideyuki Furuhashi.png" },
    ]
  },

    // ✅ AS You Stoood By
    "As You Stoood By": {
      title: "As You Stoood By",
      meta: "2024 • Hindi • Drama / Romance",
      heroImg: "Movie Database/As You stood By cast and Crew/As_You_Stood_By- Poster.jpg",
      overview:"Driven by shared trauma and desperation to escape brutal realities, two female friends, Eun-su and Hui-su, plot the murder of Hui-su's violently abusive husband, Jin-pyo. Their shocking decision to kill Jin-pyo sets off a chain of unexpected events and morally compromising consequences as they try to cover up the crime.",
      cast: [
        { name: "Lee Yoo-me", role: "Jo hui-su", img: "movie database/As you stood by Cast and Crew/Lee Yoo-mi.png"},
        { name: "Jang Seung-jo", role: "Noh jin-pyo", img: "Movie Database/As You stood By cast and Crew/Jang Seung-jo.png"},
        { name: "Jeon So-nee", role: "jo Eun-so", img: "Movie Database/As You stood By cast and Crew/Jeon So-nee.png"}
      ],
      crew: [
        { name: "Lee Jeong-lim", role: "Director,Writer,Showrunner", img: "Movie Database/As You stood By cast and Crew/Lee Jeong-lim.png"}
      ]
    },

    // ✅ Red Notice
   "Red Notice": {
    title: "Red Notice",
    meta: "2025 •English • Fantsey • Adventure / Thriller",
    heroImg: "Movie Database/Red Notice/Red Notice Poster.jpg",
    overview: `FBI agent John Hartley is tracking master art thief Nolan Booth. However, when another clever criminal, Sarah Black, appears, Hartley has to join forces with Booth to catch her. The three then get caught in a global chase for three rare golden eggs, leading to heists and betrayals across many countries.`,
    cast: [
      { name: "Dwayne Johnson", role: "Jhon Hartley", img: "Movie Database/Red Notice/Dwayne Johnson1.jpg"},
      { name: "Ryan Reynolds", role: "Nolan Booth", img: "Movie Database/Red Notice/Ryan Reynolds.jpg"},
      { name: "Gal Gadot", role: "Sarah Black / The Bishop", img: "Movie Database/Red Notice/Gal Gadot.jpg"},
      { name: "Chris Diamantopoulos", role: "sotto Voce", img: "Movie Database/Red Notice/Chris Diamantopoulos.jpg"},
      { name: "Ritu Arya", role: "Inspector Urvashi Das", img: "Movie Database/Red Notice/Ritu_Arya (1).jpg"}
        
    ],
    crew: [
      { name: "Rawson Marshall Thurber", role: "Director, Producer, Writer", img: "Movie Database/Red Notice/Rawson Marshall Thurber.jpg"},
       { name: "Dwayne Johnson.jpg", role: "Producer", img: "Movie Database/Red Notice/Dwayne Johnson1.jpg"}

    ]
  },

  /* ================= HOTSTAR MOVIES ================= */

    // ✅ The Beauty
    "The Beauty": {
      title: "The Beauty",
      meta: "Crime • satire • horror • Body Horror",
      heroImg: "",
      overview:"In a world where a virus grants physical perfection at a lethal cost, two FBI agents investigate a series of gruesome deaths. When they track the origins of The Beauty they discover that the transformation carries a terrifying physical toll. The partners must race to expose a corporate conspiracy before the epidemic consumes society.",
      cast: [
        { name: "Evan Peters", role: "Cooper Madsen", img: "Movie Database/The Beauty Cast and Crew/Evan Peters.png"},
        { name: "Rebecca Hall", role: "Jordan Bennett", img: "Movie Database/The Beauty Cast and Crew/Rebecca Hall.png"},
        { name: "Bella Hadid", role: "Ruby Rossdale", img: "Movie Database/The Beauty Cast and Crew/Bella Hadid.png"},
        { name: "Anthony Ramos", role: "The Assassin", img: "Movie Database/The Beauty Cast and Crew/Anthony Ramos.png"},
      ],
      crew: [
        { name: "Rayan Murphy", role: "Showrunner", img: "Movie Database/The Beauty Cast and Crew/Rayan Murphy.png"},
      ]
    },

    // ✅ The Paper
    "The Paper": {
      title: "The Paper",
      meta: "2024 • Hindi • Drama / Thriller",
      heroImg: "Movie Database/The Paper Cast and Crew/The Paper poster.jpg",
      overview:"A documentary crew that once filmed a paper company now focuses on a failing historic newspaper in the Midwest. A new publisher, Ned Sampson, tries to bring the newspaper back to life with the help of a mix of new reporters and old employees, including an accountant from the past, Oscar Martinez.",
      cast: [
        { name: "Domnhall Gleeson", role: "Ned Sampson", img: "Movie Database/The Paper Cast and Crew/Domnhall Gleeson.png"},
        { name: "Sabrina Impacciatore", role: "Esmeralda Grand", img: "Movie Database/The Paper Cast and Crew/Sabrina Impacciatore.png"},
        { name: "Chelsea Frei", role: "Mare Pritti", img: "Movie Database/The Paper Cast and Crew/Chelsea Frei.png"},
        { name: "Melvin Gregg", role: "Detrick Moore", img: "Movie Database/The Paper Cast and Crew/Melvin Gregg.png"},
        { name: "Alex Edelman", role: "Adam Cooper", img: "Movie Database/The Paper Cast and Crew/Alex Edelman.png"},
      ],
      crew: [
        { name: "Greg Daniels", role: "Showrunner", img: "Movie Database/The Paper Cast and Crew/Greg Daniels.png"},
        { name: "Michael Koman", role: "Showrunner", img: "Movie Database/The Paper Cast and Crew/Michael Koman.png"},
      ]
    },

    // ✅ Sarvam Maya
    "Sarvam Maya": {
      title: "Sarvam Maya",
      meta: "2024 • Tamil • Drama / Fantasy / Romance",
      heroImg: "Movie Database/Sarvam Maya Cast and Crew/Sarvam maya poster.avif",
      overview:"Sarvam Maya follows a young Hindu priest whose life changes after he encounters a ghost. What begins as an unexpected incident soon pulls him into a deeper journey. As events unfold, his beliefs and purpose are questioned. The experience forces him to rethink everything he once held as truth.",
      cast: [
        { name: "Aju Varghese", role: "actor", img: "Movie Database/Sarvam Maya Cast and Crew/Aju Varghese.png"},
        { name: "Nivin Pauly", role: "actor", img: "Movie Database/Sarvam Maya Cast and Crew/Nivin Pauly.png"},
        { name: "priti Mukhundhan", role: "actor", img: "Movie Database/Sarvam Maya Cast and Crew/Priti Mukhundhan.png"},
      ],
      crew: [
        { name: "Akhil Sathyan", role: "Director, Writer", img: "Movie Database/Sarvam Maya Cast and Crew/Akhil Sathyan.jpg"},
      ]
    },

    // ✅ Ushio And Tora
    "Ushio and Tora": {
      title: "Ushio and Tora",
      meta: "2024 • Japanese • Action / Adventure / monster",
      heroImg: "Movie Database/Ushio and Tora/Ushio & tora Poster.jpg",
      overview: "Ushio Aotsuki, a skeptical middle schooler and son of an eccentric temple priest, dismisses tales of youkai. However, while caring for the temple, he discovers Tora, a powerful youkai impaled by the fabled Beast Spear in the basement. Tora tries to manipulate Ushio into releasing him, but Ushio refuses. When a sudden youkai outbreak threatens his home and friends, Ushio is forced to unleash Tora.",
      cast: [
        { name: "Rikiya Koyama", role: "Tora (voice)", img: "Movie Database/Ushio and Tora/Rikiya Koyama.webp"},
      ],
      crew: [
        { name: "Kazuhiro Fujita", role: "Writer", img: "Movie Database/Ushio and Tora/Kazuhiro Fujita.png"},
      ],
    },

    // ✅ Olive Kitteridge
    "Olive Kitteridge": {
      title: "Olive Kitteridge",
      meta: "2024 • English • Drama / Slice of Life / Family Drama",
      heroImg: "Movie Database/Olive Kitteridge cast and crew/Olive Kitteridge.avif",
      overview: "Olive Kitteridge is a retired, blunt schoolteacher living in a small Maine town. The story follows her difficult relationship with her patient husband, Henry, and her alienated son, Christopher over the span of twenty five years. Through various life events, the narrative explores the quiet heartbreaks, family secrets, and hidden struggles with depression that define her coastal community.",
      cast: [
        { name: "Frances McDormand", role: "Olive Kitteridge", img: "Movie Database/Olive Kitteridge Cast and Crew/Frances McDormand.png"},
        { name: "Richard Jenkins", role: "Henry Kitteridge", img: "Movie Database/Olive Kitteridge Cast and Crew/Richard Jenkins.png"},
        { name: "Zoe Kazan", role: "Denise Thibodeau", img: "Movie Database/Olive Kitteridge Cast and Crew/Zoe Kazan.png"},
        { name: "Rosemarie DeWitt", role: "Rachel Coulson", img: "Movie Database/Olive Kitteridge Cast and Crew/Rosemarie DeWitt.png"},
        { name: "Jesse Plemons", role: "Jerry McCarthy", img: "Movie Database/Olive Kitteridge Cast and Crew/Jesse Plemons.png"},
      ],
      crew: [
        { name: "Lisa Cholodenko", role: "Director, Writer", img: "Movie Database/Olive Kitteridge Cast and Crew/Lisa Cholodenko.png"},
      ]
    },


    /* ================= AMEZON PRIME MOVIES ================= */

    // ✅ Fallout
    "Fallout": {
      title: "Fallout",
      meta: "2024 • English • Action / Adventure / Spy",
      heroImg: "Movie Database/FallOut cast and crew/Fallout Poster.jpg",
      overview: "After a nuclear war, people live in underground vaults to stay safe. Lucy leaves her vault and enters the ruins of Los Angeles for the first time. When she searches for answers, she meets others who’ve adapted to life on the surface. What she finds challenges everything she thought she knew about the world.",
      cast: [
        { name: "Ella Purnell", role: "Lucy MacLean", img: "Movie Database/Fallout Cast and Crew/Ella Purnell.png"},
        { name: "Aaron Clifton", role: "Maximus", img: "Movie Database/Fallout Cast and Crew/Aaron Clifton.png"},
        { name: "Kyle MacLachlan", role: "Hank MacLachlan", img: "Movie Database/Fallout Cast and Crew/Kyle MacLachlan.png"},
        { name: "Moises Arias", role: "Norm MacLean", img: "Movie Database/Fallout Cast and Crew/Moises Arias.png"},
      ],
      crew: [
        { name: "Geneva Robertson-Dworet", role: "Showrunner", img: "Movie Database/Fallout Cast and Crew/Geneva Robertson-Dworet.png"},
        { name: "Graham Wagner", role: "Showrunner", img: "Movie Database/Fallout Cast and Crew/Graham Wagner.png"},
      ],
    },

    // ✅ Batman Caped Crusader
    "Batman Caped Crusader": {
      title: "Batman Caped Crusader",
      meta: "2024 • English • Superhero / Action / Crime",
      heroImg: "Movie Database/Batman Caped Crusader Cast and Crew/BatMan Caped crusader.jpg",
      overview: "In 1940s Gotham City, Bruce Wayne, forged by tragedy, becomes Batman, launching a lone crusade against rampant crime and corruption. His relentless pursuit of justice gains allies in the GCPD and City Hall but unleashes deadly consequences. The noir-inspired series follows his early crime-fighting days, blending psychological depth with classic villain encounters.",
      cast: [
        { name: "Hamish Linklater", role: "Bruce Wayne/Batman(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Hamish Linklater.png"},
        { name: "Diedrich Bader", role: "Harvey Dent(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Diedrich Bader.png"},
        { name: "Jamie Chung", role: "Harley Quinn(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Jamie Chung.png"},
        { name: "Eric Morgan Stuart", role: "Commissioner Gordon(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Eric Morgan Stuart.png"},
        { name: "Krystal Joy Brown", role: "Barbara Gordon(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Krystal Joy Brown.png"},
        { name: "Mckenna Grace", role: "Nocturna(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Mckenna Grace.png"},
        { name: "Kari Wahlgren", role: "Maggie(voice)", img: "Movie Database/Batman Caped Crusader Cast and Crew/Kari Wahlgren.png"},
      ],
      crew: [
        { name: "Bruce Timm", role: "Showrunner,Producer,Writter,Director", img: "Movie Database/Batman Caped Crusader Cast and Crew/Bruce Timm.png"},
      ],
    },

    // ✅ 3BHK
    "3BHK": {
      title: "3BHK",
      meta: "2024 • Hindi • Comedy / Drama",
      heroImg: "Movie Database/3BHK cast and Crew/3BHK Poster.jpg",
      overview: "3BHK follows a middle-class family determined to buy their dream home in the city. Along the way, they encounter financial hurdles, societal pressures, and personal sacrifices. Their journey becomes a heartfelt tale of perseverance, hope, and the true meaning of home.",
      cast: [
        { name: "Siddharth Suryanarayan", role: "Prabhu", img: "Movie Database/3BHK Cast and Crew/Siddharth Suryanarayan.png"},
        { name: "R Sarathkumar", role: "Vasudevan", img: "Movie Database/3BHK Cast and Crew/R Sarathkumar.png"},
        { name: "Devayani", role: "Shanti", img: "Movie Database/3BHK Cast and Crew/Devayani.png"},
        { name: "Chaithra J Achar", role: "Aishwarya", img: "Movie Database/3BHK Cast and Crew/Chaithra J Achar.png"},
      ],
      crew: [
        { name: "Shri Ganesh", role: "Director, Writer", img: "Movie Database/3BHK Cast and Crew/Shri Ganesh.jpg"},
      ],
    },

    // ✅ Nari Nari Naduma Murari
    "Nari Nari Naduma Murari": {
      title: "Nari Nari Naduma Murari",
      meta: "2024 • Hindi • Drama / Romance",
      heroImg: "Movie Database/nari nari naduma Murari cast and crew/nari nari naduma murari Poster.jpg",
      overview: "Nari Nari Naduma Murari is a heartwarming tale of love, sacrifice, and the strength of family bonds. Set in a small town, it follows the journey of a young couple navigating life's challenges while staying true to their values.",
      cast: [
        { name: "Sharwanand", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Sharwanand.png"},
        { name: "Samyuktha", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Samyuktha.png"},
        { name: "Sakshi Vaidya", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Sakshi Vaidya.png"},
        { name: "Satya", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Satya.png"},
        { name: "Vennela Kishore", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Vennela Kishore.png"},
        { name: "naresh", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Naresh.png"},
        { name: "Sampath Raj", role: "Actor", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Sampath Raj.png"},
      ],
      crew: [
        { name: "Ram Abbaraju", role: "Director, Writer", img: "Movie Database/Nari Nari Naduma Murari Cast and Crew/Ram Abbaraju.webp"},
      ],
    },

    // ✅ A Place Firther Than The Universe
    "A Place Further Than The Universe": {
      title: "A Place Further than the Universe",
      meta: "2024 • Japanese • Adventure / Drama / Slice of Life",
      heroImg: "Movie Database/A Place Further Than The Universe cast and crew/A Place Further than the Universe Poster.jpg",
      overview: "Mari Tamaki dreams of exploring the world but is held back by fear. In her second year of high school, determined to seize her youth, she meets Shirase Kobuchizawa, who is relentlessly pursuing a trip to Antarctica to find her missing mother. Inspired by Shirase's resolve, Mari joins her. Soon, the bubbly Hinata Miyake and polite Yuzuki Shiraishi also join their ranks. Together, these four spirited girls set sail for the frozen south, each seeking something significant.",
      cast: [
        { name: "Inori Minase", role: "Mari Tamaki", img: "Movie Database/A Place Further than the Universe Cast and Crew/Inori Minase.webp"},
      ],
      crew: [
        { name: "Jukki Hanada", role: "Director", img: "Movie Database/A Place Further than the Universe Cast and Crew/Jukki Hanada.webp"},
      ],
    },
    
    
    /* ================= MX PLAYER MOVIES ================= */

    // ✅ Bhay 
    "Bhay": {
      title: "Bhay",
      meta: "2024 • Hindi • Horror / Thriller",
      heroImg: "Movie Database/Bhay cast and crew/Bhay Poster.jpg",
      overview: "Bhay follows India’s first certified paranormal investigator, Gaurav Tiwari, and the mysterious circumstances surrounding his death in 2015. A journalist, Ankita, investigates his life and work with the paranormal. As she digs deeper, she uncovers unsettling details and unanswered questions.",
      cast: [
        { name: "Karan Tacker", role: "Gaurav Tiwari", img: "Movie Database/Bhay Cast and Crew/Karan Tacker.png"},
        { name: "Kalki Koechlin", role: "Irene Venkat", img: "Movie Database/Bhay Cast and Crew/Kalki Koechlin.png"},
        { name: "Saloni Batra", role: "megha", img: "Movie Database/Bhay Cast and Crew/Saloni Batra.png"},
        { name: "Danish Sood", role: "Siddharth", img: "Movie Database/Bhay Cast and Crew/Danish Sood.png"},
      ],
      crew: [
        { name: "Robbie Grewal", role: "Director", img: "Movie Database/Bhay Cast and Crew/Robbie Grewal.png"},
      ],
    },

    // ✅ Half CA
    "Half CA": {
      title: "Half CA",
      meta: "2024 • Hindi • Comedy / Drama",
      heroImg: "Movie Database/Half CA Cast and Crew/Half CA season 1.jpg",
      overview: "Half CA follows Archie and Niraj, two aspiring chartered accountants from completely different backgrounds, as they navigate one of the toughest professional courses in India. The series explores their struggles, ambitions, and the personal and academic challenges they face along the way.",
      cast: [
        { name: "Ahsaas Channa", role: "Archie", img: "Movie Database/Half CA Cast and Crew/Ahsaas Channa.png"},
        { name: "Gyanendra Tripathi", role: "Niraj", img: "Movie Database/Half CA Cast and Crew/Gyanendra Tripathi.png"},
        { name: "Anmol Kajani", role: "Vishal", img: "Movie Database/Half CA Cast and Crew/Anmol Kajani.png"},
        { name: "Prit Kamani", role: "Tejas", img: "Movie Database/Half CA Cast and Crew/Prit Kamani.png"},
      ],
      crew: [
        { name: "Pratish Mehta", role: "Director", img: "Movie Database/Half CA Cast and Crew/Pratish Mehta.png"},
      ],
    },

    // ✅ Nice To Not Meet You
    "Nice To Not Meet You": {
      title: "Nice To Not Meet You",
      meta: "2024 • Hindi • Comedy / Drama / Romance",
      heroImg: "Movie Database/Nice To Not Meet You Cast and Crew/Nice to meet you Poster.jpg",
      overview: "The story revolves around Lim Hyun-joon, a stereotypical actor who longs for a fresh start in a melodrama series. He meets a veteran journalist named Wi Jeong-sook who is suddenly reassigned to the entertainment department.",
      cast: [
        { name: "Lee Jung-jae", role: "Lim Hyun-joon", img: "Movie Database/Nice To Not Meet You Cast and Crew/Lee Jung-jae.png"},
        { name: "Lim Ji-Yeon", role: "Wi Jeong-sin", img: "Movie Database/Nice To Not Meet You Cast and Crew/Lim Ji-Yeon.png"},
        { name: "Kim Ji-Hoon", role: "Lee Jae-hyeong", img: "Movie Database/Nice To Not Meet You Cast and Crew/Kim Ji-Hoon.png"},
        { name: "Seo Ji-Hye", role: "Yoon Hwa-Young", img: "Movie Database/Nice To Not Meet You Cast and Crew/Seo Ji-Hye.png"},
        { name: "Choi Gwi-Hwa", role: "Hwang Ji-Sun", img: "Movie Database/Nice To Not Meet You Cast and Crew/Choi Gwi-Hwa.png"},
        { name: "Na Young-Hee", role: "Sung Ae-Sook", img: "Movie Database/Nice To Not Meet You Cast and Crew/Na Young-Hee.png"},
      ],
      crew: [
        { name: "Kim Ga-Ram", role: "Showrunner, Writer", img: "Movie Database/Nice To Not Meet You Cast and Crew/Kim Ga-Ram.webp"},
      ],
    },

    //  ✅ Jailer
    "Jailer": {
      title: "Jailer",
      meta: "2023 • Tamil • Action / Mass Movie / Crime",
      heroImg: "Movie Database/Jailer Cast and Crew/Jailer Poster.png",
      overview: "Jailer follows the story of Muthuvel Pandian, an ex-jailer, who sets out to find his policeman son, Arjun, who goes missing while investigating a smuggling case. He has to use his past experience and old connections to find out the truth and take down those responsible.",
      cast: [
        { name: "Rajinikanth", role: "Muthuvel Pandian", img: "Movie Database/Jailer Cast and Crew/Rajinikanth.png"},
        { name: "Vasanth Ravi", role: "Arjun Pandian", img: "Movie Database/Jailer Cast and Crew/Vasanth Ravi.png"},
        { name: "Ramya Krishnan", role: "Vijaya Pandian", img: "Movie Database/Jailer Cast and Crew/Ramya Krishnan.png"},
        { name: "Vinayakan T.K", role: "Varman", img: "Movie Database/Jailer Cast and Crew/Vinayakan T.K.png"},
        { name: "Tamannaah Bhatia", role: "kamna", img: "Movie Database/Jailer Cast and Crew/Tamannah Bhatia.png"},
      ],
      crew: [
        { name: "Nelson Dilipkumar", role: "Director, Writer", img: "Movie Database/Jailer Cast and Crew/Nelson Dilipkumar.png"},
      ],
    },

    // ✅ Aukaat Ke Bahar
    "Aukaat ke Bahar": {
      title: "Aukaat ke Bahar",
      meta: "2024 • Hindi • Drama / Sports / Romance",
      heroImg: "Movie Database/Aukaat Ke Bahar Cast and Crew/Aukaat ke bahar poster.jpg",
      overview: "Aukat Ke Bahar follows a small-town boxer who joins an elite Delhi college to fulfil his brother’s long-held dream. There, he faces constant bullying from privileged students. Things take another turn he falls for a senior, which only intensifies the challenges around him.",
      cast: [
        { name: "Elvish Yadav", role: "Rajveer Ahlawat", img: "Movie Database/Aukaat ke Bahar Cast and Crew/Elvish Yadav.png"},
        { name: "Hetal Gada", role: "Priya", img: "Movie Database/Aukaat ke Bahar Cast and Crew/Hetal Gada.png"},
        { name: "Nikhil Vijay", role: "Actor", img: "Movie Database/Aukaat ke Bahar Cast and Crew/Nikhil Vijay.png"},
        { name: "Malhaar Rathod", role: "Actor", img: "Movie Database/Aukaat ke Bahar Cast and Crew/Malhaar Rathod.png"},
      ],
      crew: [
        { name: "Tanmai Rastogi", role: "Director", img: "Movie Database/Aukaat ke Bahar Cast and Crew/Tanmai Rastogi.png"},
      ],
    },

  };




  

  /* ================= LOAD MOVIE ================= */
  const movieKey = new URLSearchParams(window.location.search).get("movie");
  const movie = MOVIES[movieKey];
  if (!movie) return;

  const MOVIE_NAME = movie.title;

  /* ================= DOM ELEMENTS ================= */
  const castList = document.getElementById("castList");
  const crewList = document.getElementById("crewList");

  const meterPercent = document.getElementById("meterPercent");
  const voteCount = document.getElementById("voteCount");
  const countSkip = document.getElementById("countSkip");
  const countTimepass = document.getElementById("countTimepass");
  const countGood = document.getElementById("countGood");
  const countOutstanding = document.getElementById("countOutstanding");

  const reviewBox = document.getElementById("reviewBox");
  const reviewText = document.getElementById("reviewText");
  const charCount = document.getElementById("charCount");
  const reviewList = document.getElementById("reviewList");
  const pills = document.querySelectorAll(".pill");

  /* ================= SVG SETUP ================= */
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  document.querySelectorAll(".arc").forEach(arc => {
    arc.style.strokeDasharray = `${circumference} ${circumference}`;
    arc.style.strokeDashoffset = circumference;
  });

  /* ================= FILL MOVIE ================= */
  document.getElementById("heroImg").src = movie.heroImg;
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("movieMeta").innerText = movie.meta;
  document.getElementById("movieOverview").innerText = movie.overview;

  movie.cast.forEach(c => {
    castList.insertAdjacentHTML("beforeend", `
      <div class="person">
        <img src="${c.img}">
        <h4>${c.name}</h4>
        <p>${c.role}</p>
      </div>
    `);
  });

  movie.crew.forEach(c => {
    crewList.insertAdjacentHTML("beforeend", `
      <div class="person">
        <img src="${c.img}">
        <h4>${c.name}</h4>
        <p>${c.role}</p>
      </div>
    `);
  });

  /* ================= USER ================= */
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("username").innerText = "@" + loggedInUser.username;
  document.getElementById("userAvatar").innerText =
    loggedInUser.username.charAt(0).toUpperCase();

  /* ================= REVIEWS ================= */
  let selectedRating = "Skip";
  let allReviews = JSON.parse(localStorage.getItem("movieReviews")) || [];

  pills.forEach(btn => {
    btn.onclick = () => {
      pills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedRating = btn.dataset.type;
    };
  });

  reviewText.addEventListener("input", () => {
    charCount.innerText = `${reviewText.value.length} / 1000`;
  });

  /* ================= RENDER REVIEWS ================= */
function renderReviews() {
  reviewList.innerHTML = "";

  // 1️⃣ Get reviews for this movie
  const movieReviews = allReviews.filter(
    r => r.movie === MOVIE_NAME
  );

  // 2️⃣ Sort: logged-in user's review FIRST
  movieReviews.sort((a, b) => {
    if (a.username === loggedInUser.username) return -1;
    if (b.username === loggedInUser.username) return 1;
    return 0;
  });

  // 3️⃣ Render ALL reviews (nothing is lost)
  movieReviews.forEach(r => {
   reviewList.insertAdjacentHTML("beforeend", `
  <div class="comment">
    <!-- Letter Avatar -->
    <div class="avatar-letter">
      ${r.username.charAt(0).toUpperCase()}
    </div>

    <div class="comment-card">
      <strong class="comment-username">
        ${r.username}
        ${
          r.username === loggedInUser.username
            ? `<span style="color:#22c55e; font-size:12px;"> (You)</span>`
            : ""
        }
      </strong>

      <p class="comment-text">${r.review}</p>

      <span class="review-badge ${r.type.toLowerCase()}">
        ${r.type}
      </span>
    </div>
  </div>
`);

  });
}

  /* ================= AUDIENCE METER ================= */
  function buildAudienceMeter() {

    const counts = { Skip:0, Timepass:0, Good:0, Outstanding:0 };

    allReviews
      .filter(r => r.movie === MOVIE_NAME)
      .forEach(r => counts[r.type]++);

    const total = Object.values(counts).reduce((a,b)=>a+b,0);

    countSkip.innerText = counts.Skip;
    countTimepass.innerText = counts.Timepass;
    countGood.innerText = counts.Good;
    countOutstanding.innerText = counts.Outstanding;

    if (total === 0) {
      meterPercent.innerText = "0%";
      voteCount.innerText = "0 Votes";
      return;
    }

    voteCount.innerText = `${total} Votes`;

    const score = Math.round(
      ((counts.Good + counts.Outstanding) / total) * 100
    );
    meterPercent.innerText = score + "%";

    let offset = 0;

    ["Skip","Timepass","Good","Outstanding"].forEach(type => {
      const arc = document.querySelector(`.arc.${type.toLowerCase()}`);
      const value = counts[type];
      if (!arc || value === 0) return;

      const length = (value / total) * circumference;
      arc.style.strokeDasharray = `${length} ${circumference}`;
      arc.style.strokeDashoffset = -offset;

      offset += length;
    });
  }

/* ================= LOCK REVIEW ================= */
function lockReviewIfAlreadySubmitted() {
  const alreadyReviewed = allReviews.some(r =>
    r.movie === MOVIE_NAME &&
    r.username === loggedInUser.username
  );

  if (alreadyReviewed) {
    reviewBox.innerHTML = `
      <p style="color:#9ca3af;font-size:14px">
        ✅ Thanks! You have already submitted your review.
      </p>
    `;
    return true;
  }
  return false;
}

/* ================= POST REVIEW ================= */
window.postReview = function () {

  // Stop if already reviewed
  if (lockReviewIfAlreadySubmitted()) return;

  if (!reviewText.value.trim()) return;

  allReviews.push({
    movie: MOVIE_NAME,
    username: loggedInUser.username,
    image: loggedInUser.profileImage || "Images/Toxic new.jpg",
    review: reviewText.value.trim(),
    type: selectedRating
  });

  localStorage.setItem("movieReviews", JSON.stringify(allReviews));

  lockReviewIfAlreadySubmitted(); // hide form immediately
  renderReviews();
  buildAudienceMeter();
};

/* ================= INIT ================= */
renderReviews();
buildAudienceMeter();
lockReviewIfAlreadySubmitted(); // hide form on reload / re-login

});

