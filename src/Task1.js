// import React, { Component } from 'react'

// export default class Task1 extends Component {

//     render() {
//         let data =[
//             {name:"a",age:20, gender:"male"},
//             {name:"b",age:9, gender:"female"},
//             {name:"c",age:3, gender:"male"},
//             {name:"b",age:18, gender:"female"},
//             {name:"c",age:43, gender:"male"},
//             {name:"aa",age:21, gender:"female"},
//             {name:"bb",age:18, gender:"male"},
//             {name:"cc",age:25, gender:"male"},
//         ]

//         let aa = []
//         aa.push({})
//         [{}]
//         console.log("data",data);

//         const below18 = data.filter(data => data.age<18);
//         console.log("below18",below18);
        
//         const r18 = data.filter(data => data.age===18);
//         console.log("Exact 18",r18);
        
//         const above18 = data.filter(data => data.age>18);
//         console.log("above18",above18);
        
//         // const female = data.filter(data => data.age<18);
//         // console.log("below18",below18);
        
//         const male = data.filter(data => data.gender==="male");
//         console.log("Only Male",male);

//         // const Female = data.filter(data => data.gender==="female");
//         // console.log("Only Female",Female);

//         const Female = data.filter(data => 
//             {
//             if(data.gender==="female"){
//                 return data
//             }
//         })
//         console.log("Only Female",Female);



//         const con1 = data.filter(data=>
//             {
//                 if(data.age===18){
//                     return data.name="above 18";
//                 }
//             })
//             console.log("change name to 18 if age=18",con1);


//         const con2 = data.filter(data=>{
//             // console.log(data.gender === "male" ? "female":"male")
//             if(data.age >18  && data.gender !== "female"){
//               return data
//             }
//         })
//         console.log("below 18---------------",con2);


//         const con3 = data.filter(data=>{
//             if(data.age<18){
//                 if( data.gender==="male")
//                 {
//                     return data.gender="Female"
//                 }
//                 else 
//                 {
//                     return data.gender="Male"
//                 }
//             }
//         })

//         console.log("Opposite",con3);


       

     
//         return (
//             <div>
//                 <h1> Hello </h1>
//             </div>
//         )
//     }
// }





// //below 18 
// // 18
// // above 18
// // female
// // male
// // if age == 18 then change name "above 18"
// // if age below 18 then change gender oposite
// // if age above 18 then remove data of mens not shown 

//         // console.log(data);

//         // console.log(data);
//         // const data1 = data.map(xx =>  {
//         //     return {name:xx.name,age:xx.age*2}
//         // });
//         // console.log("data1",data1);


// // let a =[{
//     //     name:"a",
//     //     age:21,
//     // }]
// // console.log(a);
// // let b =[{
// //     name:"b",
// //     age:22,
// // }]
// // console.log(b);
// // let c =[{
// //     name:"c",
// //     age:23,
// // }]
// // console.log(c);