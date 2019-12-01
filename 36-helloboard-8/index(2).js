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
    let date = new Date();
    date.setDate(day);
    date.setMonth(month);
    date.setYear(year);
    let dayWeek = getDayCount(date);

    // Идем по календарю
    while(month !== 12){
        if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){ // Месяцы с 31 днями
            if(day === 32){
                day = 1;
                month = month + 1;
            }
        }
        if(month === 1){ // Февраль
            if(daysCount === 365 && day === 29){
                day = 1;
                month = month + 1;
            }
            if(daysCount === 366 && day === 30){
                day = 1;
                month = month + 1;
            }
        }
        if(month === 3 || month === 5 || month === 8 || month === 10){ // Месяцы с 30 днями
            if(day === 31){
                day = 1;
                month = month + 1;
            }
        }

        if(day % 2 === 1 && (dayWeek === 'вт' || dayWeek === 'ср' || dayWeek === 'вс') && month < 12){ // Проверка всех условий
            count++;
        }

        day++; // Переключаем день

        if(dayWeek !== ''){ // Переключаем день недели
            let index = days.indexOf(dayWeek);
            if(index < 6){
                dayWeek = days[index+1];
            }else {
                dayWeek = days[0];
            }
        }

        if(month === 12){
            break;
        }
    }
    return count;
};

console.log(j(2020));