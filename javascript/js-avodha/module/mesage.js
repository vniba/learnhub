'use strict'

// one way
export const msg = 'omnis accusamus sequi'

// another way
const sun = 'et-quam-facere'
const moon = 'qui-dolore-qui'
export { sun, moon } //custom module

function hello() {
  return `this is from another world`
}
export default hello //default module
