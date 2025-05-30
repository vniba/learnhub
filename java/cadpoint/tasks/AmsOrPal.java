public class AmsOrPal{

	public static void main(String[] args){
		int amsNum = 153;
		boolean isArms = isArmstrongNum(amsNum);

	//	printOut(amsNum,isArms);		
		
		printArmstrongNumbers(100,1000);
	}

	private static void printOut(int number,boolean isArms){
	
		String is = isArms ?"Amstrong Number":"Not Amstrong Number";		
		System.out.printf("%d is %s\n",number,is);
	}

	private static void printArmstrongNumbers(int start,int end){

		int counter = start;
		
		while(counter < end){
			boolean isArms = isArmstrongNum(counter);
			if(isArms) printOut(counter,isArms);
			
			counter++;
		}
	}
	
	private static boolean isArmstrongNum(int num){
		
		int total = 0;
		int ams = num;
		while(ams>0){
			int digit = ams % 10;
			total += digit * digit * digit;
			ams = ams/10;
		}
		return num == total;
	}


}