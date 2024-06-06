import React, { useState } from 'react';
import { FaTrash, FaCheck, LuCheckSquare } from 'react-icons/fa';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, done: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleToggleDone = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const doneTodos = todos.filter(todo => todo.done);
    const undoneTodos = todos.filter(todo => !todo.done);

    return (
        <div className="todo-list max-w-md pt-3">
            <div className='btn-add-task flex space-x-*'>
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full border rounded py-2 px-3 mb-3"
                />
                <button onClick={handleAddTodo} className='text-sm'>
                    New Task
                </button>
            </div>
            <h4 className="pt-5 mt-8">My Todo</h4>
            {undoneTodos.length === 0 ? (
                <p className="text-gray-500 text-sm">There is no todo list yet</p>
            ) : (
                <ul className="mt-4 pb-5">
                    {undoneTodos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 py-5 px-3 mb-2 rounded">
                            <div className='flex'>
                                <FaCheck className="text-green-500 mr-2" /> {/* Ceklis icon */}
                                <span className='ml-7'>{todo.text}</span>
                            </div>
                
                            <div className='btn-list-todo'>
                                <button
                                    onClick={() => handleToggleDone(todos.indexOf(todo))}
                                    className="btn-checkmark"
                                >
                                    <FaCheck /> {/* Checkmark icon */}
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(todos.indexOf(todo))}
                                    className="btn-delete"
                                >
                                    <FaTrash /> {/* Trash icon */}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h4 className="pt-5 mt-8">Done Todo</h4>
            {doneTodos.length === 0 ? (
                <p className="text-gray-500 text-sm">There is no completed todo list yet</p>
            ) : (
                <ul className="mt-4">
                    {doneTodos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 py-5 px-3 mb-2 rounded">
                            <span>{todo.text}</span>
                            <div className='btn-done-todo'>
                                <button
                                    onClick={() => handleDeleteTodo(todos.indexOf(todo))}
                                >
                                    <FaTrash /> {/* Trash icon */}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
