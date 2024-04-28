const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../DataBase/db')

const RegisterUser = async ( req, res) => {

    const { name, email, password,phone_number } = req.body;
   
    try {
        // Hash the password
        const password_hash = await bcrypt.hash(password, 10);
        
        // Insert company data into the database
        //await db.query('use defaultdb;')
        const user_result= await db.query(
            "INSERT INTO tbl_user (username, email, password_hash,phone_number) values (?,?,?,?)",
            [name, email, password_hash,phone_number]
        )
        // Send success response
        res.status(201).json({ message: 'User registered successfully', userId: user_result.insertId });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error registering user' });
        
    }
    };

    module.exports = RegisterUser;