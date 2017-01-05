export function getCurrentDate(gap){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear() - gap;

    if(dd < 10) {
        dd = '0' + dd;
    } 

    if(mm < 10) {
        mm = '0' + mm;
    } 

    today = yyyy + "" +  mm + "" + dd;
    return today;
}