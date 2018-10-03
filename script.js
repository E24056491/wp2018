var rect = document.getElementsByClassName('rect')[0];
var pug = document.getElementsByClassName('pug');
var wrap = document.querySelector('#wrap');

var timeline = anime.timeline();
timeline
  .add({
    targets: pug,
    opacity: 1,
    translateY: '-150px',
    easing:'easeOutExpo',
    duration: 1000,
    offet: 2000,
    delay: function(el, i, l){
      return i*100;
    }, 
  })

  .add({
    targets: wrap,
    backgroundPosition:'160% 0%',
    duration: 1200,
    offset: '+=50',
    easing: 'easeInOutSine', 
  });

  // .add({
  //   targets: 'svg path',
  //   d: [
  //     {value: "M1021.2,848H0V0h1000.7C900.4,108.7,839.2,253.9,839.2,413.4C839.2,583.5,908.8,737.4,1021.2,848z"},
  //     { value: "M1021.2,848H0V0h1000.7C900.4,108.7,908.8,737.4,1021.2,848z" }
  //   ],
  //   easing: 'easeOutQuad',
  //   duration: 5000,
  // })




// console.log(pug_anime);

// arrowbtns[0].onclick = swaptext;
// arrowbtns[1].onclick = swaptext;

// function swaptext(){
//   if(state === 'pug'){
//     pug_anime.play();
//     pug_anime.finished
//       .then(() => {   
//         chow_anime = anime({
//             targets: chowchow,
//             opacity: 1,
//             translateY: '-150px',
//             easing:'easeOutExpo',
//             duration: 1000,
//             offset: 1200,
//             delay: function(el, i, l){
//                 return i*100;
//             },
//             complete: function(){
//               chow_anime.reverse();
//             },
//           });
//       });
//     state = 'chowchow';
//   } 
//   else if(state === 'chowchow'){
//     console.log('chow_anime: ', chow_anime);
    
//     chow_anime.play();
//     chow_anime.finished
//       .then(() => {   
//         pug_anime.reverse();
//         pug_anime.play();  
//       });
//     state = 'pug';
//   }
// }
    // else if(arrowbtns.data().state === 'chowchow'){
    //   console.log('state: ', arrowbtns.data().state);
    //   console.log(pug_anime);
      
    //   pug_anime.reverse();
    //   pug_anime.play();
    //   console.log("running: ",anime.running);
    //   arrowbtns.data().state = "pug";
    // }


  
  
  

  

