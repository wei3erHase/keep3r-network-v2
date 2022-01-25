import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy('UniV3PairManagerFactory', {
    contract: 'solidity/contracts/UniV3PairManagerFactory.sol:UniV3PairManagerFactory',
    from: deployer,
    log: true,
  });
};

deployFunction.tags = ['deploy-factory', 'UniV3PairManager', 'UniV3PairManagerFactory', 'mainnet'];

export default deployFunction;
