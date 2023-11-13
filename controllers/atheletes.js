const Athelete = require("../models/athelete")
const { validationResult } = require('express-validator');
const getAtheletes = async (req, res) => {
    try {
        const atheletes = await Athelete.find();
        res.status(200).json(atheletes);

    } catch (error) {
        res.status(500).json({ message: error })
    }

}

const addAthelete = async (req, res) => {
   
    const athelete = req.body;
    //Validaciones
    const newAthelete = new Athelete(athelete);
    try {
      await newAthelete.save();
      res.status(201).json(newAthelete);
      
    } catch (error) {
      res.status(500).json({message: error})
    }
  }

module.exports = { getAtheletes, addAthelete}