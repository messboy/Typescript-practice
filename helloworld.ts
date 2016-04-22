class HelloWorld {
  constructor(private displayDOM: HTMLElement) {
  }
  
  SayHi(name: string) {
    function add(params: string) {
        var isReady : boolean = true; 
        var total : number = 0;
        return params;
    };
      
    //ex1 樣版literal
    var hh = add('3');
    var displayText = `Hello, ${name} ${hh}`;
    this.displayDOM.innerHTML = displayText;
    
    //ex2 宣告型別
    var idList: number[] = [1,2,3];
    idList.push(4);
    console.log(idList);
    
    //ex3 Enum
    enum Size{
        L = 0,
        M = 1,
        S = 2
    }
    
    //// 使用 Enum 判斷類型
    var size = 0;
    if(size === Size.L){
        //// 程式碼
    }
  }
}

//ex4 常數
const discountPrice = 100; 
if(1==1){
    console.log(discountPrice);
}

//ex5 方法 宣告傳入與回傳型別
function GetDiscountPrice(price: number): number {  
  if (price > 200) {    
    return price * 0.8  
  }  
  return price;
}

//ex6 方法一、設定傳入參數可為 Null 
// 特別需要注意的是，不管是設定可為 Null 的參數，或是有預設值的參數，都必須要在 Function 的尾端才能生效。 
class CouponDiscounter {
  Calculate(price: number, coupon?: string): number {
    if(coupon){
      //// 使用折價券
      return 1;
    }
    else{
      //// 不使用折價券
      return 2;
    }
  }
}
var discounter = new CouponDiscounter();
discounter.Calculate(100, 'CouponCode');
discounter.Calculate(100);

//ex7 方法二、設定傳入參數的預設值
class CouponDiscounter2 {
  Calculate(price: number, coupon: string = ''): number {
    if(coupon){
      //// 使用折價券
      return 1;
    }
    else{
      //// 不使用折價券
      return 2;
    }
  }
}
var discounter = new CouponDiscounter2();
discounter.Calculate(100,'coupon');
discounter.Calculate(100);

//Spread 語法來取得所有剩餘的參數，必須要注意如果使用這種語法，型別必須要是 Array。 
class CouponDiscounter3 {
  Calculate(price: number, ...couponList: string[]): number {
    for (var coupon of couponList) {
      console.log(coupon);
    }
    return price;
  }
}
var discounter3 = new CouponDiscounter3();
discounter3.Calculate(100, 'coupon1', 'coupon2');


//ex.8 類別
class Student {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  getPhoneNumber(): string {
    //程式邏輯
    return "";
  }
}

//ex.9 建構式 (Constructor) 
class Student2 {
  name: string;  
  age: number;

  constructor(name: string, age: number) {    
    this.name = name;    
    this.age = age;  }
}

var student = new Student2('Kirk', 18);
console.log(`Student name: ${student.name}, age: ${student.age}`);
