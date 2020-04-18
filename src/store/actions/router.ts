export const GOTO = 'GOTO';

export function goTo(page: string) {
    return {
        type: GOTO,
        page,
    }
}
