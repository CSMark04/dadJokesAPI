const btnEl = document.querySelector('.jokes')

const apiKey =  'G+yReEMxkdRYYoQN2oUGeA==mINju91CgFxEZukX'

btnEl.addEventListener('click', async(event) =>{

    const options = {
        headers: { 'X-Api-Key':'G+yReEMxkdRYYoQN2oUGeA==mINju91CgFxEZukX'}
    }
    event.preventDefault()
    const joke = document.querySelector('.response')

    try {
        const res = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options)
        if (!res.ok){
            throw new Error("Network response was not ok");
        }

        data = await res.json()
        joke.innerText = data[0].joke
        joke.classList.add('animate');

        // Wait for the animation to finish before updating the text
        setTimeout(() => {
          joke.innerText = data[0].joke;
          // Remove the class to allow the animation to trigger again
          joke.classList.remove('animate');
        }, 1000);
      } catch (error) {
        console.error(error);
      }
})