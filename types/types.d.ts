declare type bookProps = {
    ImagePath?: string | StaticImport,
    ImageAlt: string,
    Title: string,
    Author: string,
    Synopsis: string
};

declare interface carouselProps {
    books: bookProps[],
};