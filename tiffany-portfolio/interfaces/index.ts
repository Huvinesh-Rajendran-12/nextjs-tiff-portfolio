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