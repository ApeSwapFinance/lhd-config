import path from 'path'
import fs from 'fs'
import {
  addressMappingBlacklist,
  addressMappingWhitelist,
  hardAssetList,
  ownershipBlacklist,
  ownershipWhitelist,
} from './constants'

const listMap = [
  [addressMappingWhitelist, 'addressMappingWhitelist'],
  [addressMappingBlacklist, 'addressMappingBlacklist'],
  [ownershipBlacklist, 'ownershipBlacklist'],
  [ownershipWhitelist, 'ownershipWhitelist'],
  [hardAssetList, 'hardAssetList'],
]

const buildList = (list: any, listName: any) => {
  const tokenListPath = path.resolve(`./config/${listName}.json`)
  const stringifiedList = JSON.stringify(list, null, 2)
  fs.writeFile(tokenListPath, stringifiedList, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.info(`✅ ${listName} complete`)
    }
  })
}

listMap.forEach(([list, listName]) => {
  buildList(list, listName)
})
