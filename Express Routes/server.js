const express = require('express');
const mainRouter = require('./route/index')


const app = express();
const PORT = 1000;

let users = [
  {
    id: 1,
    first_name: "Ricardo",
    last_name: "Gumb",
    email: "rgumb0@vk.com",
  },
  {
    id: 2,
    first_name: "Issi",
    last_name: "Glanvill",
    email: "iglanvill1@msn.com",
  },
  {
    id: 3,
    first_name: "Judi",
    last_name: "Seamons",
    email: "jseamons2@ask.com",
  },
  {
    id: 4,
    first_name: "Erma",
    last_name: "Regenhardt",
    email: "eregenhardt3@macromedia.com",
  },
  {
    id: 5,
    first_name: "Ines",
    last_name: "Bodimeade",
    email: "ibodimeade4@nbcnews.com",
  },
  {
    id: 6,
    first_name: "Katrina",
    last_name: "Ardron",
    email: "kardron5@addthis.com",
  },
  {
    id: 7,
    first_name: "Burtie",
    last_name: "Eleshenar",
    email: "beleshenar6@purevolume.com",
  },
  {
    id: 8,
    first_name: "Seymour",
    last_name: "Entwistle",
    email: "sentwistle7@homestead.com",
  },
  {
    id: 9,
    first_name: "Nata",
    last_name: "Gilardi",
    email: "ngilardi8@biblegateway.com",
  },
  {
    id: 10,
    first_name: "Jamaal",
    last_name: "Galloway",
    email: "jgalloway9@google.fr",
  },
];

/////it enables our server to read JSON data 
const urlParser = express.json();
app.use(urlParser);
app.use(mainRouter)

app.get("/", (req, res) => {
    return res.send("Express Docker Heroku Container Registry JP Backend");
  });

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})