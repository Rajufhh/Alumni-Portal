export interface PaginationResult {
    startIndex: number;
    endIndex: number;
    next?: { page: number; limit: number };
    prev?: { page: number; limit: number };
    totalPages: number;
    currentPage: number;
};

export const pagination = (page: number = 1, limit: number = 10, total: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalPages = Math.ceil(total / limit);

    const result: PaginationResult = {
        startIndex,
        endIndex,
        totalPages,
        currentPage: page,
    };

    if (endIndex < total){
        result.next = { page: page + 1, limit: limit };
    }

    if (startIndex > 0){
        result.prev = { page: page - 1, limit: limit };
    }

    return result;
}