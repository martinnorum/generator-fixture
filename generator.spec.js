import generator from './generator'
import { call, put, take } from 'redux-saga/effects'
import FixtureBuilder from './fixture'

describe('some description', () => {
  it('generates', () => {
    let gen = generator();
    const fixture = new FixtureBuilder(gen)

    expect(fixture.next().value).toMatchObject(take('*'))

    gen.next({some: 'value'})

    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
    // console.log('/////////////////////')
    // console.log(gen.next().value)
  })
})
