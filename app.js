function findShortestOfThreeWords(word1,word2,word3){
  var lng1=word.length;
  var lng2=word.length;
  var lng3=word.length;

  if(lng1<=lng2 && lng1<=lng3){
    return word1;
  }else if (lng2<lng1 && lng2<=lng3){
    return word2;
  }else{
    return word3;
  }
}
findShortestOfThreeWords('muebleria','pizarron','descanso')
