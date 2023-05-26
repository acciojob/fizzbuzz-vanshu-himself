//your JS code here. If required.
 let str="";
for(let i=1;i<=100;i++){
	if(i%3==0){
		str+="Fizz\n"
	}else if(i%5==0){
		str+="Buzz\n"
	}else if(i%3==0 && i%5==0){
		str+="FizzBuzz\n"
	}else{
		str+=i+"\n";
	}
}alert(str);
	
