import faceBookIcon from './images/icon-facebook.svg';
import twitterIcon from './images/icon-twitter.svg';
import chromeIcon from './images/logo-chrome.svg';
import firefoxIcon from './images/logo-firefox.svg';
import operaIcon from './images/logo-opera.svg';

import illustrationFeatureTab1 from './images/illustration-features-tab-1.svg';
import illustrationFeatureTab2 from './images/illustration-features-tab-2.svg';
import illustrationFeatureTab3 from './images/illustration-features-tab-3.svg';



export const cardContents = [
    {
        image: chromeIcon,
        title: 'Add to Chrome',
        version: 'Minimum version 62'
    },
    {
        image: firefoxIcon,
        title: 'Add to Firefox',
        version: 'Minimum version 55'
    },
    {
        image: operaIcon,
        title: 'Add to Opera',
        version: 'Minimum version 46'
    }
];


export const ulItems = ["features", "pricing", "contact"];
export const icons = [faceBookIcon, twitterIcon];

export const accordionContents = [
    {
        id: 1,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
        id: 2,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
        id: 3,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
        id: 4,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
];


export const tabContents = [
    {
        image: illustrationFeatureTab1,
        title: 'Simple Bookmarking',
        header: 'Bookmark in one click',
        paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        image: illustrationFeatureTab2,
        title: 'Speed Searching',
        header: 'Intelligent search',
        paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        image: illustrationFeatureTab3,
        title: 'Easy Sharing',
        header: 'Share your bookmarks',
        paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
];