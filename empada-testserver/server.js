const PORT              = 3001;
const express           = require('express');
const SocketServer      = require('ws').Server;
const WebSocket         = require('ws');
const models            = require("./models");
const sass              = require("node-sass-middleware");

// app.use("/scss", sass({
//   src: __dirname + "./scss",
//   dest: __dirname + "./public/scss",
//   debug: false,
//   outputStyle: 'compressed'
// }));

require('dotenv').config()

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
//**Need to do server: app to use express. */
const wss = new SocketServer({ server });

//Set force : true to synchronize models with postgres db. 
//This will wipe all the data in database!
models.sequelize.sync({ force: false }).then(() => {
  wss.broadcast = (data) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(data));
      }
    })
  }

  clientConnected = () => {
    models.task.findAll().then((data) => {
      console.log('All tasks')
      wss.broadcast({ type: 'allTasks', data: data });
    })
  }

  wss.on('connection', (client) => {
    console.log(`connection ${client}`);
    clientConnected();
    client.on('message', (data) => {
      data = JSON.parse(data)
      switch (data.type) {
        // Path: /users/new Method: POST
        case 'auth0-login':
          login(data);
          break;
          // Path: /projects/new Method: POST
          // Path: /users/new Method: POST
          // Path: /tasks/new Method: POST
        // case "eventCreation-newProject":
        //   eventCreation_newProject(data, client);
        //   break;
          // Path: /tasks/update Method: PUT
        default:
          throw new Error("Unknown event type " + data.type)
      }
    });

    client.on('close', (event) => {
      console.log('Client disconnected');
    });
  });

});

const login = (data, client) => {
  /* Adds user details to database on login */
  models.user.count({ where: { email: data.email } }).then((count) => {
    if (count > 0) {
      console.log('user exists');
    } else {
      models.user.create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        avatar: data.picture
      })
    }
  })
}
