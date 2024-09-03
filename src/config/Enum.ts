enum ImageResizeMode {
    Contain = 'contain',
    Cover = 'cover',
    Center = 'center',
    Stretch = 'stretch', // Ensure this matches the actual value expected
}

export const ImageEnum = {
    contain: ImageResizeMode.Contain,
    cover: ImageResizeMode.Cover,
    center: ImageResizeMode.Center,
    stretch: ImageResizeMode.Stretch,
};

export const AutoCapitalizeEnum = {
    none: 'none',
    characters: 'characters',
    sentences: 'sentences',
    words: 'words'
}

enum Position {
    TOP = 'top',
    BOTTOM = 'bottom',
}

export const positionEnum = {
    top: Position.TOP,
    bottom: Position.BOTTOM,
};
export const keyboardTypeEnum = {
    numeric: 'numeric',
    phonePad: 'phone-pad',
    email: 'email-address',
    decimal: 'decimal-pad'
}