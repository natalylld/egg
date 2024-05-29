const palindrome = (cadena) => {
    console.log("CADENA: "+cadena);
    const cadenaSplit = cadena.split("");
    console.log("SPLIT: " + cadenaSplit);
    const cadenaReverse = cadenaSplit.reverse();
    console.log("REVERSE: " + cadenaReverse);
    const cadenaJoin = cadenaSplit.join('');
    console.log("JOIN: " + cadenaJoin);
    if (cadena === cadenaJoin) {
      return true;
    } else {
      return false;
    }
  };

  console.log(palindrome("hello"));
  console.log(palindrome("hannah"));
