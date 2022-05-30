import WikiCards from '../wikiPages/cards.json' assert { type: 'json' }

import ccid from './ccid.json' assert { type: 'json' }

function main() {
  let ok = true
  for (const [charId, ccidItems] of Object.entries(ccid)) {
    for (const i of ccidItems) {
      const wikiCard = WikiCards?.[charId]?.[i.ccid]
      if (!wikiCard) {
        console.warn(`WikiCards[${charId}][${i.ccid}] is absent`)
        continue
      }
      if (wikiCard.nameJa !== i.nameJa) {
        ok = false
        console.error(
          `Mismatch: WikiCards[${charId}][${i.ccid}] is ${
            WikiCards[charId][i.ccid].nameJa
          }, but ccidDB says ${i.nameJa}`
        )
      }
    }
  }
  // process.exit(ok ? 0 : 1)
}

main()
