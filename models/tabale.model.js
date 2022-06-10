const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TableSchema = new Schema(
  {
    Country: String,
    state: [
      {
        State_name: String,
        population: Number,
        active: Number,
        confirmed: Number,
        deceased: Number,
        recovered: Number,
        vaccinated: Number,
        City: [
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
          {
            city_name: String,
            population: Number,
            active: Number,
            confirmed: Number,
            deceased: Number,
            recovered: Number,
            vaccinated: Number,
          },
        ],
      },
    ]
  },
  { collection: "Covid19Tables" }
);

// Export the model
module.exports = mongoose.model("table", TableSchema);