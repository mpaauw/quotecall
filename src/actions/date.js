export function today(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1; 
    var year = currentDate.getFullYear();

    if(day<10) {
        day='0'+day
    } 

    if(month<10) {
        month='0'+month
    } 

    currentDate = year + month + day;
    return currentDate;
}