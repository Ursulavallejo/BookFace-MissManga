### Juni 2022
# FullStack Projekt: MissMangaBookFace
## Projektuppgift *Christoffer Knaving

## Projekt

Hur kan vi implementera en databas till en backend med tillhörande API som vi testar med API-tester. Detta ska göras med hjälp av Docker, Node.js, MongoDB, Mongoose och React.js med Typescript

Projektplanering:
Har som vanligt gjorts i Trello och här kommer länken: [TRELLO](https://trello.com/b/M7UjVzOj/datalagringmongodb-rest "Trello")

## Beskriv lite olika lösningar du gjort:

Har med hjälp av Lars skapat en funktion som verifierar användaren på backend. Den jämför lösenordet med det som hashades och om sant, skicka tillbaka true till frontend.

## Beskriv något som var besvärligt att få till:

Att få till en funktion som gör så man kan ändra från active: false till active: true och skicka det till frontend för att kunna lägga alla active: true i en array så man kan se vilka som är inloggade samtidigt.

## Beskriv om du fått byta lösning och varför i sådana fall:

Jag försökte att kolla på ToggleTaskDone från förra inlämningen för att kunna lösa active: false till active: true och det tog mig ett tag och en lunch innan jag förstod vad som saknades i funktionen.

## Beskriv hur du felsökt ditt program när det uppstått problem:

Med hjälp av console.log() och logger då jag nästan uteslutande jobbat i backend.. Det har krävts en hel del felsökningar för att vad jag får för svar från backend.
Dessutom valde jag att ha med en logger i backend för att enklare se svaret från backend. 

## Vad gick bra:

Jag skulle egentligen vilja säga allting men det är mest för att jag har jobbat med det jag känner mig mest bekväm med, dvs backend. Några funktioner krånglade men dessa beskriver jag längre upp.

## Vad gick dåligt:

När vi alla skulle börja pusha till samma repo gick något fel efter ett par dagar och förmodligen jag som gjorde så att vi fick börja om helt med vårt projekt då jag troligtvis mergade ihop fel branches och allt blev skit tillslut. Lars försökte hjälpa till men även han sa att det var lika bra att börja om helt och vara mer noggrann med vad och hur man mergar.

## Vad har du lärt dig:

Att jag är bra på backendbiten. Jag har även lärt mig om hur Typescript fungerar i backend. Att verifiera en user med att hashat lösenord!

## Vilka möjligheter ser du med de kunskaper du fått under kursen:

Att bygga en backend och databas med hjälp av MongoDB och Mongoose. Jag ser att man med denna kunskapen kan bygga en enklare blogg och att skapa users och messages och comments. Att kunna verifiera en användare på backend så inte vem som helst kan komma in på bloggen. Jag ser ju att detta skulle kunna vara en liten "FaceBook" och att man för att få den till Facebooks storlek måste skala upp men grunden finns där.

## Motivera varför du valt en specifik lösning:

Jag har valt att lägga alla testerna tillsammans i en enda lång rad i Insomnia för att på så sätt hålla nere antalet filer det annars hade blivit.

## Lämna förslag på förbättringar av din kod:

Valde att skapa en egen models för comments då det blev lättare att snabbt få det att funka. Man hade kunnat lägga det i Messages på något sätt men då båda sätten fungerar valde jag detta.

## Lämna exempel på kod du valde att inte implementera:

Tråkigt svar men jag har använt all kod jag såg framför mig när vi fick inlämningen. Då jag verkligen bara ville jobba med backend visste jag redan vad för kod jag tänkte använda. Annars är det väl det med comments att jag skapade en egen models som jag kunde gjort annorlunda.

## Lämna förslag på förbättringar av din UI/UX design eller reflektera över den:

Jag har helt valt att jobba med backend och lämnat UI/UX till dom som verkligen kan det här med design i min grupp. Detta av en enkel anledning, jag hade aldrig kunnat göra det lika snyggt som dom andra gjort!

## Egna tankar:

Kul att få fortsätta med backend då jag verkligen fastnat för den delen. Och som jag skrev tidigare så är detta en bra grund för en site som typ facebook även om denna är mycket mindre såklart. Sen var det både kul och jobbigt att jobba tillsammans i grupp. Projektet är såpass litet att det blir jobbigt då det är ganska få filer som ska skapas och byggas. Jag fattar att det blir såhär på ett företag men det tar lite tid att vänja sig då vi bara jobbat enskilt fram till nu. Men kul att testa på!