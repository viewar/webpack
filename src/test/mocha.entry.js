const EmzymeAdapterReact = require('enzyme-adapter-react-16')
require('enzyme').configure({ adapter: new EmzymeAdapterReact() })
// require bridge module after adapter is set
require('chai').use(require('chai-enzyme')())

// before(() => {
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
// })
