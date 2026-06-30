/* ── Translations ── */
const T = {
  sv: {
    'meta.title':             'Spoonvalley Hantverksbryggeri',
    'nav.brewers':            'Bryggare',
    'nav.beers':              'Öl',
    'nav.feedback':           'Recensioner',
    'hero.slogan':            'Vi är Spoonvalley Hantverksbryggeri, njut av din vistelse!',
    'hero.cta':               'Utforska',
    'brewers.title':          'Våra Bryggare',
    'brewers.1.name':         'Anton Kuusijärvi',
    'brewers.1.role':         'Chefsbryggare',
    'brewers.1.bio':          'Anton har 5+ år inom ölbryggning. Som chefbryggare samordnar han bryggningar, håller koll på jäsprocessen och logistiken. Han tvekar inte att experimentera för i slutändan blir det ju alltig öl ändå.',
    'brewers.2.name':         'Anna Lindqvist',
    'brewers.2.role':         'Kvalitetsansvarig',
    'brewers.2.bio':          'Anna experimenterar med olika smaker och även icke-alkoholosika öl. Hon är en av de mest talade ölutvecklarena i Skedala, Halmstad.',
    'brewers.3.name':         'Albin Nielsen',
    'brewers.3.role':         'Ölutvecklare',
    'brewers.3.bio':          'Albin har en unik förmåga att kombinera traditionella och moderna bryggmetoder för att skapa unika högprocentiga öl.',
    'brewers.4.name':         'Max Möritz',
    'brewers.4.role':         'Ölutvecklare',
    'brewers.4.bio':          'Max är en passionerad bryggare som älskar att experimentera med olika humlesorter och maltprofiler för att skapa komplexa smaker.',
    'brewers.5.name':         'Bryggmisse Svea',
    'brewers.5.role':         'Maskott',
    'brewers.5.bio':          'Bryggmisse Svea är alltid med och övervakar bryggprocessen. Hon är en viktig del av teamet och älskar att smaka på de nya ölen som skapas.',
    'beers.title':            'Våra Öl',
    'beers.label.alc':        'Alkohol',
    'beers.label.bottled':    'Tapdatum',
    'beers.label.batchmaster':'Bryggmaster',
    'beers.label.ingredients':'Ingredienser',
    'beers.label.brewing':    'Bryggsteg',
    'beers.readMore':         'Läs mer',
    'beers.readLess':         'Stäng',
    'beers.1.name':           'Westcoast IPA',
    'beers.1.taste':          'Ska publiceras snart',
    'beers.1.ingredients':    'Pale malt, Centennial-humle, Cascade-humle, amerikansk ale-jäst, vatten',
    'beers.1.step1':          'Mäskning vid 67°C i 60 minuter',
    'beers.1.step2':          'Kokning 60 minuter med humletillsatser',
    'beers.1.step3':          'Jäsning vid 19°C i 7 dagar',
    'beers.1.step4':          'Torrhumling 3 dagar',
    'beers.1.step5':          'Lagring och tappning',
    'beers.2.name':           'Bärnsten Veteöl',
    'beers.2.taste':          'Banan, mango, bröd, lätt citrus avslutning',
    'beers.2.ingredients':    'Pilsnermalt, Belgiskt vetemalt, Caramunich, Munich malt, Acid Malt, Hallerttauer Herbrucker humle, Safbrew vetejäst, vatten',
    'beers.2.step1':          'Mäskning vid 68°C i 75 minuter med kontinuerlig mashout i 15 minuter',
    'beers.2.step2':          'Kokning 60 minuter (Humle 40g/60min 10g/10min)',
    'beers.2.step3':          'Varm jäsning vid 21°C i 15 dagar',
    'beers.2.step4':          'Flaskjäsning 4 veckor vid 4°C',
    'beers.2.step5':          'Handtappning i mörka flaskor',
    'beers.3.name':           'Ale i Kölsch-Stil',
    'beers.3.taste':          'Hartsig, tallbarr, tropisk frukt, kryddigt',
    'beers.3.ingredients':    'Weyermann pilsner malt, Weyermann vienna malt, Weyermann vetemalt (pale), Tettnang humle, Bluestone jäst, vatten',
    'beers.3.step1':          'Väga salt för rätt vattenprofil',
    'beers.3.step2':          'Mäskning vid 65°C',
    'beers.3.step3':          'Kokar ölen',
    'beers.3.step4':          'Tappar upp jäsfart',
    'beers.3.step5':          'Salta uppfarten - glöm inte saltet på nästa gång - det blir öl ända!',
    'beers.4.name':           'Australian Chicken-Joe Pale Ale',
    'beers.4.taste':          'Quality from Down Under in Spoonvalley!',
    'beers.4.ingredients':    'Pilsnermalt, Saaz-humle, lager-jäst, mjukt vatten',
    'beers.4.step1':          'Stegmäskning: 50°C → 63°C → 72°C',
    'beers.4.step2':          'Kokning 60 minuter',
    'beers.4.step3':          'Primär jäsning vid 10°C i 14 dagar',
    'beers.4.step4':          'Lagring vid 2°C i 4 veckor',
    'beers.4.step5':          'Filtrering och tappning',
    'beers.5.name':           'Ginger Beer',
    'beers.5.taste':          'Chili, ingefära, citron, en reell käftsmäll som som du kan delar med dina vänner',
    'beers.5.ingredients':    'vatten, socker, ingefära, chilli, citron, lime, bugg, kärlek',
    'beers.5.step1':          'Koka all förutom citrus.',
    'beers.5.step2':          'Kyla och pressar ner och tillsätt citrus och bugg.',
    'beers.5.step3':          'Jäs 10 dagar.',
    'beers.5.step4':          'Vänta.',
    'beers.5.step5':          'Njuta.',
    'beers.6.name':           'Hallon Vete',
    'beers.6.taste':          'Banan, Hallon',
    'beers.6.ingredients':    'Pilsnermalt, Belgiskt vetemalt, Caramunich, Munich malt, Acid Malt, Hallerttauer Herbrucker humle, Safbrew vetejäst, vatten',
    'beers.6.step1':          'Mäskning vid 68°C i 75 minuter med kontinuerlig mashout i 15 minuter',
    'beers.6.step2':          'Kokning 60 minuter (Humle 40g/60min 10g/10min)',
    'beers.6.step3':          'Varm jäsning vid 21°C i 14 dagar',
    'beers.6.step4':          '1kg frysta hallon i mäskpåse efter 7 dagar',
    'beers.7.name':           'Pilsner',
    'beers.7.taste':          'Ska publiceras snart.',
    'feedback.title':         'Vad Våra Gäster Säger',
    'feedback.1.quote':       '"Det bästa hantverksölet jag smakat – Westcoast IPA är nu min absoluta favorit. Komplexitet och fräschör i perfekt balans."',
    'feedback.1.author':      '— Sara Eriksson, Stockholm',
    'feedback.2.quote':       '"Kölsch öppnade mina ögon för vad öl kan vara. Djup, rund smak med en finhet som saknar motstycke i sin kategori."',
    'feedback.2.author':      '— Marcus Lindberg, Göteborg',
    'footer.copy':            '© 2026 Spoonvalley Hantverksbryggeri. Alla rättigheter förbehållna.',
  },

  en: {
    'meta.title':             'Spoonvalley Craft Brewery',
    'nav.brewers':            'Brewers',
    'nav.beers':              'Beers',
    'nav.feedback':           'Reviews',
    'hero.slogan':            'We are Spoonvalley Craft Brewery, enjoy your stay!',
    'hero.cta':               'Explore',
    'brewers.title':          'Our Brewers',
    'brewers.1.name':         'Anton Kuusijärvi',
    'brewers.1.role':         'Head Brewer',
    'brewers.1.bio':          'Anton has been brewing beer for over 5 years, specialising in Nordic flavours with local ingredients.',
    'brewers.2.name':         'Anna Lindqvist',
    'brewers.2.role':         'Quality Manager',
    'brewers.2.bio':          'Anna experiments with different flavours including non-alcoholic beers. She is one of the most talked-about beer developers in Skedala, Halmstad.',
    'brewers.3.name':         'Albin Nielsen',
    'brewers.3.role':         'Beer Developer',
    'brewers.3.bio':          'Albin has a unique ability to combine traditional and modern brewing methods to create unique high-strength beers.',
    'brewers.4.name':         'Max Möritz',
    'brewers.4.role':         'Beer Developer',
    'brewers.4.bio':          'Max is a passionate brewer who loves experimenting with different hop varieties and malt profiles to create complex flavours.',
    'brewers.5.name':         'Bryggmisse Svea',
    'brewers.5.role':         'Mascot',
    'brewers.5.bio':          'Bryggmisse Svea is always there supervising the brewing process. She is an important part of the team and loves tasting the new beers being created.',
    'beers.title':            'Our Beers',
    'beers.label.alc':        'Alcohol',
    'beers.label.bottled':    'Tap date',
    'beers.label.batchmaster':'Brew master',
    'beers.label.ingredients':'Ingredients',
    'beers.label.brewing':    'Brewing Steps',
    'beers.readMore':         'Read more',
    'beers.readLess':         'Close',
    'beers.1.name':           'Westcoast IPA',
    'beers.1.taste':          'Coming soon',
    'beers.1.ingredients':    'Pale malt, Centennial hops, Cascade hops, American ale yeast, water',
    'beers.1.step1':          'Mash at 67°C for 60 minutes',
    'beers.1.step2':          '60-minute boil with hop additions',
    'beers.1.step3':          'Ferment at 19°C for 7 days',
    'beers.1.step4':          'Dry-hop for 3 days',
    'beers.1.step5':          'Condition and bottle',
    'beers.2.name':           'Amber Wheat',
    'beers.2.taste':          'Banana, mango, bread, light citrus finish',
    'beers.2.ingredients':    'Pilsner malt, Belgian wheat malt, Caramunich, Munich malt, Acid malt, Hallertauer Hersbrucker hops, Safbrew wheat yeast, water',
    'beers.2.step1':          'Mash at 68°C for 75 minutes with continuous mashout for 15 minutes',
    'beers.2.step2':          'Boil 60 minutes (Hops 40g/60min 10g/10min)',
    'beers.2.step3':          'Warm fermentation at 21°C for 15 days',
    'beers.2.step4':          'Bottle condition for 4 weeks at 4°C',
    'beers.2.step5':          'Hand-fill into dark bottles',
    'beers.3.name':           'Ale in Kölsch Style',
    'beers.3.taste':          'Resinous, pine, tropical fruit, spicy',
    'beers.3.ingredients':    'Weyermann pilsner malt, Weyermann vienna malt, Weyermann wheat malt (pale), Tettnang hops, Bluestone yeast, water',
    'beers.3.step1':          'Weigh salts for the correct water profile',
    'beers.3.step2':          'Mash at 65°C',
    'beers.3.step3':          'Boil the beer',
    'beers.3.step4':          'Pitch the yeast',
    'beers.3.step5':          'Salt the driveway — don\'t forget the salt next time — it still becomes beer!',
    'beers.4.name':           'Australian Chicken-Joe Pale Ale',
    'beers.4.taste':          'Quality from Down Under in Spoonvalley!',
    'beers.4.ingredients':    'Pilsner malt, Saaz hops, lager yeast, soft water',
    'beers.4.step1':          'Step mash: 50°C → 63°C → 72°C',
    'beers.4.step2':          '60-minute boil',
    'beers.4.step3':          'Primary ferment at 10°C for 14 days',
    'beers.4.step4':          'Lager at 2°C for 4 weeks',
    'beers.4.step5':          'Filter and bottle',
    'beers.5.name':           'Ginger Beer',
    'beers.5.taste':          'Chili, ginger, lemon — a real punch you can share with your friends',
    'beers.5.ingredients':    'water, sugar, ginger, chilli, lemon, lime, bug, love',
    'beers.5.step1':          'Boil everything except the citrus.',
    'beers.5.step2':          'Cool down and add the citrus and bug.',
    'beers.5.step3':          'Ferment for 10 days.',
    'beers.5.step4':          'Wait.',
    'beers.5.step5':          'Enjoy.',
    'beers.6.name':           'Raspberry Wheat',
    'beers.6.taste':          'Banana, Raspberry',
    'beers.6.ingredients':    'Pilsner malt, Belgian wheat malt, Caramunich, Munich malt, Acid Malt, Hallerttauer Herbrucker hops, Safbrew wheat yeast, water',
    'beers.6.step1':          'Mash at 68°C for 75 minutes with continuous mashout for 15 minutes',
    'beers.6.step2':          'Boil 60 minutes (Hops 35g/60min 15g/10min)',
    'beers.6.step3':          'Warm fermentation at 21°C for 14 days',
    'beers.6.step4':          '1kg frozen raspberries in a mash bag after 7 days',
    'beers.7.name':           'Pilsner',
    'beers.7.taste':          'Coming soon.',
    'feedback.title':         'What Our Guests Say',
    'feedback.1.quote':       '"The best craft beer I\'ve ever tasted – Westcoast IPA is now my absolute favourite. Complexity and freshness in perfect balance."',
    'feedback.1.author':      '— Sara Eriksson, Stockholm',
    'feedback.2.quote':       '"The Kölsch-style Ale opened my eyes to what beer can truly be. Deep, rounded flavour with a refinement unmatched in its category."',
    'feedback.2.author':      '— Marcus Lindberg, Gothenburg',
    'footer.copy':            '© 2026 Spoonvalley Craft Brewery. All rights reserved.',
  },

  de: {
    'meta.title':             'Spoonvalley Handwerksbrauerei',
    'nav.brewers':            'Brauer',
    'nav.beers':              'Biere',
    'nav.feedback':           'Rezensionen',
    'hero.slogan':            'Wir sind Spoonvalley Handwerksbrauerei, genieße deinen Aufenthalt!',
    'hero.cta':               'Entdecken',
    'brewers.title':          'Unsere Brauer',
    'brewers.1.name':         'Anton Kuusijärvi',
    'brewers.1.role':         'Chefbrauer',
    'brewers.1.bio':          'Anton braut seit über 5 Jahren Bier und spezialisiert sich auf nordische Aromen mit lokalen Zutaten.',
    'brewers.2.name':         'Anna Lindqvist',
    'brewers.2.role':         'Qualitätsmanagerin',
    'brewers.2.bio':          'Anna experimentiert mit verschiedenen Geschmacksrichtungen, auch alkoholfreien Bieren. Sie gilt als eine der bekanntesten Bierentwicklerinnen in Skedala, Halmstad.',
    'brewers.3.name':         'Albin Nielsen',
    'brewers.3.role':         'Bierentwickler',
    'brewers.3.bio':          'Albin hat eine einzigartige Fähigkeit, traditionelle und moderne Braumethoden zu kombinieren, um einzigartige hochprozentige Biere zu kreieren.',
    'brewers.4.name':         'Max Möritz',
    'brewers.4.role':         'Bierentwickler',
    'brewers.4.bio':          'Max ist ein leidenschaftlicher Brauer, der es liebt, mit verschiedenen Hopfensorten und Malzprofilen zu experimentieren, um komplexe Aromen zu schaffen.',
    'brewers.5.name':         'Bryggmisse Svea',
    'brewers.5.role':         'Maskottchen',
    'brewers.5.bio':          'Bryggmisse Svea ist immer dabei und überwacht den Brauvorgang. Sie ist ein wichtiger Teil des Teams und liebt es, die neu gebrauten Biere zu kosten.',
    'beers.title':            'Unsere Biere',
    'beers.label.alc':        'Alkohol',
    'beers.label.bottled':    'Zapfdatum',
    'beers.label.batchmaster':'Braumeister',
    'beers.label.ingredients':'Zutaten',
    'beers.label.brewing':    'Brauvorgang',
    'beers.readMore':         'Mehr lesen',
    'beers.readLess':         'Schließen',
    'beers.1.name':           'Westcoast IPA',
    'beers.1.taste':          'Wird bald veröffentlicht',
    'beers.1.ingredients':    'Pale Malt, Centennial-Hopfen, Cascade-Hopfen, amerikanische Ale-Hefe, Wasser',
    'beers.1.step1':          'Maischen bei 67°C, 60 Minuten',
    'beers.1.step2':          '60-minütiges Kochen mit Hopfengaben',
    'beers.1.step3':          'Vergärung bei 19°C, 7 Tage',
    'beers.1.step4':          'Trockenhopfen, 3 Tage',
    'beers.1.step5':          'Reifung und Abfüllung',
    'beers.2.name':           'Bernstein Weizen',
    'beers.2.taste':          'Banane, Mango, Brot, leichter Zitrusabgang',
    'beers.2.ingredients':    'Pilsener Malz, Belgisches Weizenmalz, Caramunich, Münchner Malz, Sauermalz, Hallertauer Hersbrucker Hopfen, Safbrew Weizenhefe, Wasser',
    'beers.2.step1':          'Maischen bei 68°C für 75 Minuten mit kontinuierlichem Abmaischen für 15 Minuten',
    'beers.2.step2':          'Kochen 60 Minuten (Hopfen 40g/60min 10g/10min)',
    'beers.2.step3':          'Warmvergärung bei 21°C für 15 Tage',
    'beers.2.step4':          'Flaschengärung 4 Wochen bei 4°C',
    'beers.2.step5':          'Handabfüllung in dunkle Flaschen',
    'beers.3.name':           'Ale im Kölsch-Stil',
    'beers.3.taste':          'Harzig, Kiefernnadeln, Tropenfrucht, würzig',
    'beers.3.ingredients':    'Weyermann Pilsener Malz, Weyermann Wiener Malz, Weyermann Weizenmalz (hell), Tettnanger Hopfen, Bluestone Hefe, Wasser',
    'beers.3.step1':          'Salz für das richtige Wasserprofil abwiegen',
    'beers.3.step2':          'Maischen bei 65°C',
    'beers.3.step3':          'Das Bier kochen',
    'beers.3.step4':          'Hefe zugeben',
    'beers.3.step5':          'Einfahrt salzen – Salz beim nächsten Mal nicht vergessen – es wird trotzdem Bier!',
    'beers.4.name':           'Australian Chicken-Joe Pale Ale',
    'beers.4.taste':          'Quality from Down Under in Spoonvalley!',
    'beers.4.ingredients':    'Pilsener Malz, Saaz-Hopfen, Lagerhefe, weiches Wasser',
    'beers.4.step1':          'Stufenmaische: 50°C → 63°C → 72°C',
    'beers.4.step2':          '60-minütiges Kochen',
    'beers.4.step3':          'Hauptgärung bei 10°C, 14 Tage',
    'beers.4.step4':          'Lagerung bei 2°C, 4 Wochen',
    'beers.4.step5':          'Filtrierung und Abfüllung',
    'beers.5.name':           'Ginger Beer',
    'beers.5.taste':          'Chili, Ingwer, Zitrone – ein echter Schlag, den du mit deinen Freunden teilen kannst',
    'beers.5.ingredients':    'Wasser, Zucker, Ingwer, Chilli, Zitrone, Limette, Gäransatz, Liebe',
    'beers.5.step1':          'Alles außer Zitrus aufkochen.',
    'beers.5.step2':          'Abkühlen und Zitrus und Gäransatz zugeben.',
    'beers.5.step3':          '10 Tage vergären.',
    'beers.5.step4':          'Warten.',
    'beers.5.step5':          'Genießen.',
    'beers.6.name':           'Himbeer Weizen',
    'beers.6.taste':          'Banane, Himbeere',
    'beers.6.ingredients':    'Pilsner Malz, belgisches Weizenmalz, Caramunich, Münchner Malz, Sauermalz, Hallertauer Herbrucker Hopfen, Safbrew Weizenhefe, Wasser',
    'beers.6.step1':          'Maischen bei 68°C für 75 Minuten mit kontinuierlichem Abmaischen für 15 Minuten',
    'beers.6.step2':          'Kochen 60 Minuten (Hopfen 35g/60min 15g/10min)',
    'beers.6.step3':          'Warmvergärung bei 21°C für 14 Tage',
    'beers.6.step4':          '1kg gefrorene Himbeeren im Maischebeutel nach 7 Tagen',
    'beers.7.name':           'Pilsner',
    'beers.7.taste':          'Wird bald veröffentlicht.',
    'feedback.title':         'Was unsere Gäste sagen',
    'feedback.1.quote':       '"Das beste Craft-Bier, das ich je getrunken habe – Westcoast IPA ist mein absoluter Favorit. Komplexität und Frische in perfekter Balance."',
    'feedback.1.author':      '— Sara Eriksson, Stockholm',
    'feedback.2.quote':       '"Das Ale im Kölsch-Stil hat mir die Augen geöffnet, was Bier sein kann. Tiefer, runder Geschmack mit einer Finesse, die in seiner Kategorie unübertroffen ist."',
    'feedback.2.author':      '— Marcus Lindberg, Göteborg',
    'footer.copy':            '© 2026 Spoonvalley Handwerksbrauerei. Alle Rechte vorbehalten.',
  },
};

/* ── Language ── */
let lang = 'sv';

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.title = T[l]['meta.title'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );

  document.querySelectorAll('.beer-card.open .beer-card__toggle').forEach(b =>
    b.textContent = T[l]['beers.readLess']
  );
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);

/* ── Nav scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () =>
  nav.classList.toggle('scrolled', window.scrollY > 10),
  { passive: true }
);

/* ── Mobile burger ── */
const burger   = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');
burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

/* ── Fade-in on scroll ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Beer expand / collapse ── */
document.querySelectorAll('.beer-card__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card   = btn.closest('.beer-card');
    const isOpen = card.classList.toggle('open');
    btn.textContent = isOpen ? T[lang]['beers.readLess'] : T[lang]['beers.readMore'];
  });
});

/* ── Feedback slider ── */
const track  = document.getElementById('sliderTrack');
const dots   = document.querySelectorAll('.dot');
const total  = track.querySelectorAll('.slide').length;
let current  = 0;

function goTo(i) {
  current = (i + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
}

document.getElementById('sliderNext').addEventListener('click', () => goTo(current + 1));
document.getElementById('sliderPrev').addEventListener('click', () => goTo(current - 1));
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

/* ── Init ── */
applyLang('sv');
