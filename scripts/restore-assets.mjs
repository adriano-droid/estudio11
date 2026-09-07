import fs from 'node:fs'
import path from 'node:path'

const sourceDir = path.resolve('public/_img64')
const targetDir = path.resolve('public/assets')

const files = {
  'gallery-crowd.avif': 1,
  'gallery-dance.avif': 1,
  'gallery-disco.avif': 1,
  'gallery-dj.avif': 1,
  'gallery-friends.avif': 1,
  'hero-white-party.avif': 2,
}

fs.mkdirSync(targetDir, { recursive: true })

for (const [fileName, parts] of Object.entries(files)) {
  let encoded = ''
  for (let index = 1; index <= parts; index += 1) {
    const partName = `${fileName}.p${index}.txt`
    encoded += fs.readFileSync(path.join(sourceDir, partName), 'utf8').trim()
  }
  fs.writeFileSync(path.join(targetDir, fileName), Buffer.from(encoded, 'base64'))
}

for (const dir of ['public/_img64', 'public/_assets64', 'public/_b64']) {
  fs.rmSync(path.resolve(dir), { recursive: true, force: true })
}

console.log('Imagens AVIF da White Party restauradas em public/assets')
