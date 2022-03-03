import "@testing-library/jest-dom/extend-expect";
import { TextEncoder, TextDecoder } from 'util'

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
})

// this gets around the 'auth0-spa-js must run on a secure origin' error
global.crypto.subtle = {}
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

