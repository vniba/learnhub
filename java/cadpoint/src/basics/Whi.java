package src.basics;
class Whi{
	
	public static void main(String[] args){

		byte limit = 20;
		
		while(limit>0){
			String is= (limit & 1) == 1 ? "Odd":"Even";
			System.out.printf("%d is %s\n",limit,is);				

			limit--;
		};
	
	}
}