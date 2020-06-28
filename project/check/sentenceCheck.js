module.exports = function(sentence) {

    // remove white space
    sentence = sentence.toLowerCase().trim()
    const res = {
        answer: "이해할 수 없는 문장입니다",
        question: sentence
    }
    if(sentence==="당신의 이름은?"){
        res.answer= "안지민"
    }
    if(sentence==="거주 지역은?"){
        res.answer= "서울"
    }
    if(sentence==="가장 좋아하는 라면의 종류는?"){
        res.answer= "미역국 라면"
    }
    if(sentence==="가장 좋아하는 음료는?"){
        res.answer= "물"
    }
    return res
}