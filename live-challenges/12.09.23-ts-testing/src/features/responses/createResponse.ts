import { CreateResponses, Faker, Response } from "./types"

const fakeAnswers: string[] = [
  "GlitterGlo Lipstick",
  "QuantumQuench Energy Drink",
  "StellarScent Perfume",
  "PurrfectPillow Pet Bed",
]

const fakeScores: number[] = [3, 2, 1]

const fakeCategories: string[] = ["Math", "Code", "Science"]

const getRandomItem = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

/* Source
// TODO: Oppgave 1 - Not implemented
const faker: Faker = {
	id:,
	answer,
	score,
	category,
}*/

//faker emulerer bruker input slik at vi slipper å legge de verdier manuelt
//faker er random uten direkte kontroll av input resultater
const faker: Faker = {
	id: getRandomId,
	answer: () => getRandomItem<string>(fakeAnswers),
	score: () => getRandomItem<number>(fakeScores),
	category: () => getRandomItem<string>(fakeCategories),
}

//mock er et controllert alternativ
const fakerMock: Faker = {
	id: getRandomId,
	answer: () => "answer",
	score: () => 2,
	category: () => "one"
}

/*



// TODO: Oppgave 1 - Not implemented
const createResponses: CreateResponses = ({
  existingResponses,
  count,
  faker,
}) => {
  return responses
}
*/
//factory, genererer responsene via faker/fakerMock etc
const createResponses: CreateResponses = ({
	existingResponses,
	count,
	faker,
}) => {
	return responses
}
//responses[[]] = responses.set()

// TODO: Oppgave 3 - Not implemented
const calcAverageScore = (responses: Map<string, Response>) => {
  return 0
}

export { createResponses }
