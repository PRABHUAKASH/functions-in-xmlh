var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
  //   //  the countries from the Asia continent /region using the Filter function
    var ar=result.filter((ele)=>ele.region==="asia").map((ele)=>ele.name);
    console.log(ar);
  //   //  the countries with a population of less than 2 lakhs using Filter function
  var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
    console.log(res);
    // the following details name, capital, flag using forEach function
  var a=ar.filter((ele)=>ele.name);
   console.log(a);}
  var ca=a.filter((ele)=>ele.capital);
   console.log(ca);
  var fl=ca.filter((ele)=>ele.flag);
   console.log(fl); 


//  the total population of countries using reduce function
  var con=res.reduce((acc,ele)=>acc+ele,0);
    console.log(con);}


    //  the country which uses US Dollars as currency.
  var money=res.filter((ele)=>ele.currency);
  console.log(money)