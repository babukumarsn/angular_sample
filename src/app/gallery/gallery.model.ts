export interface Gallery {
    gallery: GalleryDetails;
}

export interface GalleryDetails {
    payload?: any;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    location: string;
    dateOfYear: string;
}

export interface GalleryResponse {
    message: string;
}