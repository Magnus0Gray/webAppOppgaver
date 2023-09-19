//a
const genders = ['male', 'female', 'other']  //Array med strings
const firstName = "Marius" //string
const age = 38 //number
const gender = genders[0] //array index 0, = 'male'
const hasKids = true //boolean
const data = { name: firstName, age, gender } //object


//array med objekter
const items = [{
	id: 1,
	name: "Sara"
}] 


function run(doc) {
	return doc.length > 0
}

run(items)

//c
const validateAge = (age: number) => {
	if (age < 18) {
		return { allowed: false, data: 'Use bike' }
	}
	if (age < 100) {
		return { allowed: true, data: 'Drive your own car' }
	}
	if (age === 18) {
		return { allowed: true, data: 'Drive your dads card' }
	}
}

describe("Validate Age", () => {
	it("should allow bike if age under 18", () => {
		const result = validateAge(17)
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