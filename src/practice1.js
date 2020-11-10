const parseData = input => {
    const {data: dataArray, column: columnsArray} = input;
    return dataArray.map(data => data.reduce((resultObj, value, index) => {
        resultObj[columnsArray[index].name] = value;
        return resultObj;
    }, {}));
}
export {parseData};
