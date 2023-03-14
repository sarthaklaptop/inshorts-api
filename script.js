





async function getArticleName(){

    let e = document.querySelector("#topic");

    topicName = e.value;

    topic = e.options[e.selectedIndex].text;

    const response = await fetch(`https://inshorts.deta.dev/news?category=${topic}`);

    const news = await response.json();

    // card 0

    let newPara0 = document.querySelector(".articleDesc0");

    let articleImg0 = document.querySelector("#articleImg0");

    let articleTitle0 = document.querySelector("#articleTitle0");

    articleImg0.src = news?.data[0]?.imageUrl;

    articleTitle0.innerText = `Title:- ${news?.data[0]?.title}`;

    console.log(JSON.stringify(news?.data[0]));

    newPara0.innerText = JSON.stringify(news?.data[0]?.content);

    // Card 1

    let newPara1 = document.querySelector(".articleDesc1");

    let articleImg1 = document.querySelector("#articleImg1");

    let articleTitle1 = document.querySelector("#articleTitle1");

    articleImg1.src = news?.data[1]?.imageUrl;

    articleTitle1.innerText = `Title:- ${news?.data[1]?.title}`;

    console.log(JSON.stringify(news?.data[1]));

    newPara1.innerText = JSON.stringify(news?.data[1]?.content);

    // Card 2

    let newPara2 = document.querySelector(".articleDesc2");

    let articleImg2 = document.querySelector("#articleImg2");

    let articleTitle2 = document.querySelector("#articleTitle2");

    articleImg2.src = news?.data[2]?.imageUrl;

    articleTitle2.innerText = `Title:- ${news?.data[2]?.title}`;

    console.log(JSON.stringify(news?.data[2]));

    newPara2.innerText = JSON.stringify(news?.data[2]?.content);

    // Card 3

    let newPara3 = document.querySelector(".articleDesc3");

    let articleImg3 = document.querySelector("#articleImg3");

    let articleTitle3 = document.querySelector("#articleTitle3");

    articleImg3.src = news?.data[3]?.imageUrl;

    articleTitle3.innerText = `Title:- ${news?.data[3]?.title}`;

    console.log(JSON.stringify(news?.data[3]));

    newPara3.innerText = JSON.stringify(news?.data[3]?.content);

    // Card 4

    let newPara4 = document.querySelector(".articleDesc4");

    let articleImg4 = document.querySelector("#articleImg4");

    let articleTitle4 = document.querySelector("#articleTitle4");

    articleImg4.src = news?.data[4]?.imageUrl;

    articleTitle4.innerText = `Title:- ${news?.data[4]?.title}`;

    console.log(JSON.stringify(news?.data[4]));

    newPara4.innerText = JSON.stringify(news?.data[4]?.content);

    // Card 5

    let newPara5 = document.querySelector(".articleDesc5");

    let articleImg5 = document.querySelector("#articleImg5");

    let articleTitle5 = document.querySelector("#articleTitle5");

    articleImg5.src = news?.data[5]?.imageUrl;

    articleTitle5.innerText = `Title:- ${news?.data[5]?.title}`;

    console.log(JSON.stringify(news?.data[5]));

    newPara5.innerText = JSON.stringify(news?.data[5]?.content);


    
    
}



// const URL = fetch("https://short-link-api.vercel.app/?query=https://www.codewell.cc/challenges/personal-blog--619a85a6a383e41090a3eb68");



// fwdUrl = URL + userLink;

// function getText(){

//     URL.then((response)=>{
//         return response.json()
//     }).then((response)=>{
//         console.log(response)
//     })
// }

// getText();

// fetch(`https://www.inshorts.com/en/read/`)
//     .then(res => res.json())
//     .then(data => console.log(data))


