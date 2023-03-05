const API_KEY = '9FFS50WJD144XRKAJG32GQBGWCBC'
const fetchUrl = 'https://beta3.api.climatiq.io/estimate'

function searchInfo(UUID, paramNameList, paramValList) {
    this.UUID = UUID;
    this.paramNameList = paramNameList
    this.paramValList = paramValList
}

var map = {
    // consumer goods
    "FOOD" : new searchInfo("2e71403a-4735-473d-b268-c860c0e1b33e", ["money", "money_unit"], [0, "usd"]),
    "DAIRY" : new searchInfo("87b10e3f-bcf1-40a9-828c-1718aeb39533", ["money", "money_unit"], [0, "usd"]),
    "MEAT" : new searchInfo("5e0bef2d-a515-42f1-9022-19ddcb26a33b",["money", "money_unit"], [0, "usd"]),
    "BEEF" : new searchInfo("a0f6b53e-4bc1-4b31-a418-f21ee4ececad",["money", "money_unit"], [0, "usd"]),
    "PORK" : new searchInfo("b176c07f-2826-4f27-8b39-522e60c2ff57", ["money", "money_unit"], [0, "usd"]),
    "POULTRY" : new searchInfo("c0f9134a-9e63-4ef3-966e-4d252e7c4bfc", ["money", "money_unit"], [0, "usd"]),
    "FRUIT&VEG": new searchInfo("3b8f2b7d-f5c9-4372-b4bc-b86d44f5a02c",["money", "money_unit"], [0, "usd"]),
    "WINE" : new searchInfo("6edc7082-f0c3-4afd-9e9a-575efe25719a",["money", "money_unit"], [0, "usd"]),
    "CLOTHING" : new searchInfo("5cac93bf-dc4e-4bca-b5a6-e66ee95e3bdd", ["money", "money_unit"], [0, "usd"]),
    
    // utilities
    "ELECTRICITY": new searchInfo("3137223c-94d3-498e-8665-fa361e3ab67f", ["money", "money_unit"], [0, "usd"]),
    "NATURALGAS": new searchInfo("f369bcfa-015f-479a-92cc-cc124fcf7298", ["money", "money_unit"], [0, "usd"]),
    "WATER": new searchInfo("7ac5aee8-10db-45c2-a524-49019c8175e3", ["money", "money_unit"], [0, "usd"]),
    
    // restaurant and accommodation
    "HOTEL" : new searchInfo("baf85baa-478a-4579-8fce-12b90d061617", ["number"], [0]),
    "RESTAURANT" : new searchInfo("029db600-3d9a-4e6c-bd21-289de2691843", ["money", "money_unit"], [0, "usd"]),
    
    // transportation
    "RAIL" : new searchInfo("9d0fc796-f29a-4f52-a324-0e7c29e2398d", ["passengers", "distance","distance_unit"], [1, 0, "km"]), // need to set passengers = 1
    "GAS": new searchInfo("62a04e72-4c1c-4855-a35b-8f7578c6ff52", ["money", "money_unit"], [0, "usd"]),
    "SUBWAY" : new searchInfo("2af8f38b-0f55-4b7f-9037-50bd301ae6b9", ["passengers", "distance","distance_unit"], [1, 0, "km"]), // need to set passengers = 1
    "AIRPLANE" : new searchInfo("06ec4acf-c4dc-4bea-bceb-9ac41e257c0b", ["passengers", "distance","distance_unit"], [1, 0, "km"]), // need to set passengers = 1
    "CAR" : new searchInfo("a41de667-978a-4a2a-942e-dc376d66ebcb", ["distance","distance_unit"], [0, "km"]),
    "BUS" : new searchInfo("bc290d4e-b834-4fd0-8c92-fbfc9b078365", ["passengers", "distance","distance_unit"], [1, 0, "km"]), // need to set passengers = 1

};


async function postData(key, val) {
    
    var currItem = map[key]
    currItem.paramValList[currItem.paramNameList.length == 3 ? 1 : 0] = val;
    
    var paramList = {};
    currItem.paramNameList.forEach((paramName, index) => {
        const paramVal = currItem.paramValList[index]
        paramList[paramName] = paramVal
    });
    
    let options = {
        method: "POST",
        headers: new Headers({
            Authorization: "Bearer " + API_KEY,
        }),
        body : JSON.stringify({ 
        "emission_factor": {
            "uuid": currItem.UUID
        },
        "parameters": paramList
    })};
    
    var result = await fetch(fetchUrl, options)
    return result.json()

}

// average carbon footprint per 1-person household per year
let avgCarbonEmissionByCategory = {'CONSUMER_GOODS' : 11000, 'UTILITIES': 10000, 'ACCOMMODATION' : 90000, 'TRANS' : 15000}
let recommandationByCategory = {
    'CONSUMER_GOODS' : {
        '=' : "Your carbon footprint for consumer goods is around the average. You can do better!",
        '<' : "Your carbon footprint for consumer goods is below the average. Keep it up!",
        '>' : "Your carbon footprint for consumer goods is above the average. Here are some suggestions:\n 1.Buy local products\n 2.Use reusable bags\n 3.Reduce meat consumption"
    }, 
    'UTILITIES': {
        '=' : "Your carbon footprint for home utilities is around the average. You can do better!",
        '<' : "Your carbon footprint for home utilities is below the average. Keep it up!",
        '>' : "Your carbon footprint for home utilities is above the average. Here are some suggestions:\n 1.Switch to energy-efficient appliances\n 2.Reduce water usage\n 3.Reduce waste and recycle"
    }, 
    'ACCOMMODATION' : {
        '=' : "Your carbon footprint for restaurant & accommodation is around the average. You can do better!",
        '<' : "Your carbon footprint for restaurant & accommodation is below the average. Keep it up!",
        '>' : "Your carbon footprint for restaurant & accommodation is above the average. Here are some suggestions:\n 1.Find restaurants using locally sourced ingredients:\n 2.Avoid using disposable items\n 3.Reduce energy consumption"
    }, 
    'TRANS' : {
        '=' : "Your carbon footprint for transportation is around the average. You can do better!",
        '<' : "Your carbon footprint for transportation is below the average. Keep it up!",
        '>' : "Your carbon footprint for transportation is above the average. Here are some suggestions:\n 1.Use public transportation\n 2.Carpool\n 3.Walk or bike"
    }
}
function generateRecommendation(emissionList, unit){
    var emissionByCategory = {'CONSUMER_GOODS' : 0, 'UTILITIES': 0, 'ACCOMMODATION' : 0, 'TRANS' : 0}
    
    for(var i = 0; i < emissionList.length; i++){
        if(emissionList[i].name == "FOOD" || emissionList[i].name == "CLOTHING" || emissionList[i].name == "MEAT" || emissionList[i].name == "DAIRY" 
            || emissionList[i].name == "WINE" || emissionList[i].name == "FRUIT&VEG")
            emissionByCategory['CONSUMER_GOODS'] += parseInt(emissionList[i].value);
        else if (emissionList[i].name == "ELECTRICITY" || emissionList[i].name == "NATURALGAS" || emissionList[i].name == "WATER")
            emissionByCategory['UTILITIES'] += parseInt(emissionList[i].value);
        else if (emissionList[i].name == "HOTEL" || emissionList[i].name == "RESTAURANT")
            emissionByCategory['ACCOMMODATION'] += parseInt(emissionList[i].value);
        else
            emissionByCategory['TRANS'] += parseInt(emissionList[i].value);
    }
    
    emissionByCategory['CONSUMER_GOODS'] *= (365 / unit)
    emissionByCategory['UTILITIES']  *= (365 / unit)
    emissionByCategory['ACCOMMODATION']  *= (365 / unit)
    emissionByCategory['TRANS']  *= (365 / unit)
    var diffInConsumerGoods = (emissionByCategory['CONSUMER_GOODS'] - avgCarbonEmissionByCategory['CONSUMER_GOODS']) / avgCarbonEmissionByCategory['CONSUMER_GOODS']
    var diffInUtilities = (emissionByCategory['UTILITIES'] - avgCarbonEmissionByCategory['UTILITIES']) / avgCarbonEmissionByCategory['UTILITIES']
    var diffInAccommodation = (emissionByCategory['ACCOMMODATION'] - avgCarbonEmissionByCategory['ACCOMMODATION']) / avgCarbonEmissionByCategory['ACCOMMODATION']
    var diffInTransportation = (emissionByCategory['TRANS'] - avgCarbonEmissionByCategory['TRANS']) / avgCarbonEmissionByCategory['TRANS']
    
    var recommandation = [
        {'CONSUMER_GOODS': {
            "stats" : diffInConsumerGoods,
            "recommandation" : recommandationByCategory['CONSUMER_GOODS'][(Math.abs(diffInConsumerGoods) <= 0.1) ? '=' : ((diffInConsumerGoods > 0) ? '>' : '<')]
        }},
        {'UTILITIES': {
            "stats" : diffInUtilities,
            "recommandation" : recommandationByCategory['UTILITIES'][(Math.abs(diffInUtilities) <= 0.1) ? '=' : ((diffInUtilities > 0) ? '>' : '<')]
        }},
        {'ACCOMMODATION': {
            "stats" : diffInAccommodation,
            "recommandation" : recommandationByCategory['ACCOMMODATION'][(Math.abs(diffInAccommodation) <= 0.1) ? '=' : ((diffInAccommodation > 0) ? '>' : '<')]
        }},
        {'TRANS': {
            "stats" : diffInTransportation,
            "recommandation" : recommandationByCategory['TRANS'][(Math.abs(diffInTransportation) <= 0.1) ? '=' : ((diffInTransportation > 0) ? '>' : '<')]
    }}]
 
    return recommandation
    
}

export const handler = async(event) => {
    // TODO implement
    var requestBody = JSON.parse(event.body)
    var unit = requestBody[0].unit == 0 ? 1 : (requestBody[0].unit == 1 ? 7 : 30)
    var responseBody = []
    for (var i = 1; i < requestBody.length; i++){
        console.log(requestBody[i])
        let key = requestBody[i].name
        let val = parseInt(requestBody[i].value)
        console.log(key,val)
        let fetchedData = await postData(key, val)
        responseBody.push({'name' : key , 'value' : fetchedData.co2e})
    }
    var rec = generateRecommendation(responseBody, unit)
    console.log(rec)
    const response = {
        'statusCode': 200,
        'body': [
            JSON.stringify(responseBody),
            JSON.stringify(rec)
         ]
    };
    
    return response;
};
