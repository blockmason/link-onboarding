# link-onboarding
https://mason.link

Welcome to the onboarding material for Blockmason Link! We hope Link will be a useful developer tool to help you build your applications. Link is the first managed, decentralized, functions-as-a-service (FaaS) platform, pushing the envelope of interoperability by creating conventional web APIs for developers interacting with networks such as programmable blockchains.

### Signing Up

> Sign up for your Link account at https://mason.link/sign-up with your email address. You will then have to open your email and confirm your address.  

> After clicking on the confirmation link, create your account's passphrase and set your organization namespace. This is your Link organization.

![Set Organization Name](images/set_org.png)

You will then be on the Link Homepage consisting of an IDE with a `Demo` smart contract code. 

![Link Homepage IDE](images/link_home_ide.png)

### Getting Started
Welcome to the Link Homepage! A few things to note here:

* The smart contract code that you see in the IDE is automatically deployed to the Link private blockchain in **near real-time**. When you make any changes to the code, a new deployment is automatically done.

* You can toggle between the code and the Link generated APIs screens:
![Link Homepage API](images/link_home_api.png). When you modify your code, your APIs will automatically update!

* At the bottom of the IDE/API window, you will see a `Client ID` and `Client Secret`. These are the credentials your front-end app will use to authenticate with Link to access the API endpoint.

* Currently, only the Solidity smart contract programming language is supported, which is most notably used on the Ethereum blockchain.

Since smart contracts deployed onto a blockchain are generally immutable (i.e. can NOT be changed), every time you make a change to the smart contract code in the Link IDE, effectively a new smart contract is being deployed which means a new `Client ID` and `Client Secret` will be generated for authentication.

> Try it! Here is a simple smart contract code for assigning ownership of an asset. **Delete** the `Demo` contract code and **copy and paste** the following code into the Link IDE and see what API endpoints are generated (note: it may take a few seconds for the change to persist):
```
pragma solidity ^0.5.8;

contract Ownership {
    mapping(string => address) public ownerOf;
    address public authority;
    
    constructor() public {
        authority = msg.sender;
    }
    
    function setOwner(string memory asset, address owner) public {
        ownerOf[asset] = owner;
    }
}
```
Your generated API endpoints should look something like the following. Also note the `Client ID` and `Client Secret` have changed!

![Link Ownership APIs](images/link_ownership_apis.png)

So using the Link private blockchain, this is **all you need to do** to deploy your contract and generate your APIs. Simply copy/paste your smart contract code and the APIs will appear!

Now, *how do you actually use these API endpoints?*

### Link SDKs
https://blockmason.link/link-sdk/

To make it easy to use Link, we have developed several easy-to-use SDKs in a variety of popular programming languages so you can focus on building your apps using your preferred language. 

With all our SDKs, generally all you need is the `Client ID` and `Client Secret` for authentication.

The following link is to a simple example using the [JavaScript SDK](https://github.com/blockmason/link-sdk.js "Link JavaScript SDK") and our Ownership smart contract code from the previous section. Note this example uses the JavaScript SDK from a Node.js environment which requires the use of `node-fetch`: 

https://github.com/blockmason/link-onboarding/blob/master/ownership.js

First, `POST /setOwner` is called to set the owner of an asset and then `GET /getOwner` is called to retrive the owner address, with the request parameters and response object based on the Link API documentation. If I run the `ownership.js` script using Node from my Terminal, for example, I get:

![Ownership Script Example](images/ownership_script_example.png)

Note: we do NOT need to use a complex library such as web3.js in our JavaScript file as Link abstracts away the blockchain interactions and complexity 'under-the-hood'. We are simply making an API call as we would with any 3rd party service.

### Using Ethereum or other public blockchains

Currently Link supports [Ethereum](https://www.ethereum.org/) and [GoChain](https://gochain.io/) public blockchains. 

The process for connecting and interacting with an external blockchain using Link is a bit more involved but relatively straightforward using the Link Project Wizard. In general, the process flow looks something like this (the deployment process for the Link private blockchain greyed out):

![Link public blockchain setup flow](images/Link_public_blockchain_flow.png)

1. Create your smart contract in Link
2. Label your public blockchain
3. Setup your network connector by identifying the network RPC provider API endpoint. For Ethereum, we recommend using a hosted provider such as Infura. See [here](https://github.com/gochain-io/docs#network-rpc-urls) for GoChain. 
4. Deploy your smart contract onto the public blockchain
5. Label your generated APIs
6. Label your API Consumer (e.g. the name of your app using the APIs)
7. Obtain your OAuth API authentication (automatically generated)

Let's walk through the process for deploying and setting up our Ownership smart contract APIs on the Ethereum Ropsten Testnet. 

#### Using Ethereum Ropsten with Link




