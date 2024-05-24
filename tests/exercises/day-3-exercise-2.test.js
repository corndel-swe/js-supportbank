import { strict as assert } from 'assert'
import { PokeAPI } from '../../exercises/pokeAPI.js'

describe('PokeAPI', () => {
  const memo = process.env.POKEAPI_URL

  beforeEach(() => {
    process.env.POKEAPI_URL = memo
  })

  it('should use the POKEAPI_URL environment variable', () => {
    const testUrl = 'TEST_URL'
    process.env.POKEAPI_URL = testUrl
    const api = new PokeAPI()
    assert.equal(api.domain, testUrl)
  })

  it('should get a list of pokemon', async () => {
    const api = new PokeAPI()
    const pokemon = await api.getPokemonList()
    assert.ok(pokemon.length > 0)
    assert.ok(pokemon.includes('bulbasaur'))
  })
})
