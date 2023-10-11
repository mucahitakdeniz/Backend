"use strict";

const Personnel = require("../models/personnel.model");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    const { username, password } = rew.body;
    if (username & password) {
      const user = await Personnel.findOne({ username, password });
      if (user) {
        if (user.isActive) {
          //login
          const accessData = {
            _id: user._id,
            departmentId: user.departmentId,
            firstname: user.firstName,
            isActive: user.isActive,
            isAdmin: user.isAdmin,
            isLead: user.isLead,
          };
          const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {
            expiresIn: "30m",
          });

          const refresData = {
            username: user.username,
            password: user.password,
          };
          const refresToken = jwt.sign(refresData, process.env.REFRESH_KEY, {
            expiresIn: "3d",
          });

          res.send({
            error: false,
            token: {
              accessData,
              refresToken,
            },
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("This account is not active.");
        }
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Wrong username or password.");
    }
  },
  refresh: async (req, res) => {},
  logout: async (req, res) => {},
};
