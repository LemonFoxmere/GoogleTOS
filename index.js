window.onload = () => {
    let path = anime.path('.circle')

    let line = anime.timeline({
        easing:'easeOutQuart',
        targets: '.square'
    }).add({
        opacity:1,
        delay:anime.stagger(30),
    }, '+=1000').add({
        borderRadius: {
            value: ['0%', '50px'],
            delay: anime.stagger(100),
        },
        rotate:{
            value: [0,360],
            delay: anime.stagger(100),
        },
        delay:anime.stagger(100),
        easing:'easeInOutQuad',
        duration:1000
    }).add({
        keyframes:[
            {height:200}, 
            {height:30}, 
            {height:200}, 
            {height:30},
            {height:200}, 
            {height:30}, 
            {height:50}, 
        ],
        delay: anime.stagger(100),
        easing:'easeInOutQuad',
        duration:2000
    }).add({
        translateY: 150,
        duration:1000,
        delay:anime.stagger(50),
    }, '+=500').add({
        targets:'.text',
        opacity:1,
        delay:anime.stagger(1000),
    }).add({
        targets:'.neverread',
        opacity:0
    }, '+=2500').add({
        translateY:0,
        translateX: 0,
        margin:['10px', '69px'],
        delay:anime.stagger(50),
        duration:1000
    }).add({
        targets:('.sq'),
        translateY: anime.stagger([-265,265]),
        duration:1500,
        easing:'easeInOutQuart'
    }, '+=300').add({
        targets:'.squareContainer',
        rotate:'5turn',
        easing:'easeInOutQuart',
        duration:5000
    }, '-=2500').add({
        targets:'.circle',
        strokeDashoffset: [anime.setDashoffset, 0],
        // strokeWidth:5,
        delay:anime.stagger(400),
        duration:1300
    }, '-=3000').add({
        update: () => {
            document.querySelectorAll('.square').forEach(element => {
                element.style.backgroundColor = '#ffffff00'
            });
        }
    }, '-=1000').add({
        targets:'.circle',
        strokeWidth:1,
    },'-=200').add({
        targets:'.circle',
        strokeDashoffset: anime.stagger([200,0], {direction:'reverse'}),
    }, '-=1000')
    // .add({
    //     translateY: 0,
    //     borderRadius: 0,
    //     width:'25vw',
    //     margin:['10px','0px'],
    //     height:'100vh',
    //     duration:1000,
    //     delay:anime.stagger(50),        
    // }, '-=300').add({
    //     update: ()=>{
    //         document.querySelectorAll('.square').forEach(element => {
    //             element.style.backgroundColor = '#4285f4'
    //         });
    //     },
    //     duration:500
    // }, '+=100').add({
    //     update: ()=>{
    //         document.querySelectorAll('.square').forEach(element => {
    //             element.style.backgroundColor = '#fbbc05'
    //         });
    //     },
    //     duration:500
    // }).add({
    //     update: ()=>{
    //         document.querySelectorAll('.square').forEach(element => {
    //             element.style.backgroundColor = '#34a853'
    //         });
    //     },
    //     duration:500
    // }).add({
    //     update: ()=>{
    //         document.querySelectorAll('.square').forEach(element => {
    //             element.style.backgroundColor = '#ea4335'
    //         });
    //     },
    //     duration:500
    // }).add({
    //     update: ()=>{
    //         document.querySelectorAll('.square').forEach(element => {
    //             element.style.backgroundColor = '#ffffff00'
    //         });
    //     },
    //     duration:500
    // })
}