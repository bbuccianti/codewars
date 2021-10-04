function humanReadable(s) {
  return [s / 3600, (s % 3600) / 60, (s % 3600) % 60]
    .map((v) => String(v >> 0).padStart(2, '0'))
    .join(':')
}

module.exports = humanReadable
