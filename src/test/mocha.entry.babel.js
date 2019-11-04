import chai from 'chai'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
// require bridge module after adapter is set
chai.use(require('chai-enzyme'))
