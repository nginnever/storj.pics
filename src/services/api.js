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
//const Storj = require('./../../node_modules/storj-js/lib/index.js')

// import lightwallet from 'eth-lightwallet'
// import web3hook from 'hooked-web3-provider'

var CLIENT = {
  bridge: 'https://api.storj.io',
  //bridge: 'http://localhost:8080'
  // basicAuth: {
  //   email: 'email',
  //   password: 'pass'
  // }
  //key: '1b91d8dc6d69c8debc34f9324c5054b9c2a73fba7884fae8dd163bc3be099514'
};

// window interval for seeding challenges
let storj
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

function initClient() {
  storj = new Storj(CLIENT)
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
    getBuckets().then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

export const getData = (v1, v2) => {
  return new Promise((resolve, reject) => {
    if(storj === undefined) {
      initClient()
    }
    console.log(storj)
    storj.getData(v1, v2, (err, img) => {
      if(err){
        reject(err)
      }
      resolve(img)
    });
  })
}

// ACCOUNT API
export const login = (options) => {
  return new Promise((resolve, reject) => {
    console.log('-----')
    console.log(options)

    if(options.key) {
      CLIENT.key = options.key
    } else {
      if(options.email && options.pass) {
        var cred = {
          email: options.email,
          password: options.pass
        }
        CLIENT.basicAuth = cred
      } else {
        reject('Invalid Authentication')
      }
    }

    initClient()
    resolve()
  })
}

// BUCKET API
export const getBuckets = () => {
  return new Promise((resolve, reject) => {
    // get buckets 
    storj.getBuckets((err, res) => {
      if(err){
        reject(err)
      }
      store.dispatch({
        type: 'GET_BUCKETS',
        buckets: {buckets: res}
      })
      resolve()
    })
  })
}

export const createBucket = (name) => {
  return new Promise((resolve, reject) => {
    // get buckets 
    storj.createBucket(name, (err, res) => {
      console.log('&&&&&&&&&&&&&&&&')
      console.log(res)
      if(err){
        reject(err)
      }
      storj.bucket.makePublic(res.id, (err,res) => {
        console.log(res)
        var currentStore = store.getState()
        var b = currentStore.bucketsReducer.toJSON().buckets
        console.log(b)
        b.push(res)
        console.log(b)

        store.dispatch({
          type: 'GET_BUCKETS',
          buckets: {buckets: b}
        })
        resolve()
      })
    })
  })
}
// export const makePublic = (id, opts) => {
//   return new Promise((resolve, reject) => {
//     storj.bucket.makePublic(id, (err,res) => {
//       console.log(res)
//       resolve(res)
//     })
//   })
// }

export const uploadPicture = (pic, bucketId) => {
  return new Promise((resolve, reject) => {
    var rs = window.getFileStream(pic);
    console.log(rs)
    // storj.uploadData(bucketId, files[0].name, rs, (err, res) => {
    //   console.log(err)
    //   console.log(res)
    // })

    // storj.on('encrypted', ()=>{
    //   console.log('encrypted')
    // })
    storj.uploadData(bucketId, pic[0].name, rs, (err, res) => {
      console.log(err)
      console.log(res)
      resolve(res)
    })
  })
}

export const getFiles = (id) => {
  return new Promise((resolve, reject) => {
    console.log(id)
    storj.getBucket(id, (err,res) => {
      console.log('FILES!!!')
      console.log(res)
      var pictures = []

      for(var i =0; i < res.files.length; i++) {
        //console.log(res.files[i].filename)
        pictures.push({
          id: res.files[i].id,
          filename: res.files[i].filename,
          size: res.files[i].size
        })
      }
      // var pic = {
      //   size: 430,
      //   name: 'test.jpg',
      //   id: '24213949f1400a77cfcbd287'
      // }

      // var pic2 = {
      //   size: 430,
      //   name: 'test.jpg',
      //   id: '24213949f1400a77cfcbd287'
      // }

      // pictures.push(pic)
      // pictures.push(pic2)
      store.dispatch({
        type: 'GET_PICTURES',
        pictures: {pictures: pictures}
      })
      resolve()
    })
  })
}


