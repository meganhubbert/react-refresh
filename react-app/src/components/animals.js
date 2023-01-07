import Alligator from '../assets/alligator.svg';
import Elephant from '../assets/elephant.svg';
import Giraffe from '../assets/giraffe.svg';

export const animals = {
    elephant: {
        image: Elephant,
        facts: ["Elephants are the world's largest land animal!", 'There are 3 species of elephants, and you can tell them apart by the shape of their ears!', 'Elephants have around 150,000 muscle units in their trunks!']
    },
    alligator: {
        image: Alligator,
        facts: ["Alligators can't survive in salt water", 'Alligators can weigh more than a thousand pounds!', "Alligators' eyes glow in the dark!", 'Alligators are the loudest reptiles in the world!']
    },
    giraffe: {
        image: Giraffe,
        facts: ['Giraffes are the tallest mammals on Earth.', 'Giraffes can run as fast as 35mph!', "A giraffe's neck is too short to reach the ground, so it has to spread its legs to drink water."]
    }
};