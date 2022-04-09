const express = require("express");
// const users = require("./allUsers");

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

const PORT = 4000;
const app = express();

// let users = [
//   { name: "User 1", id: 1 },
//   { name: "User 2", id: 2 },
//   { name: "User 3", id: 3 },
//   { name: "User 4", id: 4 },
// ];

const urlParser = express.json();
app.use(urlParser);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Welcome");
});

app.get("/getallusersdata", (req, res) => {
  res.statusCode = 200;
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  res.statusCode = 200;
  const user = users.find((usr) => usr.id === parseInt(req.params.id));
  if (!user) {
    return res.send(`<h1>User ${req.params.id} Not Found</h1>`);
  } else {
    res.json(user);
  }
});

app.delete("/users/:id", (req, res) => {
  res.statusCode = 200;
  const filterUser = users.filter((usr) => usr.id !== parseInt(req.params.id));
  users = filterUser;
  res.send(`<h1>User Delete Successfully</h1>`);
});

app.post("/create-user", (req, res) => {
  if ((req.body.first_name, req.body.last_name, req.body.email)) {
    res.statusCode = 201;
    const newUser = users.length + 1;
    users.push({
      id: newUser,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    });
    res.send("<h1>User Created Successfully</h1>");
  } else {
    res.statusCode = 400;
    res.send("<h1>First Name Field is Missing</h1>");
  }
});

app.put("/users/:id", (req, res) => {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;

  const index = users.findIndex((user)=> {
    return (user.id ===  Number.parseInt(id))
  })

  if(index >= 0) {
    let updateUser = users[index]
    updateUser.first_name = first_name
    updateUser.last_name = last_name
    updateUser.email = email
    res.json(updateUser);
  } else {
    res.statusCode(404);
  } 

  // res.json(id);
});

// ------------ LISTEN ON PORT -------------

app.listen(PORT, () => {
  console.log(`RUNNING SERVER ON http://localhost:${PORT}`);
});
