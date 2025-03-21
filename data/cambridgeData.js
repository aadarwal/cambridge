export const cambridgeData = {
  categories: [
    {
      id: "philosophy",
      title: "Philosophy Sites",
      emoji: "🧠",
      color: "bg-purple-700"
    },
    {
      id: "physics",
      title: "Physics Sites",
      emoji: "⚛️",
      color: "bg-blue-700"
    },
    {
      id: "bookshops",
      title: "Bookshops",
      emoji: "📚",
      color: "bg-amber-700"
    },
    {
      id: "activities",
      title: "Activities",
      emoji: "🚶",
      color: "bg-green-700"
    },
    {
      id: "other",
      title: "Other Notable Sites",
      emoji: "🏛️",
      color: "bg-rose-700"
    }
  ],
  locations: [
    {
      id: "wittgenstein-room",
      name: "Wittgenstein's Room",
      category: "philosophy",
      location: "Trinity College",
      emoji: "🏛️",
      description: "Where Wittgenstein wrote \"Philosophical Investigations\"",
      access: "Check with porter's lodge; entrance fee",
      details: {
        significance: "Wittgenstein developed his later philosophy here, including parts of \"Philosophical Investigations.\"",
        notes: [
          "Wittgenstein came to Cambridge in 1911 to study with Russell",
          "After \"Tractatus Logico-Philosophicus,\" he abandoned philosophy, returning to Cambridge in 1929",
          "His spartan room (he reportedly sat on a deck chair rather than regular furniture) reflects his rejection of his wealthy family background",
          "The room is maintained close to its original condition",
          "Students would gather here for intense conversations lasting hours, often continuing as walks around the college",
          "His unorthodox lecturing style typically began with \"Take a case...\" exploring philosophical problems through everyday scenarios",
          "During his time at Trinity, he developed his concept of \"language games\" that revolutionized philosophy of language"
        ]
      }
    },
    {
      id: "russell-rooms",
      name: "Bertrand Russell's Rooms",
      category: "philosophy",
      location: "Trinity College",
      emoji: "🏛️",
      description: "External viewing of where Russell worked on \"Principia Mathematica\"",
      access: "Viewable from courtyard",
      details: {
        significance: "Russell collaborated with Alfred North Whitehead on \"Principia Mathematica\" while at Trinity.",
        notes: [
          "Located in Whewell's Court (pronounced \"Hugh-ell\"), a Neo-Gothic section of Trinity College",
          "Russell experienced his \"intellectual conversion\" around 1900 after hearing about an Italian mathematician's work",
          "The rooms witnessed the birth of analytic philosophy",
          "Russell was elected a fellow of Trinity in 1895 and remained connected throughout his life",
          "The collaboration with Whitehead on \"Principia Mathematica\" (1910-1913) was one of the most ambitious projects in the history of logic",
          "Russell was dismissed from Trinity in 1916 due to his pacifist activities during WWI, but was later invited back",
          "His office was known for being cluttered with papers, in stark contrast to Wittgenstein's minimalism",
          "Here Russell wrote much of \"The Problems of Philosophy\" (1912), still considered an excellent introduction to philosophy"
        ]
      }
    },
    {
      id: "wittgenstein-grave",
      name: "Wittgenstein's Grave",
      category: "philosophy",
      location: "Ascension Burial Ground",
      emoji: "⚰️",
      description: "Final resting place of the influential philosopher",
      access: "Public access; outside city center",
      details: {
        significance: "The burial ground is known as 'the philosophers' cemetery' due to the number of Cambridge academics buried there.",
        notes: [
          "The grave is marked by a simple stone cross, reflecting his preference for austerity",
          "Often visited by philosophy students who leave small tokens or notes",
          "Wittgenstein died in 1951 and requested a \"plain funeral\" without ceremony",
          "Other notable philosophers buried nearby: G.E. Moore (who influenced Wittgenstein) and Elizabeth Anscombe (Wittgenstein's student and translator)",
          "Also buried here: John Maynard Keynes (economist) and Arthur Eddington (physicist who confirmed Einstein's theory of relativity)",
          "Finding the grave can be challenging as it's not prominently marked – it's in the newer section of the cemetery",
          "The grave inscription reads simply \"Ludwig Wittgenstein 1889-1951\""
        ]
      }
    },
    {
      id: "fitzwilliam-museum",
      name: "Fitzwilliam Museum",
      category: "philosophy",
      location: "Trumpington Street",
      emoji: "🏛️",
      description: "Houses important philosophical manuscripts",
      access: "Free entry; closed Mondays",
      details: {
        hours: "Tuesday–Saturday: 10am–5pm, Sunday: 12pm–5pm. Closed Mondays.",
        notes: [
          "Founded in 1816 when Viscount Fitzwilliam bequeathed his art collection and library to the University",
          "The manuscript collection includes works by René Descartes, John Locke, and David Hume",
          "Some manuscripts contain marginal notes providing insight into the thinking processes of these philosophers",
          "The collection includes original letters between philosophers that reveal the development of ideas",
          "The museum houses illuminated manuscripts, which include medieval philosophical texts with elaborate illustrations",
          "The museum regularly rotates which manuscripts are on display",
          "The Founders Library contains rare first editions of major philosophical works",
          "Researchers can request access to manuscripts not on public display by prior appointment",
          "The Department of Manuscripts and Printed Books can provide specialist guidance on philosophical texts"
        ]
      }
    },
    {
      id: "wren-library",
      name: "Wren Library",
      category: "philosophy",
      location: "Trinity College",
      emoji: "📚",
      description: "Contains important philosophical texts and manuscripts",
      access: "Limited hours; check website",
      details: {
        significance: "Houses Newton's personal copy of Principia Mathematica with his handwritten annotations.",
        notes: [
          "Designed by Sir Christopher Wren and completed in 1695",
          "Contains Ludwig Wittgenstein's early drafts of philosophical works",
          "First editions include Francis Bacon's \"Novum Organum\" (1620), which established the inductive scientific method",
          "Trinity College's philosophical collection started with the King's Library, donated by King George I in 1715",
          "Holds personal papers of G.E. Moore and other Cambridge philosophers",
          "Many books contain marginalia from famous readers – look for annotations by past scholars",
          "The library's architecture embodies Enlightenment principles of order, light, and rationality",
          "Some philosophical works are bound in human skin (anthropodermic bibliopegy), a controversial historical practice",
          "The library holds over 1,250 medieval manuscripts and 72,000 books printed before 1820"
        ]
      }
    },
    {
      id: "christs-college",
      name: "Christ's College",
      category: "philosophy",
      location: "St Andrew's Street",
      emoji: "🏛️",
      description: "Home to the Cambridge Platonists",
      access: "Small entrance fee",
      details: {
        significance: "Home to the Cambridge Platonists who revived Platonist doctrines to counter materialist philosophies.",
        notes: [
          "Founded in 1505 and was originally called God's House",
          "The Cambridge Platonists were 17th-century philosophers including Henry More, Ralph Cudworth, and Benjamin Whichcote",
          "They sought to reconcile reason with faith during a period of increasing scientific rationalism",
          "The movement emerged partly in response to the materialist philosophy of Thomas Hobbes",
          "The college's Old Library contains many original works by the Cambridge Platonists",
          "Charles Darwin was a student here, creating an interesting juxtaposition with the college's earlier Platonist tradition",
          "The Cambridge Platonists influenced later Idealist philosophy",
          "Several locations within the college, including the chapel and Fellows' Garden, were sites of philosophical discussions",
          "The college has a statue of Lady Philosophy in the Old Library"
        ]
      }
    },
    {
      id: "faculty-of-philosophy",
      name: "Faculty of Philosophy",
      category: "philosophy",
      location: "Sidgwick Avenue",
      emoji: "🏫",
      description: "Academic department with Casimir Lewy Library",
      access: "Limited public access",
      details: {
        significance: "The department was the birthplace of analytic philosophy.",
        notes: [
          "The Faculty is located in the Raised Faculty Building on the Sidgwick Site",
          "The Casimir Lewy Library contains over 17,000 volumes specializing in analytical philosophy",
          "Named after Casimir Lewy (1919-1991), a Polish-born philosopher who taught at Cambridge for over 40 years",
          "The famous \"Moral Sciences Club\" where groundbreaking philosophical ideas were debated still meets regularly",
          "The library holds the personal book collections of several famous Cambridge philosophers",
          "Wittgenstein's famous poker incident with Karl Popper occurred in a room still used for seminars (H3)",
          "The \"Cambridge School\" of philosophy is characterized by its emphasis on logic, language, and conceptual analysis",
          "The department's corridors display photographs of famous philosophers who taught there",
          "The reading room contains desks where many influential philosophical papers were written"
        ]
      }
    },
    {
      id: "cavendish-laboratory",
      name: "Cavendish Laboratory Museum",
      category: "physics",
      location: "JJ Thomson Avenue",
      emoji: "🔬",
      description: "Birthplace of numerous physics breakthroughs",
      access: "Check website for hours",
      details: {
        significance: "Site of the discovery of the electron, the neutron, and the structure of DNA.",
        notes: [
          "Established in 1874 and named after Henry Cavendish",
          "The museum is now located in the new Cavendish Laboratory at West Cambridge",
          "The laboratory has produced 29 Nobel Prize winners",
          "J.J. Thomson discovered the electron here in 1897 using the apparatus still on display",
          "James Chadwick discovered the neutron at the Cavendish in 1932",
          "Houses the apparatus used by Crick and Watson to determine the structure of DNA",
          "Displays Charles Wilson's cloud chamber that made subatomic particles visible for the first time",
          "Preserves the famous \"crocodile\" wooden sign that hung above Rutherford's door",
          "Maxwell's original color wheel demonstrating color theory is on display",
          "Lawrence Bragg developed X-ray crystallography here, becoming the youngest-ever Nobel laureate",
          "Visitor can see Pye radio equipment used to develop radar during World War II",
          "The laboratory's \"string and sealing wax\" experimental approach became famous for producing remarkable results with simple materials"
        ]
      }
    },
    {
      id: "whipple-museum",
      name: "Whipple Museum",
      category: "physics",
      location: "Free School Lane",
      emoji: "🔭",
      description: "Collection of scientific instruments and models",
      access: "Free entry; Mon-Fri 12pm-4:30pm",
      details: {
        significance: "Collection spans over 2,000 instruments from the Middle Ages to the present.",
        notes: [
          "Founded in 1944 when Robert Stewart Whipple donated his collection of scientific instruments to the University",
          "Housed in the former Perse School building on Free School Lane, adjacent to the old Cavendish Laboratory",
          "Contains a 1588 armillary sphere representing the Ptolemaic model of the universe",
          "Houses an extensive collection of sundials, including rare examples from the 16th century",
          "Visitors can see one of Newton's reflecting telescopes, which revolutionized astronomy",
          "Contains early electrical apparatus used to demonstrate principles of electromagnetism",
          "Includes a set of geometric models made by prisoners of war during the Napoleonic Wars",
          "Several working models of perpetual motion machines that visitors can interact with",
          "Displays a collection of early microscopes, including ones used by Darwin's contemporaries",
          "Collection of calculating devices showing the evolution of computation before electronic computers",
          "Houses James Clerk Maxwell's color wheel, demonstrating his theories on color perception",
          "The Globes Gallery displays rare celestial and terrestrial globes dating back to the 17th century"
        ]
      }
    },
    {
      id: "newton-apple-tree",
      name: "Newton's Apple Tree",
      category: "physics",
      location: "Trinity College",
      emoji: "🌳",
      description: "Descendant of the tree that inspired gravity theory",
      access: "College entrance fee",
      details: {
        significance: "Connected to Newton's development of universal gravitation theory.",
        notes: [
          "Not the original apple tree from Woolsthorpe Manor (Newton's home), but a grafted descendant",
          "Planted in the 1950s to commemorate Newton's connection to Trinity College",
          "A 'Flower of Kent' variety, which produces cooking apples with a tart flavor",
          "While the \"apple falling on Newton's head\" story is likely apocryphal, Newton did confirm that watching an apple fall helped inspire his thinking about gravity",
          "Located near the Wren Library where many of Newton's papers are kept",
          "Marked with a small plaque explaining its significance",
          "The original tree at Woolsthorpe Manor fell in a storm in 1820, but cuttings were preserved",
          "Newton's actual description of the apple incident: \"Why should that apple always descend perpendicularly to the ground? Why should it not go sideways or upwards, but constantly to the earth's center?\"",
          "The tree typically blossoms in April and produces fruit in early autumn",
          "Many physics students and professors make pilgrimages to see the tree"
        ]
      }
    },
    {
      id: "eagle-pub",
      name: "The Eagle Pub",
      category: "physics",
      location: "Benet Street",
      emoji: "🍺",
      description: "Where DNA structure was announced",
      access: "Public; busy at lunch",
      details: {
        hours: "Typical pub hours (11am-11pm)",
        significance: "On February 28, 1953, Francis Crick announced they had discovered \"the secret of life\".",
        notes: [
          "One of Cambridge's oldest pubs, dating back to the 14th century",
          "The exact spot where Crick made his famous announcement is marked with a commemorative plaque",
          "Watson and Crick were regular patrons who would discuss their work on DNA structure over lunch",
          "The pub was frequented by many other Cambridge scientists including those working on radar during WWII",
          "The RAF Bar's ceiling contains signatures, squadron numbers, and messages from Allied airmen during WWII",
          "Airmen used candles, lighters, and lipstick to leave their marks",
          "Some ceiling graffiti was created by servicemen who didn't return from missions, making it a poignant memorial",
          "The Eagle is owned by Corpus Christi College and has been a pub since at least 1667",
          "The pub serves a special beer called \"Eagle's DNA\" to commemorate its connection to the scientific breakthrough",
          "Rosalind Franklin, whose X-ray crystallography work was crucial to understanding DNA structure, rarely joined Watson and Crick here"
        ]
      }
    },
    {
      id: "corpus-clock",
      name: "Corpus Clock & Chronophage",
      category: "physics",
      location: "Trumpington Street",
      emoji: "⏱️",
      description: "Unique timepiece with philosophical significance",
      access: "Visible from street 24/7",
      details: {
        significance: "Unveiled in 2008 by Stephen Hawking.",
        notes: [
          "Has no hands or digital numbers - displays time through slits in the face that light up",
          "The Chronophage (time-eater) is inspired by a grasshopper escapement in traditional clockmaking",
          "The creature atop the clock appears to devour time, representing that time is consumed as it passes",
          "The clock runs irregularly, sometimes speeding up, sometimes slowing down, occasionally stopping",
          "This irregular movement reflects the relativity of time perception in human experience",
          "Every hour, the clock appears to recalibrate with the sound of chains being dragged across a coffin",
          "Made of 24-carat gold-plated stainless steel and weighs over a ton",
          "Cost £1 million to build and was donated to Corpus Christi College by Dr. John C. Taylor",
          "The ripples on the clock face represent the Big Bang and the expansion of the universe",
          "The clock blinks once every minute, symbolizing mortality",
          "At night, the clock face is illuminated with blue LEDs, creating an eerie atmosphere"
        ]
      }
    },
    {
      id: "computing-history",
      name: "Centre for Computing History",
      category: "physics",
      location: "Coldham's Road",
      emoji: "💻",
      description: "Traces evolution from physics theory to computing",
      access: "Wed-Sun 10am-5pm; fee applies",
      details: {
        significance: "Demonstrates the link between theoretical physics, mathematics, and computing technology.",
        notes: [
          "Houses over 10,000 items related to the history of computing",
          "Collection includes a working EDSAC rebuild, one of the first British computers developed at Cambridge University",
          "Contains original hardware used by Cambridge physicists for calculations and simulations",
          "Exhibits include early magnetic core memory and vacuum tube components",
          "Displays explaining how theoretical physics concepts like quantum mechanics led to transistors and microchips",
          "Visitors can use working models of early computers including the BBC Micro, developed in Cambridge",
          "Includes exhibits on Alan Turing's work at Cambridge and his contributions to theoretical computer science",
          "The connection between Maxwell's equations, information theory, and modern computing is explored",
          "Showcases early artificial intelligence research conducted at Cambridge",
          "Collection of computer manuals and technical documentation from Cambridge University's early computing projects",
          "Maurice Wilkes' original papers on the development of EDSAC at Cambridge are preserved here"
        ]
      }
    },
    {
      id: "cambridge-press",
      name: "Cambridge University Press Bookshop",
      category: "bookshops",
      location: "1 Trinity Street",
      emoji: "📚",
      description: "World's oldest publishing house (est. 1534)",
      access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
      details: {
        significance: "Cambridge University Press is the oldest publishing house in the world, established in 1534.",
        notes: [
          "King Henry VIII granted the University a charter to print \"all manner of books\"",
          "The bookshop building dates from the 18th century",
          "Contains first editions of important scientific and philosophical works published by the Press",
          "Many groundbreaking works in physics and philosophy were first published by Cambridge University Press",
          "The bookshop has a dedicated section for works by Cambridge-affiliated authors",
          "Special collections include the prestigious Cambridge Mathematical Library",
          "Books bearing the Cambridge University Press imprint have been continuously printed since 1584",
          "The staff can access the entire historical catalog, including rare and out-of-print volumes",
          "The philosophy section is particularly strong in analytic philosophy",
          "The physics section contains textbooks written by Nobel Prize winners from Cambridge",
          "Students receive discounts on academic titles with valid university identification"
        ]
      }
    },
    {
      id: "heffers",
      name: "Heffers Bookshop",
      category: "bookshops",
      location: "20 Trinity Street",
      emoji: "📚",
      description: "Academic books since 1876",
      access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
      details: {
        significance: "One of the UK's most famous academic bookstores, a Cambridge institution since 1876.",
        notes: [
          "Founded in 1876 by William Heffer as a stationery shop",
          "The current location on Trinity Street has been its home since 1970",
          "The basement level contains one of the UK's best collections of academic philosophy books",
          "Heffers historically had its own publishing branch, which produced academic texts",
          "Long tradition of hosting book signings and lectures by prominent philosophers and physicists",
          "Stephen Hawking regularly held signings here for his new books",
          "The philosophy section is organized by philosophical tradition and time period",
          "The physics and mathematics sections are renowned for their comprehensiveness",
          "Maintains a \"Cambridge authors\" section featuring works by university-affiliated writers",
          "Became part of the Blackwell's group in 1999 but maintained its original name due to its heritage",
          "Staff are known for their subject expertise - many are former academics or graduate students",
          "They maintain a special order service for obscure academic texts not normally stocked in the UK"
        ]
      }
    },
    {
      id: "gdavid",
      name: "G. David Bookseller",
      category: "bookshops",
      location: "16 St Edward's Passage",
      emoji: "📚",
      description: "Rare and antiquarian books",
      access: "Mon-Sat 10am-5:30pm",
      details: {
        significance: "Trading in Cambridge since 1896, specializing in antiquarian and second-hand books.",
        notes: [
          "The shop specializes in antiquarian and second-hand books, with particular strength in academic subjects",
          "The cramped, maze-like interior has remained largely unchanged for decades, with books stacked everywhere",
          "Many items are not priced, requiring customers to ask - which often leads to fascinating conversations",
          "The philosophy collection includes rare first editions of works by Wittgenstein, Russell, and other Cambridge philosophers",
          "The science section contains historical works that show the development of physics theories over centuries",
          "The shop has supplied books to Cambridge University libraries and colleges to fill gaps in their collections",
          "Behind the public area is a large storage facility containing thousands more books not on display",
          "The owner maintains connections with academic estate sales and often acquires complete libraries from deceased professors",
          "The narrow passageway it occupies (St Edward's Passage) has been a center for bookselling since the medieval period",
          "There is minimal organization system, encouraging serendipitous discoveries",
          "The building itself is historic, with sloping floors and original architectural features"
        ]
      }
    },
    {
      id: "haunted-bookshop",
      name: "Sarah Key's Haunted Bookshop",
      category: "bookshops",
      location: "9 St Edward's Passage",
      emoji: "📚",
      description: "Antiquarian books in haunted building",
      access: "Tue-Sat 10am-5pm",
      details: {
        significance: "Located in a 15th-century building that was originally part of an Augustinian friary.",
        notes: [
          "The name comes from reported paranormal activity, including a ghost known as the \"White Lady\"",
          "Owner Sarah Key is an expert on early edition children's books and antiquarian books",
          "The shop specializes in Alice in Wonderland editions and Lewis Carroll materials",
          "The building features original medieval beams and an ancient fireplace",
          "The shop has been featured in several paranormal investigation television programs",
          "Some of the ghost stories relate to a former resident who was reportedly a practicing alchemist",
          "The shop houses a collection of historical scientific and philosophical texts, often with unique bindings",
          "Sarah Key has authored guides to book collecting and can offer expertise on rare editions",
          "The shop contains one of the best collections of vintage Penguin paperbacks in the UK",
          "The ghost stories include books mysteriously falling from shelves and sudden temperature drops",
          "The building is one of the oldest continuously occupied commercial premises in Cambridge"
        ]
      }
    },
    {
      id: "oxfam",
      name: "Oxfam Bookshop",
      category: "bookshops",
      location: "28 Sidney Street",
      emoji: "📚",
      description: "Second-hand academic books",
      access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
      details: {
        significance: "Purchases support Oxfam's charitable work.",
        notes: [
          "Cambridge's Oxfam Bookshop is considered one of the best in the Oxfam network due to donations from academics",
          "Many retired professors donate their personal libraries, resulting in rare and specialized academic works",
          "The philosophy section often contains out-of-print titles and international editions not easily found elsewhere",
          "The science section frequently includes technical books and journals donated by researchers",
          "Books often contain marginalia and notes from Cambridge academics, adding historical interest",
          "The shop is staffed primarily by volunteers, many with academic backgrounds",
          "Limited edition signed copies occasionally appear when authors donate their own works",
          "A \"rare books\" section contains more valuable items, sometimes including first editions of philosophical works",
          "All proceeds support Oxfam's global poverty relief efforts",
          "The shop has built relationships with university departments that regularly donate excess books",
          "Staff can keep a \"wants list\" for customers looking for specific titles",
          "The shop has a reputation for occasionally having valuable books priced well below market value"
        ]
      }
    },
    {
      id: "wittgenstein-tour",
      name: "Wittgenstein Walking Tour",
      category: "activities",
      location: "Various sites throughout Cambridge",
      emoji: "🚶",
      description: "Follow Wittgenstein's Cambridge footsteps",
      access: "Self-guided; free",
      details: {
        duration: "Approximately 1.5-2 hours",
        notes: [
          "Begins at Trinity College, where Wittgenstein was both a student and later a fellow",
          "Includes Whewell's Court where Wittgenstein had rooms when he first arrived in Cambridge in 1911",
          "Passes the old Moral Sciences Club meeting rooms where Wittgenstein famously confronted Karl Popper",
          "Includes 78 Storey's Way, a private residence where Wittgenstein lived while working on his later philosophy",
          "Visits the former location of the Copper Kettle café on Kings Parade, where Wittgenstein would meet with students",
          "Includes the old lecture rooms in King's College where Wittgenstein delivered his revolutionary lectures",
          "Passes by G.E. Moore's house, Wittgenstein's friend and philosophical influence",
          "Includes the site of the original Cavendish Laboratory where Wittgenstein conducted experiments",
          "The route traces Wittgenstein's famous walking routes where he would engage in philosophical discussions",
          "Ends at the Ascension Parish Burial Ground where Wittgenstein is buried",
          "Each location includes information about specific philosophical ideas that were developed there",
          "Walking the same streets as Wittgenstein offers insight into how everyday Cambridge influenced his philosophical thinking"
        ]
      }
    },
    {
      id: "punting",
      name: "Punting Tour",
      category: "activities",
      location: "Various operators along the River Cam",
      emoji: "🛶",
      description: "See Cambridge from the river",
      access: "£12-25 per person",
      details: {
        duration: "Typically 45 minutes to 1 hour",
        best_time: "Late afternoon for best light",
        notes: [
          "Punting began as practical transportation but became a leisure activity in Edwardian times",
          "The Mathematical Bridge at Queens' College is officially called the Wooden Bridge but got its nickname due to its ingenious design",
          "Contrary to myth, the bridge was not designed by Isaac Newton (he died 22 years before it was built)",
          "The bridge appears to be an arc but is actually made of straight timbers arranged tangentially",
          "Many punt guides know anecdotes about famous physicists and philosophers who studied at riverside colleges",
          "The College Backs (the riverside areas behind the colleges) offer perspectives not visible from the street",
          "The river passes directly behind Trinity College, where many famous scientists and philosophers lived",
          "Evening punting provides a different atmosphere with buildings illuminated and fewer tourists",
          "The punting route passes under the Bridge of Sighs at St John's College, modeled after the bridge in Venice",
          "The flat-bottomed punts are propelled by pushing against the riverbed with a 16-foot pole",
          "Some punt operators offer specialized tours focusing on scientific or philosophical history"
        ]
      }
    },
    {
      id: "botanic-garden",
      name: "Cambridge Botanic Garden",
      category: "activities",
      location: "1 Brookside",
      emoji: "🌿",
      description: "Scientific garden with research history",
      access: "£7.00; 10am-6pm Apr-Sep, 10am-5pm Oct-Mar",
      details: {
        significance: "Established in 1846 by Professor John Stevens Henslow, Charles Darwin's mentor.",
        notes: [
          "Designed as a living laboratory for the study of plant taxonomy and relationships",
          "Instrumental in the development of genetics through research on plant breeding",
          "The Systematic Beds display plants according to their evolutionary relationships",
          "Houses over 8,000 plant species from around the world",
          "The Glasshouses contain plants from nine different climate zones",
          "The historic Chronological Bed shows the introduction of plants to British gardens over the centuries",
          "The Genetics Garden demonstrates Gregor Mendel's principles and modern understanding of plant genetics",
          "Many plants were gathered by famous scientific expeditions, including Darwin's voyage on the Beagle",
          "The garden maintains a seed bank as part of international conservation efforts",
          "Research on plant physiology conducted here has contributed to understanding climate change",
          "Isaac Newton's apple tree has a descendant growing in the garden",
          "The garden archives contain correspondence between botanists and philosophers of science"
        ]
      }
    },
    {
      id: "round-church",
      name: "The Round Church",
      category: "activities",
      location: "Round Church Street",
      emoji: "👻",
      description: "One of only four round churches in England",
      access: "Small fee; Mon-Sat 10am-5pm, limited hours Sunday",
      details: {
        significance: "Based on the Church of the Holy Sepulchre in Jerusalem.",
        notes: [
          "The church's proper name is the Church of the Holy Sepulchre",
          "Built by the Fraternity of the Holy Sepulchre, a group of crusaders who had visited Jerusalem",
          "One of only four medieval round churches still standing in England",
          "The round shape is symbolic of Christ's resurrection and eternal life",
          "The original structure was purely circular; the rectangular chancel was added in the 15th century",
          "During the English Civil War, Cromwell's soldiers used it as a training and drill hall",
          "Nearly demolished in the 19th century due to structural problems, but saved by the Cambridge Camden Society",
          "The interior features striking Norman architecture with massive cylindrical pillars",
          "The acoustics inside the circular nave create interesting sound effects due to its shape",
          "Philosophical debates on the nature of faith and reason were held here during the Reformation",
          "The building represents the intersection of religious faith, medieval engineering, and geometric principles",
          "The current exhibition often focuses on the impact of Christianity on thought and education in Cambridge"
        ]
      }
    },
    {
      id: "kings-college",
      name: "King's College Chapel",
      category: "other",
      location: "King's Parade",
      emoji: "🏛️",
      description: "Gothic masterpiece with fan vaults",
      access: "Entrance fee; check for closing times",
      details: {
        significance: "Finest example of late Perpendicular Gothic architecture, started in 1446 by Henry VI.",
        notes: [
          "Took over a century to complete, spanning the reigns of six monarchs from Henry VI to Henry VIII",
          "The fan vaulting is the largest of its kind in the world",
          "Houses Rubens' masterpiece \"The Adoration of the Magi\" as its altarpiece",
          "The 26 stained glass windows date from the early 16th century and survived the English Civil War",
          "The acoustic properties are remarkable, with a six-second reverberation time",
          "The annual Christmas Eve service \"A Festival of Nine Lessons and Carols\" has been broadcast since 1928",
          "The organ is contained within the ornate screen, a gift from King Henry VIII",
          "The mathematical precision of the architecture demonstrates emerging scientific principles",
          "The stonework features heraldic symbols of the Houses of Lancaster, York, and Tudor",
          "The chapel stands as a testament to medieval engineering, built without modern technology",
          "Physicists have studied the chapel's acoustics to understand sound propagation in large stone structures",
          "Architectural historians consider it the finest example of English gothic architecture"
        ]
      }
    },
    {
      id: "cambridge-market",
      name: "Cambridge Market",
      category: "other",
      location: "Market Square",
      emoji: "🏛️",
      description: "Historic market with food stalls",
      access: "Daily 10am-4pm",
      details: {
        significance: "Market has operated on this site since the Middle Ages.",
        notes: [
          "Located in the heart of Cambridge, surrounded by colleges and historic buildings",
          "Food options include Malaysian nasi lemak, African vegetable platters, Chinese jianbing crepes, Mediterranean falafels",
          "Also sells books, crafts, local produce",
          "Good spot for quick, affordable meals while exploring the city",
          "The market square is paved with cobblestones and has a traditional English market atmosphere",
          "Often features street performers and musicians",
          "In December, transforms into a Christmas market with seasonal goods"
        ]
      }
    }
  ]
}; 