const EmployeeRepository = require('../repositories/EmployeeRepository')


const store = ({name, position}) => {
    

    EmployeeRepository.insert({name, position})
}




module.exports = {
    store
}