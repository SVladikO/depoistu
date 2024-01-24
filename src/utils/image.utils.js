// https://res.cloudinary.com/<cloud_name>/<resource_type>/<delivery_type>[/<transformations>]/<version>/<public_id>
// https://cloudinary.com/documentation/resizing_and_cropping

const ImageUrlFormatter = {
    formatForCompany(url) {
        // return url.replace('upload/', 'upload/b_auto,c_fill_pad,g_auto,w_375/');
        return url.replace('upload/', 'upload/b_auto,c_fill_pad,g_auto,h_370,w_540/');
    },
    formatForMenuItemBig(url) {
        return url.replace('upload/', 'upload/b_auto,c_fill_pad,g_auto,h_280,w_360/');
    },
    formatForMenuItemSmall(url) {
        return url.replace('upload/', 'upload/c_lfill,h_80,w_80/')
    },
}

export default ImageUrlFormatter