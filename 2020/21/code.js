const _ = require('lodash');
const input = require('./input');

function part1(foods) {
    let {allergenMap, allIngredients } = buildAllerganMap(foods);

    let dangerous = new Set();
    for (ingredient of allergenMap.values()) {
        ingredient.forEach(ing => dangerous.add(ing));
    }
    let safe = _.cloneDeep(allIngredients);
    for (danger of dangerous) {
        safe.delete(danger);
    }

    let sum = 0;
    for (food of foods) {
        for (ing of food.ingredients) {
            sum += (safe.has(ing)) ? 1 : 0;
        }
    }
    return sum;
}

function part2(foods) {
    let {allergenMap} = buildAllerganMap(foods);
    
    let singles = [...allergenMap.values()].filter(s => s.size === 1);
    let outMap = new Map();
    while (singles.length > 0) {
        singles.forEach(single => {
            let s = [...single][0];
            for(allergen of allergenMap.keys()) {
                let ingredients = allergenMap.get(allergen);
                if (ingredients.size === 1) {
                    outMap.set(allergen, s);
                }
                if (ingredients.has(s)) {
                    ingredients.delete(s);
                }
            }
        });
        singles = [...allergenMap.values()].filter(s => s.size === 1);
    }
    
    let list = "";
    for (ing of new Map([...outMap.entries()].sort()).values()) {
        list += ing + ','
    }
    return list.slice(0,-1);
}

function buildAllerganMap(foods) {
    let allIngredients = new Set();
    let allergenMap = new Map();

    for (food of foods) {
        for (ingredient of food.ingredients) {
            allIngredients.add(ingredient);
        }
        for (allergen of food.allergens) {
            allergenMap.set(allergen, _.cloneDeep(allIngredients));
        }
    }
    
    for (allergen of allergenMap.keys()) {
        let possibleIngredients = allergenMap.get(allergen);
        for (let food of foods) {
            if (food.allergens.has(allergen)) {
                for (let ingredient of allIngredients) {
                    if (!food.ingredients.has(ingredient) && possibleIngredients.has(ingredient)) {
                        possibleIngredients.delete(ingredient);
                    }
                }
            }
            if(possibleIngredients.size === 1) { 
                break;
            }
        }
    }

    return { allergenMap, allIngredients };
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));