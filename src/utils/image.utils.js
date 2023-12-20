// https://res.cloudinary.com/<cloud_name>/<resource_type>/<delivery_type>[/<transformations>]/<version>/<public_id>
const ImageUrlFormatter = {
    formatForCompany(url) {
        return url.replace('upload/', 'upload/b_auto,c_fill_pad,g_auto,w_375/');
    },
    formatForMenuItemBig(url) {
        return url.replace('upload/', 'upload/b_auto,c_fill_pad,g_auto,w_375/');
    },
    formatForMenuItemSmall(url) {
        return url.replace('upload/', 'upload/c_lfill,h_80,w_80/')
    },
}

export default ImageUrlFormatter