const formatName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

const getGreeting = (timeOfDay) => {
    if (timeOfDay === 'morning') {
        return 'Good morning';
    } else {
        return 'Good afternoon';
    }
}

const createGreeting = (firstName, lastName, timeOfDay) => {
    const name = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting}, ${name}!`;
}

console.log(createGreeting('Jorim', 'Pablico', 'morning')); // Output: Good morning, Jorim Pablico!
console.log(createGreeting('Jorim', 'Pablico', 'afternoon')); // Output: Good afternoon, Jorim Pablico!