module.exports = [{
    header: `Giphy-API`,
    para: [`This website uses the GIPHY API to populate the site with gifs. Specifically, it uses the jQuery AJAX method to perform AJAX GET requests to the query URL to get data from the GIPHY API. To perform an AJAX call, a query URL needs to be constructed. The query URL consists of the host, path, search term, the maximum number of gifs to return, and an API key. After the query URL is constructed, the URL is used to perform the request. When the request is complete, the site uses Javascript and jQuery to add static gif images to the HTML.`],

    img: `images/projects/APIcalls.png`,
    pullImg: 'img-right',
    altText: `APIcalls`,
    btnPara: `See Website`,
    internalLink: false,
    link: `https://webprofe.github.io/Ajax-Gif`,
},
{
    header: `New York Times Article Scraper`,
    para: [`This is a React-based rendition of the New York Times Article Search application. This app works with helper/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. I also used Node, Express and MongoDB so that users can save articles to read later.`],
    img: `images/projects/NYTscraper.png`,
    pullImg: 'img-left',
    altText: `ReactApp`,
    btnPara: `See Website`,
    internalLink: false,
    link: `https://fernando-medina-article-finder.herokuapp.com`
}
]