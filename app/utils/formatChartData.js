// import _ from 'lodash';

// const OMIT_LIST = [
// 	"TOTAL (ALL-INDIA)",
// 	"TOTAL (STATES)"
// ];

function sortItemInArray(list) {
	return list[14];
}

function sortList(a, b) {
  return sortItemInArray(b) - sortItemInArray(a)
}

function filterListByDropDownSelection(list, selectedItem) {
	return list.filter((item) => item[1] === selectedItem && item[0] !== "TOTAL (ALL-INDIA)" && item[0] !== "TOTAL (STATES)").slice(0,10)
}

export default function formatChartData(chartDataObj, selectedItem){
    let valueArray = [], nameArray = [];
    const sortDataList = chartDataObj.data.sort(sortList);
    const filteredList = filterListByDropDownSelection(sortDataList, selectedItem);
    
    filteredList.forEach((list) => valueArray.push(list[14]))
    filteredList.forEach((list) => nameArray.push(list[0]))

    return {
    	itemName: nameArray,
    	itemValue: valueArray
    }

    return barChartData;
   
}