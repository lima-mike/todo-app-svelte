<script lang="ts">
	import type { TodoFormProps } from '$lib/types';

	let { addTodo }: TodoFormProps = $props();
	let newTodo = $state('');

	function handleFormSubmit(event: SubmitEvent) {
		event.preventDefault();
		addTodo(newTodo);
		newTodo = '';
	}
</script>

<form onsubmit={handleFormSubmit}>
	<input type="text" placeholder="What needs to be done?" bind:value={newTodo} />
	<div class="button-container">
		<button>Add</button>
	</div>
</form>

<style>
	form {
		margin-bottom: 1rem;
	}

	.button-container {
		display: flex;
		justify-content: end;
	}
</style>
