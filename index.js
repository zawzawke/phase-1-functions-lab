// Code your solution in this file!
function distanceFromHqInBlocks(street = 43){
    const hqlocation = 42;
    return Math.abs(street - hqlocation)
}

function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(street - 42);
    return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet(sp, ep){
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(ep - sp);
    return distanceInBlocks * feetPerBlock;
}


function calculatesFarePrice(sp, ep){
    const distanceInFeet = Math.abs(ep - sp) * 264;
    if (distanceInFeet <= 400) {
        return 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }else if (distanceInFeet > 2000 && distanceInFeet <=2500) {
        return 25;
    }else{
        return "cannot travel that far";
    }
}

//points to note
//math.abs makes the value positive no matter what because in our case we were dealing with distance which cannot be negative