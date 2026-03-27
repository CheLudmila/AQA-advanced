
function isAdult(age) {
    return age >= 18;
}


const isAdultExpr = function(age) {
    return age >= 18;
};


const isAdultArrow = (age) => age >= 18;



const ages = [25, 15];

ages.forEach(age => {
    console.log(`Age ${age} (declaration):`, isAdult(age));
    console.log(`Age ${age} (expression):`, isAdultExpr(age));
    console.log(`Age ${age} (arrow):`, isAdultArrow(age));
});