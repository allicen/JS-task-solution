let j = module.exports = function(year) {
    let count = 0;
    let day = 1;
    let month = 0;
    let isLeap = false;

    // Високосный год или нет
    if(year % 4 === 0){
        if(year % 100 !== 0){
            isLeap = true;
        }else{
            if(year % 400 === 0){
                isLeap = true;
            }
        }
    }

    // Количество дней в году и дни недели
    let daysCount = (!isLeap) ? 365 : 366;
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    // Вычисляем первый день недели
    function getDayCount(date) {
        return days[date.getDay()];
    }

    // Идем по календарю
    while(daysCount !== 0){
        let date = new Date(year, month, day);
        let dayWeek = getDayCount(date);

        if(date.getDate() % 2 === 1 && (dayWeek === 'вт' || dayWeek === 'ср' || dayWeek === 'вс')){ // Проверка всех условий
            count++;
        }

        day++; // Переключаем день
        daysCount--;
    }
    return count;
};

console.log(j(2020));