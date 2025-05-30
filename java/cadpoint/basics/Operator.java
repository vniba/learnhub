class Operator{
		
	public static void main(String[] args){
	
	int a = 9;

	int tot = ++a;
	float sum = a * 1.1f;

	float sumd = sum / 2;
	int rshif = tot >> 10;
	int lshif = tot << 1;


	int b = 12;
	int z = 0;
	System.out.println((a>b) & (++z > a));
	System.out.println((a==b) | (++z > b));
	System.out.println(z);

	int fine = z==2 ? 99 : 1;
	System.out.println(fine); 
	
	int idk = 20;
	idk/=2;
	System.out.println(idk);
	System.out.println(-1>>1);

	}
}