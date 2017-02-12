'use strict'

const store = require('../store').store
const bs58 = require('bs58')
const each = require('async').eachSeries
const swal = require('sweetalert')

const chunker = require('block-stream2')
const Readable = require('readable-stream')
const through2 = require('through2')
const Buffer = require('buffer/').Buffer
const fileReaderStream = require('filereader-stream')
const concat = require('concat-stream')
const CHUNK_SIZE = 262144
// import lightwallet from 'eth-lightwallet'
// import web3hook from 'hooked-web3-provider'


// window interval for seeding challenges
var intervalID
var intervalID2
var stopSeed
//let ipfs
// import {createDaemon} from '../utils/ipfs'

// Internal functions
function hex_to_ascii(str1) {
  var hex  = str1.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

  // send the hex of the chunk to the contract

  // update UI state with new challenge reward. 

  // TODO: adjust timings of payouts 

// APP API
export const renderApp = () => {
  return new Promise((resolve, reject) => {
    store.dispatch({
      type: 'RENDER',
      showApp: {showApp: true}
    })
    resolve()
  })
}

// ACCOUNT API
export const login = () => {
  return new Promise((resolve, reject) => {
    //web3 = setWeb3()
    // const balance = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[num]))
    // store.dispatch({
    //   type: 'GET_BALANCE',
    //   balance: { balance: balance.c }
    // })
    getBuckets().then(() => {
      resolve('balance')
    })
  })
}

// BUCKET API
export const getBuckets = () => {
  return new Promise((resolve, reject) => {
    // get buckets 
    var buckets = []
    var bucket = {
      id: '77845a36aadcb966fc76d5da',
      it: 1
    }
    var bucket2 = {
      id: '24213949f1400a77cfcbd287',
      it: 1
    }

    buckets.push(bucket)
    buckets.push(bucket2)

    store.dispatch({
      type: 'GET_BUCKETS',
      buckets: {buckets: buckets}
    })
    resolve()
  })
}

export const getFiles = () => {
  return new Promise((resolve, reject) => {
    var pictures = []
    var pic = {
      size: 430,
      name: 'test.jpg',
      id: '24213949f1400a77cfcbd287'
    }

    var pic2 = {
      size: 430,
      name: 'test.jpg',
      id: '24213949f1400a77cfcbd287'
    }

    pictures.push(pic)
    pictures.push(pic2)
    store.dispatch({
      type: 'GET_PICTURES',
      pictures: {pictures: pictures}
    })
    resolve()

  })
}


