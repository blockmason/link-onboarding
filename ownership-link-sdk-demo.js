const fetch = require('node-fetch');
const { link } = require('@blockmason/link-sdk');

// Authenticate with Link API
const project = link({
  clientId: '',
  clientSecret: ''
}, {
    fetch
});

// Assign ownership of an asset
async function setOwner() {
  const reqBody = {
    "asset": "DaVinciPainting",
    "owner": "0xaFf485B0dd5D2c2851FDf374D488379F75403663"
  }
  
  try {
    await project.post('/setOwner', reqBody);
    console.log('POST /setOwner called successfully with request data ', reqBody);
  }
  catch(err) {
    console.log('Error with POST /setOwner: ',err);
  }
}

// Retrieve ownership of an asset
async function getOwner() {
  const asset = {
    "value": "DaVinciPainting"
  };

  const { result } = await project.get('/ownerOf', asset);
  console.log('GET /getOwner of asset', asset, 'is ', result);
}

// Set and retrive for demo
setOwner().then(function() {
    getOwner();
});