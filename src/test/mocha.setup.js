import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import enzyme from 'enzyme'

enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

global.chai = chai
global.expect = chai.expect

global.enzyme = enzyme
