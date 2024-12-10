<script lang="ts">
	import type { TodoListProps } from '$lib/types';

	let { todos, toggleDone, removeTodo }: TodoListProps = $props();
</script>

<section>
	{#each todos as todo}
		<article class="todo">
			<label>
				<input type="checkbox" checked={todo.isCompleted} onchange={() => toggleDone(todo)} />
				<span class:completed={todo.isCompleted}>
					{todo.title}
				</span>
			</label>
			<button class="outline" onclick={() => removeTodo(todo.id)}>Remove</button>
		</article>
	{/each}
</section>

<style>
	.completed {
		text-decoration: line-through;
	}

	.todo {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
