import type { Asset, EntryFields } from "contentful";

export interface TypeHomepageFields {
    animation1?: EntryFields.Symbol;
    animation2?: EntryFields.Symbol;
    newProjectImage?: Asset;
    logo?: Asset;
    description?: EntryFields.RichText;
    pic1Reference?: Entry<Record<string, any>>;
    pic2Reference?: Entry<Record<string, any>>;
    pic3Reference?: Entry<Record<string, any>>;
    pic4Reference?: Entry<Record<string, any>>;
    pic5Reference?: Entry<Record<string, any>>;
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
    animationFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    titleFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    contentFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    headerFooterFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    homePageSubtitle?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
    viewProjectContactMeFont?: "Allison" | "Baskervville" | "Nothing You Could Do" | "Playfair Display italic" | "Playfair Display" | "Roboto Condensed" | "Roboto" | "Source Sans Pro" | "Vujahday Script";
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
    year?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
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
    nextPage?: Entry<Record<string, any>>;
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
    pic1Reference?: Entry<Record<string, any>>;
    pic2Reference?: Entry<Record<string, any>>;
    pic3Reference?: Entry<Record<string, any>>;
    pic4Reference?: Entry<Record<string, any>>;
    pic5Reference?: Entry<Record<string, any>>;
    pic6Reference?: Entry<Record<string, any>>;
    pic7Reference?: Entry<Record<string, any>>;
    pic8Reference?: Entry<Record<string, any>>;
}

export type TypeWork = TypeWorkFields;

export interface TypeAcessoriesFields {
    favicon?: Asset;
}

export type TypeAcessories = TypeAcessoriesFields