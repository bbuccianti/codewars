function topThreeWords(text) {
  return text
    .replace(/[^\w' ]| ' /gi, '')
    .toLowerCase()
    .split(' ')
    .filter((b) => b)
    .reduce(
      ([acc, _], next) => [
        ((acc[next] = (acc[next] ?? 0) + 1), acc),
        Object.entries(acc)
      ],
      [{}, []]
    )
    .slice(-1)
    .pop()
    .sort((a, b) => b[1] - a[1])
    .map((v) => v[0])
    .slice(0, 3)
}

module.exports = topThreeWords
