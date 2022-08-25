const List = function (object, args) {
    object = sortKeys(object);
    const firstKeys = Object.keys(object);
    let listString = '';
    firstKeys.forEach((key, index) => {
        listString = `${listString}${key}\n`;
        let nextKey = '';
        if (Object.keys(object[key]) && Object.keys(object[key]).length !== 0) {
            const sortedLevel = sortKeys(object[key])
            if (Object.keys(sortedLevel).length > 1) {
                Object.keys(sortedLevel).forEach((subKey, index) => {
                    listString = `${listString}  ${subKey}\n`
                    if (object[key][subKey] && Object.keys(object[key][subKey]).length > 0) {
                        listString = `${listString}    ${Object.keys(object[key][subKey])}\n`
                        lastKey = Object.keys(object[key][subKey]);
                        if(object[key][subKey][lastKey] && Object.keys(object[key][subKey][lastKey]).length > 0) {
                            listString = `${listString}      ${Object.keys(object[key][subKey][lastKey])}\n`
                        }
                    }
                });
            } else {
                listString = `${listString}  ${Object.keys(object[key])}\n`
                nextKey = Object.keys(object[key]);
                if (object[key][nextKey] && Object.keys(object[key][nextKey]).length > 0) {
                    listString = `${listString}    ${Object.keys(object[key][nextKey])}\n`
                    lastKey = Object.keys(object[key][nextKey]);
                    if(object[key][nextKey][lastKey] && Object.keys(object[key][nextKey][lastKey]).length > 0) {
                        listString = `${listString}      ${Object.keys(object[key][nextKey][lastKey])}\n`
                    }
                }
            }
        }
    });
    console.log(listString.slice(0, -1));
}

const sortKeys = function (object) {
    return Object.keys(object)
    .sort()
    .reduce((acc, key) => {
        acc[key] = object[key];
        return acc;
    }, {});
}

module.exports = List