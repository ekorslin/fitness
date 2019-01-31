// Requring our models index file for sequelize purposes
const db = require("../models");
module.exports = function(app) {

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/weighIn", function(req, res) {
    console.log(req.body.weight);
    db.weights.create({
      weight: req.body.weight,
    }).then(function() {
        this.history.push("/bodyChoice");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/newExercise", function(req, res) {
    console.log(req.body);
    db.exercise.create({
      description: req.body.description,
      bodyGroup: req.body.bodyGroup,
      weight: req.body.weight,
      sets: req.body.sets,
      reps: req.body.reps
    }).then(function() {
        this.history.push("/");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/pullWorkouts", function(req, res) {
    console.log(req.body);
    // This is our sequelize query in which we pull the dates from the database that match the dates that the admin entered
    db.exercise.findAll({where: { bodyGroup: req.body.bodyGroup}}).then(function(response) {
      // Sending a JSON response composed of a stringified version of the specified data from dbTeeTime
      res.json(response);
    });
  });

  // Route for logging user out of their session
  app.post("/logout", function(req, res) {
    req.logout();
    // res.redirect("/");
    res.sendStatus(200);
  });

  // Route for getting some data about our user to be used client side
  app.get("/pullWorkouts", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // CREATE route for adding user inputs to our table in the database.
  app.post("/submit", function(req, res) {
      db.TeeTime.create({
          date: req.body.TeeTime.date,
          time: req.body.TeeTime.time,
          name: req.body.TeeTime.name,
          email: req.body.TeeTime.email,
          phone: req.body.TeeTime.phone,
          numberGolfers: req.body.TeeTime.numberGolfers,
          comments: req.body.TeeTime.comments,
          cart: req.body.TeeTime.cart
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
  });

  // DELETE route for deleting teetimes. We can get the id of the teetime we want to delete from
  app.post("/adminScreen/delete", function(req, res) {
      console.log(req.body);
      db.TeeTime.destroy({
          where: {
              id: req.body.adminSelected.deleteId
          }
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
    });

  // PUT route for updating teetimes. We can get the updated teetimes from req.body
  app.put("/api/teetimes", function(req, res) {
      db.TeeTime.update({
          date: req.body.date,
          time: req.body.time
      }, {
          where: {
              id: req.body.id
          }
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
  });
};
