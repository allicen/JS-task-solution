function door(events) {
    let eventsArr = events.split('');
    let result = [];

    let step = 0;
    let p = 0;
    let o = 0;
    let open = false;

    for(let i = 0; i < eventsArr.length; i++){
        switch (eventsArr[i] ) { // Событие
            case ('P') :
                p++;
                break;
            case ('O') :
                o++;
                break;
        }

        if(step === 5){ // Если ворота были открыты
            open = true;
        }

        let direction = (Math.floor(p % 2) === 1) ? 'vertical' : 'directly'; // Направление движения ворот
        let changeDirection = (o > 0); // Смена направления

        let max = (step + 1 <= 5) ? step + 1 : step; // Ворота открываются
        let min = (step - 1 >= 0) ? step - 1 : step; // Ворота закрываются

        step = (direction === 'vertical' && !changeDirection && !open) ? max :
            (direction === 'directly' && changeDirection && open) ? max :
            (direction === 'vertical' && changeDirection && !open) ? min :
                (direction === 'directly' && !changeDirection && open) ? min :
                    step;

        result.push(step);
    }
    return result.join('');
}
console.log(door('P......P..OP..P...'));