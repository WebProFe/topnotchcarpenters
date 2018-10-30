import axios from "axios";

export default {
  // Gets all entries for table one
  getTableOne: function() {
    return axios.get("/api/tableOne");
  },
  // Gets the entries with the given id
  getEntry: function(id) {
    return axios.get("/api/tableOne/" + id);
  },
  // Deletes the entries with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/tableOne/" + id);
  },
   // Saves an entrie to the database
   saveEntry: function(tableOneData) {
    return axios.post("/api/tableOne", tableOneData);
  },
  // Gets all entries for table two
  getIngredients: function() {
    return axios.get("/api/tableTwo");
  },
  // Gets the an entrie from table two with the given id
  getIngredient: function(id) {
    return axios.get("/api/tableTwo/" + id);
  },
  // Deletes the entrie with the given id
  deleteIngredient: function(id) {
    return axios.delete("/api/tableTwo/" + id);
  },
  // Saves an entrie from table two to the database
  saveIngredient: function(ingredientData) {
    return axios.post("/api/tableTwo", ingredientData);
},

app: function(data) {
  return axios.get('/api/skills', data);
},

};
