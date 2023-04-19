// sex, inches, pounds, years, activity level [1.2, 1.9] 1.2 being low activity 

const calculateCalorie = (sex, height, targetWeight, age, activity) => {
    if (sex == "Male") {
        const bmr = 12.7 * height + 6.23 * targetWeight - 6.8 * age + 66
        const energy = bmr * activity
        const therm = 1.1 //thermogenic multiplier 
        return energy * therm
    } else if (sex == "Female") {
        const bmr = 4.7 * height + 4.35 * targetWeight - 4.7 * age + 655
        const energy = bmr * activity
        const therm = 1.1
        return energy * therm
    }
}


const calculateProtein = (targetWeight, activity) => {
    const kg = targetWeight / 2.20462
    if (activity < 1.3) {
        var protein = 0.8 * kg
    } else if (1.3 <= activity && activity < 1.6) {
        var protein = 1.35 * kg
    } else if (1.6 <= activity && activity <= 1.9) {
        var protein = 1.8 * kg
    }
    return protein
}

const calculateCarb = (calories) => {
    return 300 * calories / 2000
}

const calculateFat = (calories) => { 
    if (activity < 1.3) {
        var fat = calories * .2 / 9
    } else if (1.3 <= activity && activity < 1.6) {
        var fat = calories * .27 / 9
    } else if (1.6 <= activity && activity <= 1.9) {
        var fat = calories * .35 / 9
    }
    return fat
}

