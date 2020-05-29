import React from 'react';

const mdLinkGlobal = /\[([\w\s\d'"]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g;
const mdLink = /\[([\w\s\d'"]+)\]\((https?:\/\/[\w\d./?=#]+)\)/;

const hydrateLinkElement = (linkText, url) => (
    <a href={url} key={linkText.substr(0,4)}>{linkText}</a>
);

const formatLinkObject = matches => {
    let output = [];

    matches.forEach(element => {
        const linkArray = element.match(mdLink);

        const linkElement = hydrateLinkElement(linkArray[1], linkArray[2]);

        output.push({
            linkElement,
            original: linkArray[0]
        });

    });

    return output;
}

const hydrateLinkElements = (cleanCaption) => {
    let matches = cleanCaption.match(mdLinkGlobal);
    
    return matches ? formatLinkObject(matches) : cleanCaption;
}

const formatCaption = (caption, links) => {
    let output = [];

    links.forEach(element => {
        // Split whatever remaining raw text that still has a md link in it
        const splitCaption = output.length ?
            output[output.length - 1].split(element.original) :
            caption.split(element.original);

        // Remove the raw text that still contains unformatted md links
        output.pop();
        // Push everything before the link
        output.push(splitCaption[0]);
        // Push the link itself
        output.push(element.linkElement);
        // Push everything after the link
        output.push(splitCaption[1]);
    });

    return output;
}

const parseStringForLinks = (caption) => { 

    const cleanCaption = Array.isArray(caption) ? caption[0] : caption;

    const linkElements = hydrateLinkElements(cleanCaption);

    if (!Array.isArray(linkElements)) {
        return cleanCaption;
    }

    return formatCaption(cleanCaption, linkElements);
};

export default parseStringForLinks;