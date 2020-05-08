import axios from 'axios';

export default {
    getEmployeeList: function () {
       const search= axios.get("https://randomuser.me/api/?inc=picture,name,email,cell,dob&results=50&format=pretty");
       console.log(search);
       
         return search
    }
};