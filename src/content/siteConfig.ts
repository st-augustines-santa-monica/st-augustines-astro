export const siteConfig = {
    title: "St. Augustine by-the-Sea",
    domain: "https://www.saint-augustine.org",
    defaultMeta: {
        title: "St. Augustine by-the-Sea - Santa Monica, CA",
        description:
            "We are a loving, open and socially-engaged community focused on celebration, support and connection with each other and with God.",
    },
    defaultOpenGraph: {
        title: "St. Augustine by-the-Sea - Santa Monica, CA",
        description:
            "We are a loving, open and socially-engaged community focused on celebration, support and connection with each other and with God.",
    },
};

export interface PageMeta {
    meta?: {
        title?: string;
        description?: string;
    };
    openGraph?: {
        title?: string;
        description?: string;
    };
}
