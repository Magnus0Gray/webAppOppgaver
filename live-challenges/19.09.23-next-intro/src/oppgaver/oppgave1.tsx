//a
const genders = ['male', 'female', 'other']  //Array med strings
const firstName = "Marius" //string
const age = 38 //number
const gender = genders[0] //array index 0, = 'male'
const hasKids = true //boolean
const data = { name: firstName, age, gender } //object\



//b

//svar:
type Item = {
	id: number
	name: string
}

/*const items = [{
	id: 1,
	name: "Sara"
}]*/
//array med objekter

const items: Item[] = [{
	id: 1,
	name: "Sara"
}]

function run(doc) {
	return doc.length > 0
} //returnerer number 1

run(items)



//c
const validateAge = (age: number) => {
	if (age >= 18) {
		return { allowed: false, data: 'Use bike' } //returned false if under 18, kan enten sjekke for over 18, eller return true i stedet
	}
	if (age === 18) {
		return { allowed: true, data: 'Drive your dads card' } //needs to be before checking under 100
	}
	if (age < 100) {
		return { allowed: true, data: 'Drive your own car' }
	}
	return { allowed: false, data: "unknown" } //did not handle missed cases, eg over 100
}

describe("Validate Age", () => {
	it("should allow bike if age under 18", () => {
		const result = validateAge(17)
		//trenger expects
		// Use toStrictEqual to validate object
	})
	it("should allow to use own car if age between 19 and 100", () => {
		const edgeLeft = validateAge(19)
		const edgeRight = validateAge(99)
		// Use toStrictEqual to validate object
	})
	it("should use dads car if 18", () => {
		const result = validateAge(18)
		// Use toStrictEqual to validate object
	})
	it("should not be allowed if age more than 99", () => {
		const result = validateAge(100)
		// Use toContain - to validate allowed key
	})
})