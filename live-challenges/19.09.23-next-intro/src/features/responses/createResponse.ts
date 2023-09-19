import type { CreateResponses, Faker } from "./types"

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

//faker emulerer bruker input slik at vi slipper aa legge de verdier manuelt
//faker er random uten direkte kontroll av input resultater
/*
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
}*/

// Export a "faker" object that provides fake data generation methods.
export const faker: Faker = {
	// Generate a random ID using the getRandomId function.
	id: () => getRandomId(),

	// Get a random answer option from the fakeAnswers array.
	answer: () => getRandomItem(fakeAnswers),

	// Get a random score from the fakeScores array.
	score: () => getRandomItem(fakeScores),

	// Get a random category from the fakeCategories array.
	category: () => getRandomItem(fakeCategories),
}

//min kode
/*
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
}* /

export { createResponses }
*/

// Define a function to create responses.
const createResponses: CreateResponses = ({
	existingResponses,
	count,
	faker,
}) => {
	// Create a new Map to store responses, initializing it with existing responses.
	const responses = new Map(existingResponses)

	// Check if there are no existing responses and the requested count is zero.
	if (responses.size === 0 && count === 0) {
		// If both conditions are met, throw an error to indicate no response added.
		throw new Error("No response added")
	}

	// Generate "count" number of fake responses and add them to the map.
	for (let i = 0; i < count; i++) {
		// Generate a unique ID for each response using the faker's id method.
		const response = {
			id: faker.id(),
			questionId: "1", // Hardcoded question ID for simplicity.
			score: faker.score(), // Get a random score.
			category: faker.category(), // Get a random category.
			answer: faker.answer(), // Get a random answer option.
		}

		// Set a unique key for each response in the map (e.g., "response-0", "response-1").
		responses.set(`response-${i}`, response)
	}

	// Return the map of responses.
	return responses
}

// Export the "createResponses" function and the "getRandomId" function.
export { createResponses, getRandomId }

