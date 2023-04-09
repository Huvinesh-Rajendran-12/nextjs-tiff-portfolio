import type { Asset, Entry, EntryFields } from "contentful";

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