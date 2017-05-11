'use strict'

module.exports = {
	reverseString :(str) => {
		if (str ===''){
			return null;
		}
		let reversedStr = str.split('').reverse().join('');
  
       if(reversedStr === str){
       	return true;
       }
       else{
       	return reversedStr;
       }
   }

}
