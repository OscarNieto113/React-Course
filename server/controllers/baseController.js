import mongoose from "mongoose";

class BaseController {
  constructor(model, populateTable = '') {
    this.model = model;
    this.populateTable = populateTable;

  }

  async create(req, res) {
    try {
      const item = await this.model.create(req.body);
      if (this.populateTable != '') {
        const items = await this.model.find().populate(this.populateTable);
        res.status(200).json(items);
      }else{
        const items = await this.model.find();
        res.status(200).json(items);
      }
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const _id = new mongoose.Types.ObjectId(id);
      if (this.populateTable != '') {
        const item = await this.model.findById(_id).populate(this.populateTable);
        res.status(200).json(item);
      } else {
        const item = await this.model.findById(_id);
        res.status(200).json(item);
      }

    } catch (err) {
        res.status(404).send({message: err.message});
    }
  }

  async findAll(req, res) {
    try {
      if (this.populateTable != '') {
        const items = await this.model.find().populate(this.populateTable);
        res.status(200).json(items);
      }else{
        const items = await this.model.find();
        res.status(200).json(items);
      }
    } catch (err) {
        res.status(404).send({message: err.message});
    }
  }

  async updateById(req, res) {
    try {
      const { id } = req.params;
      const _id =  new mongoose.Types.ObjectId(id);
      const updatedItem = await this.model.findByIdAndUpdate(_id, req.body, { new: true });
      if (this.populateTable != '') {
        const items = await this.model.find().populate(this.populateTable);
        res.status(200).json(items);
      }else{
        const items = await this.model.find();
        res.status(200).json(items);
      }
      
    } catch (err) {
        res.status(404).send({message: err.message});
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.params;
      const _id = new mongoose.Types.ObjectId(id);
      const deletedItem = await this.model.findByIdAndDelete(_id);
      if (this.populateTable != '') {
        const items = await this.model.find().populate(this.populateTable);
        res.status(200).json(items);
      }else{
        const items = await this.model.find();
        res.status(200).json(items);
      }

    } catch (err) {
      res.status(404).send({message: err.message});
    }
    }   
}

export default BaseController;