export class Logger{
    public writeLog(){
        console.log(new Date().toDateString() + " logged incoming mail.");
        return 1;
    }
}