import { createPet } from "src/createPet"

describe("createPetTest", () => {
	it("should throw an error if called with invalid pet type", () => {
		expect(() => {
			createPet("bird", "Billy")
		}).toThrow("'type' must be 'cat' or 'dog'")
	})
})
