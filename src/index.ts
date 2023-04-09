import path from 'path'
import fs from 'fs'
import { addressMappingBlacklist, addressMappingWhitelist, ownershipBlacklist } from './constants'

const hardAssetListWithIsHardAsset = addressMappingWhitelist.filter((item: any) => item.isHardAsset === true)
const addressMappingWhiteListWithoutIsHardAsset = addressMappingWhitelist.filter(
  (item: any) => item.isHardAsset === undefined || item.isHardAsset === false,
)

const buildList = (list: any, listName: any) => {
  const tokenListPath = path.resolve(`./config/${listName}.json`)

  const listWithLowercaseAddress = list.map((item: any) => {
    if (item.tokenAddresses) {
      item.tokenAddresses = item.tokenAddresses.map((addressObject: any) => {
        return { ...addressObject, address: addressObject.address.toLowerCase() }
      })
    }
    return item
  })

  const listWithLowercaseKnownOwners = listWithLowercaseAddress.map((item: any) => {
    if (item.knownOwners) {
      item.knownOwners = item.knownOwners.map((addressObject: string) => addressObject.toLowerCase())
    }
    return item
  })

  const stringifiedList = JSON.stringify(listWithLowercaseKnownOwners, null, 2)
  fs.writeFile(tokenListPath, stringifiedList, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.info(`✅ ${listName} complete`)
    }
  })
}

const buildHardAssetList = () => {
  if (hardAssetListWithIsHardAsset.length > 0) {
    const hardAssetList = hardAssetListWithIsHardAsset.map((item: any) => ({
      ...item,
      isHardAsset: true,
    }))
    const hardAssetListPath = path.resolve('./config/hardAssetList.json')
    const stringifiedList = JSON.stringify(hardAssetList, null, 2)
    fs.writeFile(hardAssetListPath, stringifiedList, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.info('✅ hardAssetList complete')
      }
    })
  }
}

const buildAddressMappingWhiteList = () => {
  if (addressMappingWhiteListWithoutIsHardAsset.length > 0) {
    const addressMappingWhiteListPath = path.resolve('./config/addressMappingWhiteList.json')
    const stringifiedList = JSON.stringify(addressMappingWhiteListWithoutIsHardAsset, null, 2)
    fs.writeFile(addressMappingWhiteListPath, stringifiedList, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.info('✅ addressMappingWhiteList complete')
      }
    })
  }
}

buildList(addressMappingBlacklist, 'addressMappingBlacklist')
buildList(ownershipBlacklist, 'ownershipBlacklist')
buildHardAssetList()
buildAddressMappingWhiteList()
