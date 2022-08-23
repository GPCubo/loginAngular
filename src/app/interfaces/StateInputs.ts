export interface BodyState {
    isValid: number,
    allInputs:BodyInput[]
}

export interface BodyInput {
    status: string,
    textContent:string
    value:string
}