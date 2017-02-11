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


// ACCOUNT API
export const getBalance = (num) => {
  return new Promise((resolve, reject) => {
    //web3 = setWeb3()
    // const balance = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[num]))
    // store.dispatch({
    //   type: 'GET_BALANCE',
    //   balance: { balance: balance.c }
    // })
    resolve('balance')
  })
}
