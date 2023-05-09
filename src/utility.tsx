/**
 * getClassWiseData
 * @param {*} data takes the dataset as input
 * @param {*} subject 
 * @returns an object with class-wise data for Flavanoids.
 */
export function getClassWiseData(data: any, subject: any) {
    const classWiseData = {};
    data.forEach((row: any) => {
        const alcoholClass = Number(row.Alcohol);
        if (!classWiseData[alcoholClass]) {
            classWiseData[alcoholClass] = [];
        }
        if (subject == 'Gamma') {
            row[subject] = (Number(row.Ash) * Number(row.Hue)) / Number(row.Magnesium);
        }

        classWiseData[alcoholClass].push(Number(row[subject]));
    });
    return classWiseData;
}

export function calculateMean(data: any) {
    // 0 is initial value
    // function iterates over each element in the data array, and for each element, adds it to the accumulated sum, acc.
    // after all the elements in the data array have been processed, the reduce function returns the total sum of all the numbers in the array.
    const sum = data.reduce((acc: any, value: any) => acc + value, 0);
    // calculate mean = totalsum/length
    return sum / data.length;
}

export function calculateMedian(data: any) {
    const sortedData = data.sort((a: any, b: any) => a - b); // sorted in ascending order
    const middleIndex = Math.floor(sortedData.length / 2); // get middle index and rounding down to the nearest integer using Math.floor()
    if (sortedData.length % 2 === 0) {
        // If the length of the sorted data is even then the median is the average of the two middle values.
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
        // If the length of the sorted data is odd then the median is the middle value.
        return sortedData[middleIndex];
    }
}

export function calculateMode(data: any) {
    const frequencyTable = {};
    let maxFrequency = 0;
    let mode: any;
    data.forEach(value => {
        if (frequencyTable[value]) {
            frequencyTable[value]++;
        } else {
            frequencyTable[value] = 1;
        }
        if (frequencyTable[value] > maxFrequency) {
            maxFrequency = frequencyTable[value];
            mode = value
        }
    });
    return mode;
}

export function getStats(data: any, subject: any) {
    const classWiseData = getClassWiseData(data, subject);
    const stats = {
        mean: {},
        median: {},
        mode: {}
    };
    for (const alcoholClass in classWiseData) {
        const subjectData = classWiseData[alcoholClass];
        stats.mean[alcoholClass] = calculateMean(subjectData);
        stats.median[alcoholClass] = calculateMedian(subjectData);
        stats.mode[alcoholClass] = calculateMode(subjectData);
    }
    return stats;
}