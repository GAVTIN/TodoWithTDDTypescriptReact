import { useState } from 'react';
import './index.css';
type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 123,
      title: 'React Todo',
      isCompleted: false,
    },
  ]);
  const [task, setTask] = useState<string>('');
  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: task, isCompleted: false },
    ]);
    setTask('');
  };
  return (
    <div>
      <h1>Tasks</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter Task"
        className="button-style"
      />
      <button className="button-style" onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
