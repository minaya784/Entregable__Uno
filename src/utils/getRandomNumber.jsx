export const getRandomNumber = (min, max) =>{
    const amplitud = max -min;
    const randomNumber = min + Math.round(Math.random() * amplitud); 

    return randomNumber;
  };