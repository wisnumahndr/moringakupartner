import '../component/partner-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const partnerListElement = document.querySelector("partner-list");

    const onButtonSearchClicked = async () => {
        // DataSource.searchClub(searchElement.value) //secara sync 
        //     .then(renderResult)
        //     .catch(fallbackResult)

        try{
            const result = await DataSource.searchPartner(searchElement.value); // secara async 
            renderResult(result);
        } catch (message){
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        partnerListElement.partners = results;
    };

    const fallbackResult = message => {
        partnerListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;