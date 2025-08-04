export const firstCapitalize = (string)=>{
    if (string){
        return string[0].toUpperCase().concat(string.slice(1));
    }
};