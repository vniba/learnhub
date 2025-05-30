public class MultipTable{

	public static void main(String[] args){


		PrintMultTable(2,5);		
	}

	private static void PrintMultTable(int num,int limit){

		int counter = 1;

		while(counter<=limit){
		
			int sum = num*counter;
			System.out.printf("%d * %d = %d\n",counter,num,sum);
			
			counter++;
		}
	}
	
}