export type Todo = {
	id: string;
	title: string;
	isCompleted: boolean;
};

export interface TodoFormProps {
	addTodo: (newTodo: string) => void;
}

export interface TodoListProps {
	todos: Todo[];
	toggleDone: (todo: Todo) => void;
	removeTodo: (id: string) => void;
}
