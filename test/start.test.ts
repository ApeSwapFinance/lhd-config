import {
  farms,
  bills,
  pools,
  jungleFarms,
  tokens,
  vaults,
  dualFarms,
  nfaStakingPools,
  iaos,
  zapInputTokens,
  farmsV2,
  vaultsV3,
} from '../src/constants'
import billsJson from '../config/bills.json'
import farmsJson from '../config/farms.json'
// import farmsV2Json from '../config/farmsV2.json'
import jungleFarmsJson from '../config/jungleFarms.json'
import poolsJson from '../config/pools.json'
import tokensJson from '../config/tokens.json'
import vaultsJson from '../config/vaults.json'
// import vaultsV3Json from '../config/vaultsV3.json'
import dualFarmsJson from '../config/dualFarms.json'
import nfaStakingPoolJson from '../config/nfaStakingPools.json'
import iaosJson from '../config/iaos.json'
import zapInputTokensJson from '../config/zapInputTokens.json'

const stringifiedBills = JSON.stringify(bills, null, 2)
const stringifiedBillsJson = JSON.stringify(billsJson, null, 2)

const stringifiedFarms = JSON.stringify(farms, null, 2)
const stringifiedFarmsJson = JSON.stringify(farmsJson, null, 2)

const stringifiedFarmsV2 = JSON.stringify(farmsV2, null, 2)
const stringifiedFarmsV2Json = JSON.stringify(farmsV2, null, 2)

const stringifiedJungleFarms = JSON.stringify(pools, null, 2)
const stringifiedJungleFarmsJson = JSON.stringify(poolsJson, null, 2)

const stringifiedPools = JSON.stringify(jungleFarms, null, 2)
const stringifiedPoolsJson = JSON.stringify(jungleFarmsJson, null, 2)

const filterActiveTokens = Object.fromEntries(Object.entries(tokens).filter(([, val]) => val.active))
const stringifiedTokens = JSON.stringify(filterActiveTokens, null, 2)
const stringifiedTokensJson = JSON.stringify(tokensJson, null, 2)

const stringifiedVaults = JSON.stringify(vaults, null, 2)
const stringifiedVaultsJson = JSON.stringify(vaultsJson, null, 2)

const stringifiedVaultsV3 = JSON.stringify(vaultsV3, null, 2)
const stringifiedVaultsV3Json = JSON.stringify(vaultsV3, null, 2)

const stringifiedDualFarms = JSON.stringify(dualFarms, null, 2)
const stringifiedDualFarmsJson = JSON.stringify(dualFarmsJson, null, 2)

const stringifyNfaStakingPools = JSON.stringify(nfaStakingPools, null, 2)
const stringifiedNfaStakingPoolsJson = JSON.stringify(nfaStakingPoolJson, null, 2)

const stringifyIaos = JSON.stringify(iaos, null, 2)
const stringifiedIaosJson = JSON.stringify(iaosJson, null, 2)

const stringifyZapInputTokens = JSON.stringify(zapInputTokens, null, 2)
const stringifiedZapInputTokensJson = JSON.stringify(zapInputTokensJson, null, 2)

describe('JSON files are most recent and are correct', () => {
  it('Test if bills have been generated', () => {
    expect(stringifiedBillsJson).toBe(stringifiedBills)
  })
  it('Test if farms have been generated', () => {
    expect(stringifiedFarmsJson).toBe(stringifiedFarms)
  })
  it('Test if farmsV2 have been generated', () => {
    expect(stringifiedFarmsV2Json).toBe(stringifiedFarmsV2)
  })
  it('Test if jungle farms have been generated', () => {
    expect(stringifiedJungleFarmsJson).toBe(stringifiedJungleFarms)
  })
  it('Test if pools have been generated', () => {
    expect(stringifiedPoolsJson).toBe(stringifiedPools)
  })
  it('Test if tokens have been generated', () => {
    expect(stringifiedTokensJson).toBe(stringifiedTokens)
  })
  it('Test if vaults have been generated', () => {
    expect(stringifiedVaultsJson).toBe(stringifiedVaults)
  })
  it('Test if vaults have been generated', () => {
    expect(stringifiedVaultsV3Json).toBe(stringifiedVaultsV3)
  })
  it('Test if dual farms have been generated', () => {
    expect(stringifiedDualFarmsJson).toBe(stringifiedDualFarms)
  })
  it('Test if nfa staking pools have been generated', () => {
    expect(stringifiedNfaStakingPoolsJson).toBe(stringifyNfaStakingPools)
  })
  it('Test if iaos have been generated', () => {
    expect(stringifiedIaosJson).toBe(stringifyIaos)
  })
  it('Test if zap Input Tokens have been generated', () => {
    expect(stringifiedZapInputTokensJson).toBe(stringifyZapInputTokens)
  })
})
