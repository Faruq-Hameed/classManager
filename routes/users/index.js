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

router.get("/students", (req, res) => {
  res.status(200).json(students);
});

router.get("/teachers", (req, res) => {
  res.status(200).json(teachers);
});

router.post("/signup", (req, res) => {
  const result = userSchemas(req.body);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  const student = students.find(
    (student) => student.email === result.value.email
  );

  const teacher = teachers.find(
    (teacher) => teacher.email === result.value.email
  );

  if (student || teacher) {
    res
      .status(400)
      .send(`User with email ${result.value.email} already exists`);
    return;
  }

  const newUser = result.value;

  if (result.value.role === "student") {
    newUser.id = "stu" + (students.length + 1);

    if (!newUser.level) return res.status(400).send("Level is required");
  }

  if (result.value.role === "teacher")
    newUser.id = "tea" + (teachers.length + 1);

  const saltRounds = 10;

  bcrypt.hash(result.value.password, saltRounds, function (err, hash) {
    const newUserPassword = {
      id: newUser.id,
      password: hash,
    };
    passwords.push(newUserPassword);
  });
  delete newUser.password;
  delete newUser.repeat_password;

  if (result.value.role === "student") students.push(newUser);

  if (result.value.role === "teacher") teachers.push(newUser);
  res.status(201).json(newUser);
});

router.post("/student/login", (req, res) => {
  const result = loginSchema(req.body);

  if (result.error) {
    const message = "";
    res.status(404).send(result.error.details[0].message);
    return;
  }

  const student = students.find(
    (student) => student.email === result.value.email
  );

  if (!student) {
    res.status(404).send(`No user with email ${email}, try again`);
    return;
  }

  const password = passwords.find((user) => user.id === student.id);

  bcrypt.compare(
    result.value.password,
    password.password,
    function (err, result) {
      if (err) {
        res.status(404).send("Incorrect pasword, try again!");
        return;
      }

      res.status(200).send(`Welcome ${student.fullName}`);
    }
  );
});

router.post("/teachers/login", (req, res) => {
  const result = loginSchema(req.body);
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  const teacher = teachers.find(
    (teacher) => teacher.email === result.value.email
  );

  if (!teacher) {
    res.status(404).send(`No user with email ${email}, try again`);
    return;
  }

  const password = passwords.find((user) => user.id === teacher.id);

  bcrypt.compare(
    result.value.password,
    password.password,
    function (err, result) {
      if (err) {
        res.status(404).send("Incorrect pasword, try again!");
        return;
      }

      res.status(200).send(`Welcome ${teacher.fullName}`);
    }
  );
});

module.exports = router;
