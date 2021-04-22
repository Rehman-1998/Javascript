 // Ways to write javascript
        // console.log("this is me");
        // alert("hello world");
        // document.write("This is write");


        // Javascript Console API
        // console.log("this is me");
        // console.warn("this is warning ");
        // console.error("This is error");

        // Javascript variable

        var number1=30;
        var number2=40;
        console.log(number1 + number2);

        // DataTypes in Javascript
        // 1.number
        var num=40;
        var num1=40.5;

        // 2.string 
        var str="this is string ";
        var str1='this is also string ';

        // 3.object
        var mark ={
            ravi:20,
            harry:30,
            abdul:40.4
        }

        // 4.Array 
        var Array=[1,2,"abdul",4,5]

        // There are two types of DataTypes in Javascript
        // 1.Primitive Datatype : undefined , null , Boolean , Symbol , String , Number
        // 2.Reference Datatype : Array , Object 


        // Operator in javascript 
        var a=20;
        var b=30;
        var c=b;
        console.log("+ operator ",a+b);
        console.log("- operator ",a-b);
        console.log("* operator ",a*b);
        console.log("/ operator ",a/b);
        console.log("Assignment operator ",c);
        console.log("== operator ",a==b);
        console.log(">= operator ",a>=b);
        console.log("<= operator ",a<=b);

        // Logical operator && and    || or


        // Function Javascript

        function avg(a,b)
        {
            return (a+b)/2;
        }

        c=avg(5,5);
        console.log("This is function avgerage ",c);


        // Loop in Javascript

        var arr=[0,1,2,3,4,5];
        for(var i=0;i<arr.length;i++)
        {
            
            // if(i==2)
            // {
            //     continue; is used to stop specific iteration and will run on all left iteration
            //     break;
            // }
            console.log("this is loop ",arr[i]);
        }

        let j=0;
        while(j<arr.length)
        {
            console.log("This is while loop ",arr[j]);
            j++;
        }

        // Array method 

        let newarray=["abdul",1,4.4,"sameer"];
        // newarray.pop();             to remove last element
        // newarray.push("anas");      to add element 
        // newarray.shift();           to remove first element 
        
        console.log(newarray);

        // Date in javascript
        let mydate = new Date();
        console.log(mydate);
        // console.log(mydate.getTime());      getTime will give time in second
        // console.log(mydate.getFullYear());  getfull year will give year


        // DOM manipulation

        let elem=document.getElementById('click');
        console.log(elem);

        let elembyclass=document.getElementsByClassName("container");
        console.log(elembyclass);

        elembyclass[0].classList.add("bg-primary");

        let tn=document.getElementsByTagName('div');
        console.log(tn);
        createdElement=document.createElement('p');
        createdElement.innerText="This is paragraph";
        tn[0].appendChild(createdElement);

        // Selecting using Query

        sel=document.querySelector('.container');
        console.log(sel);

        sel=document.querySelectorAll('.container');
        console.log(sel);


        // Event in Javascript

        // function clicked(){
        //     console.log("The button was clicked");
        // }

        // window.onload=function(){
        //     console.log("the document is loaded");
        // }

        // firstcontainer.addEventListener('click',function(){
        //     console.log("click done");
        // })

        // firstcontainer.addEventListener('mouseover',function(){
        //     console.log("mouse over  done");
        // })

        // firstcontainer.addEventListener('mouseout',function(){
        //     console.log("mouse out  done");
        // })

        // firstcontainer.addEventListener('mouseup',function(){
        //     console.log("mouse up when clicked on container");
        // })

        // firstcontainer.addEventListener('mousedown',function(){
        //     console.log("mouse down when clicked on container ");
        // })


        // firstcontainer.addEventListener('click',function(){
        //     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
        //     console.log("click done");
        // })
         
        let prevHtml=document.querySelectorAll('.container')[1].innerHTML;

        firstcontainer.addEventListener('mouseup',function(){
            
            document.querySelectorAll('.container')[1].innerHTML= prevHtml;
            console.log("mouse up when clicked on container");
        })

        firstcontainer.addEventListener('mousedown',function(){
            
            document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
            console.log("mouse down when clicked on container ");
        })

        // Arrow function

        // function summ(a,b){
        //     return a+b;
        // }

        summ = (a,b)=>{
            return a+b;
        }

        // Set time out and set interval

        logkaro=()=>{
            
            document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval fired</b>";
            console.log("I am lock kro")
        }

        setTimeout(logkaro,2000);

        // Set interval will run repeatly

        clr=setInterval(logkaro,2000);

        clearInterval(clr);



        // Local storage 
        localStorage.setItem('name','abdul');

        localStorage.getItem('name');


        // JSON
        obj={name: "harry",length:1 ,a:{this:"that"}}
        jso=JSON.stringify(obj);
        console.log(jso);
        console.log(typeof jso);
       
        // Template literals - backticks
        
        a=34;
        console.log(`This is my ${a}`)