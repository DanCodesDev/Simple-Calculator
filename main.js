document.querySelector('#clicker').addEventListener('click', getHoroscope)

function getHoroscope(){
  let month = document.querySelector('#month').value.toLowerCase()
  let day = document.querySelector('#date').value

  if(month === "march" && day >= 21 && day <= 31 || month === "april" && day <= 19 && day >= 1){
    console.log('Aries');
  }else if(month === "april" && day >= 20 || month === "may" && day <=20 && day >= 1){
    console.log('Taurus');
  }else if(month === "may" && day >= 21 || month === "june" && day <= 20 && day >= 1){
    console.log('Gemini');
  }else if(month === "june" && day >= 21 && day <= 30|| month === "july" && day <= 22 && day >= 1){
    console.log('Cancer');
  }else if(month === "july" && day >= 23 && day <= 31|| month === "august" && day <= 22 && day >= 1){
    console.log('Leo');
  }else if(month === "august" && day >= 23 && day <= 31 || month === "september" && day <= 22 && day >= 1){
    console.log('Virgo');
  }else if(month === "september" && day >= 23 && day <= 30 || month === "october" && day <= 22 && day >= 1){
    console.log('Libra');
  }else if(month === "october" && day >= 23 && day <= 31 || month === "november" && day <= 21 && day >= 1){
    console.log('Scorpio');
  }else if(month === "november" && day >= 22 && day <= 30 || month === "december" && day <= 21 && day >= 1){
    console.log('Sagittarius');
  }else if(month === "december" && day >= 22 && day <= 31|| month === "january" && day <= 19 && day >= 1){
    console.log('Capricorn');
  }else if(month === "january" && day >= 20 && day <= 31 || month === "february" && day <= 18 && day >= 1){
    console.log('Aquarius');
  }else if(month === "february" && day >= 19 && day <= 29 || month === "march" && day <= 20 && day >= 1){
    console.log('Pisces');
  }else{
    console.log('CHECK YOUR SPELLING & BIRTH DATE');
  }
  // document.querySelector('#result').innerText
}
