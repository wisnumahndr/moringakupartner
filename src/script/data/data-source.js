import partners from './partners.js';

class DataSource {

    static searchPartner(keyword) {
        return fetch (`https://cors-anywhere.herokuapp.com/https://dev.moringaku.my.id/api.php?api_key=list`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
          if(responseJson.partner) {
              const apiData = responseJson.partner;
              let data = [];

              for (let index = 0; index < apiData.length; index++) {
                  if(apiData[index].PartnerName.toUpperCase().includes(keyword.toUpperCase())) {
                      data.push(apiData[index]);
                  }
              }

              return data;
          }
        })
    }   
    // https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}
}


export default DataSource;