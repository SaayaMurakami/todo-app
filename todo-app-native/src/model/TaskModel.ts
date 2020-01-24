export default interface Task {
    id: number
    title: string
    nome?: string
    estimateEndDateTime?: Date
    completed: boolean
}