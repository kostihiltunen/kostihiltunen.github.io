// Sisällön vaihtaminen navigointipalkin valintojen perusteella
var textChange = function (index) {
  if (index == 0) {
    document.getElementById("contentElement").innerHTML = indexHTML;
  } else if (index == 1) {
    document.getElementById("contentElement").innerHTML = violinHTML;
  } else if (index == 2) {
    document.getElementById("contentElement").innerHTML = violaHTML;
  } else if (index == 3) {
    document.getElementById("contentElement").innerHTML = celloHTML;
  } else if (index == 4) {
    document.getElementById("contentElement").innerHTML = doubleBassHTML;
  }
};

// Sisällön vaihtaminen navigointipalkin valintojen perusteella

// Vaihtoehtoiset sisällöt
var indexHTML =
  "<h4>Jousisoittime</h4>\
<p>Jousisoittimet ovat instrumentteja joiden soittamiseen käytetään jousta. Yleisimmin tunnettuja jousisoittimia on neljä:\
viulu, alttoviulu, sello ja kontrabasso. Ensimmäiset jousisoittimet kehitettiin jo 1500 luvulla Italiassa.\
Nykyisin jousisoittimissa on käytössä neljä kieltä. Jousisoittimet yhtenevät muodoltaan, mutta eroavat koonsa puolesta.\
Jousisoittimia käytetään soolo- ja orkesterisoittimina monenlaisissa kokoonpanoissa ja useissa musiikkityyleissä.</p>";

const violinHTML =
  "<h4>Viulu</h4>\
<p>Viulu on jousisoitinperheen korkeaäänisin soitin. Viulussa on neljä kieltä, jotka viritetään kvintin välein: \
g–d1–a1–e2 tai IPN:n mukaan G3-D4-A4-E5 (järjestyksessä matalaäänisimmästä kielestä korkeimpaan).</p>\
<h5>Historia</h5>\
<p>Viulu kehittyi tiettävästi alun perin 1500-luvulla Italiassa.\
Siihen yhdistyi piirteitä 1500-luvun alun soittimista kuten rebekistä, \
renessanssifiidelistä ja lira da bracciosta.[1] Viulun italiankielinen nimi, \
viola-sanan diminutiivimuoto violino esiintyi tiettävästi ensimmäisen kerran 1530-luvulla. \
Viulussa oli vuonna 1530 vielä kolme kvinteittäin viritettyä kieltä kuten rebekissä, \
mutta vuoden 1550 paikkeilla kieliä oli nykyiset neljä, \
ja viulu oli tällöin jo valmiiksi kehitetty soitin.</p>\
<p>Varhaisimmat nykyisenkaltaiset viulut valmistettiin Pohjois-Italiassa Milanon ja Venetsian seuduilla, \
missä ensimmäiset merkittävät viulunrakentajat olivat Brescian Gasparo da Salò ja Cremonan Andrea Amati. \
Cremonasta muodostui pian korkeatasoisen viulunrakennuksen keskus. Merkittävimpiä viulunrakentajasukuja olivat Amati, \
Guarneri ja Stradivari, joista kaksi viimeksi mainittua saivat alkunsa Amatin koulussa. \
Guarnereista taitavimmaksi on tunnustettu Giuseppe Guarneri (1687–1742) ja Stradivareista Antonio Stradivari (1648–1737), \
jonka viuluja on nykyaikaan säilynyt noin 500.</p>\
<p>Italiasta viulunrakennus levisi muihinkin maihin, kuten Ranskaan, mutta missään valmistustaito ei yltänyt aivan italialaiselle tasolle.</p>\
<p>Viulu säilytti barokin ja klassismin ajalla 1500-luvulla saamansa muodon ja rakenteen, \
vähäisiä tallaan ja otelautaan tehtyjä muutoksia lukuun ottamatta. 1800-luvun alussa viulun kaulaa pidennettiin, \
rakennetta vahvistettiin sekä kielten vahvuutta ja jännitystä lisättiin, \
jolloin viulun sointiin saatiin lisää kaivattua loistokkuutta. \
Lähes kaikki vanhat arvokkaat soittimet uusittiin uuden sointi-ihanteen mukaisiksi. \
Sen jälkeen viuluun ei ole enää tehty mitään merkittäviä uudistuksia.</p>\
<p>Viulun jousi oli aluksi ampuma-ase jousen muotoinen. Vielä barokin aikana jousi oli nykyistä lyhyempi ja painavampi, \
ja soittaja sääteli jouhien kireyttä painamalla niitä sormillaan. Ranskalainen Francois Tourte kehitti 1780-luvulla uuden, \
pidemmän ja kevyemmän jousityypin, joka on edelleen käytössä lähes samanlaisena.</p>\
<p>Paganini vei 1800-luvulla viulun soittotekniikkaa uudelle tasolle muun muassa yläasemasoitossa, \
oktaavisoitossa ja vasemman käden pizzicatoissa.</p>";

const violaHTML =
  "<h4>Alttoviulu</h4>\
<p>Alttoviulu (suom. joskus myös viola, ransk. alto, engl. viola, saks. Bratsche) kuuluu jousisoittimiin, \
tarkemmin viuluperheeseen. Se on hieman suurempi ja tummaäänisempi kuin viulu.</p>\
<p>Alun perin viola oli nimitys joukolle jousisoittimia, joita alettiin valmistaa keskiajalla. \
Rakenteeltaan alttoviulu on samanlainen viulun kanssa, lukuun ottamatta kokoeroa ja toisenlaista viritystä. \
Kuten viulu, myös alttoviulu viritetään kvinteittäin (c-g-d1-a1). \
Alttoviulun ääniala on c-c3 ja musiikkia nuotinnettaessa käytetään c-avainta (ns. alttoavain), \
joskin toiseen oktaaviin mentäessä (c2-) nuotinnuksessa aletaan vaihtelevasti käyttää g-avainta.</p>\
<p>Toisin kuin viulu, alttoviulu ei ole barokin jälkeen nauttinut kovinkaan suurta sooloinstrumentin suosiota. \
Osiltaan tämä johtuu siitä, että alttoviulu on viuluperheen alttosoitin, ja orkestereissa sillä useimmiten soitetaan sointujen väliääniä.</p>\
<p>Alttoviulun kaikukoppa on kielten pituuteen ja paksuuteen suhteutettuna liian pieni. \
On laskettu, että kaikukopan tulisi oikeastaan olla yli puoli metriä pitkä. \
Sellaista alttoviulua ei tosin kukaan pystyisi soittamaan, koska soittimen on mahduttava leuan ja käden väliin. \
Viululla eivät mittasuhteet ole muuttuneet lähellekään niin paljon kuin ne ovat alttoviululla muuttuneet 1600-luvulta lähtien.</p>";

const celloHTML =
  "<h4>Sello</h4>\
<p>Sello (< ital. cello) on jousisoitin, joka muistuttaa jossakin määrin viulua ja alttoviulua. \
Sello on kuitenkin paljon suurempi, ja toisin kuin alttoviulua, sitä soitetaan pystyasennossa. \
Soittaja perinteisesti istuu soittaessaan ja pitää selloa jalkojensa välissä. \
Selloa voidaan kuitenkin soittaa myös seisaallaan kuten kontrabassoa. \
Sello voidaan tukea lattiaan soittimen pohjassa olevan metallisen piikin eli stakkelin avulla. \
Sellisti liikuttaa joustaan vaakatasossa kieliä vasten.</p>\
<p>Sellonuotit on yleensä kirjoitettu bassoavaimelle, mutta korkeimmille äänille käytetään myös tenori- ja diskanttiavainta. \
Sellossa on neljä kvintin välein viritettyä kieltä: C (matalin), G, d ja a. \
5-kielisessä sellossa on muuten samanlainen viritys, mutta 5. kieli viritetään F1. \
Nelikielisen sellon vire vastaa alttoviulun viritystä, mutta se on oktaavin alempana.</p>\
<p>Selloja alettiin rakentaa jo 1500-luvulla ja niitä käytettiin sekä orkesteri- että kamarimusiikissa bassosoittimena. \
Soolosoittimena sello alkoi yleistyä 1600-luvulla, mutta syrjäytti edeltäjänsä, viola da gamban, vasta 1700-luvun aikana. \
Useimmat tunnetut viulunrakentajat (muiden muassa italialaiset Amati, Stradivari ja Guarneri) ovat rakentaneet myös selloja.</p>\
<p>Selloa käytetään lähinnä länsimaisessa taidemusiikissa. Se on osa sinfoniaorkesteria ja jousikvartettia sekä usein mukana myös \
muissa kamarimusiikkiryhmissä. Sellolle on sävelletty lukuisia konserttoja ja sonaatteja. Populaarimusiikissa sello on harvinaisempi. \
Vaikka sello saattaa olla mukana joissakin kappaleissa tai levytyksissä, on harvinaista, että se kuuluisi yhtyeen peruskokoonpanoon. \
Poikkeuksena tästä on esimerkiksi Apocalyptica, 2Cellos ja Piano guys. Apocalyptica on maailmanlaajuisesti menestynyt suomalainen sellistiryhmä, \
jonka musiikillista tyyliä on luonnehdittu muun muassa sinfoniseksi metalliksi.</p>";

const doubleBassHTML =
  "<h4>Kontrabasso</h4>\
<p>Kontrabasso on jousisoitinperheen suurikokoisin jäsen.[1] Kamari- ja sinfoniaorkesterissa sillä on tärkeä rooli, sillä matalan äänialansa ansiosta se luo orkesterin sointiin syvyyttä. Tavallisesti kontrabasso soi oktaavin selloa alempaa.[2] Taidemusiikissa kontrabasson käyttö soolosoittimena on yleistynyt modernien teräskielien kehityksen johdosta. Nykymusiikin säveltäjille kontrabasson pitkä soiva kielenpituus tarjoaa monia mielenkiintoisia mahdollisuuksia. Jazzmusiikissa kontrabassolla on keskeinen osa ja sillä soitetaan usein myös sooloja. Populaarimusiikissa bassokitara syrjäytti kontrabasson 1950-luvun loppuessa, mutta se oli sitä ennen hyvin yleinen. Soitinta käytetään paljon myös kansanmusiikissa.</p>\
<h5>Historia</h5>\
<p>Varhaisimmat kontrabassot ovat peräisin 1600-luvun alusta, ja niiden muoto kehittyi violonesta, \
gambaperheen bassosoittimesta. Toisin kuin violonessa, kontrabassoissa ei ollut otenauhoja, \
ja kieliä oli useimmiten neljä violonen kuuteen verrattuna. Kielinä käytettiin suolikieliä.</p>\
<p>1600-luvulla Itävallassa ja Saksassa käytettiin viisikielisiä kontrabassoja. \
1700-luvun alussa 3-kieliset soittimet olivat tavallisia.</p>\
<h5>Muoto ja erot muihin jousisoittimiin</h5>\
<p>Kontrabasson muoto poikkeaa hieman viuluperheen jousisoittimista. Myös mitat ja muodot vaihtelevat paljon enemmän kuin esimerkiksi viuluissa. \
Sillä on kaksi vaihtoehtoista perusmuotoa: viola da gamban (johdantokuvassa) tai viulun muoto. \
Myös muun mallisia kontrabassoja on rakennettu, kuten busetto ja esimerkiksi kitaran muotoon.</p>\
<p>Kontrabasson alkuperä on viola da gamba -suvussa, mikä ilmenee yksityiskohtina soittimen rakenteessa. \
Kontrabassossa on gamba-tyyliset kapeammat 'olkapäät' (erona viuluperheen soittimien pyöreämpään malliin) \
ja soitin on mahdollisesti tasapohjainen (viuluperheen jousisoittimissa pohja on kupera). \
Kontrabasso poikkeaa myös viritysjärjestelmältään: se viritetään kvarttivireeseen \
(muut sinfoniaorkesterissa esiintyvät jousisoittimet ovat kvinttivireisiä).</p>\
<p>Kontrabasson soitettavuuden vuoksi soittimen koko on huomattavasti pienempi \
kuin akustisen teorian ennustama optimaalisesti soivan instrumentin koko. \
Kontrabassoja myös rakennetaan varsin moneen eri kokoon, eikä soittimen mittoja ole standardisoitu. \
Tyypillisesti sooloteoksia ja kamarimusiikkia soitetaan pienempikokoisimmilla soittimilla kuin sinfoniamusiikkia. \
Viulu ja sello puolestaan ovat mitoiltaan hyvin standardoituneet \
(alttoviulun mitoissa on sen sijaan ollut jonkin verran vaihtelua). Yleisimmin kontrabasso on ¾-kokoinen \
(vaikkakin tämä kokoluokitus kontrabasson kohdalla on harhaanjohtava), \
ja kielen soiva pituus on 100–110 senttimetriä.</p>";
