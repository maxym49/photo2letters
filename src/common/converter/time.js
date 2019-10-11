const convertTimestampToDate = (unixTimestamp) => {
    const dateObj = new Date(unixTimestamp);
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getUTCSeconds();

    return `${year.toString()}:${month.toString().padStart(2, '0')}:${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export {convertTimestampToDate};