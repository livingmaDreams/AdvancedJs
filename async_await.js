console.log('Person 1: show tickets');
console.log('Person 2: show tickets');

const preMovie = async() =>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getpopcorn = new Promise((resolve,reject)=> resolve('popcorn'));

    const getButter = new Promise((resolve,reject)=> resolve('Butter'));

    const getColdDrinks = new Promise((resolve,reject)=> resolve('ColdDrinks'));

    let ticket = await promiseWifeBringingTickets;
       
    // console.log(`Wife: I have the ${ticket}`);
    // console.log('Husband: We should go in');
    // console.log('Wife: No Iam Hungry');

    // let popcorn = await getpopcorn;

    // console.log(`Husband: I get some ${popcorn}`);
    // console.log('Husband: We should go in');
    // console.log('Wife: I need butter on my popcorn');

    // let butter = await getButter;

    // console.log(`Husband: I get some ${butter}`);
    // console.log('Husband: We should go in');
    // console.log('Wife: I need some Cold Drinks to drink');

    // let coldDrinks = await getColdDrinks;

    // console.log(`Husband: I get some ${coldDrinks}`);
    // console.log('Husband: We should go in');
    // console.log('Wife: Yes Its getting Late');


    //PROMISE ALL AWAIT
    let [popcorn,butter,coldDrinks] = await Promise.all([getpopcorn,getButter,getColdDrinks]);
    console.log(`Person 3: Gets ${popcorn},${butter},${coldDrinks}`);

    return ticket;
}

preMovie().then((t)=> console.log(`Person 3: show ${t}`));
console.log('Person 4: show tickets');
console.log('Person 5: show tickets');