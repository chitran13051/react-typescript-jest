export type Extends<T, U extends T> = U;

export type TCar = {
    color: string;
    speed: number
}
export type TAudi = Extends<
    keyof TCar,
    'color' | 'speed'
    >
export type Values<T> = T[keyof T];