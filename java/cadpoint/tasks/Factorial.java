public class Factorial{

	public static void main(String[] args){

	System.out.println(Fac(10));		
	}

	private static int Fac(int num){
		
	int total = 1;
	while(num>0){
		
		total*= num;
		num--; 
			
	}
	return total;	
	
	}


}