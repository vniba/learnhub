package src.basics;
class Cast {
	public static void main(String[] args){
	int idk = 2;	
	long iIdk = 2;
	long l = 90L;
	
	System.out.println(idk+ "-" + iIdk + "-" + l);
	
	float price= 200.19f;
	short pby = (short)price;
	float p = pby;

	System.out.println(price + ">" + pby + ">" + p);
	}
	
}