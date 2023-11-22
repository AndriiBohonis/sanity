'use client';

import { FormEventHandler, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);
  const [value, setValue] = useState('');

  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(20).substring(4, 12),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const handlerSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    addTask(value);
    setValue('');
  };

  return (
    <main>
      <form onSubmit={handlerSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
        <button>Add</button>
      </form>

      {todos.map((item, ind) => (
        <div key={ind}>{item.task}</div>
      ))}
    </main>
  );
}
