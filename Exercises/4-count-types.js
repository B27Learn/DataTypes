'use strict';

const countTypesInArray = (arr) => {
    const res = {};
    for (const value of arr) {
        const type = typeof value; 
        if (!res[type]) res[type] = 0;
        res[type]++;
    }
    return res;
};

module.exports = { countTypesInArray };
