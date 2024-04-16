const temperatura = prompt("Podrías indicarme la temperatura?");

if (temperatura > 30) {
  alert("Hace calor");
} else if (temperatura < 18) {
  alert("Hace una temperatura agradable!");
} else if (temperatura > 5) {
  alert("Hace frío!");
} else {
  alert("Hace mucho frío!");
}
