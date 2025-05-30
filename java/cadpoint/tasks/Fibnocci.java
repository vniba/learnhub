public class Fibnocci{

	public static void main(String[] args){

		printFib(0,10);	
	}
	
	private static void printFib(int start,int limit){

		int a=start;
		int b=a+1;
		int c = a+b;
	
		while(limit >0){
			System.out.println(a);
			c=a+b;
			a=b;
			b=c;
			
			
			limit--;
		}	
	}

}