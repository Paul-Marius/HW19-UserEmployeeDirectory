// import axios from "axios";

// export const getUsers = function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us");
// };

// second version ->

import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};