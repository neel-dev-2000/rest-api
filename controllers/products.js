connectDB = require("../db/connect");
const Product = require("../models/product");

//connecting to database
connectDB();

const getAllProducts = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = Product.find(queryObject);
  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const data = await apiData;
  res.status(200).json({ data });
};

const getAllProductstesting = async (req, res) => {
  const { company, name } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const data = await Product.find(queryObject);
  res.status(200).json({ data });
};

module.exports = { getAllProducts, getAllProductstesting };
