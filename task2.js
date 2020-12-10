const countProps = function(obj) {
    let countProperties = 0;
    const properties = Object.keys(obj);
    for (const property of properties) {
        countProperties += 1;
    }
    return countProperties;
};


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3