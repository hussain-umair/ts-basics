function simpleState<T> (initial: T): [() => T, (v: T) => void] {
  let val = initial
  return [
    () => val,
    (v: T) => {
      val = v
    }
  ]
}

const [getter, setter] = simpleState(10)
console.log(getter())
setter(20)
console.log(getter())

const [getter1, setter1] = simpleState<null | string>(null)
console.log(getter1())
setter1('Umair')
console.log(getter1())

interface Rank<RankItem> {
  item: RankItem,
  rank: number
}
function ranker<RankItem>(
  items: RankItem[], 
  rank: (v: RankItem) => number
  ): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item)
  }))

  ranks.sort((a, b) => a.rank - b.rank)
  return ranks.map(rank => rank.item)
}

interface Pokemon {
  name: string,
  hp: number,
}
const pokemon: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20
  },
  {
    name: 'Megaasaur',
    hp: 5
  }
]

const ranks = ranker(pokemon, ({ hp }) => hp)
console.log(ranks)