/*
users register themselves on the class manager school portal here
users can edit their profile
users can view their profile here
users can delete their profile here

*/

const express = require("express");
const { teachers, students, passwords } = require("../../db/index");
const { userSchemas, loginSchema } = require("../../functions/schemas");
const bcrypt = require("bcrypt");
const router = express.Router();

// fetch all users details
router.get("/students", (req, res) => {
  res.status(200).json(students);
});

router.get("/teachers", (req, res) => {
  res.status(200).json(teachers);
});


// users sign-up page via post method

router.post("/signup", (req, res) => {

// validating users data through Joi module
  const result = userSchemas(req.body);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

//   checking if the user email (either the teacher or student) already exists in the data base

  const student = students.find(
    (student) => student.email === result.value.email
  );

  const teacher = teachers.find(
    (teacher) => teacher.email === result.value.email
  );

// if the email exist, return email exist
  if (student || teacher) {
    res
      .status(400)
      .send(`User with email ${result.value.email} already exists`);
    return;
  }

//   If the user mail (either student or teacher) doesn't exists in the data base proceed to check if all required entries are met

  const newUser = result.value;

  if (result.value.role === "student") {
    newUser.id = "stu" + (students.length + 1);

    if (!newUser.level) return res.status(400).send("Level is required");
  }

  if (result.value.role === "teacher")
    newUser.id = "tea" + (teachers.length + 1);

//   hashing password using bcrypt module

  const saltRounds = 10;

  bcrypt.hash(result.value.password, saltRounds, function (err, hash) {

    // creating an object variable to store user password and id
    const newUserPassword = {
      id: newUser.id,
      password: hash,
    };

    // storing hashed password and user id into the passwords.js database 
    passwords.push(newUserPassword);

  });

//   deleting user input password for security reasons

  delete newUser.password;
  delete newUser.repeat_password;

//   checking the role of each user and push to their specific databases

  if (result.value.role === "student") students.push(newUser);

  if (result.value.role === "teacher") teachers.push(newUser);

//   return to the client the new rgistered user alomng with a status code 
  res.status(201).json(newUser);
});

// login routes for student

router.post("/student/login", (req, res) => {

    // validating users input using Joi module 
  const result = loginSchema(req.body);

//   if there is error in the user input validation, return error

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

//   checking the the user email exists in the users database

  const student = students.find(
    (student) => student.email === result.value.email
  );

//   if the user is not found,

  if (!student) {
    res.status(404).send(`No user with email ${email}, try again`);
    return;
  }

//   if user is found, then proceed to validate the input password with the hashed password in the database

  const password = passwords.find((user) => user.id === student.id);

  bcrypt.compare(
    result.value.password,
    password.password,
    function (err, result) {

        // if password do not match
      if (err) {
        res.status(404).send("Incorrect pasword, try again!");
        return;
      }
    //   if password matches
      res.status(200).send(`Welcome ${student.fullName}`);
    }
  );
});

// login routes for taecher

router.post("/teachers/login", (req, res) => {

     // validating users input using Joi module 
  const result = loginSchema(req.body);

  //   if there is error in the user input validation, return error
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  //   checking the the user email exists in the users database
  const teacher = teachers.find(
    (teacher) => teacher.email === result.value.email
  );

  //   if the user is not found,
  if (!teacher) {
    res.status(404).send(`No user with email ${email}, try again`);
    return;
  }

  //   if user is found, then proceed to validate the input password with the hashed password in the database
  const password = passwords.find((user) => user.id === teacher.id);

  bcrypt.compare(
    result.value.password,
    password.password,
    function (err, result) {

        // if password do not match
      if (err) {
        res.status(404).send("Incorrect pasword, try again!");
        return;
      }
//   if password matches
      res.status(200).send(`Welcome ${teacher.fullName}`);
    }
  );
});



module.exports = router;
