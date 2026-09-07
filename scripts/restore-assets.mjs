import fs from 'node:fs'
import path from 'node:path'

const sourceDir = path.resolve('public/_assets64')
const legacyDir = path.resolve('public/_b64')
const targetDir = path.resolve('public/assets')

const files = {
  'gallery-crowd.avif': 3,
  'gallery-dance.avif': 3,
  'gallery-disco.avif': 3,
  'gallery-dj.avif': 2,
  'gallery-friends.avif': 2,
  'hero-white-party.avif': 4,
}

fs.mkdirSync(targetDir, { recursive: true })

for (const [fileName, parts] of Object.entries(files)) {
  let encoded = ''
  for (let index = 1; index <= parts; index += 1) {
    const partName = `${fileName}.seg${String(index).padStart(2, '0')}.txt`
    encoded += fs.readFileSync(path.join(sourceDir, partName), 'utf8').trim()
  }
  fs.writeFileSync(path.join(targetDir, fileName), Buffer.from(encoded, 'base64'))
}

fs.rmSync(sourceDir, { recursive: true, force: true })
fs.rmSync(legacyDir, { recursive: true, force: true })
console.log('Imagens AVIF da White Party restauradas em public/assets')
