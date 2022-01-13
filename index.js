function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`                                                                                           
}

const mondayWork = function(activity ='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
    const innerfunction = function(parameter="special"){
      return `You are ${string}${parameter}${string}!`
    }
    return innerfunction;
}