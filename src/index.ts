import path from 'path'
import fs from 'fs'
import { addressMappingWhitelist, hardAssetList } from './constants'

const listMap: [any, string][] = [
  [addressMappingWhitelist, 'addressMappingWhitelist'],
  [hardAssetList, 'hardAssetList'],
]

const buildList = (list: any, listName: string) => {
  const tokenListPath = `${path.resolve()}/config/${listName}.json`
  const stringifiedList = JSON.stringify(list, null, 2)
  fs.writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  ${listName} complete`)
  })
}

listMap.map((curList) => {
  const [list, listName] = curList
  buildList(list, listName)
})
