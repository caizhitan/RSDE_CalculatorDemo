
const Validation = (input:string) => {
    let typeError = false;

    // const doubleMinus = /--/i;
    // const doublePlus = /++/i;
    // const PlusMinus = /+-/i;
    // const MinusPlus = /-+/i;
    // const e = /e/i;


    const OnlyNumber = new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$');

    // const syntexList = [doubleMinus, doublePlus, PlusMinus, MinusPlus, e];

    // for(let i=0; i<syntexList.length; i++){
    //     if(RegExp(syntexList[i]).test(input)){
    //         return typeError
    //     }
    //     else{
    //         typeError = false;
    //         return typeError
    //     }
    // }
    if(OnlyNumber.test(input)){
            return typeError
        }
        else{
            typeError = true;
            return typeError
        }
}

export default Validation;