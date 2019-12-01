function NamedOne(first, last) {
    return{
        firstName : first,
        lastName : last,
        get fullName(){
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(name) {
            if(this.firstName !== '' && this.lastName !== ''){
                let full = name.split(' ');
                if(full[0] !== undefined && full[1] !== undefined){
                    this.firstName = full[0];
                    this.lastName = full[1];
                }
            }
        }
    }
}