export enum USER_ROLES {
    STUDENT = 'student',
    ALUMNI = 'alumni',
    ADMIN = 'admin'
};

export enum POST_TYPES {
    ARTICLE = 'ARTICLE',
    QUESTION = 'QUESTION',
    OTHER = 'OTHER'
};

export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000;