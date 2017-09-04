

export default class FixtureBuilder {
  constructor(generator) {
    this._generator = generator
  }

  next() {
    //Hent ut det som skal sendes inn fra stepDefinitions
    return this._generator.next()
  }

  // stepDefinitions = [{
  //   name: 'first step',
  //   returns: {type: 'SOME_CUSTOM_TYPE'}
  // }]
}
