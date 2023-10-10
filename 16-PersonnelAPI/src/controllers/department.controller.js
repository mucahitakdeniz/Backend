"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model");
res.getModelList = async function (Model, filters, populate = null) {

    const filtersAndSearch = { ...filters, ...search  }

    return await Model.find(filtersAndSearch).sort(sort).skip(skip).limit(limit).populate(populate)
}

module.exports = {
  list: async (req, res) => {
    // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      detail: res.getModelListDetails(Department),

      data, // data: data
    });
  },

  create: async (req, res) => {
    const data = await Department.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Department.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Department.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Department.deleteOne({ _id: req.params.id });

    const isDeleted = data.deletedCount > 0;

    res.status(isDeleted ? 204 : 404).send({
      error: isDeleted,
      data,
    });
  },
  personnels: async (req, res) => {

    const Personnel = require('../models/personnel.model')

    const data = await res.getModelList(Personnel, { departmentId: req.params.id }, 'departmentId')

    res.status(200).send({
        error: false,
        detail: await res.getModelListDetails(Personnel, { departmentId: req.params.id }, 'departmentId'),
        data
    })

},
};
