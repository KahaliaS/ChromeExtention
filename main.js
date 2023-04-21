// I basically copied the fetch invocation from Erika's slides here, and selected a paragraph in the html doc to populate with the random joke, kind of like what we were doing with TwoType (accept we selected the input we created)
fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
      const jokeText = jokeData.attachments[0].fallback;
      //console.log(jokeText)
        const jokeElement = document.getElementById('jokeElement');
​
        jokeElement.innerHTML = jokeText;
    })
​
​
// SO, I wanted to make this a "yo momma" joke generator because that's WAY funnier to me than these corny jokes from that website we were given in class, but I don't think it's working :( ---> here's the link to the original yo mama website and my attempt to make it work is below (https://yomomma.info/). 
//
// This is also a link to a collection of a billion jokes --> https://github.com/joshbuchea/yo-mama/blob/master/jokes.json
//
​
​
    // fetch('https://api.yomomma.info/')
    // //.then(data => data.json())
    // .then(jokeData => {
    //     const jokeText = jokeData.joke;
    //     const jokeElement = document.getElementById('jokeElement');
​
    //   jokeElement.innerHTML = jokeText;
    //   console.log(jokeData)
    // })
​
​