import path from 'path'
import fs from 'fs'
import { verifiedAssets, blacklist, hardAssets, exemptedAssets } from './constants'

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
      console.info(`✅ Creation of ${listName} complete!`)
    }
  })
}

buildList([...verifiedAssets, ...hardAssets, ...exemptedAssets], 'whitelist')
buildList(blacklist, 'blacklist')
buildList(hardAssets, 'hardAssets')
