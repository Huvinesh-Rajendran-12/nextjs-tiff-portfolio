export type Font = {
    slug: string;
    title: string;
    content: string;
    metadata: {
        title: {
            key: string
            value: string
        },
        animation: {
            key: string
            value: string
        },
        content: {
            key: string
            value: string
        }
    }
}

export type HomePage = {
    slug: string
    title: string
    content: string
    metadata: {
        animation_1: string
        animation_2: string
        animation_3: string
        page_1_pic: {
            url: string
            imgix_url: string
        }
        page_2_pic: {
            url: string
            imgix_url: string
        }
        page_3_pic: {
            url: string
            imgix_url: string
        }
        page_4_pic: {
            url: string
            imgix_url: string
        }
        page_5_pic: {
            url: string
            imgix_url: string
        }
        end_pic: {
            url: string
            imgix_url: string
        }
        new_project_pic: {
            url: string
            imgix_url: string
        }
        work_page_animation_1: string
        work_page_animation_2: string
        page_1_pic_title: string
        page_1_pic_year: string
        page_2_pic_title: string
        page_2_pic_year: string
        page_3_pic_title: string
        page_3_pic_year: string
        page_4_pic_title: string
        page_4_pic_year: string
        page_5_pic_title: string
        page_5_pic_year: string
        logo: {
            url: string
            imgix_url: string
        }
    }
}

export type Page = {
    slug: string
    title: string
    content: string
    metadata: {
        title: string
        description: string
        tag_1: string
        tag_2: string
        pic_1: {
            url: string
            imgix_url: string
        }
        pic_2: {
            url: string
            imgix_url: string
        }
        pic_3: {
            url: string
            imgix_url: string
        }
        pic_4: {
            url: string
            imgix_url: string
        }
        pic_5: {
            url: string
            imgix_url: string
        }
        animation_1: string
        animation_2: string
    }

}

export type AboutPage = {
    slug: string
    title: string
    content: string
    metadata: {
        user_name: string
        tag_1: string
        tag_2: string
        description: string
        logo: {
            url: string
            imgix_url: string
        }
        profile_picture: {
            url: string
            imgix_url: string
        }
        animation_1: string
        animation_2: string
    }
}

export type ServicesPage = {
    slug: string
    title: string
    content: string
    metadata: {
        first_pic: {
            url: string
            imgix_url: string
        }
        second_pic: {
            url: string
            imgix_url: string
        }
    }
}