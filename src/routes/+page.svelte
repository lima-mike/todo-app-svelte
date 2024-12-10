<script lang="ts">
	import TodoForm from '$lib/components/TodoForm.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import type { Todo } from '$lib/types';

	let todos = $state<Todo[]>([]);
	let totalDone = $derived(todos.reduce((total, todo) => total + Number(todo.isCompleted), 0));

	function addTodo(newTodo: string) {
		todos.push({
			id: crypto.randomUUID(),
			title: newTodo,
			isCompleted: false
		});
	}

	function toggleDone(todo: Todo) {
		todo.isCompleted = !todo.isCompleted;
	}

	function removeTodo(id: string) {
		const index = todos.findIndex((todo) => todo.id === id);
		todos.splice(index, 1);
	}
</script>

<main>
	<h1>Tasks App</h1>
	<TodoForm {addTodo} />
	{#if todos.length}
		<p>{totalDone} / {todos.length} tasks completed</p>
	{/if}
	<TodoList {todos} {toggleDone} {removeTodo} />
</main>

<style>
	main {
		margin: 1rem auto;
		max-width: 800px;
	}

	h1 {
		text-align: center;
	}
</style>
