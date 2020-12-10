const findBestEmployee = function(employees) {
    const countWorks = Object.values(employees);
    let maxWork = 0;
    
    for (const countWork of countWorks) {
        if (countWork >= maxWork) { maxWork = countWork; }
    }

    const indexWorker = countWorks.indexOf(maxWork);
    const employee = Object.keys(employees);
    return employee[indexWorker];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux