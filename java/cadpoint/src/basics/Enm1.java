package src.basics;
enum Phone {ANDROID,IPHONE};

class Enm1{

	public static void main(String[] args){

		System.out.println(Phone.IPHONE);
	
		for(Phone p:Phone.values()){
			System.out.println("values : " +p);
		}

		enum Aot {EREN,MIKASA,ARMIN;}
		

		System.out.println("value of : "+Aot.valueOf("ARMIN"));
		System.out.println("Index : "+Aot.valueOf("MIKASA").ordinal());

		
	}
}