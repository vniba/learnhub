package src.basics;
class Switc {

	public static void main(String[] args){

		enum Month  {JAN,FEB}
		int mn = 2;

		switch(mn){
		
			case 1:
				System.out.println(Month.JAN);
				break;
			case 2:{
				System.out.println(Month.FEB);
				break;
				}
			default:
				System.out.println("why");
		
		}
	}

}