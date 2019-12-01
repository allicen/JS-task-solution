function calculateDamage(yourType, opponentType, attack, defense){
    let effectiveness = (yourType === opponentType) ? 0.5 : 0;
    if(effectiveness === 0){
        switch (yourType) {
            case ('fire') :
                effectiveness = (opponentType === 'grass') ? 2 :
                    (opponentType === 'water') ? 0.5 : 1;
                break;
            case ('water') :
                effectiveness = (opponentType === 'grass') ? 0.5 :
                    (opponentType === 'electric') ? 0.5 : 2;
                break;
            case ('grass') :
                effectiveness = (opponentType === 'electric') ? 1 :
                    (opponentType === 'fire') ? 0.5 : 2;
                break;
            case ('electric') :
                effectiveness = (opponentType === 'grass ') ? 0.5 :
                    (opponentType === 'water') ? 2 : 1;
                break;
        }
    }
    let damage = Math.ceil(50 * (attack/defense) * effectiveness);
    return damage;
}
console.log(calculateDamage('fire','water',100,100));