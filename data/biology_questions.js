const biologyQuestions = {

"The Living World": [
  {
    "question": "Which of the following is not a defining property of living organisms?",
    "options": ["Growth", "Reproduction", "Metabolism", "Crystallization"],
    "answer": 3,
    "explanation": "Metabolism aur consciousness defining properties hain. Growth aur Reproduction defining nahi hain kyunki non-living things bhi grow kar sakti hain (accumulation se) aur kuch living (mules) reproduce nahi karte. Crystallization ek physical process hai jo non-living chemicals mein hota hai."
  },
  {
    "question": "The branch of biology that deals with identification, nomenclature and classification of organisms is called:",
    "options": ["Morphology", "Taxonomy", "Ecology", "Anatomy"],
    "answer": 1,
    "explanation": "Taxonomy biology ki wo branch hai jo organisms ko pehchanne (identification), unka scientific naam dene (nomenclature) aur unko group mein baantne (classification) ka kaam karti hai. Ye systematic study ke liye basic foundation hai."
  },
  {
    "question": "Who is known as the Father of Taxonomy?",
    "options": ["Charles Darwin", "Carolus Linnaeus", "Aristotle", "Mendel"],
    "answer": 1,
    "explanation": "Carolus Linnaeus ne Binomial Nomenclature ka system diya aur classification ke rules banaye. Unki book 'Systema Naturae' taxonomy ke field mein ek bada milestone hai, isliye unhe Father of Taxonomy kaha jata hai."
  },
  {
    "question": "In binomial nomenclature, the first word represents:",
    "options": ["Species", "Family", "Genus", "Order"],
    "answer": 2,
    "explanation": "Binomial nomenclature ke rules ke hisaab se pehla naam 'Genus' (Generic name) hota hai aur dusra 'Species' (Specific epithet). Genus hamesha Capital letter se start hota hai aur species small letter se."
  },
  {
    "question": "The scientific name of mango is written as:",
    "options": ["Mangifera Indica", "mangifera indica", "Mangifera indica", "Mangifera Indica (Italics)"],
    "answer": 2,
    "explanation": "Scientific name mein Genus (Mangifera) ka 'M' capital aur species (indica) ka 'i' small hota hai. Saath hi inko italics mein likha jata hai ya alag se underline kiya jata hai. Isliye 'Mangifera indica' sahi format hai."
  },
  {
    "question": "Herbarium is a:",
    "options": ["Place where animals are kept", "Garden for live plants", "Storehouse of dried plant specimens", "Museum of fossils"],
    "answer": 2,
    "explanation": "Herbarium ek repository hai jahan plants ko collect karke, sukhakar (dry), press karke sheets par preserve kiya jata hai. Ye quick referral system ka kaam karta hai taxonomical studies mein."
  },
  {
    "question": "A taxonomic unit at any level of hierarchy is called:",
    "options": ["Species", "Taxon", "Genus", "Family"],
    "answer": 1,
    "explanation": "Classification ki hierarchy mein har ek level (chahe wo Species ho ya Kingdom) ko scientific term mein 'Taxon' (plural: Taxa) kaha jata hai. Ye ek real biological object ya group ko represent karta hai."
  },
  {
    "question": "Which of the following is the correct ascending order of taxonomic categories?",
    "options": ["Kingdom-Phylum-Class-Order-Family-Genus-Species", "Species-Genus-Family-Order-Class-Phylum-Kingdom", "Genus-Species-Family-Order-Class-Kingdom", "Species-Family-Genus-Order-Class-Phylum-Kingdom"],
    "answer": 1,
    "explanation": "Ascending order ka matlab hai chhote se bada. Sabse specific unit 'Species' hai, aur jaise-jaise hum upar jate hain (Kingdom ki taraf), common characters kam hote jate hain. Sahi sequence: Species < Genus < Family < Order < Class < Phylum < Kingdom."
  },
  {
    "question": "Growth in living organisms is:",
    "options": ["Always by cell division", "By accumulation of material only", "External only", "Temporary"],
    "answer": 0,
    "explanation": "Living organisms mein growth 'Intrinsic' (internal) hoti hai jo cell division aur cell mass badhne se hoti hai. Non-living mein growth 'Extrinsic' hoti hai jo surface par material jama hone se hoti hai."
  },
  {
    "question": "Increase in mass by accumulation on surface is seen in:",
    "options": ["Plants", "Animals", "Crystals", "Humans"],
    "answer": 2,
    "explanation": "Crystals, mountains aur sand dunes non-living hain. Inmein growth bahar se material ki accumulation (jama hone) ki wajah se hoti hai, jabki living beings mein cells andar se divide hokar grow karte hain."
  },
  {
    "question": "The most important defining feature of living organisms is:",
    "options": ["Growth", "Reproduction", "Metabolism", "Movement"],
    "answer": 2,
    "explanation": "Metabolism har living cell ke andar hone wali saari chemical reactions ka sum hai. Ye bina kisi exception ke har living organism mein hota hai. Growth aur Reproduction ke exceptions hain, isliye Metabolism defining feature hai."
  },
  {
    "question": "Which of the following is an exception to reproduction as defining feature?",
    "options": ["Human beings", "Mules", "Plants", "Bacteria"],
    "answer": 1,
    "explanation": "Mules, sterile worker bees aur infertile human couples living hain par reproduce nahi kar sakte. Kyunki ye living hone ke bawajood reproduce nahi karte, isliye reproduction 'Defining feature' nahi ban sakta."
  },
  {
    "question": "Consciousness in living organisms refers to:",
    "options": ["Sleeping", "Awareness and response to environment", "Movement only", "Growth"],
    "answer": 1,
    "explanation": "Consciousness ka matlab hai apne aas-paas ke environment (physical, chemical ya biological stimuli) ko sense karna aur unka response dena. Ye sabhi living organisms ki property hai, prokaryotes se lekar eukaryotes tak."
  },
  {
    "question": "Botanical garden mainly helps in:",
    "options": ["Animal preservation", "Growing wild animals", "Collection of living plants", "Fossil study"],
    "answer": 2,
    "explanation": "Botanical gardens 'Ex-situ' conservation ke centres hain jahan living plant species ko identify karke grow kiya jata hai. Har plant par uska scientific naam aur family likhi hoti hai reference ke liye."
  },
  {
    "question": "Zoological parks are useful for:",
    "options": ["Preserving dried plants", "Studying live wild animals", "Preserving fossils", "Naming species"],
    "answer": 1,
    "explanation": "Zoos mein wild animals ko human care ke andar rakha jata hai. Isse humein unke food habits aur behavior ko samajhne mein madad milti hai. Ye education aur conservation dono ke liye zaroori hain."
  },
  {
    "question": "The taxonomical key is used for:",
    "options": ["Measuring plant height", "Identifying organisms", "Preserving animals", "Naming fossils"],
    "answer": 1,
    "explanation": "Taxonomical key ek aid hai jo similarities aur dissimilarities ke basis par identification mein help karti hai. Ismein 'Couplet' (pair of contrasting characters) hote hain jinmein se ek ko select aur dusre ko reject karna hota hai."
  },
  {
    "question": "Museums preserve:",
    "options": ["Living plants", "Preserved specimens", "Only bacteria", "Only fossils"],
    "answer": 1,
    "explanation": "Museums mein plants aur animals ke preserved specimens ko jars mein chemical solutions mein rakha jata hai. Insects ko boxes mein pin karke aur bade animals ko stuff karke rakha jata hai."
  },
  {
    "question": "The number of described species on Earth is approximately:",
    "options": ["0.5 million", "1.7–1.8 million", "10 million", "50 million"],
    "answer": 1,
    "explanation": "Abhi tak scientists ne lagbhag 1.7 se 1.8 million species ko identify aur describe kiya hai. Is biodiversiy ko samajhne ke liye hi humein taxonomy aur nomenclature ki zaroorat padti hai."
  },
  {
    "question": "Systematics includes:",
    "options": ["Only classification", "Only nomenclature", "Evolutionary relationships", "Only identification"],
    "answer": 2,
    "explanation": "Systematics word Latin 'Systema' se aaya hai. Ismein identification, nomenclature aur classification ke saath-saath organisms ke beech ke evolutionary relationships (phylogeny) ko bhi consider kiya jata hai."
  },
  {
    "question": "The smallest taxonomic category is:",
    "options": ["Kingdom", "Phylum", "Species", "Genus"],
    "answer": 2,
    "explanation": "Taxonomic hierarchy mein 'Species' sabse basic aur smallest unit hai. Species ke members aapas mein interbreed karke fertile offspring paida kar sakte hain aur inke beech sabse zyada common features hote hain."
  },
  {
    "question": "The word 'Systema' from which Systematics is derived, was used by:",
    "options": ["Darwin", "Linnaeus", "Bentham", "Huxley"],
    "answer": 1,
    "explanation": "Carolus Linnaeus ne apni publication ka title 'Systema Naturae' rakha tha. Yahin se systematics ka concept popular hua jo organisms ki systematic arrangement ko denote karta hai."
  },
  {
    "question": "In taxonomic hierarchy, as we go from Species to Kingdom, the number of common characteristics:",
    "options": ["Increases", "Decreases", "Remains same", "First increases then decreases"],
    "answer": 1,
    "explanation": "Species mein sabse zyada similarities hoti hain. Jaise-jaise hum higher taxa (Genus -> Family -> Kingdom) ki taraf jate hain, common characters kam hote jate hain aur complexity badhti jati hai."
  },
  {
    "question": "A group of related genera is called:",
    "options": ["Order", "Family", "Class", "Phylum"],
    "answer": 1,
    "explanation": "Kayi saare related Genera (singular: Genus) milkar ek 'Family' banate hain. Families ko unke vegetative aur reproductive features ke base par categorize kiya jata hai (Jaise Solanaceae family)."
  },
  {
    "question": "Which category includes related families?",
    "options": ["Order", "Class", "Phylum", "Kingdom"],
    "answer": 0,
    "explanation": "Related families ko ek 'Order' mein rakha jata hai. Higher categories mein classification aggregate characters (kaafi saare characters ka mel) ke base par hota hai. Jaise Polymoniales order mein Solanaceae aur Convolvulaceae aati hain."
  },
  {
    "question": "For plants, 'Division' is equivalent to which category in animals?",
    "options": ["Class", "Phylum", "Order", "Family"],
    "answer": 1,
    "explanation": "Hierarchy mein Kingdom ke niche animals ke liye 'Phylum' word use hota hai, jabki plants ke liye wahi level 'Division' kehlata hai. Dono ka taxonomic rank same hota hai."
  },
  {
    "question": "The key is based on contrasting characters generally in a pair called:",
    "options": ["Lead", "Couplet", "Doublet", "Unit"],
    "answer": 1,
    "explanation": "Keys hamesha contrasting options ke pair mein hoti hain jise 'Couplet' kehte hain. Couplet mein se har ek statement ko 'Lead' kaha jata hai jo identification ki taraf guide karta hai."
  },
  {
    "question": "Which taxonomical aid contains actual account of habitat and distribution of plants of a given area?",
    "options": ["Manual", "Flora", "Monograph", "Catalogue"],
    "answer": 1,
    "explanation": "'Flora' mein kisi specific area mein paye jane wale plants ka index aur unke habitat ki jaankari hoti hai. Ye us area ki plant diversity ka detailed record hai."
  },
  {
    "question": "Monographs provide information on:",
    "options": ["Any one taxon", "All taxa of an area", "Only species", "Only families"],
    "answer": 0,
    "explanation": "Monograph ek exhaustive document hota hai jisme kisi bhi 'Ek Taxon' (jaise sirf ek Family ya ek Genus) ki poori detail di gayi hoti hai."
  },
  {
    "question": "The process by which anything is grouped into convenient categories based on some easily observable characters is:",
    "options": ["Nomenclature", "Identification", "Classification", "Systematics"],
    "answer": 2,
    "explanation": "Classification wo process hai jisme hum organisms ko unke dikhne wale features ke base par groups mein baant dete hain, taaki unhe asani se identify aur study kiya ja sake."
  },
  {
    "question": "Self-consciousness is the property of:",
    "options": ["All living organisms", "Only animals", "Only humans", "Only eukaryotes"],
    "answer": 2,
    "explanation": "Consciousness toh sabhi living beings mein hoti hai, par 'Self-consciousness' (khud ke baare mein awareness) sirf insaano (Humans) mein hi dekhi jati hai."
  }
],

"Biological Classification": [
  {
    "question": "Methanogens belong to:",
    "options": ["Eubacteria", "Archaebacteria", "Protista", "Fungi"],
    "answer": 1,
    "explanation": "Methanogens ancient bacteria hote hain jo oxygen ke bina rehte hain (anaerobic). Ye methane gas produce karte hain aur extreme marshy areas ya animals ke gut mein milte hain, isliye ye Archaebacteria group ka hissa hain."
  },
  {
    "question": "The cell wall of bacteria is made up of:",
    "options": ["Cellulose", "Chitin", "Peptidoglycan", "Protein"],
    "answer": 2,
    "explanation": "Bacterial cell wall ka main component Peptidoglycan (Murein) hota hai. Ye sugars aur amino acids ka cross-linked framework hai jo bacteria ko osmotic burst se bachata hai aur shape deta hai."
  },
  {
    "question": "Mycoplasma is characterized by absence of:",
    "options": ["DNA", "Ribosomes", "Cell wall", "Plasma membrane"],
    "answer": 2,
    "explanation": "Mycoplasma smallest living cells hain jinke paas 'Cell Wall' bilkul nahi hoti. Isi wajah se ye antibiotics (like Penicillin) se nahi marte jo wall par attack karte hain. Ye oxygen ke bina bhi survive kar sakte hain."
  },
  {
    "question": "The infective agent in viruses is:",
    "options": ["Protein coat", "DNA or RNA", "Envelope", "Capsid"],
    "answer": 1,
    "explanation": "Virus ek nucleoprotein hai. Iska protein coat (capsid) sirf protection deta hai, par asli infection failane wala part iska 'Genetic Material' (DNA ya RNA) hota hai jo host cell ko hijack kar leta hai."
  },
  {
    "question": "Viroids differ from viruses because they:",
    "options": ["Have DNA", "Lack protein coat", "Are larger", "Have envelope"],
    "answer": 1,
    "explanation": "T.O. Diener ne Viroids discover kiye the. Ye viruses se chhote hote hain aur inmein sirf 'Free RNA' hota hai. Inke paas virus ki tarah protein coat (capsid) nahi hota. Ye mostly plants mein disease karte hain."
  },
  {
    "question": "Which kingdom includes unicellular eukaryotes?",
    "options": ["Monera", "Protista", "Fungi", "Plantae"],
    "answer": 1,
    "explanation": "R.H. Whittaker ne saare single-celled eukaryotes (jaise Amoeba, Chlorella) ko Protista kingdom mein rakha hai. Monera mein sirf prokaryotes hote hain, isliye unicellular eukaryotes ke liye Protista hi sahi group hai."
  },
  {
    "question": "Chrysophytes include:",
    "options": ["Diatoms", "Mosses", "Ferns", "Fungi"],
    "answer": 0,
    "explanation": "Chrysophytes mein Diatoms aur Golden Algae (Desmids) aate hain. Diatoms ki walls silica se bani hoti hain jo indestructible hain, aur marne ke baad ye 'Diatomaceous Earth' banati hain."
  },
  {
    "question": "Slime moulds show:",
    "options": ["Plant characteristics only", "Animal characteristics only", "Both plant and animal characteristics", "Fungal characteristics only"],
    "answer": 2,
    "explanation": "Slime moulds saprophytic protists hain. Inmein cell wall nahi hoti (animal character) jab ye aggregate hote hain (Plasmodium), par unfavorable conditions mein ye spores banate hain jinmein cell wall hoti hai (plant character)."
  },
  {
    "question": "Cyanobacteria are also called:",
    "options": ["Green algae", "Blue-green algae", "Red algae", "Brown algae"],
    "answer": 1,
    "explanation": "Cyanobacteria (Blue-green algae) Gram-positive bacteria hain jo photosynthesis kar sakte hain. Inmein chlorophyll-a hota hai jo green plants ke jaisa hai. Ye nitrogen fixation bhi karte hain specialized cells 'Heterocysts' ke through."
  },
  {
    "question": "Dinoflagellates are known for:",
    "options": ["Bioluminescence", "Nitrogen fixation", "Methane production", "Cell wall of cellulose"],
    "answer": 0,
    "explanation": "Dinoflagellates mostly marine hote hain. Inmein se kuch (jaise Gonyaulax) light emit karte hain (Bioluminescence) aur 'Red Tides' create karte hain jo toxins release karke fish ko maar sakte hain."
  },
  {
    "question": "Bacteria reproduce mainly by:",
    "options": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    "answer": 2,
    "explanation": "Bacteria asexual reproduction ke liye Binary Fission ka use karte hain, jahan DNA replicate hota hai aur cell do hisson mein bat jata hai. Unfavorable conditions mein ye spores bhi banate hain."
  },
  {
    "question": "The reserve food in red algae is:",
    "options": ["Starch", "Floridean starch", "Mannitol", "Glycogen"],
    "answer": 1,
    "explanation": "Rhodophyceae (Red Algae) mein food 'Floridean Starch' ke roop mein store hota hai. Iska structure amylopectin aur glycogen se kaafi milta-julta hota hai."
  },
  {
    "question": "Fungi store food in the form of:",
    "options": ["Starch", "Glycogen", "Cellulose", "Glucose"],
    "answer": 1,
    "explanation": "Fungi heterotrophic hote hain aur apna reserve food 'Glycogen' aur 'Oil globules' ke form mein store karte hain, bilkul animals ki tarah. Plants starch store karte hain par fungi nahi."
  },
  {
    "question": "The cell wall of fungi is made up of:",
    "options": ["Cellulose", "Chitin", "Peptidoglycan", "Protein"],
    "answer": 1,
    "explanation": "Fungal cell wall 'Chitin' aur polysaccharides se bani hoti hai. Chitin ek nitrogen-containing polysaccharide hai jo inhein rigidity aur strength provide karta hai."
  },
  {
    "question": "Yeast reproduces by:",
    "options": ["Binary fission", "Budding", "Fragmentation", "Spore formation only"],
    "answer": 1,
    "explanation": "Yeast (Saccharomyces) ek unicellular fungus hai. Ye asexual reproduction 'Budding' ke through karta hai jahan parent cell par ek chhota outgrowth banta hai jo baad mein naya yeast ban jata hai."
  },
  {
    "question": "Lichens are an example of:",
    "options": ["Parasitism", "Commensalism", "Mutualism", "Predation"],
    "answer": 2,
    "explanation": "Lichen ek symbiotic association hai Algae (Phycobiont) aur Fungi (Mycobiont) ke beech. Algae khana banata hai aur Fungus shelter aur minerals deta hai. Dono ek dusre ke bina nahi reh sakte."
  },
  {
    "question": "Bacteriophage infects:",
    "options": ["Plants", "Animals", "Bacteria", "Fungi"],
    "answer": 2,
    "explanation": "Bacteriophage wo viruses hote hain jo sirf Bacteria par hamla karte hain. Inmein mostly double-stranded DNA genetic material ke roop mein hota hai aur inka structure tadpole jaisa hota hai."
  },
  {
    "question": "Which bacteria fix nitrogen?",
    "options": ["Azotobacter", "E.coli", "Lactobacillus", "Salmonella"],
    "answer": 0,
    "explanation": "Azotobacter ek free-living nitrogen-fixing bacterium hai jo mitti mein rehta hai. Ye hawa ki nitrogen ko ammonia mein badal kar mitti ki upaj badhata hai."
  },
  {
    "question": "Red tides are caused by:",
    "options": ["Diatoms", "Dinoflagellates", "Cyanobacteria", "Fungi"],
    "answer": 1,
    "explanation": "Gonyaulax jaise Dinoflagellates samundar mein bahut tezi se multiply karte hain, jisse pura pani laal dikhne lagta hai. Isse 'Red Tide' kehte hain aur ye marine life ke liye dangerous hota hai."
  },
  {
    "question": "Archaebacteria are found in:",
    "options": ["Normal soil", "Extreme conditions", "Fresh water only", "Plants"],
    "answer": 1,
    "explanation": "Archaebacteria 'Extremophiles' hain. Ye extreme salinity (Halophiles), high temperature (Thermoacidophiles) aur oxygen-free environments (Methanogens) mein survive kar sakte hain."
  },
  {
    "question": "The silica cell wall of diatoms is called:",
    "options": ["Capsule", "Frustule", "Shell", "Covering"],
    "answer": 1,
    "explanation": "Diatoms ki walls do thin overlapping shells banati hain jo soap-box ki tarah fit hoti hain. Is silica wall ko 'Frustule' kehte hain jo kabhi destroy nahi hoti."
  },
  {
    "question": "Who discovered viruses?",
    "options": ["Mendel", "Beijerinck", "Linnaeus", "Darwin"],
    "answer": 1,
    "explanation": "M.W. Beijerinck (1898) ne dikhaya ki infected tobacco plant ka extract healthy plant ko bimar kar sakta hai. Unhone is infectious liquid ko 'Contagium vivum fluidum' kaha tha."
  },
  {
    "question": "R.H. Whittaker proposed the Five Kingdom Classification in:",
    "options": ["1956", "1969", "1977", "1986"],
    "answer": 1,
    "explanation": "1969 mein R.H. Whittaker ne Five Kingdom Classification diya tha. Isse pehle sirf Two-Kingdom (Plants/Animals) system tha jo fungi aur bacteria ke differences ko ignore karta tha."
  },
  {
    "question": "The Five Kingdom classification is based mainly on:",
    "options": ["Habitat only", "Cell structure and mode of nutrition", "Colour", "Size"],
    "answer": 1,
    "explanation": "Whittaker ke classification ke main criteria the: Cell structure (Prokaryotic/Eukaryotic), Thallus organisation, Mode of nutrition, Reproduction aur Phylogenetic relationships."
  },
  {
    "question": "Gram-positive bacteria differ from Gram-negative bacteria due to difference in:",
    "options": ["DNA", "Ribosomes", "Cell wall structure", "Cytoplasm"],
    "answer": 2,
    "explanation": "Gram-positive bacteria ki cell wall thick aur simple peptidoglycan se bani hoti hai. Gram-negative ki cell wall complex hoti hai jisme thin peptidoglycan aur ek outer lipopolysaccharide membrane hoti hai."
  },
  {
    "question": "Retroviruses are characterized by presence of:",
    "options": ["DNA", "RNA that forms DNA", "Protein only", "Double cell wall"],
    "answer": 1,
    "explanation": "Retroviruses (jaise HIV) ke paas RNA genetic material hota hai. Ye Reverse Transcriptase enzyme ka use karke host cell ke andar apna RNA se DNA banate hain."
  },
  {
    "question": "The fungal mycelium is composed of:",
    "options": ["Roots", "Hyphae", "Spores", "Nucleus"],
    "answer": 1,
    "explanation": "Fungi ki body lambi, slender, thread-like structures se bani hoti hai jise 'Hyphae' kehte hain. Hyphae ka pura jaal (network) 'Mycelium' कहलाता hai."
  },
  {
    "question": "Mycorrhiza is an association between:",
    "options": ["Algae and fungus", "Plant root and fungus", "Bacteria and fungus", "Virus and plant"],
    "answer": 1,
    "explanation": "Mycorrhiza higher plants ki roots aur fungi ke beech ka mutualistic rishta hai. Fungus phosphorus absorb karke plant ko deta hai aur badle mein plant use sugar/food deta hai."
  },
  {
    "question": "Prions are:",
    "options": ["DNA particles", "RNA particles", "Infectious proteins", "Bacteria"],
    "answer": 2,
    "explanation": "Prions abnormally folded proteins hote hain jo infectious hote hain. Inmein koi genetic material nahi hota. Ye Mad Cow Disease (BSE) aur CJD jaise neurological disorders karte hain."
  },
  {
    "question": "Deuteromycetes are called:",
    "options": ["True fungi", "Imperfect fungi", "Algae-like fungi", "Bacteria-like fungi"],
    "answer": 1,
    "explanation": "Inhe 'Imperfect Fungi' isliye kehte hain kyunki inki life cycle mein sirf asexual (vegetative) phases hi pata hain. Inmein sexual reproduction abhi tak observe nahi kiya gaya hai."
  }
],

"Plant Kingdom": [
  {
    "question": "Algae are primarily:",
    "options": ["Terrestrial plants", "Aquatic photosynthetic organisms", "Parasitic plants", "Non-photosynthetic plants"],
    "answer": 1,
    "explanation": "Algae chlorophyll-bearing, simple, thalloid aur autotrophic organisms hote hain jo mostly 'Aquatic' (fresh water aur marine) environment me milte hain. Ye environment me oxygen ka level badhane me help karte hain."
  },
  {
    "question": "Mannitol is reserve food material in:",
    "options": ["Green algae", "Red algae", "Brown algae", "Blue-green algae"],
    "answer": 2,
    "explanation": "Phaeophyceae (Brown algae) me food complex carbohydrates jaise 'Mannitol' aur 'Laminarin' ke roop me store hota hai. Inme Chlorophyll a, c aur Fucoxanthin pigment hota hai."
  },
  {
    "question": "The plant body in algae is called:",
    "options": ["Mycelium", "Thallus", "Sporophyte", "Gametophyte"],
    "answer": 1,
    "explanation": "Algae ki body differentiated nahi hoti (no true roots, stem, leaves). Is simple plant body ko 'Thallus' kehte hain. Ye primitive plants ki pehchan hai."
  },
  {
    "question": "Bryophytes are called amphibians of plant kingdom because they:",
    "options": ["Live in water", "Live on land", "Need water for reproduction", "Have vascular tissue"],
    "answer": 2,
    "explanation": "Bryophytes mitti (land) par reh sakte hain, par sexual reproduction ke liye unhe 'Water' ki zaroorat hoti hai taaki male gametes swim karke egg tak pahunch sakein. Isliye inhe plant kingdom ke 'Amphibians' kehte hain."
  },
  {
    "question": "Mosses belong to:",
    "options": ["Pteridophytes", "Gymnosperms", "Bryophytes", "Algae"],
    "answer": 2,
    "explanation": "Bryophyta group me do main categories aati hain: Liverworts aur Mosses (jaise Funaria). Inme vascular system absent hota hai aur ye damp areas me milte hain."
  },
  {
    "question": "The dominant phase in bryophytes is:",
    "options": ["Sporophyte", "Gametophyte", "Seed", "Embryo"],
    "answer": 1,
    "explanation": "Bryophytes ki main plant body 'Gametophyte' (haploid) hoti hai jo photosynthetic aur independent hoti hai. Sporophyte is par nutrition ke liye dependent hota hai."
  },
  {
    "question": "Pteridophytes reproduce by:",
    "options": ["Seeds", "Spores", "Flowers", "Fruits"],
    "answer": 1,
    "explanation": "Pteridophytes (jaise Ferns) 'Seedless' vascular plants hain. Ye flowers ya seeds nahi banate, balki 'Spores' produce karte hain jo sporangia ke andar bante hain."
  },
  {
    "question": "Selaginella is an example of:",
    "options": ["Homosporous plant", "Heterosporous plant", "Gymnosperm", "Bryophyte"],
    "answer": 1,
    "explanation": "Zyadatar pteridophytes homosporous hote hain, par 'Selaginella' aur 'Salvinia' do alag size ke spores (Micro & Mega) banate hain, isliye inhe 'Heterosporous' kehte hain."
  },
  {
    "question": "The dominant phase in pteridophytes is:",
    "options": ["Gametophyte", "Sporophyte", "Seed", "Flower"],
    "answer": 1,
    "explanation": "Pteridophytes me main plant body 'Sporophyte' (diploid) hoti hai jisme true roots, stem aur leaves hote hain. Ye evolution me ek bada change tha."
  },
  {
    "question": "Gymnosperms produce:",
    "options": ["Covered seeds", "Naked seeds", "Flowers", "Fruits"],
    "answer": 1,
    "explanation": "Gymnos (Naked) + Sperma (Seed). Inme ovules ovary wall se covered nahi hote, isliye fertilization ke baad banne wale seeds 'Naked' (exposed) rehte hain."
  },
  {
    "question": "Conifers are adapted to extreme conditions because of:",
    "options": ["Broad leaves", "Thin cuticle", "Thick cuticle", "Soft stem"],
    "answer": 2,
    "explanation": "Conifers me needle-like leaves hoti hain jo surface area kam karti hain. Saath hi inme 'Thick Cuticle' aur 'Sunken Stomata' hote hain jo paani ke loss (transpiration) ko rokne me help karte hain."
  },
  {
    "question": "Double fertilization is found in:",
    "options": ["Gymnosperms", "Angiosperms", "Bryophytes", "Pteridophytes"],
    "answer": 1,
    "explanation": "Angiosperms me do male gametes release hote hain: ek egg se milta hai (Syngamy) aur dusra polar nuclei se (Triple fusion). Is unique process ko 'Double Fertilization' kehte hain."
  },
  {
    "question": "The female gametophyte in angiosperms is called:",
    "options": ["Ovule", "Embryo", "Embryo sac", "Pollen grain"],
    "answer": 2,
    "explanation": "Angiosperms me ovule ke andar 'Embryo Sac' banta hai jo female gametophyte ko represent karta hai. Isme 7-celled, 8-nucleated structure hota hai."
  },
  {
    "question": "Angiosperms differ from gymnosperms by presence of:",
    "options": ["Vascular tissue", "Seeds", "Flowers and fruits", "Spores"],
    "answer": 2,
    "explanation": "Angiosperms flowering plants hain jahan seeds fruits ke andar band hote hain. Gymnosperms me na flowers hote hain na fruits, wahan sirf cones milte hain."
  },
  {
    "question": "Water hyacinth reproduces by:",
    "options": ["Seeds only", "Vegetative propagation", "Spores", "Budding"],
    "answer": 1,
    "explanation": "Water hyacinth (Eichhornia) 'Offsets' ke through tezi se vegetative propagation karta hai. Iski wajah se ye poore pond ko cover kar leta hai aur oxygen khatam kar deta hai."
  },
  {
    "question": "Pinus is:",
    "options": ["Monoecious", "Dioecious", "Angiosperm", "Bryophyte"],
    "answer": 0,
    "explanation": "Pinus ek 'Monoecious' gymnosperm hai, matlab male aur female cones ek hi tree par hote hain. Jabki 'Cycas' dioecious hota hai (male aur female plants alag hote hain)."
  },
  {
    "question": "Heterospory is seen in:",
    "options": ["Funaria", "Marchantia", "Selaginella", "Moss"],
    "answer": 2,
    "explanation": "Selaginella me do tarah ke spores bante hain. Heterospory hi wo base hai jiski wajah se aage chalkar plants me 'Seed Habit' evolve hua."
  },
  {
    "question": "Moss plant body represents:",
    "options": ["Sporophyte", "Gametophyte", "Seed", "Flower"],
    "answer": 1,
    "explanation": "Moss (Bryophyte) ki jo leafy structure humein mitti par dikhti hai, wo uska 'Gametophyte' phase hai jo haploid hota hai aur gametes banata hai."
  },
  {
    "question": "The male gametophyte in angiosperms is:",
    "options": ["Ovule", "Pollen grain", "Embryo", "Seed"],
    "answer": 1,
    "explanation": "Pollen grain male gametophyte ko represent karta hai. Ye anther ke andar bante hain aur pollination ke zariye stigma tak pahunchte hain."
  },
  {
    "question": "The reserve food in green algae is:",
    "options": ["Mannitol", "Laminarin", "Floridean starch", "Starch"],
    "answer": 3,
    "explanation": "Chlorophyceae (Green Algae) me food 'Starch' ke roop me store hota hai. Inme storage bodies 'Pyrenoids' hoti hain jo chloroplast me milti hain."
  },
  {
    "question": "Vascular tissues first appeared in:",
    "options": ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms"],
    "answer": 2,
    "explanation": "Evolution ke hisaab se 'Pteridophytes' pehle terrestrial plants the jinke paas Xylem aur Phloem (vascular tissues) mojud the."
  },
  {
    "question": "Funaria is an example of:",
    "options": ["Liverwort", "Moss", "Fern", "Gymnosperm"],
    "answer": 1,
    "explanation": "Funaria ek moss hai. Mosses me erect leafy structure aur multicellular rhizoids hote hain. Ye Bryophyta ka advanced part mana jata hai."
  },
  {
    "question": "The sporophyte of bryophytes is:",
    "options": ["Independent", "Dependent on gametophyte", "Absent", "Seed producing"],
    "answer": 1,
    "explanation": "Bryophytes me sporophyte gametophyte se attach rehta hai aur usi se apna 'Nutrition' leta hai. Ye independent nahi hota."
  },
  {
    "question": "The main plant body in gymnosperms is:",
    "options": ["Gametophyte", "Sporophyte", "Seed", "Spore"],
    "answer": 1,
    "explanation": "Higher plants (Pteridophytes, Gymnosperms, Angiosperms) me main plant body hamesha 'Sporophyte' (2n) hi hoti hai."
  },
  {
    "question": "Ovules in gymnosperms are borne on:",
    "options": ["Flowers", "Fruits", "Cones", "Leaves"],
    "answer": 2,
    "explanation": "Gymnosperms me ovules 'Megasporophylls' par hote hain jo cluster banakar 'Female Cones' (Strobili) banate hain."
  },
  {
    "question": "The seed habit is an evolutionary development seen first in:",
    "options": ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"],
    "answer": 2,
    "explanation": "Pteridophytes me heterospory se shuruat hui, par true 'Seed Habit' (seeds ka banna) sabse pehle Gymnosperms me establish hua."
  },
  {
    "question": "The multicellular haploid stage in plant life cycle is called:",
    "options": ["Sporophyte", "Gametophyte", "Zygote", "Embryo"],
    "answer": 1,
    "explanation": "Plants 'Alternation of Generation' dikhate hain. Haploid multicellular stage 'Gametophyte' hai aur diploid multicellular stage 'Sporophyte' hai."
  },
  {
    "question": "Which group shows true roots, stems and leaves for the first time?",
    "options": ["Bryophytes", "Algae", "Pteridophytes", "Mosses"],
    "answer": 2,
    "explanation": "Algae thalloid hain, Bryophytes me root-like rhizoids hain, par 'Pteridophytes' me pehli baar true roots, stem aur leaves dekhi gayi."
  },
  {
    "question": "Angiosperms are divided into:",
    "options": ["Gymnosperms and Bryophytes", "Monocots and Dicots", "Algae and Moss", "Ferns and Conifers"],
    "answer": 1,
    "explanation": "Seeds me mojud 'Cotyledons' (seed leaves) ke number ke base par Angiosperms ko Monocotyledons (1 cotyledon) aur Dicotyledons (2 cotyledons) me baanta gaya hai."
  },
  {
    "question": "Coconut plant belongs to:",
    "options": ["Dicot", "Monocot", "Gymnosperm", "Bryophyte"],
    "answer": 1,
    "explanation": "Coconut (Cocos nucifera) ek 'Monocot' angiosperm hai. Isme fibrous roots hoti hain aur iske seed me sirf ek hi cotyledon hota hai."
  }
],

"Animal Kingdom": 
[
  {
    "question": "The canal system is a characteristic feature of:",
    "options": ["Coelenterata", "Porifera", "Platyhelminthes", "Annelida"],
    "answer": 1,
    "explanation": "Porifera (Sponges) mein ek unique 'Water Transport' ya 'Canal System' hota hai. Paani microscopic pores (Ostia) से body cavity (Spongocoel) mein jata hai aur Osculum se bahar nikalta hai. Ye system food gathering, respiratory exchange aur waste removal mein help karta hai."
  },
  {
    "question": "The body symmetry in Hydra is:",
    "options": ["Bilateral", "Radial", "Asymmetrical", "Spherical"],
    "answer": 1,
    "explanation": "Hydra (Coelenterata) mein 'Radial Symmetry' milti hai. Iska matlab hai ki agar koi bhi plane central axis se guzre, toh wo body ko do identical halves mein divide kar deta hai. Ye mostly un animals mein hota hai jo paani mein ek jagah base par ruke hote hain."
  },
  {
    "question": "Flame cells are characteristic of:",
    "options": ["Annelida", "Arthropoda", "Platyhelminthes", "Mollusca"],
    "answer": 2,
    "explanation": "Platyhelminthes (Flatworms) mein specialized cells hoti hain jinhe 'Flame Cells' (Solenocytes) kehte hain. Inka main kaam Osmoregulation (body fluid balance) aur Excretion (waste nikalna) hota hai."
  },
  {
    "question": "Roundworms belong to:",
    "options": ["Annelida", "Nematoda", "Mollusca", "Echinodermata"],
    "answer": 1,
    "explanation": "Aschelminthes को common language mein 'Roundworms' kehte hain kyunki cross-section mein inki body circular dikhti hai. Inmein 'Pseudocoelom' (false body cavity) present hoti hai."
  },
  {
    "question": "Closed circulatory system is found in:",
    "options": ["Cockroach", "Earthworm", "Pila", "Starfish"],
    "answer": 1,
    "explanation": "Earthworm (Annelida) mein 'Closed Circulatory System' hota hai, jahan blood hamesha blood vessels ke network ke andar hi flow karta hai. Cockroach mein open system hota hai jahan blood cavities (sinuses) mein bhara rehta hai."
  },
  {
    "question": "The joint between atlas and axis is a:",
    "options": ["Hinge joint", "Pivot joint", "Ball and socket joint", "Saddle joint"],
    "answer": 1,
    "explanation": "Atlas (C1) aur Axis (C2) vertebrae ke beech 'Pivot Joint' hota hai. Ye joint humein apna sar 'No' kehne ke liye side-to-side rotate karne ki permission deta hai."
  },
  {
    "question": "The excretory organ in cockroach is:",
    "options": ["Nephridia", "Flame cells", "Malpighian tubules", "Kidneys"],
    "answer": 2,
    "explanation": "Cockroach (Arthropoda) mein excretion 'Malpighian Tubules' ke through hota hai. Ye yellow rang की thread-like structures hoti hain jo hemolymph se metabolic waste (Uric acid) ko nikal kar bahar bhejti hain."
  },
  {
    "question": "The respiratory organ in fish is:",
    "options": ["Lungs", "Gills", "Skin", "Trachea"],
    "answer": 1,
    "explanation": "Pisces (Fishes) aquatic hote hain aur saans lene ke liye 'Gills' ka use karte hain. Gills paani mein ghuli hui oxygen (dissolved oxygen) ko blood mein absorb karte hain aur CO2 bahar nikalte hain."
  },
  {
    "question": "Segmentation is characteristic of:",
    "options": ["Annelida", "Cnidaria", "Porifera", "Mollusca"],
    "answer": 0,
    "explanation": "Annelida mein body 'Metamerically Segmented' hoti hai, yaani body bahar aur andar se chote-chote segments (metameres) mein divide hoti hai. Earthworm iska sabse bada example hai."
  },
  {
    "question": "Radula is found in:",
    "options": ["Arthropoda", "Mollusca", "Echinodermata", "Annelida"],
    "answer": 1,
    "explanation": "Mollusca (jaise Pila/Snail) ke mooh mein ek file-like rasping organ hota hai jise 'Radula' kehte hain. Ye khane ko scrape karne aur chote tukdon mein todne ke kaam aata hai."
  },
  {
    "question": "Water vascular system is present in:",
    "options": ["Arthropoda", "Echinodermata", "Mollusca", "Annelida"],
    "answer": 1,
    "explanation": "Echinodermata (jaise Starfish) ki sabse khas pehchan unka 'Water Vascular System' hai. Ye locomotion (chalne), capture/transport of food aur respiration mein help karta hai."
  },
  {
    "question": "The body cavity in annelids is:",
    "options": ["Acoelom", "Pseudocoelom", "True coelom", "No cavity"],
    "answer": 2,
    "explanation": "Annelids 'Eucoelomates' hain, yaani inmein 'True Coelom' hota hai jo mesoderm layer se charon taraf se lined rehta hai. Ye evolution mein ek bada upgrade tha."
  },
  {
    "question": "Amphibians can live:",
    "options": ["Only in water", "Only on land", "Both in water and land", "Only underground"],
    "answer": 2,
    "explanation": "Amphibians (Amphi = dual, Bios = life) wo vertebrates hain jo land par reh sakte hain par unhe breeding/reproduction ke liye paani ki zaroorat hoti hai. Inki skin moist hoti hai jo respiration mein help karti hai."
  },
  {
    "question": "The heart of frog is:",
    "options": ["Two-chambered", "Three-chambered", "Four-chambered", "One-chambered"],
    "answer": 1,
    "explanation": "Frog (Amphibia) ka heart '3-chambered' hota hai jisme 2 Atria aur 1 Ventricle hota hai. Is wajah se oxygenated aur deoxygenated blood ventricle mein mix ho jata hai."
  },
  {
    "question": "Mammals are characterized by:",
    "options": ["Feathers", "Mammary glands", "Scales", "Gills"],
    "answer": 1,
    "explanation": "Mammalia class ki sabse unique property 'Mammary Glands' (milk producing glands) ka hona hai, jisse wo apne bacchon ko nutrition dete hain. Saath hi inki skin par baal (hairs) aur kaan mein pinna hota hai."
  },
  {
    "question": "The notochord is present in:",
    "options": ["Non-chordates", "Chordates", "Porifera", "Cnidaria"],
    "answer": 1,
    "explanation": "Chordata phylum ke sabhi animals mein life ke kisi na kisi stage par 'Notochord' (ek rod-like structure) present hoti hai. Non-chordates mein ye absent hoti hai."
  },
  {
    "question": "The phylum with jointed appendages is:",
    "options": ["Mollusca", "Arthropoda", "Annelida", "Echinodermata"],
    "answer": 1,
    "explanation": "Arthropoda (Arthro = joint, Poda = appendages/legs) animal kingdom ka sabse bada phylum hai. Inmein jointed legs aur chitin ka bana exoskeleton hota hai."
  },
  {
    "question": "Spongocoel is found in:",
    "options": ["Hydra", "Earthworm", "Sponge", "Starfish"],
    "answer": 2,
    "explanation": "Sponges (Porifera) ki central cavity ko 'Spongocoel' kehte hain. Is cavity ko specialized flagellated cells line karti hain jinhe 'Choanocytes' (Collar cells) kehte hain."
  },
  {
    "question": "Animals with two germ layers are called:",
    "options": ["Triploblastic", "Diploblastic", "Acoelomate", "Coelomate"],
    "answer": 1,
    "explanation": "Diploblastic animals mein cells do embryonic layers mein arranged hote hain: external Ectoderm aur internal Endoderm. Example: Coelenterates aur Ctenophores."
  },
  {
    "question": "Animals with three germ layers are called:",
    "options": ["Diploblastic", "Acoelomate", "Triploblastic", "Radial"],
    "answer": 2,
    "explanation": "Triploblastic animals mein teen layers hoti hain: Ectoderm, Endoderm aur beech mein Mesoderm. Platyhelminthes se lekar Chordates tak sabhi triploblastic hote hain."
  },
  {
    "question": "Aschelminthes are:",
    "options": ["Acoelomate", "Pseudocoelomate", "True coelomate", "Diploblastic"],
    "answer": 1,
    "explanation": "Aschelminthes mein body cavity mesoderm se charon taraf lined nahi hoti, balki mesoderm chote patches mein bikhra hota hai. Is false cavity ko 'Pseudocoelom' kehte hain."
  },
  {
    "question": "Platyhelminthes are:",
    "options": ["Coelomate", "Pseudocoelomate", "Acoelomate", "Triploblastic coelomate"],
    "answer": 2,
    "explanation": "Flatworms (Platyhelminthes) triploblastic toh hote hain, par inmein koi body cavity nahi hoti. Isliye inhein 'Acoelomates' kaha jata hai."
  },
  {
    "question": "Tube within tube body plan is seen in:",
    "options": ["Porifera", "Cnidaria", "Annelida", "Hydra"],
    "answer": 2,
    "explanation": "Tube-within-a-tube plan mein ek separate digestive track hota hai jisme do openings (Mouth aur Anus) hoti hain. Ye Aschelminthes se lekar Chordates tak sab mein milta hai."
  },
  {
    "question": "Blind sac body plan is seen in:",
    "options": ["Arthropoda", "Annelida", "Cnidaria", "Mollusca"],
    "answer": 2,
    "explanation": "Blind-sac plan mein digestive system ki sirf ek hi opening hoti hai jo mouth aur anus dono ka kaam karti hai. Example: Platyhelminthes aur Cnidaria."
  },
  {
    "question": "The larval stage of frog is called:",
    "options": ["Maggot", "Tadpole", "Nymph", "Caterpillar"],
    "answer": 1,
    "explanation": "Frog ke larva ko 'Tadpole' kehte hain. Ye poori tarah aquatic hota hai aur gills se saans leta hai. Metamorphosis ke through ye adult frog mein badal jata hai jo lungs ka use karta hai."
  },
  {
    "question": "The class Mammalia belongs to phylum:",
    "options": ["Arthropoda", "Mollusca", "Chordata", "Annelida"],
    "answer": 2,
    "explanation": "Mammalia Chordata phylum ka hissa hai kyunki inmein notochord, dorsal hollow nerve cord aur pharyngeal gill slits present hote hain (at least embryonic stage mein)."
  },
  {
    "question": "Pisces respire through:",
    "options": ["Lungs", "Skin", "Gills", "Trachea"],
    "answer": 2,
    "explanation": "Fishes (Pisces) paani mein ghuli oxygen lene ke liye 'Gills' ka use karti hain. Cartilaginous fish (Chondrichthyes) mein gill slits khule hote hain, jabki Bony fish (Osteichthyes) mein wo Operculum se dhake hote hain."
  },
  {
    "question": "Reptiles are characterized by:",
    "options": ["Moist skin", "Scales", "Feathers", "Gills"],
    "answer": 1,
    "explanation": "Reptiles land par rehne ke liye adapted hain. Inki body dry aur cornified skin se dhaki hoti hai jisme epidermal 'Scales' ya scutes hote hain. Inke paas external ear openings nahi hoti."
  },
  {
    "question": "Birds belong to class:",
    "options": ["Amphibia", "Reptilia", "Aves", "Mammalia"],
    "answer": 2,
    "explanation": "Birds ko class 'Aves' mein rakha gaya hai. Inki sabse badi pehchan 'Feathers' ka hona aur udne ki ability (flight) hai. Inka skeleton hollow bones (pneumatic bones) ka bana hota hai."
  },
  {
    "question": "The vertebral column is absent in:",
    "options": ["Frog", "Human", "Cockroach", "Fish"],
    "answer": 2,
    "explanation": "Cockroach ek Invertebrate (Arthropod) hai, isliye ismein 'Vertebral Column' (backbone) nahi hoti. Vertebral column sirf sub-phylum Vertebrata ke animals mein milti hai."
  }
],

"Morphology of Flowering Plants":[
  {
    "question": "The outermost whorl of a flower is:",
    "options": ["Corolla", "Androecium", "Calyx", "Gynoecium"],
    "answer": 2,
    "explanation": "Flower ke char whorls hote hain. Sabse bahar wala 'Calyx' (Sepals) hota hai jo bud stage mein flower ko protect karta hai. Uske baad Corolla (Petals), fir Androecium aur sabse andar Gynoecium hota hai."
  },
  {
    "question": "The arrangement of sepals or petals in floral bud is called:",
    "options": ["Placentation", "Aestivation", "Venation", "Phyllotaxy"],
    "answer": 1,
    "explanation": "Floral bud mein sepals ya petals ke aapas mein rehne ke dhang ko 'Aestivation' kehte hain. Iske main types hain: Valvate, Twisted, Imbricate aur Vexillary."
  },
  {
    "question": "In axile placentation, ovules are attached to:",
    "options": ["Central axis", "Ovary wall", "Base of ovary", "Free central region"],
    "answer": 0,
    "explanation": "Axile placentation mein ovary multilocular hoti hai aur ovules 'Central Axis' par lage hote hain. Example: China rose, Tomato, aur Lemon."
  },
  {
    "question": "Mustard shows which type of aestivation?",
    "options": ["Twisted", "Valvate", "Imbricate", "Vexillary"],
    "answer": 2,
    "explanation": "Mustard aur Cassia mein 'Imbricate' aestivation milta hai, jahan sepals ya petals ek dusre ko overlap toh karte hain par kisi fix direction mein nahi."
  },
  {
    "question": "The edible part of coconut is:",
    "options": ["Endocarp", "Mesocarp", "Endosperm", "Embryo"],
    "answer": 2,
    "explanation": "Coconut ek drupe fruit hai. Iska edible part 'Endosperm' hota hai. Jo pani hum peete hain wo free-nuclear endosperm hai aur white part cellular endosperm hai."
  },
  {
    "question": "The venation in monocot leaves is generally:",
    "options": ["Reticulate", "Parallel", "Dichotomous", "Net-like"],
    "answer": 1,
    "explanation": "Monocots (Grass, Maize) mein veins ek dusre ke parallel hoti hain, jise 'Parallel Venation' kehte hain. Dicots mein reticulate (net-like) venation milti hai."
  },
  {
    "question": "The type of root system in dicots is:",
    "options": ["Fibrous", "Tap root", "Adventitious", "Prop root"],
    "answer": 1,
    "explanation": "Dicots mein radicle se 'Tap Root' banti hai jo mitti mein gehri jati hai. Monocots mein radicle jaldi khatam ho jata hai aur base se 'Fibrous Roots' nikalti hain."
  },
  {
    "question": "Modification of stem in potato is:",
    "options": ["Tuber", "Rhizome", "Corm", "Bulb"],
    "answer": 0,
    "explanation": "Potato ek underground stem modification hai jise 'Tuber' kehte hain. Is par 'eyes' hoti hain jo asal mein axillary buds hain."
  },
  {
    "question": "The floral formula represents:",
    "options": ["Genetic makeup", "Floral structure in symbols", "Leaf arrangement", "Root type"],
    "answer": 1,
    "explanation": "Floral formula symbols ka use karke flower ki symmetry, sex, calyx, corolla, androecium aur gynoecium ki condition batata hai."
  },
  {
    "question": "Vexillary aestivation is characteristic of:",
    "options": ["Solanaceae", "Fabaceae", "Liliaceae", "Poaceae"],
    "answer": 1,
    "explanation": "Fabaceae (Pea family) mein 'Vexillary' ya Papilionaceous aestivation hota hai. Ismein 1 bada (Standard), 2 side wale (Wings) aur 2 jude hue (Keel) petals hote hain."
  },
  {
    "question": "The fruit formed from a single ovary of a single flower is:",
    "options": ["Aggregate fruit", "Multiple fruit", "Simple fruit", "Composite fruit"],
    "answer": 2,
    "explanation": "Jab fruit ek hi flower ki monocarpellary ya multicarpellary syncarpous ovary se banta hai, toh use 'Simple Fruit' kehte hain (e.g., Mango)."
  },
  {
    "question": "Onion shows which type of inflorescence?",
    "options": ["Raceme", "Umbel", "Spike", "Capitulum"],
    "answer": 1,
    "explanation": "Onion (Liliaceae) mein flowers ek hi point se nikalte hain aur umbrella jaisa dikhte hain, ise 'Umbel' kehte hain."
  },
  {
    "question": "A flower having both androecium and gynoecium is called:",
    "options": ["Unisexual", "Bisexual", "Neuter", "Dioecious"],
    "answer": 1,
    "explanation": "Agar flower mein male (Stamen) aur female (Carpel) dono organs hain, toh wo 'Bisexual' hai. Agar sirf ek hai, toh 'Unisexual' (e.g., Papaya)."
  },
  {
    "question": "The position of ovary above other floral parts is called:",
    "options": ["Epigynous", "Perigynous", "Hypogynous", "Actinomorphic"],
    "answer": 2,
    "explanation": "Hypogynous condition mein Gynoecium sabse upar (Superior Ovary) hota hai aur baaki parts uske niche se nikalte hain. Example: Mustard, China rose, Brinjal."
  },
  {
    "question": "The edible part of apple is:",
    "options": ["Ovary", "Thalamus", "Endocarp", "Seed"],
    "answer": 1,
    "explanation": "Apple ek 'False Fruit' hai kyunki ismein ovary ke saath-saath 'Thalamus' bhi fleshy ho jata hai aur wahi edible part banta hai."
  },
  {
    "question": "Leaf arrangement on stem is called:",
    "options": ["Venation", "Phyllotaxy", "Aestivation", "Placentation"],
    "answer": 1,
    "explanation": "Stem ya branch par leaves ke arrangement ke dhang ko 'Phyllotaxy' kehte hain. Ye Alternate, Opposite ya Whorled ho sakti hai."
  },
  {
    "question": "The fruit of pea is:",
    "options": ["Drupe", "Berry", "Legume", "Capsule"],
    "answer": 2,
    "explanation": "Pea family (Fabaceae) ka characteristic fruit 'Legume' ya Pod hai, jo dry hone par dono sutures se phat jata hai."
  },
  {
    "question": "In reticulate venation, veins form:",
    "options": ["Parallel lines", "Network", "Circles", "Spirals"],
    "answer": 1,
    "explanation": "Jab veinlets ek jaal (network) banati hain, toh use 'Reticulate Venation' kehte hain. Ye Dicots ki pehchan hai."
  },
  {
    "question": "Maize has:",
    "options": ["Tap root", "Fibrous root", "Prop root", "Breathing root"],
    "answer": 1,
    "explanation": "Maize ek monocot hai, ismein mukhya jhad (primary root) jaldi khatam ho jati hai aur uski jagah base se dher saari 'Fibrous Roots' nikal aati hain."
  },
  {
    "question": "The male reproductive part of flower is:",
    "options": ["Carpel", "Pistil", "Stamen", "Ovule"],
    "answer": 2,
    "explanation": "Androecium whorl 'Stamens' se bana hota hai. Har stamen mein ek filament aur ek anther hota hai jo pollen grains banata hai."
  },
  {
    "question": "Ovules are present inside:",
    "options": ["Stamen", "Ovary", "Anther", "Petal"],
    "answer": 1,
    "explanation": "Gynoecium ke basal swollen part ko 'Ovary' kehte hain. Iske andar placenta par 'Ovules' jude hote hain jo baad mein seeds bante hain."
  },
  {
    "question": "The swollen base of flower is called:",
    "options": ["Pedicel", "Thalamus", "Calyx", "Corolla"],
    "answer": 1,
    "explanation": "Flower ki dandi (pedicel) ka wo phoola hua hissa jis par saare floral whorls bethte hain, use 'Thalamus' ya Receptacle kehte hain."
  },
  {
    "question": "Inflorescence in sunflower is:",
    "options": ["Raceme", "Capitulum", "Umbel", "Spike"],
    "answer": 1,
    "explanation": "Sunflower (Asteraceae) mein saare chote flowers (florets) ek common receptacle par hote hain, ise 'Capitulum' ya Head inflorescence kehte hain."
  },
  {
    "question": "Rhizome is seen in:",
    "options": ["Ginger", "Potato", "Onion", "Colocasia"],
    "answer": 0,
    "explanation": "Ginger (Adrak) aur Turmeric (Haldi) mein underground stem modification 'Rhizome' hota hai jo horizontally grow karta hai."
  },
  {
    "question": "A flower divisible into two equal halves in only one plane is:",
    "options": ["Actinomorphic", "Zygomorphic", "Asymmetrical", "Regular"],
    "answer": 1,
    "explanation": "Bilateral symmetry wale flowers ko 'Zygomorphic' kehte hain (e.g., Pea, Gulmohur). Actinomorphic wo hote hain jo kisi bhi plane se do hisson mein kat jayein (Radial symmetry)."
  },
  {
    "question": "The outer covering of seed is formed from:",
    "options": ["Ovary", "Ovule", "Integuments", "Embryo"],
    "answer": 2,
    "explanation": "Ovule ki protective layers yaani 'Integuments' hi fertilization ke baad hard ho kar 'Seed Coat' (Testa aur Tegmen) banati hain."
  },
  {
    "question": "In marginal placentation, ovules are attached to:",
    "options": ["Central axis", "Ovary wall", "Placenta along the ventral suture", "Base of ovary"],
    "answer": 2,
    "explanation": "Marginal placentation mein placenta ovary ki 'Ventral Suture' par ridge banata hai aur ovules do rows mein lage hote hain. Example: Pea."
  },
  {
    "question": "Parietal placentation is found in:",
    "options": ["Mustard", "Lemon", "Pea", "Sunflower"],
    "answer": 0,
    "explanation": "Parietal placentation mein ovules ovary ki inner wall par hote hain. Example: Mustard aur Argemone. Inmein kabhi-kabhi false septum (Replum) bhi dikhta hai."
  },
  {
    "question": "When leaves are arranged alternately on stem, it is called:",
    "options": ["Opposite phyllotaxy", "Whorled phyllotaxy", "Alternate phyllotaxy", "Spiral venation"],
    "answer": 2,
    "explanation": "Agar har node par sirf ek hi leaf nikal rahi hai ek alternate pattern mein, toh use 'Alternate Phyllotaxy' kehte hain. Example: China rose, Mustard."
  },
  {
    "question": "Perigynous flower has:",
    "options": ["Superior ovary", "Inferior ovary", "Ovary surrounded by thalamus cup", "No ovary"],
    "answer": 2,
    "explanation": "Perigynous condition mein Gynoecium centre mein hota hai aur baaki parts thalamus ke rim par lagbhag same level par hote hain. Ovary ko 'Half-Inferior' kehte hain. Example: Plum, Rose, Peach."
  }
],

"Anatomy of Flowering Plants": [
{
question:"Stomata are found in:",
options:["Root","Stem","Leaf","Seed"],
answer:2,
explanation:"Stomata are small pores present mainly on leaves for gas exchange."
},
{
question:"Xylem transports:",
options:["Food","Water","Hormones","Oxygen"],
answer:1,
explanation:"Xylem tissue transports water and minerals from roots to other parts."
}
],

"Structural Organisation in Animals": [
{
question:"Study of tissues is called:",
options:["Histology","Morphology","Cytology","Physiology"],
answer:0,
explanation:"Histology is the study of tissues."
},
{
question:"Epithelial tissue functions in:",
options:["Support","Protection","Conduction","Movement"],
answer:1,
explanation:"Epithelial tissue covers body surfaces and provides protection."
}
],

"Cell – The Unit of Life": [
{
question:"Powerhouse of cell is:",
options:["Nucleus","Mitochondria","Ribosome","Golgi"],
answer:1,
explanation:"Mitochondria produce ATP and are called powerhouse of the cell."
},
{
question:"Ribosomes are responsible for:",
options:["Photosynthesis","Protein synthesis","Respiration","Digestion"],
answer:1,
explanation:"Ribosomes synthesize proteins inside cells."
}
],

"Biomolecules": [
{
question:"Proteins are made of:",
options:["Amino acids","Fatty acids","Glucose","Nucleotides"],
answer:0,
explanation:"Proteins are polymers made of amino acids."
},
{
question:"DNA is a:",
options:["Carbohydrate","Protein","Nucleic acid","Lipid"],
answer:2,
explanation:"DNA is a nucleic acid that carries genetic information."
}
],

"Cell Cycle and Cell Division": [
{
question:"Mitosis occurs in:",
options:["Somatic cells","Gametes","Zygote only","Spores"],
answer:0,
explanation:"Mitosis occurs in somatic (body) cells."
},
{
question:"Crossing over occurs in:",
options:["Prophase I","Metaphase","Anaphase","Telophase"],
answer:0,
explanation:"Crossing over happens in Prophase I of meiosis."
}
],

"Transport in Plants": [
{
question:"Water moves upward by:",
options:["Transpiration pull","Diffusion","Osmosis only","Respiration"],
answer:0,
explanation:"Transpiration pull helps water move upward in plants."
},
{
question:"Food is transported through:",
options:["Xylem","Phloem","Cambium","Cortex"],
answer:1,
explanation:"Phloem transports food from leaves to other parts."
}
],

"Mineral Nutrition": [
{
question:"Nitrogen is required for:",
options:["Chlorophyll","Protein synthesis","Respiration","Digestion"],
answer:1,
explanation:"Nitrogen is essential for making amino acids and proteins."
},
{
question:"Deficiency of iron causes:",
options:["Chlorosis","Wilting","Death","Rot"],
answer:0,
explanation:"Iron deficiency causes yellowing of leaves (chlorosis)."
}
],

"Photosynthesis in Higher Plants": [
{
question:"Photosynthesis occurs in:",
options:["Mitochondria","Chloroplast","Nucleus","Ribosome"],
answer:1,
explanation:"Chloroplast is the site of photosynthesis."
},
{
question:"Light reaction occurs in:",
options:["Stroma","Thylakoid","Cytoplasm","Matrix"],
answer:1,
explanation:"Light reaction takes place in thylakoid membranes."
}
],

"Respiration in Plants": [
{
question:"Glycolysis occurs in:",
options:["Mitochondria","Cytoplasm","Nucleus","Chloroplast"],
answer:1,
explanation:"Glycolysis occurs in cytoplasm."
},
{
question:"ATP is produced in:",
options:["Photosynthesis only","Respiration","Digestion","Excretion"],
answer:1,
explanation:"ATP is produced mainly during cellular respiration."
}
],

"Plant Growth and Development": [
{
question:"Auxin promotes:",
options:["Root growth","Stem elongation","Flowering","Seed dormancy"],
answer:1,
explanation:"Auxin hormone promotes stem elongation."
},
{
question:"Gibberellin helps in:",
options:["Seed germination","Death","Dormancy","Aging"],
answer:0,
explanation:"Gibberellin promotes seed germination."
}
],

"Digestion and Absorption": [
{
question:"Protein digestion begins in:",
options:["Mouth","Stomach","Small intestine","Large intestine"],
answer:1,
explanation:"Protein digestion begins in stomach by pepsin."
},
{
question:"Absorption mainly occurs in:",
options:["Stomach","Small intestine","Large intestine","Mouth"],
answer:1,
explanation:"Most absorption happens in small intestine."
}
],

"Breathing and Exchange of Gases": [
{
question:"Gas exchange occurs in:",
options:["Alveoli","Bronchi","Trachea","Larynx"],
answer:0,
explanation:"Alveoli are tiny air sacs where gas exchange occurs."
},
{
question:"Oxygen is transported by:",
options:["Plasma","Hemoglobin","Platelets","WBC"],
answer:1,
explanation:"Hemoglobin carries oxygen in blood."
}
],

"Body Fluids and Circulation": [
{
question:"Human heart has:",
options:["2 chambers","3 chambers","4 chambers","5 chambers"],
answer:2,
explanation:"Human heart has four chambers."
},
{
question:"Universal donor blood group is:",
options:["A","B","AB","O"],
answer:3,
explanation:"Blood group O is universal donor."
}
],

"Excretory Products and Their Elimination": [
{
question:"Functional unit of kidney is:",
options:["Neuron","Nephron","Alveolus","Villus"],
answer:1,
explanation:"Nephron is the functional unit of kidney."
},
{
question:"Urea is formed in:",
options:["Kidney","Liver","Heart","Lungs"],
answer:1,
explanation:"Urea is formed in liver."
}
],

"Locomotion and Movement": [
{
question:"Joint in shoulder is:",
options:["Hinge","Pivot","Ball and socket","Gliding"],
answer:2,
explanation:"Shoulder has ball and socket joint."
},
{
question:"Muscle responsible for bending arm:",
options:["Triceps","Biceps","Deltoid","Gluteus"],
answer:1,
explanation:"Biceps muscle bends the arm."
}
],

"Neural Control and Coordination": [
{
question:"Basic unit of nervous system:",
options:["Neuron","Nephron","Alveolus","Cell"],
answer:0,
explanation:"Neuron is the basic structural and functional unit of nervous system."
},
{
question:"Brain is protected by:",
options:["Ribs","Skull","Skin","Heart"],
answer:1,
explanation:"Brain is protected by skull."
}
],

"Chemical Coordination and Integration": [
  {
    "question": "The master gland of endocrine system is:",
    "options": ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pancreas"],
    "answer": 1,
    "explanation": "Pituitary gland ko master gland kehte hain kyunki ye dusri endocrine glands ko control karta hai. Ye brain ke niche located hota hai aur growth hormone, TSH, FSH, LH jaise hormones release karta hai."
  },
  {
    "question": "The hormone responsible for regulation of metabolism is:",
    "options": ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
    "answer": 1,
    "explanation": "Thyroxine thyroid gland se release hota hai aur body ka basal metabolic rate (BMR) control karta hai. Ye energy production aur growth me important role play karta hai."
  },
  {
    "question": "The hormone that lowers blood glucose level is:",
    "options": ["Glucagon", "Insulin", "Adrenaline", "Cortisol"],
    "answer": 1,
    "explanation": "Insulin pancreas ke beta cells se release hota hai. Ye blood me glucose level ko kam karta hai by helping cells absorb glucose. Iski kami se Diabetes Mellitus hota."
  },
  {
    "question": "The hormone that increases blood glucose level is:",
    "options": ["Insulin", "Glucagon", "Thyroxine", "Prolactin"],
    "answer": 1,
    "explanation": "Glucagon pancreas ke alpha cells se release hota hai. Ye liver me glycogen ko glucose me convert karta hai (Glycogenolysis) aur blood sugar level badhata hai."
  },
  {
    "question": "The hormone responsible for fight or flight response is:",
    "options": ["Thyroxine", "Adrenaline", "Oxytocin", "Prolactin"],
    "answer": 1,
    "explanation": "Adrenaline (Epinephrine) adrenal medulla se release hota hai. Ye heart rate aur breathing rate badhakar body ko emergency situation ke liye ready karta hai."
  },
  {
    "question": "The hormone responsible for development of secondary sexual characters in females is:",
    "options": ["Testosterone", "Estrogen", "Insulin", "ADH"],
    "answer": 1,
    "explanation": "Estrogen ovaries se release hota hai aur females me secondary sexual characters jaise breast development aur menstrual cycle ko regulate karta hai."
  },
  {
    "question": "The hormone responsible for development of secondary sexual characters in males is:",
    "options": ["Estrogen", "Progesterone", "Testosterone", "Thyroxine"],
    "answer": 2,
    "explanation": "Testosterone Leydig cells (testes) se release hota hai aur males me deep voice, facial hair aur muscle growth control karta hai."
  },
  {
    "question": "The hormone that regulates water balance in body is:",
    "options": ["Insulin", "ADH", "Thyroxine", "Cortisol"],
    "answer": 1,
    "explanation": "ADH (Antidiuretic Hormone/Vasopressin) kidney me water reabsorption ko badhata hai, jisse urine concentration regulate hota hai."
  },
  {
    "question": "The gland located on top of kidney is:",
    "options": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
    "answer": 2,
    "explanation": "Adrenal glands (Suprarenal glands) dono kidneys ke top par hote hain. Inke do parts hote hain: Cortex aur Medulla."
  },
  {
    "question": "The hormone that stimulates milk ejection is:",
    "options": ["Prolactin", "Oxytocin", "Estrogen", "FSH"],
    "answer": 1,
    "explanation": "Oxytocin 'milk let-down' hormone hai jo smooth muscles ko contract karke milk ejection trigger karta hai. Prolactin sirf milk synthesis karta hai."
  },
  {
    "question": "The deficiency of iodine causes:",
    "options": ["Diabetes", "Goitre", "Anemia", "Asthma"],
    "answer": 1,
    "explanation": "Iodine ki kami se Thyroid gland enlarge ho jata hai jise Goitre kehte hain. Iodine thyroxine hormone ke synthesis ke liye mandatory hai."
  },
  {
    "question": "The hormone secreted by posterior pituitary is:",
    "options": ["Growth hormone", "TSH", "Oxytocin", "FSH"],
    "answer": 2,
    "explanation": "Posterior pituitary (Neurohypophysis) hormones store aur release karta hai jo hypothalamus me bante hain, jaise Oxytocin aur ADH."
  },
  {
    "question": "The hormone that stimulates thyroid gland is:",
    "options": ["ACTH", "FSH", "TSH", "LH"],
    "answer": 2,
    "explanation": "TSH (Thyroid Stimulating Hormone) pituitary se nikal kar thyroid gland ko thyroxine banane ka order deta hai."
  },
  {
    "question": "The hormone responsible for ovulation is:",
    "options": ["FSH", "LH", "Estrogen", "Prolactin"],
    "answer": 1,
    "explanation": "LH (Luteinizing Hormone) ka surge (increase) ovulation trigger karta hai aur Graafian follicle se egg release karwata hai."
  },
  {
    "question": "The hormone that stimulates milk production is:",
    "options": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    "answer": 1,
    "explanation": "Prolactin milk production (synthesis) ke liye responsible hota hai, jabki Oxytocin milk ke bahar nikalne (ejection) me help karta hai."
  },
  {
    "question": "The hormone that regulates calcium level in blood is:",
    "options": ["Insulin", "Parathormone", "Thyroxine", "Adrenaline"],
    "answer": 1,
    "explanation": "Parathormone (PTH) blood calcium badhata hai, jabki Calcitonin ise kam karta hai. Dono milkar calcium homeostasis maintain karte hain."
  },
  {
    "question": "The hormone secreted by pancreas that converts glucose into glycogen is:",
    "options": ["Glucagon", "Insulin", "Cortisol", "ACTH"],
    "answer": 1,
    "explanation": "Insulin glycogenesis ko promote karta hai, jisme extra blood glucose ko liver aur muscles me glycogen ke roop me store kiya jata hai."
  },
  {
    "question": "The hormone responsible for stress adaptation is:",
    "options": ["Cortisol", "Estrogen", "Thyroxine", "ADH"],
    "answer": 0,
    "explanation": "Cortisol ko 'stress hormone' kaha jata hai. Ye long-term stress me blood sugar aur metabolism adjust karke body ko help karta hai."
  },
  {
    "question": "The hormone that maintains pregnancy is:",
    "options": ["Estrogen", "Progesterone", "FSH", "LH"],
    "answer": 1,
    "explanation": "Progesterone corpus luteum se release hota hai aur endometrium ko maintain karke pregnancy ko sustain karta hai."
  },
  {
    "question": "The hormone secreted by pineal gland is:",
    "options": ["Melatonin", "Thyroxine", "Insulin", "Cortisol"],
    "answer": 0,
    "explanation": "Melatonin pineal gland se nikalta hai jo hamari body ki Diurnal rhythm (Sleep-wake cycle) ko regulate karta hai."
  },
  {
    "question": "Diabetes insipidus is caused due to deficiency of:",
    "options": ["Insulin", "ADH", "Thyroxine", "Glucagon"],
    "answer": 1,
    "explanation": "ADH ki kami se excessive water loss hota hai urine ke raste, jise Diabetes Insipidus kehte hain. Isme sugar ka koi lena-dena nahi hota."
  },
  {
    "question": "The hormone that inhibits growth hormone secretion is:",
    "options": ["GnRH", "Somatostatin", "TRH", "ACTH"],
    "answer": 1,
    "explanation": "Somatostatin (Hypothalamus se) growth hormone ke release ko rokta hai. Isse GHIH (Growth Hormone Inhibiting Hormone) bhi kehte hain."
  },
  {
    "question": "Gigantism occurs due to excess secretion of:",
    "options": ["Thyroxine", "Growth hormone", "Insulin", "ADH"],
    "answer": 1,
    "explanation": "Bachpan me Growth Hormone (GH) ke hyper-secretion se gigantism (extreme height) hoti hai, aur adults me acromegaly hoti hai."
  },
  {
    "question": "The hormone that stimulates adrenal cortex is:",
    "options": ["ACTH", "FSH", "LH", "TSH"],
    "answer": 0,
    "explanation": "ACTH (Adrenocorticotropic Hormone) pituitary se nikal kar adrenal cortex ko glucocorticoids release karne ke liye stimulate karta hai."
  },
  {
    "question": "Calcitonin hormone is secreted by:",
    "options": ["Parathyroid gland", "Thyroid gland", "Pancreas", "Pituitary"],
    "answer": 1,
    "explanation": "Thyroid gland ki Parafollicular (C-cells) calcitonin release karti hain jo blood calcium level ko kam karta hai."
  },
  {
    "question": "Addison’s disease is related to deficiency of:",
    "options": ["Insulin", "Cortisol", "Thyroxine", "Estrogen"],
    "answer": 1,
    "explanation": "Adrenal cortex ke hormones (like Cortisol/Aldosterone) ki kami se Addison's disease hoti hai, jisme bronze-like skin pigmentation aur weakness hoti hai."
  },
  {
    "question": "The releasing hormone for FSH and LH is:",
    "options": ["TRH", "GnRH", "ACTH", "CRH"],
    "answer": 1,
    "explanation": "GnRH (Gonadotropin Releasing Hormone) hypothalamus se nikalta hai jo pituitary ko FSH aur LH release karne ka signal deta hai."
  },
  {
    "question": "Negative feedback mechanism helps in:",
    "options": ["Increasing hormone level", "Maintaining hormonal balance", "Stopping blood flow", "Increasing glucose level"],
    "answer": 1,
    "explanation": "Jab hormone ka level limit se bahar jata hai, to negative feedback use stop kar deta hai taaki balance (Homeostasis) bana rahe."
  },
  {
    "question": "Cushing’s syndrome is due to excess of:",
    "options": ["Cortisol", "Insulin", "Thyroxine", "Prolactin"],
    "answer": 0,
    "explanation": "Cortisol ke hyper-secretion se Cushing's syndrome hota hai, jisme 'Moon face' aur abnormal fat deposition (Buffalo hump) hota hai."
  },
  {
    "question": "The hormone responsible for uterine contraction during childbirth is:",
    "options": ["Prolactin", "Oxytocin", "Estrogen", "FSH"],
    "answer": 1,
    "explanation": "Oxytocin ko 'Birth hormone' kehte hain kyunki ye labor pains trigger karta hai aur child birth me assist karta hai."
  }
]

};
