const fetch = require('node-fetch');
const { link } = require('@blockmason/link-sdk');

const project = link({
  clientId: 'pW3tAfIXZ8wNC4tER7_88Yoj6RFAPElfGijHrODWkMs',
  clientSecret: 'sn9QnR0KSat/E3jlSeg34M6Y9dLdRmfHpFbH7Sv8S2/xWjyS0qN4kBVNxnuS0Lu'
}, {
    fetch
});

// Assign ownership of an asset
async function setOwner() {
  const reqBody = {
    "asset": "DaVinciPainting",
    "owner": "0xaFf485B0dd5D2c2851FDf374D488379F75403663"
  }
  
  const response = await project.post('/setOwner', reqBody);
  if (response.errors) {
    console.log(response.errors[0].detail);
  } else {
    console.log('POST /setOwner called successfully with request data ', reqBody);
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