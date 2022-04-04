export function createPet(type: string, name: string) {
	if (type !== "cat" && type !== "dog") {
		throw new Error("'type' must be 'cat' or 'dog'")
	}

	if (name === "") {
		throw new Error("'name' must not be empty")
	}

	let message
	if (type === "cat") {
		message = `Meow!, I'm ${name}.`
	} else if (type === "dog") {
		message = `Woof!, I'm ${name}.`
	}

	return {
		name,
		type,
		message,
	}
}
