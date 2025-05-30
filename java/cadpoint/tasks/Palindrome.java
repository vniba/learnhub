public class Palindrome{

	public static void main(String[] args){

		int num = 121;	
		boolean isPal = isPalindromeNum(num);
		printOut(num,isPal);
		//printPalindromes(100,1000);
	}
	
	private static void printPalindromes(int start,int end){

		int counter = start;
		while(counter<end){

			boolean isPal = isPalindromeNum(counter);

			if(isPal) printOut(counter,isPal);
			
			counter++;
		};		
	}


	private static boolean isPalindromeNum(int num){
		
		int counter = num;
		
		int rev = 0;

		while(counter>0){
			int rem = counter %10;
			rev =(rev * 10) + rem;
			counter=counter/10;

			//System.out.printf("%s  %d\n",rev,rem);
		}
	
		return num ==rev;
	}

	private static void printOut(int num,boolean is){

		String msg = is?"is Palindrome":"Not palindrome";
		System.out.printf("%d %s\n",num,msg);
	}
	

}