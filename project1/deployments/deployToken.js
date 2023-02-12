const main=async ()=> {

    const initialSUpply=ethers.utils.parseEther("100000");
    const [deployer]=await ethers.getSigners();
    console.log(`Address deploying the contract--> ${deployer.address}`);

    const tokenFactory=await ethers.getContractFactory("Token");
    const contract=await tokenFactory.deploy(initialSUpply);

    console.log(`Token Contracr address--> ${contract.address}`)
}

main()
.then(()=>process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});