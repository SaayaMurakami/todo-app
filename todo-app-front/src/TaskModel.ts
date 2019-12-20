export interface ITask {
    title: string
    completed: boolean
    deleted: boolean
    estimateDate?: Date | null
}