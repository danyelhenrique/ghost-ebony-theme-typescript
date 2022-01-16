// const Tags = () => {
//   const $tagContainer = document.querySelector(".tags-container");


//   const showMaxTags = () => {
//       const maxTags = $tagContainer?.getAllChildren('.max-tags');

//       maxTags?.forEach((Maxtag, index) => {
//           const dataMax = Number((Maxtag?.getAttribute('data-max') || 0));
//           const parent = Maxtag.parentElement
//           const tags = (parent?.getAllChildren('.tag') || []);

//           const removeTag = (tag : Element, i: number ) =>  {
//             if(dataMax <= i) {
//                 tag.remove()
//             }
//           }

//         tags.forEach(removeTag)
//       })
    
//   }

//   showMaxTags();
// };

// Tags();


export default {}


// document.querySelectorAll('.post').forEach((element, index) => {
//     const current = index + 1;
   


//     // quinto elemeto
//     if( current % 4 == 0 || current % 5 == 0  || current % 6 == 0 ||  current % 8 !== 0 ) {   
        
     
//         element.nextElementSibling?.classList?.add('col-xl-4')
//         element.nextElementSibling?.nextElementSibling?.classList.add('col-xl-4')
//         element.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.add('col-xl-4')
//         element.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.add('col-xl-4')

      

//     } else {
//        element.nextElementSibling?.classList?.add('col-xl-3')
//        element.nextElementSibling?.nextElementSibling?.classList?.add('col-xl-3')
//        element.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.add('col-xl-3')
//        element.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.add('col-xl-3')


     
//        element.nextElementSibling?.classList?.remove('col-xl-4')
//        element.nextElementSibling?.nextElementSibling?.classList?.remove('col-xl-4')
//        element.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.remove('col-xl-4')
//        element.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.classList?.remove('col-xl-4')

//     }
   
// })

// let passo = 4;
// let pegar = false;
// let current = 0

// // pegar o 4, 5, 6
// // depois somar o 1 valor + 4 + 3 == 4 + 4 + 3  == 4, 11, 18, 25
// // segundo valor  5 + 4 + 1 
// // terceiro 6 + 4 + 1;

// const posts = document.querySelectorAll('.post')

// for(const index in posts) {
//     const post = posts[index];



  
// }


// num = 10
// cont = 2

// anterior = 4
// proxima = 4
// soma = 1

// while( cont <= num) {
//     console.log(anterior)
//     cont += 1
//     soma = proxima + anterior
//     anterior = anterior + 4 + 3
//     proxima = soma
// }