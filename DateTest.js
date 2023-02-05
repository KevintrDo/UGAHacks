var dt = new Date();
var offset = -300; //Timezone offset for EST in minutes.
var estDate = new Date(dt.getTime() + offset*60*1000);
console.log(estDate); 