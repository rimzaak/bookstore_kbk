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

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
  };