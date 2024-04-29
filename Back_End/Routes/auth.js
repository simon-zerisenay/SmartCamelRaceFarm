const express = require("express");
const router = express.Router();
const RegisterUser = require("../controller/Register")
const {OAuthRegister, getOAuthInfo} = require("../controller/oAuth")
const Login = require("../controller/Login");

//email authentication
router.post("/register", RegisterUser);
router.post("/login", Login)


//oauth
router.post("/oAuthRegister", OAuthRegister);
router.get("/oauthUserData", getOAuthInfo);




module.exports = router;
