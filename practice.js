
function helper(num1, num2, flag)
{
   if(num1<num2)
   {
    if(flag) return num2;
    else return num1;
   }
   else
   {
    if(flag) return num1;
    else return num2;
   }
}

function multiplyBiggerNumByTwo(num1, num2) {

  return helper(num1,num2, true)*2 ;
  /*
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum * 2;
  } else {
    bigNum = num2;
    return bigNum * 2;
  }*/
}

function divideBiggerNumByThree(num1, num2) {

  return helper(num1,num2,true)/3;
  /*
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum / 3;
  } else {
    bigNum = num2;
    return bigNum / 3;
  }*/
}

function eatMostTacos(sum1, sum2) {
  let bigNum= helper(sum1,sum2,true);

  return `I ate ${bigNum} tacos.`;
  /*
  if (sum1 > sum2) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${bigNum} tacos.`;
  }*/
}

function adoptSmallerDog(weight1, weight2) {

  let smallDog = helper(weight1,weight2, false);

  return `I adopted a dog that weighs ${smallDog} pounds.`;



  /*
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }*/
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
