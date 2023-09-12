export type Response = {
  id: string
  answer: string
  score: number
  category: string
  questionId: string
}

//needed to add type definition
const response: Response = {
	id: "1",
	answer: "1",
	score: 1,
	category: "1",
	questionId: "1"
}

export type Faker = {
  id: () => string
  score: () => number
  category: () => string
  answer: () => string
}

//added type def
const faker: Faker = {
	id: () => '',
	score: () => 1,
	category: () => "",
	answer: () => ""
}

export type CreateResponseParams = {
  existingResponses?: Map<string, Response>
  count: number
  faker: Faker
}

//createresponses forventer dette
const existingResponses = new Map<string, Response>([["response-id", response]])

//added type def
const createResponseParams: CreateResponseParams = {
	existingResponses,
	count: 10,
	faker
}

export type CreateResponses = (
  params: CreateResponseParams,
) => Map<string, Response>
