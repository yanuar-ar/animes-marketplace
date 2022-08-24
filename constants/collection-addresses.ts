import { DaoConfigProps, nounsAbi, lilNounsAbi } from '@noun-auction'

export const daos: DaoConfigProps[] = [
  {
    name: 'Nouns',
    contractAddress: '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
    auctionContractAddress: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
    marketType: 'NOUNS_AUCTION',
    classifierPrefix: null,
    abi: nounsAbi,
  },
  {
    name: 'LilNoun',
    contractAddress: '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B',
    auctionContractAddress: '0x55e0F7A3bB39a28Bd7Bcc458e04b3cF00Ad3219E',
    marketType: 'LIL_NOUNS_AUCTION',
    classifierPrefix: {
      keyPrefix: 'lil',
      typePrefix: 'LIL_',
    },
    abi: lilNounsAbi,
  },
]

export function returnDao(collectionAddress: string | undefined) {
  if (!collectionAddress) return
  const address = collectionAddress.toLowerCase()
  return daos.find((dao) => dao.contractAddress.toLowerCase() === address)
}

export function returnDaoAuctionContract(collectionAddress: string) {
  return returnDao(collectionAddress)?.auctionContractAddress
}

export const daoAddresses = daos.map((dao) => dao.contractAddress.toLowerCase())

const collections: string[] = [
  '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
  '0x4b61413d4392c806e6d0ff5ee91e6073c21d6430',
  '0x9a38DEC0590aBC8c883d72E52391090e948DdF12',
  '0xaf615b61448691fc3e4c61ae4f015d6e77b6cca8',
  '0x684E4ED51D350b4d76A3a07864dF572D24e6dC4c',
  '0xce6e3a14b5f8ce2b05af0f117dc922769779aa3b',
  '0x01Ea0a1C4cF5d6D948320fF16B1b6b972626e599',
  '0x000000059619cDDdC056910672AbC90887136a95',
  '0x7887f40763ace5f0e8320181fd5b42776d35b1ff',
  '0x160c404b2b49cbc3240055ceaee026df1e8497a0',
  '0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f',
  '0xbcd1a163dee3ac31342eb6626f28e45d637dd091',
  '0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d',
  '0xd1258db6ac08eb0e625b75b371c023da478e94a9',
]

export const collectionAddresses = collections.map((collection) =>
  collection.toLowerCase()
)

export const allAddresses = daoAddresses.concat(collectionAddresses)
