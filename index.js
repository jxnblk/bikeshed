
const bikeshed = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  const pad = '000000'

  return '#' + (pad + hex).slice(-pad.length)
}

module.exports = bikeshed

