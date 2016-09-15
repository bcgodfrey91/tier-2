import React, {Component} from 'react';
const assert = require('chai').assert;
const AllInfoCard = require('../../src/AllInfoCard')
import FollowUps from '../../src/FollowUps'
const Home = require('../../src/Home')
const Main = require('../../src/Main')
const NavBar = require('../../src/NavBar')
const NewContact = require('../../src/NewContact')
const SignIn = require('../../src/SignIn')
const UserCard = require('../../src/UserCard')
const UserCards = require('../../src/UserCards')

describe('Our Test Bundle', function() {
  it('should work', function() {
    assert(true);
  })
describe('All Info Card', function() {

  it('should create an object', function() {
    assert.isObject({ AllInfoCard })
  })

})

describe('FollowUps', function() {

    it('should create an object', function() {
      assert.isObject({ FollowUps })

    })
  })

describe('Home', function() {

    it('should create an object', function() {
      assert.isObject({ Home })
    })
  })
describe('Main', function() {

    it('should create an object', function() {
      assert.isObject({ Main })
    })
  })
describe('NavBar', function() {

    it('should create an object', function() {
      assert.isObject({ NavBar })
    })
  })
describe('NewContact', function() {

    it('should create an object', function() {
      assert.isObject({ NewContact })
    })
  })

describe('SignIn', function() {

    it('should create an object', function() {
      assert.isObject({ SignIn })
    })
  })

describe('UserCard', function() {

    it('should create an object', function() {
      assert.isObject({ UserCard })
    })
  })

describe('UserCards', function() {

    it('should create an object', function() {
      assert.isObject({ UserCards })
    })
  })

})
