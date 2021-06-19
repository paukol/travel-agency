
export const formatTime = (param) => {
  if (param === undefined || typeof (param) != 'number' || param < 0) {
    return null;
  }
  let seconds = Math.floor(param % 60);
  let minutes = Math.floor((param / 60) % 60);
  let hours = Math.floor(param / 3600);
  
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  
  
  console.log(`${hours}:${minutes}:${seconds}`);
  
  return `${hours}:${minutes}:${seconds}`;
};