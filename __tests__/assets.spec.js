import * as assets from '../assets'

const { chai: { expect }} = global

describe('[Assets] - file-loader', function() {
  it('export-default-from as namespace', () => {
    // check export-default-from
    expect(assets.__esModule).to.be.equal(true) // eslint-disable-line import/namespace
    // check import - import-namespace combined with export-default-from
    expect(assets).to.contain.keys('viewar_device_assembly')
  })

  it('output contains \'[path][name]\'', () => {
    // check path prefix
    expect(assets.viewar_device_assembly).to.contain('/assets/viewar_device_assembly.png')
  })
})
