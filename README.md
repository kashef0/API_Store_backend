# API_Store_backend

## MongoDB-baserat REST API för Restauranghantering

### Beskrivning:

Detta projekt innehåller koden för ett REST API byggt med Node.js och Express, som hanterar restaurangmenyer, bordsbokningar och administratörshantering med en MongoDB-databas.

### Funktioner:

- Hantera matmenyer (skapa, läsa, uppdatera, ta bort)
- Hantera bordsbokningar (skapa, läsa, uppdatera, ta bort)
- Hantera administratörer (skapa, läsa)

### Installation:

1. Klona ned projektet.
2. Installera Node.js och npm.
3. Kör `npm install` för att installera beroenden.
4. Kör `node server.js` för att starta servern.

### Anslutning till MongoDB:

Se till att du har en MongoDB-databas tillgänglig. Uppdatera `server.js` med URI till din databas.

### Endpoint-rutter:

#### Matmenyer:
- GET /api/menu: Hämtar alla tillgängliga maträtter.
- POST /api/menu: Skapar en ny maträtt.
- PUT /api/menu/:id: Uppdaterar en maträtt med id.
- DELETE /api/menu/:id: Tar bort en maträtt med id.

#### Bordsbokningar:
- GET /api/bookings: Hämtar alla bordsbokningar.
- POST /api/bookings: Skapar en ny bordsbokning.
- PUT /api/bookings/:id: Uppdaterar en bordsbokning med id.
- DELETE /api/bookings/:id: Tar bort en bordsbokning med id.

#### Administratörer:
- GET /api/admins: Hämtar alla administratörer.
- POST /api/admins: Registrerar en ny administratör.


### Objektstrukturer:

#### Matmeny:
- name: Rättens namn
- description: Beskrivning av rätten
- price: Pris
- category: Kategori

#### Bordsbokning:
- customer_name: Kundens namn
- date: Bokningsdatum
- time: Bokningstid
- tel: kund telefonenummer
- email: kund email
- Antal-personer: hur många personer
- message: om kund vill lägga till något
- takeOut: om kund vill ta order med

#### Administratör:
- username: Användarnamn
- lösneord: losneord

### Liveversion:
OBS: bara lägg till bookings, admin eller menu efter api
[API-webbtjänst](https://api-store-backend-jwkj.onrender.com/api/)


### Förbättringar som jag utförde:

- Implementering av autentisering och auktorisering för administratörer.
- Validering av indata för att förhindra felaktiga data.
- Testning av API:et för att säkerställa funktionalitet.



