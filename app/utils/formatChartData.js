function spliceArray(item){
    return [item[2],item[4],item[6],item[8],item[10]]
}

function sortArray(list){
    const limitList = list.data.slice(0, 65); 
    return Array.from(limitList).map(item => spliceArray(item));
}

export default function formatChartData(list){
    return sortArray(list);
}