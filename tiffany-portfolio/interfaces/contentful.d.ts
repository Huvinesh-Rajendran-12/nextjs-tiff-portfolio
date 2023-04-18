import type { Asset, EntryFields } from "contentful";

export interface TypeHomepageFields {
    animation1?: EntryFields.Symbol;
    animation2?: EntryFields.Symbol;
    newProjectImage?: Asset;
    logo?: Asset;
    description?: EntryFields.RichText;
    page1Pic?: Asset;
    page1PicTitle?: EntryFields.Symbol;
    page1PicYear?: EntryFields.Symbol;
    page2Pic?: Asset;
    page2PicTitle?: EntryFields.Symbol;
    page2PicYear?: EntryFields.Symbol;
    page3Pic?: Asset;
    page3PicTitle?: EntryFields.Symbol;
    page3PicYear?: EntryFields.Symbol;
    page4Pic?: Asset;
    page4PicTitle?: EntryFields.Symbol;
    page4PicYear?: EntryFields.Symbol;
    page5Pic?: Asset;
    page5PicTitle?: EntryFields.Symbol;
    page5PicYear?: EntryFields.Symbol;
    marketingPhrase?: EntryFields.Text;
    userProfilePic?: Asset;
    userName?: EntryFields.Symbol;
    tag1?: EntryFields.Symbol;
    tag2?: EntryFields.Symbol;
    endPic?: Asset;
    animation3?: EntryFields.Symbol;
}

export type TypeHomepage = TypeHomepageFields;

export interface TypeFontFields {
    animationFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    titleFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    contentFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
}

export type TypeFont = TypeFontFields;

export interface TypeAboutPageFields {
    userName?: EntryFields.Symbol;
    userProfilePic?: Asset;
    userTag1?: EntryFields.Symbol;
    userTag2?: EntryFields.Symbol;
    logo?: Asset;
    description?: EntryFields.RichText;
    animation?: EntryFields.Symbol;
}

export type TypeAboutPage = TypeAboutPageFields;

export interface TypePagesFields {
    title?: EntryFields.Symbol;
    pageTag1?: EntryFields.Symbol;
    pageTag2?: EntryFields.Symbol;
    pageDescription?: EntryFields.RichText;
    projectClient?: EntryFields.Symbol;
    projectDesigner?: EntryFields.Symbol;
    projectDeveloper?: EntryFields.Symbol;
    pic1?: Asset;
    pic2?: Asset;
    pic3?: Asset;
    pic4?: Asset;
    pic5?: Asset;
    pic6?: Asset;
    videoUrl?: EntryFields.Symbol;
    animation1?: EntryFields.Symbol;
    animation2?: EntryFields.Symbol;
    nextPagePic?: Asset;
}

export type TypePages = TypePagesFields;

export interface TypeServicesFields {
    pageTitle?: EntryFields.Symbol;
    pageDescription?: EntryFields.RichText;
    firstServicePic?: Asset;
    firstServiceTitle?: EntryFields.Symbol;
    firstServiceDescription?: EntryFields.RichText;
    firstServiceListTitle?: EntryFields.Symbol;
    firstServiceListItems?: EntryFields.RichText;
    secondServicePic?: Asset;
    secondServiceTitle?: EntryFields.Symbol;
    secondServiceDescription?: EntryFields.RichText;
    secondServiceListTitle?: EntryFields.Symbol;
    secondServiceListItems?: EntryFields.RichText;
    animation?: EntryFields.Symbol;
    customerMessage?: EntryFields.Symbol;
    step1?: EntryFields.Symbol;
    step2?: EntryFields.Symbol;
    step3?: EntryFields.Symbol;
}

export type TypeServices = TypeServicesFields;

export interface TypeWorkFields {
    animation1?: EntryFields.Symbol;
    animation2?: EntryFields.Symbol;
    pic1?: Asset;
    pic1Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic2?: Asset;
    pic2Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic3?: Asset;
    pic3Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic4?: Asset;
    pic4Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic5?: Asset;
    pic5Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic6?: Asset;
    pic6Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic7?: Asset;
    pic7Page?: "page1" | "page2" | "page3" | "page4" | "page5";
    pic8?: Asset;
    pic8Page?: "page1" | "page2" | "page3" | "page4" | "page5";
}

export type TypeWork = TypeWorkFields;